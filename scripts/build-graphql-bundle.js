#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse, print, visit, Kind } = require('graphql');

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

  // Top-level src/generated/index.ts re-exports the operations barrel (for
  // anyone who wants every op string at once — but consumers should prefer
  // direct per-op imports for tree-shaking).
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.ts'),
    `/* Auto-generated. Do not edit. */\nexport * from './operations';\n`,
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
