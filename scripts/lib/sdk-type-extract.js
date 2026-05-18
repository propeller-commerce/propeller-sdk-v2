#!/usr/bin/env node
'use strict';

/**
 * Schema-type drift guard — committed-type extractor (Phase 2).
 *
 * Parses every hand-authored src/type/*.ts and src/enum/*.ts with the
 * TypeScript compiler API and returns the structural shape the drift guard
 * compares against the schema projection. NEVER text/regex on the committed
 * side — JSDoc, member ordering, and comment wording must not matter; only
 * member-name presence, optionality, and declaration kind do.
 *
 * Technique mirrors interfaceFieldSet() in scripts/lib/align-classify.js
 * (already proven parsing every src/service/*.ts at scale), extended for
 * enums, union type-aliases, and `extends` heritage (IBaseProduct factoring).
 *
 * Read-only. Never writes src/.
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.join(__dirname, '..', '..');
const TYPE_DIR = path.join(ROOT, 'src', 'type');
const ENUM_DIR = path.join(ROOT, 'src', 'enum');

function listTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => path.join(dir, f));
}

/**
 * Extract the declaration whose name matches the file's basename. Returns one
 * of:
 *   { kind:'interface', ownMembers:Map<name,{optional}>, extendsNames:[] }
 *   { kind:'enum', enumValues:Set<string> }
 *   { kind:'union', isUnion:true }            (type alias to a union)
 *   { kind:'alias' }                          (other type alias)
 *   { kind:'unknown' }                        (no matching decl — fail loud)
 */
function extractFromSource(sourceFile, expectedName) {
  let found = null;

  sourceFile.forEachChild((node) => {
    if (found) return;

    if (ts.isInterfaceDeclaration(node) && node.name.text === expectedName) {
      const ownMembers = new Map();
      for (const m of node.members) {
        if (ts.isPropertySignature(m) && m.name && ts.isIdentifier(m.name)) {
          ownMembers.set(m.name.text, { optional: !!m.questionToken });
        }
      }
      const extendsNames = [];
      for (const h of node.heritageClauses || []) {
        if (h.token === ts.SyntaxKind.ExtendsKeyword) {
          for (const t of h.types) {
            if (ts.isIdentifier(t.expression)) extendsNames.push(t.expression.text);
          }
        }
      }
      found = { kind: 'interface', ownMembers, extendsNames };
      return;
    }

    if (ts.isEnumDeclaration(node) && node.name.text === expectedName) {
      const enumValues = new Set();
      for (const m of node.members) {
        if (m.name && ts.isIdentifier(m.name)) enumValues.add(m.name.text);
        else if (m.name && ts.isStringLiteral(m.name)) enumValues.add(m.name.text);
      }
      found = { kind: 'enum', enumValues };
      return;
    }

    if (ts.isTypeAliasDeclaration(node) && node.name.text === expectedName) {
      const isUnion = ts.isUnionTypeNode(node.type);
      found = isUnion ? { kind: 'union', isUnion: true } : { kind: 'alias' };
      return;
    }
  });

  return found || { kind: 'unknown' };
}

/**
 * @returns {Map<string, {
 *   kind:'interface'|'enum'|'union'|'alias'|'unknown',
 *   file:string,
 *   ownMembers?:Map<string,{optional:boolean}>,
 *   extendsNames?:string[],
 *   enumValues?:Set<string>,
 *   isUnion?:boolean,
 * }>}
 */
function extractSdkTypes() {
  const out = new Map();
  for (const file of [...listTsFiles(TYPE_DIR), ...listTsFiles(ENUM_DIR)]) {
    const name = path.basename(file, '.ts');
    const text = fs.readFileSync(file, 'utf8');
    // setParentNodes=true mirrors align-classify.js; scriptKind TS; lexical
    // parse only (no type-checker / Program) — fast across ~860 files.
    const sf = ts.createSourceFile(file, text, ts.ScriptTarget.ES2020, true, ts.ScriptKind.TS);
    const decl = extractFromSource(sf, name);
    out.set(name, { ...decl, file: path.relative(ROOT, file) });
  }
  return out;
}

/**
 * Effective member set of an SDK interface = own ∪ transitively-extended own
 * members, so `Product extends IBaseProduct` does not false-flag inherited
 * fields. Cycle-guarded; bases that exist only on the SDK side still
 * contribute their members.
 */
function effectiveMemberSet(name, sdkTypes, seen = new Set()) {
  if (seen.has(name)) return new Map();
  seen.add(name);
  const decl = sdkTypes.get(name);
  if (!decl || decl.kind !== 'interface') return new Map();
  const acc = new Map();
  for (const base of decl.extendsNames || []) {
    for (const [k, v] of effectiveMemberSet(base, sdkTypes, seen)) acc.set(k, v);
  }
  for (const [k, v] of decl.ownMembers) acc.set(k, v);
  return acc;
}

module.exports = { extractSdkTypes, effectiveMemberSet };

if (require.main === module) {
  const m = extractSdkTypes();
  let iface = 0;
  let en = 0;
  let uni = 0;
  let unk = 0;
  for (const v of m.values()) {
    if (v.kind === 'interface') iface++;
    else if (v.kind === 'enum') en++;
    else if (v.kind === 'union') uni++;
    else if (v.kind === 'unknown') unk++;
  }
  // eslint-disable-next-line no-console
  console.log(
    `[schemaTypeDrift] extracted ${m.size} SDK files: ` +
      `${iface} interfaces, ${en} enums, ${uni} unions, ${unk} unknown.`
  );
}
