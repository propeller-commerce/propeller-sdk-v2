#!/usr/bin/env node
/**
 * Codemod: backfill missing JSDoc on the v0.10.0 factory-form services.
 *
 * Two deterministic transforms, both sourced from the JSDoc the factory
 * methods already carry (the original conversion preserved them):
 *
 *  1. BC class-shim methods. The shim regeneration emitted bare forwarders
 *     with no JSDoc. Copy each factory method's leading JSDoc verbatim onto
 *     the matching shim method.
 *
 *  2. `*Variables` interfaces (and their fields). The factory method that
 *     consumes an interface documents each variable in its JSDoc as
 *     `* - <name>: <type> - <description>` lines. Turn those into per-field
 *     `/** <description> *␞/` doc comments on the interface, and add an
 *     interface-level summary. Only fields/interfaces WITHOUT existing JSDoc
 *     are touched — never overwrite hand-written docs.
 *
 * Idempotent: re-running makes no changes once docs are present.
 *
 * Usage:
 *   node scripts/codemod-service-jsdoc.js --dry
 *   node scripts/codemod-service-jsdoc.js --apply
 *   node scripts/codemod-service-jsdoc.js --apply --file=PATH
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const SERVICE_DIR = path.join(__dirname, '..', 'src', 'service');
// UserService and TemplateErrorLogService are hand-written with complete,
// curated JSDoc (and use single-line `/** ... */` forms the generic parser
// shouldn't round-trip). Leave them untouched.
const SKIP = new Set([
  'index.ts',
  'runOperation.ts',
  'UserService.ts',
  'TemplateErrorLogService.ts',
]);

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const APPLY = argv.includes('--apply');
const fileArg = argv.find((a) => a.startsWith('--file='));
if (!DRY && !APPLY) {
  console.error('Pass --dry or --apply');
  process.exit(1);
}

function leadingJsdocRange(node, src) {
  const ranges = ts.getLeadingCommentRanges(src, node.getFullStart()) || [];
  for (let i = ranges.length - 1; i >= 0; i--) {
    const r = ranges[i];
    if (r.kind === ts.SyntaxKind.MultiLineCommentTrivia) {
      const text = src.slice(r.pos, r.end);
      if (text.startsWith('/**')) {
        const between = src.slice(r.end, node.getStart());
        if (/^\s*$/.test(between)) return { pos: r.pos, end: r.end, text };
      }
    }
  }
  return null;
}

// Parse a factory method's JSDoc into { summary, params: Map<name, desc> }.
function parseMethodJsdoc(jsdocText) {
  const lines = jsdocText
    .split('\n')
    // Strip leading `/**` / ` *` and any trailing ` */` (handles both
    // multi-line and single-line `/** ... */` factory JSDoc).
    .map((l) =>
      l
        .replace(/^\s*\/?\*+\/?/, '')
        .replace(/\*+\/\s*$/, '')
        .trim()
    )
    .filter((l) => l.length > 0 && l !== '/');
  let summary = '';
  const params = new Map();
  for (const l of lines) {
    const m = l.match(/^-\s*(\w+)\s*:\s*[^-]+-\s*(.+)$/);
    if (m) {
      params.set(m[1], m[2].trim());
      continue;
    }
    const pm = l.match(/^@param\s+(\w+)\s+(.+)$/);
    if (pm && !params.has(pm[1])) {
      params.set(pm[1], pm[2].trim());
      continue;
    }
    if (!summary && !l.startsWith('@') && !l.startsWith('-')) summary = l;
  }
  return { summary, params };
}

function processFile(filePath) {
  const base = path.basename(filePath);
  const src = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(filePath, src, ts.ScriptTarget.Latest, true);

  let factoryFn = null;
  let bcClass = null;
  const interfaces = new Map(); // name -> InterfaceDeclaration
  for (const stmt of sf.statements) {
    if (
      ts.isFunctionDeclaration(stmt) &&
      stmt.name &&
      /Service$/.test(stmt.name.text) &&
      /^[a-z]/.test(stmt.name.text)
    )
      factoryFn = stmt;
    if (
      ts.isClassDeclaration(stmt) &&
      stmt.name &&
      /Service$/.test(stmt.name.text)
    )
      bcClass = stmt;
    if (ts.isInterfaceDeclaration(stmt)) interfaces.set(stmt.name.text, stmt);
  }
  if (!factoryFn || !bcClass) return null;

  // Returned object literal → factory methods.
  let retObj = null;
  (function find(n) {
    if (retObj) return;
    if (ts.isReturnStatement(n) && n.expression && ts.isObjectLiteralExpression(n.expression)) {
      retObj = n.expression;
      return;
    }
    ts.forEachChild(n, find);
  })(factoryFn.body);
  if (!retObj) return null;

  // method name -> { jsdocText, parsed, paramTypeName(first param) }
  const factoryMeta = new Map();
  for (const prop of retObj.properties) {
    if (!ts.isMethodDeclaration(prop) || !ts.isIdentifier(prop.name)) continue;
    const jr = leadingJsdocRange(prop, src);
    if (!jr) continue;
    const parsed = parseMethodJsdoc(jr.text);
    const p0 = prop.parameters[0];
    const ptype = p0 && p0.type ? p0.type.getText() : null;
    factoryMeta.set(prop.name.text, { jsdocText: jr.text, parsed, paramType: ptype });
  }

  const edits = []; // {pos,end,text} against original src

  // ---- 1. Shim method JSDoc ----
  for (const member of bcClass.members) {
    if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) continue;
    const meta = factoryMeta.get(member.name.text);
    if (!meta) continue;
    if (leadingJsdocRange(member, src)) continue; // already documented
    const start = member.getStart();
    // Indent of the member line (whitespace between line start and the method).
    const lineStart = src.lastIndexOf('\n', start - 1) + 1;
    const indent = src.slice(lineStart, start);
    edits.push({ pos: start, end: start, text: buildShimJsdoc(meta.parsed, indent) });
  }

  // ---- 2. Variables-interface field + summary JSDoc ----
  // Map interface name -> the factory method JSDoc that documents it.
  const ifaceDocSource = new Map();
  for (const [, meta] of factoryMeta) {
    if (meta.paramType && interfaces.has(meta.paramType)) {
      if (!ifaceDocSource.has(meta.paramType)) ifaceDocSource.set(meta.paramType, meta.parsed);
    }
  }

  for (const [name, decl] of interfaces) {
    const parsed = ifaceDocSource.get(name);
    if (!parsed) continue;

    // Interface-level summary if missing.
    if (!leadingJsdocRange(decl, src)) {
      const at = decl.getStart();
      const sum = parsed.summary
        ? `Variables for \`${name.replace(/Variables$/, '').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}\` — ${lcFirst(parsed.summary)}`
        : `Variables for the ${name} operation.`;
      edits.push({ pos: at, end: at, text: `/**\n * ${sum}\n */\n` });
    }

    // Per-field docs if missing.
    for (const m of decl.members) {
      if (!ts.isPropertySignature(m) || !ts.isIdentifier(m.name)) continue;
      if (leadingJsdocRange(m, src)) continue;
      const desc = parsed.params.get(m.name.text);
      if (!desc) continue;
      const at = m.getStart();
      edits.push({ pos: at, end: at, text: `/** ${desc} */\n  ` });
    }
  }

  if (edits.length === 0) return src; // unchanged

  edits.sort((a, b) => b.pos - a.pos);
  let out = src;
  for (const e of edits) out = out.slice(0, e.pos) + e.text + out.slice(e.end);
  return out;
}

