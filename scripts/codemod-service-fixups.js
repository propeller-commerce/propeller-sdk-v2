#!/usr/bin/env node
/**
 * Post-processing codemod for the v0.10.0 factory-form services.
 *
 * The services were already converted from classes to factories by
 * codemod-services-to-factories.js. This pass operates on that *factory*
 * output and applies three fixes flagged in the post-0.10.0 review:
 *
 *   Phase 5 — Typed class shims.
 *     The BC class wrappers forward every method with `(arg: any)`. This
 *     reads each factory method's real parameter list + return type from the
 *     AST and regenerates the shim methods with those exact types.
 *
 *   Phase 4 — defaultLanguage fallback.
 *     For a method whose sole parameter is `variables: XxxVariables` where the
 *     `XxxVariables` interface (declared in the same file) has an OPTIONAL
 *     `language?: string` field, inject a `client.getDefaultLanguage()`
 *     fallback before the runOperation call. Required `language: string`
 *     fields are left alone (the `??` would be dead code).
 *
 *   Phase 6 — Housekeeping.
 *     - strip stale `* @extends BaseService` JSDoc lines.
 *     - drop the no-op `{ ...variables }` spread (→ `variables`) when no
 *       language injection happens for that call.
 *
 * Import hoisting was intentionally dropped — reordering import lines around
 * the in-file `export interface XxxVariables` declarations is unsafe and
 * cosmetic. The mid-file import block compiles fine and TS tooling sorts it
 * on demand.
 *
 * All edits are computed as {start,end,text} ranges against the ORIGINAL
 * source and applied bottom-up, so no edit shifts another edit's offsets.
 *
 * Usage:
 *   node scripts/codemod-service-fixups.js --dry
 *   node scripts/codemod-service-fixups.js --apply
 *   node scripts/codemod-service-fixups.js --apply --file=PATH
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const SERVICE_DIR = path.join(__dirname, '..', 'src', 'service');

const SKIP = new Set(['index.ts', 'runOperation.ts']);
// Services whose factory body must not be touched for language injection
// (hand-written control flow / unions). Their shims are still retyped.
const SHIM_ONLY = new Set(['UserService.ts', 'TemplateErrorLogService.ts']);

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const APPLY = argv.includes('--apply');
const fileArg = argv.find((a) => a.startsWith('--file='));

if (!DRY && !APPLY) {
  console.error('Pass --dry or --apply');
  process.exit(1);
}

/** Map interface name -> { hasLanguage, optionalLanguage }. */
function collectInterfaces(sf) {
  const map = new Map();
  for (const stmt of sf.statements) {
    if (!ts.isInterfaceDeclaration(stmt)) continue;
    let hasLanguage = false;
    let optionalLanguage = false;
    for (const m of stmt.members) {
      if (
        ts.isPropertySignature(m) &&
        ts.isIdentifier(m.name) &&
        m.name.text === 'language'
      ) {
        hasLanguage = true;
        optionalLanguage = !!m.questionToken;
      }
    }
    map.set(stmt.name.text, { hasLanguage, optionalLanguage });
  }
  return map;
}

function splitTopLevelColon(s) {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '<' || ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === '>' || ch === ')' || ch === ']' || ch === '}') depth--;
    else if (ch === ':' && depth === 0) return i;
  }
  return -1;
}

/** Build the shim parameter text + arg list from AST parameters. */
function shimParams(prop, src) {
  const params = prop.parameters.map((p) => {
    const name = p.name.getText();
    const optional = !!p.questionToken || !!p.initializer;
    const type = p.type ? src.slice(p.type.pos, p.type.end).trim() : 'any';
    return { name, optional, type };
  });
  const typed = params
    .map((p) => `${p.name}${p.optional ? '?' : ''}: ${p.type}`)
    .join(', ');
  const args = params.map((p) => p.name).join(', ');
  return { typed, args };
}

/** Find the leading JSDoc start for a node, or its plain start. */
function nodeStartWithJsdoc(node, src) {
  const ranges = ts.getLeadingCommentRanges(src, node.getFullStart()) || [];
  if (ranges.length) {
    const last = ranges[ranges.length - 1];
    if (last.kind === ts.SyntaxKind.MultiLineCommentTrivia) {
      const between = src.slice(last.end, node.getStart());
      if (/^\s*$/.test(between)) return last.pos;
    }
  }
  return node.getStart();
}

function findReturnedObjectLiteral(fn) {
  let found = null;
  function visit(node) {
    if (found) return;
    if (
      ts.isReturnStatement(node) &&
      node.expression &&
      ts.isObjectLiteralExpression(node.expression)
    ) {
      found = node.expression;
      return;
    }
    ts.forEachChild(node, visit);
  }
  if (fn.body) visit(fn.body);
  return found;
}

