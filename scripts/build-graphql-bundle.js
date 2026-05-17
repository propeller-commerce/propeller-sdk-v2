#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse, print, visit, Kind } = require('graphql');
const { analyzeAll } = require('./lib/align-classify');

/**
 * Build script: read all .graphql files, transitively inline fragment spreads
 * into each operation, and emit per-op TypeScript modules under
 * src/generated/operations/. Each emitted module exports a single `document`
 * string that consumers (free-function ops, service facades) import directly.
 *
 * As of v0.10.0, no bundled-map is emitted — per-op imports enable tree-shaking
 * so consumers ship only the query strings they actually reference.
 */

const SRC_DIR = path.join(__dirname, '../src');
const GRAPHQL_DIR = path.join(SRC_DIR, 'graphql');
const OUTPUT_DIR = path.join(SRC_DIR, 'generated');
const OPERATIONS_DIR = path.join(OUTPUT_DIR, 'operations');

function readGraphQLFiles(dir) {
  const files = {};
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isFile() && entry.endsWith('.graphql')) {
      const name = entry.replace('.graphql', '');
      files[name] = fs.readFileSync(fullPath, 'utf8');
    }
  }
  return files;
}

function buildFragmentRegistry(fragmentsByName) {
  const registry = new Map();
  for (const [name, source] of Object.entries(fragmentsByName)) {
    try {
      const doc = parse(source);
      const def = doc.definitions.find((d) => d.kind === Kind.FRAGMENT_DEFINITION);
      if (def) registry.set(def.name.value, def);
    } catch (err) {
      console.warn(`⚠️  Skipping malformed fragment ${name}: ${err.message}`);
    }
  }
  return registry;
}

function collectRequiredFragments(document, registry, visited = new Set()) {
  const required = new Set();
  visit(document, {
    FragmentSpread(node) {
      const name = node.name.value;
      if (visited.has(name) || !registry.has(name)) return;
      visited.add(name);
      required.add(name);
      const nested = collectRequiredFragments(
        { kind: Kind.DOCUMENT, definitions: [registry.get(name)] },
        registry,
        visited
      );
      nested.forEach((n) => required.add(n));
    },
  });
  return required;
}

function inlineFragments(operationName, operationString, registry) {
  let document;
  try {
    document = parse(operationString);
  } catch (err) {
    console.warn(`⚠️  Skipping unparseable operation ${operationName}: ${err.message}`);
    return operationString;
  }
  const required = collectRequiredFragments(document, registry);
  if (required.size === 0) return operationString;
  const fragmentDefs = Array.from(required).map((name) => registry.get(name));
  const withFragments = {
    ...document,
    definitions: [...fragmentDefs, ...document.definitions],
  };
  return print(withFragments);
}