function lcFirst(s) {
  return s ? s[0].toLowerCase() + s.slice(1) : s;
}

// Build a well-formed JSDoc block for a shim method from the parsed factory
// JSDoc. `indent` is the existing leading whitespace of the method line; the
// returned text is inserted at the method's start, so it opens with the JSDoc
// and re-emits `indent` before the method keyword.
function buildShimJsdoc(parsed, indent) {
  let out = '/**\n';
  if (parsed.summary) out += `${indent} * ${parsed.summary}\n`;
  for (const [n, d] of parsed.params) out += `${indent} * @param ${n} ${d}\n`;
  out += `${indent} */\n${indent}`;
  return out;
}

function main() {
  let files;
  if (fileArg) files = [fileArg.split('=')[1]];
  else
    files = fs
      .readdirSync(SERVICE_DIR)
      .filter((f) => f.endsWith('.ts') && !SKIP.has(f))
      .map((f) => path.join(SERVICE_DIR, f))
      .sort();

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
    if (result == null) continue;
    const original = fs.readFileSync(full, 'utf8');
    if (result === original) continue;
    changed++;
    if (APPLY) fs.writeFileSync(full, result, 'utf8');
    else if (shown < 2) {
      console.log(`\n--- ${path.basename(full)} (first 2.5k) ---`);
      console.log(result.slice(0, 2500));
      shown++;
    }
  }
  console.log(`\nMode: ${APPLY ? 'APPLY' : 'DRY'} — ${changed} files ${APPLY ? 'changed' : 'would change'}`);
}

main();