function processFile(filePath) {
  const base = path.basename(filePath);
  const src = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(filePath, src, ts.ScriptTarget.Latest, true);
  const ifaces = collectInterfaces(sf);

  let factoryFn = null;
  let bcClass = null;
  for (const stmt of sf.statements) {
    if (
      ts.isFunctionDeclaration(stmt) &&
      stmt.name &&
      /Service$/.test(stmt.name.text) &&
      /^[a-z]/.test(stmt.name.text) &&
      stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      factoryFn = stmt;
    }
    if (
      ts.isClassDeclaration(stmt) &&
      stmt.name &&
      /Service$/.test(stmt.name.text) &&
      stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      bcClass = stmt;
    }
  }
  if (!factoryFn || !bcClass) return null;

  const className = bcClass.name.text;
  const factoryName = className[0].toLowerCase() + className.slice(1);

  const retObj = findReturnedObjectLiteral(factoryFn);
  if (!retObj) return null;

  // edits: array of { start, end, text } against original src.
  const edits = [];

  // ---- Collect method shapes; queue Phase-4 language injections ----
  const shimMethods = [];
  for (const prop of retObj.properties) {
    if (!ts.isMethodDeclaration(prop) || !ts.isIdentifier(prop.name)) continue;
    const name = prop.name.text;
    const { typed, args } = shimParams(prop, src);
    const retType = prop.type ? src.slice(prop.type.pos, prop.type.end).trim() : '';
    shimMethods.push({ name, typed, args, retType });

    if (SHIM_ONLY.has(base) || !prop.body) continue;
    if (prop.parameters.length !== 1) continue;
    const p0 = prop.parameters[0];
    if (p0.name.getText() !== 'variables') continue;
    const ptype = p0.type ? p0.type.getText() : '';
    const iface = ifaces.get(ptype);
    if (!iface || !iface.hasLanguage || !iface.optionalLanguage) continue;

    // The parameter itself may be optional (`variables?: XVariables`); in that
    // case read through optional chaining so we don't deref undefined.
    const paramOptional = !!p0.questionToken;
    const langAccess = paramOptional ? 'variables?.language' : 'variables.language';

    const bodyText = src.slice(prop.body.pos, prop.body.end);
    const callRe =
      /const result = await runOperation\(client, (\w+), '([^']+)', \{ \.\.\.variables \}\);/;
    const mm = bodyText.match(callRe);
    if (!mm) continue;
    const start = prop.body.pos + mm.index;
    const end = start + mm[0].length;
    edits.push({
      start,
      end,
      text:
        `const language = ${langAccess} ?? client.getDefaultLanguage();\n` +
        `      const result = await runOperation(client, ${mm[1]}, '${mm[2]}', { ...variables, language });`,
    });
  }

  // ---- Phase 5: replace the BC class (incl. its leading JSDoc) ----
  const shimStart = nodeStartWithJsdoc(bcClass, src);
  const shimEnd = bcClass.getEnd();
  const shimLines = [];
  shimLines.push(
    `/**\n * Backwards-compatible class form. New code should call \`${factoryName}(client)\`.\n */`
  );
  shimLines.push(`export class ${className} {`);
  shimLines.push(`  private readonly _svc: ReturnType<typeof ${factoryName}>;`);
  shimLines.push(
    `  constructor(client: GraphQLClient) { this._svc = ${factoryName}(client); }`
  );
  for (const m of shimMethods) {
    const ret = m.retType ? `: ${m.retType}` : '';
    shimLines.push(
      `  ${m.name}(${m.typed})${ret} { return this._svc.${m.name}(${m.args}); }`
    );
  }
  shimLines.push(`}`);
  edits.push({ start: shimStart, end: shimEnd, text: shimLines.join('\n') });

  // ---- Apply position edits (descending) ----
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }

  // ---- Phase 6a: strip stale @extends BaseService JSDoc lines ----
  out = out.replace(/^[ \t]*\*[ \t]*@extends BaseService[ \t]*\r?\n/gm, '');

  // ---- Phase 6b: drop no-op { ...variables } spread (untouched calls) ----
  out = out.replace(
    /runOperation\(client, (\w+), '([^']+)', \{ \.\.\.variables \}\)/g,
    "runOperation(client, $1, '$2', variables)"
  );

  return out;
}

function main() {
  let files;
  if (fileArg) {
    files = [fileArg.split('=')[1]];
  } else {
    files = fs
      .readdirSync(SERVICE_DIR)
      .filter((f) => f.endsWith('.ts') && !SKIP.has(f))
      .map((f) => path.join(SERVICE_DIR, f))
      .sort();
  }

  let changed = 0;
  let shown = 0;
  for (const full of files) {
    let result;
    try {
      result = processFile(full);
    } catch (err) {
      console.error(`ERROR ${path.basename(full)}: ${err.message}`);
      continue;
    }
    if (result === null) continue;
    const original = fs.readFileSync(full, 'utf8');
    if (result === original) continue;
    changed++;
    if (APPLY) {
      fs.writeFileSync(full, result, 'utf8');
    } else if (shown < 3) {
      console.log(`\n--- ${path.basename(full)} (last 2.5k chars) ---`);
      console.log(result.slice(-2500));
      shown++;
    }
  }
  console.log(`\nMode: ${APPLY ? 'APPLY' : 'DRY'}`);
  console.log(`Files ${APPLY ? 'changed' : 'would change'}: ${changed}`);
}

main();