function escapeForTemplate(content) {
  return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function emitOperation(name, source) {
  const filePath = path.join(OPERATIONS_DIR, `${name}.ts`);
  const body = `/* Auto-generated. Do not edit. */\nexport const document = \`${escapeForTemplate(source)}\`;\n`;
  fs.writeFileSync(filePath, body, 'utf8');
}

function emitOperationsIndex(queryNames, mutationNames) {
  const all = [...queryNames, ...mutationNames].sort();
  const lines = all.map((n) => `export { document as ${n} } from './${n}';`).join('\n');
  fs.writeFileSync(
    path.join(OPERATIONS_DIR, 'index.ts'),
    `/* Auto-generated. Do not edit. */\n${lines}\n`,
    'utf8'
  );
}

// ---- Operation-variable interface emission --------------------------------
//
// For each GraphQL operation, emit `export interface <Op>Variables` whose
// fields mirror the operation's declared variables AND their nullability
// (`$x: T!` → `x: T`; `$x: T` → `x?: T`). These are the schema-faithful
// argument types service methods take after the alignment pass.
//
// KEPT-NAME RESERVATION: a service file may hand-author a `<Name>Variables`
// interface that is still referenced by a KEEP/SCALAR method (e.g.
// `ProductQueryVariables`, `CartStartVariables`). Those names are the public
// surface consumers already import; the generator must NOT also declare them
// (that would be an ambiguous re-export at the root barrel). The set of such
// names comes from the shared classifier (`scripts/lib/align-classify.js`) —
// the single source of truth shared with the alignment codemod. The generator
// additionally writes `operationVariablesPublic.ts`, an explicit re-export of
// only the non-reserved names, which `src/index.ts` re-exports — making a
// double-export structurally impossible, not merely avoided.

const TYPE_DIR = path.join(SRC_DIR, 'type');
const ENUM_DIR = path.join(SRC_DIR, 'enum');

const SCALAR_TS = {
  String: 'string',
  ID: 'string',
  DateTime: 'string',
  Base64File: 'string',
  Int: 'number',
  Float: 'number',
  Boolean: 'boolean',
};

// GraphQL type names that diverge from the SDK's TS export name (schema casing
// vs the SDK rename — see CHANGELOG 0.9.0 `Taxcode` → `TaxCode`).
const GQL_TS_ALIASES = { Taxcode: 'TaxCode' };

function buildTypeNameSets() {
  const typeNames = new Set(
    fs.existsSync(TYPE_DIR)
      ? fs.readdirSync(TYPE_DIR).filter((f) => f.endsWith('.ts')).map((f) => f.replace('.ts', ''))
      : []
  );
  const enumNames = new Set(
    fs.existsSync(ENUM_DIR)
      ? fs
          .readdirSync(ENUM_DIR)
          .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
          .map((f) => f.replace('.ts', ''))
      : []
  );
  return { typeNames, enumNames };
}

function resolveInner(node, sets, named, unknown) {
  if (node.kind === 'NonNullType') return resolveInner(node.type, sets, named, unknown);
  if (node.kind === 'ListType') return `${resolveInner(node.type, sets, named, unknown)}[]`;
  let name = node.name.value;
  if (SCALAR_TS[name]) return SCALAR_TS[name];
  if (GQL_TS_ALIASES[name]) name = GQL_TS_ALIASES[name];
  if (sets.typeNames.has(name)) {
    named.set(name, '../type');
    return name;
  }
  if (sets.enumNames.has(name)) {
    named.set(name, '../enum');
    return name;
  }
  unknown.add(node.name.value);
  return 'any';
}

function resolveGqlVarType(typeNode, sets, named, unknown) {
  const required = typeNode.kind === 'NonNullType';
  const node = required ? typeNode.type : typeNode;
  return { ts: resolveInner(node, sets, named, unknown), required };
}

function pascalOp(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function emitOperationVariables(rawQueries, rawMutations) {
  const sets = buildTypeNameSets();
  // The shared classifier decides which hand-authored interface names survive
  // (KEEP) — those are the ONLY names the generator must not redeclare.
  const { keptNames } = analyzeAll();
  const reserved = new Set(keptNames);

  const named = new Map();
  const unknown = new Set();
  const interfaces = [];
  const seen = new Set();
  const skippedReserved = [];

  for (const [, source] of [...Object.entries(rawQueries), ...Object.entries(rawMutations)]) {
    let ast;
    try {
      ast = parse(source);
    } catch {
      continue;
    }
    const op = ast.definitions.find((d) => d.kind === Kind.OPERATION_DEFINITION);
    if (!op || !op.name) continue;
    const ifaceName = pascalOp(op.name.value) + 'Variables';
    if (seen.has(ifaceName)) continue;
    seen.add(ifaceName);
    if (reserved.has(ifaceName)) {
      skippedReserved.push(ifaceName);
      continue;
    }
    const vars = op.variableDefinitions || [];
    if (vars.length === 0) continue;
    const fields = vars
      .map((v) => {
        const { ts: tsType, required } = resolveGqlVarType(v.type, sets, named, unknown);
        return `  ${v.variable.name.value}${required ? '' : '?'}: ${tsType};`;
      })
      .join('\n');
    interfaces.push({
      name: ifaceName,
      op: op.name.value,
      body: `export interface ${ifaceName} {\n${fields}\n}`,
    });
  }

  interfaces.sort((a, b) => a.name.localeCompare(b.name));

  const typeImports = [];
  const enumImports = [];
  for (const [n, barrel] of named) (barrel === '../type' ? typeImports : enumImports).push(n);

  let header = '/* Auto-generated. Do not edit. */\n';
  if (typeImports.length)
    header += `import type { ${[...new Set(typeImports)].sort().join(', ')} } from '../type';\n`;
  if (enumImports.length)
    header += `import type { ${[...new Set(enumImports)].sort().join(', ')} } from '../enum';\n`;
  header += '\n';

  const body = interfaces
    .map(
      (i) =>
        `/**\n * Variables for the \`${i.op}\` GraphQL operation. Generated from the\n` +
        ` * operation signature — field names and required/optional status mirror\n` +
        ` * the operation's declared variables exactly.\n */\n${i.body}`
    )
    .join('\n\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'operationVariables.ts'), header + body + '\n', 'utf8');

  // Explicit public re-export barrel: only the names this generator actually
  // declared (never a reserved/hand-authored name) → zero ambiguous re-export.
  const publicNames = interfaces.map((i) => i.name).sort();
  const publicBody =
    '/* Auto-generated. Do not edit. */\n' +
    (publicNames.length
      ? `export type {\n${publicNames.map((n) => `  ${n},`).join('\n')}\n} from './operationVariables';\n`
      : 'export {};\n');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'operationVariablesPublic.ts'), publicBody, 'utf8');

  // Committed manifest of reserved (KEEP) hand-authored names — reviewable,
  // drift-guarded. The codemod regenerates it; validate diffs it.
  fs.writeFileSync(
    path.join(__dirname, '.kept-service-variables.json'),
    JSON.stringify([...reserved].sort(), null, 2) + '\n',
    'utf8'
  );

  if (unknown.size)
    console.log(`⚠️  Unknown GraphQL types resolved to \`any\`: ${[...unknown].sort().join(', ')}`);
  if (skippedReserved.length)
    console.log(
      `↩️  Reserved ${skippedReserved.length} hand-authored name(s) (kept, not regenerated): ${skippedReserved.sort().join(', ')}`
    );
  console.log(
    `✅ Emitted ${interfaces.length} generated operation-variable interfaces (+public barrel, +manifest)`
  );
}

function buildGraphQLBundle() {
  console.log('🔨 Building GraphQL bundle (per-op emit, build-time fragment inlining)…');

  // Recreate output directories.
  if (fs.existsSync(OPERATIONS_DIR)) {
    fs.rmSync(OPERATIONS_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OPERATIONS_DIR, { recursive: true });

  const rawQueries = readGraphQLFiles(path.join(GRAPHQL_DIR, 'query'));
  const rawMutations = readGraphQLFiles(path.join(GRAPHQL_DIR, 'mutation'));
  const rawFragments = readGraphQLFiles(path.join(GRAPHQL_DIR, 'fragment'));

  console.log(`📄 Found ${Object.keys(rawQueries).length} queries`);
  console.log(`📄 Found ${Object.keys(rawMutations).length} mutations`);
  console.log(`📄 Found ${Object.keys(rawFragments).length} fragments`);

  const registry = buildFragmentRegistry(rawFragments);
  console.log(`📚 Parsed fragment registry: ${registry.size} entries`);

  for (const [name, source] of Object.entries(rawQueries)) {
    emitOperation(name, inlineFragments(name, source, registry));
  }
  for (const [name, source] of Object.entries(rawMutations)) {
    emitOperation(name, inlineFragments(name, source, registry));
  }

  emitOperationsIndex(Object.keys(rawQueries), Object.keys(rawMutations));
  emitOperationVariables(rawQueries, rawMutations);

  // Top-level src/generated/index.ts re-exports the operations barrel (for
  // anyone who wants every op string at once — but consumers should prefer
  // direct per-op imports for tree-shaking) plus the PUBLIC variables barrel
  // (explicit non-reserved names only — never collides with ./service).
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.ts'),
    `/* Auto-generated. Do not edit. */\nexport * from './operations';\nexport * from './operationVariablesPublic';\n`,
    'utf8'
  );

  const total =
    Object.keys(rawQueries).length + Object.keys(rawMutations).length + Object.keys(rawFragments).length;
  console.log(`✅ Emitted ${Object.keys(rawQueries).length + Object.keys(rawMutations).length} per-op modules to ${OPERATIONS_DIR}`);
  console.log(`📊 Total GraphQL documents processed: ${total}`);
}

if (require.main === module) {
  buildGraphQLBundle();
}

module.exports = { buildGraphQLBundle };
