#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse, print, visit, Kind } = require('graphql');

/**
 * Build script: read all .graphql files, transitively inline fragment spreads
 * into each operation, and emit TypeScript modules containing the pre-resolved
 * operation strings. This moves work that previously happened at runtime
 * (fragment resolution on every request) to build time, so the published SDK
 * does not need the `graphql` package at runtime.
 */

const SRC_DIR = path.join(__dirname, '../src');
const GRAPHQL_DIR = path.join(SRC_DIR, 'graphql');
const OUTPUT_DIR = path.join(SRC_DIR, 'generated');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

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
      const def = doc.definitions.find(d => d.kind === Kind.FRAGMENT_DEFINITION);
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
      nested.forEach(n => required.add(n));
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
  const fragmentDefs = Array.from(required).map(name => registry.get(name));
  const withFragments = {
    ...document,
    definitions: [...fragmentDefs, ...document.definitions],
  };
  return print(withFragments);
}

function escapeForTemplate(content) {
  return content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function generateTSModule(files, type) {
  const exports = Object.keys(files)
    .map(name => `export const ${name} = \`${escapeForTemplate(files[name])}\`;`)
    .join('\n\n');
  const indexExport = `
export const ${type} = {
${Object.keys(files).map(name => `  ${name}`).join(',\n')}
};

export default ${type};
`;
  return `/**
 * Generated GraphQL ${type} bundle
 * This file is auto-generated. Do not edit manually.
 */

${exports}

${indexExport}
`;
}

function generateIndexFile() {
  return `/**
 * Generated GraphQL bundles index
 * This file is auto-generated. Do not edit manually.
 */

export * from './queries';
export * from './mutations';
export * from './fragments';

import { queries } from './queries';
import { mutations } from './mutations';
import { fragments } from './fragments';

export const graphql = {
  queries,
  mutations,
  fragments
};

export default graphql;
`;
}

function buildGraphQLBundle() {
  console.log('🔨 Building GraphQL bundle with build-time fragment inlining...');

  const rawQueries = readGraphQLFiles(path.join(GRAPHQL_DIR, 'query'));
  const rawMutations = readGraphQLFiles(path.join(GRAPHQL_DIR, 'mutation'));
  const rawFragments = readGraphQLFiles(path.join(GRAPHQL_DIR, 'fragment'));

  console.log(`📄 Found ${Object.keys(rawQueries).length} queries`);
  console.log(`📄 Found ${Object.keys(rawMutations).length} mutations`);
  console.log(`📄 Found ${Object.keys(rawFragments).length} fragments`);

  const registry = buildFragmentRegistry(rawFragments);
  console.log(`📚 Parsed fragment registry: ${registry.size} entries`);

  const inlinedQueries = {};
  for (const [name, source] of Object.entries(rawQueries)) {
    inlinedQueries[name] = inlineFragments(name, source, registry);
  }
  const inlinedMutations = {};
  for (const [name, source] of Object.entries(rawMutations)) {
    inlinedMutations[name] = inlineFragments(name, source, registry);
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'queries.ts'), generateTSModule(inlinedQueries, 'queries'));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'mutations.ts'), generateTSModule(inlinedMutations, 'mutations'));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'fragments.ts'), generateTSModule(rawFragments, 'fragments'));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), generateIndexFile());

  console.log('✅ GraphQL bundle generated with fragments pre-inlined.');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  const total = Object.keys(rawQueries).length + Object.keys(rawMutations).length + Object.keys(rawFragments).length;
  console.log(`📊 Total GraphQL documents bundled: ${total}`);
}

if (require.main === module) {
  buildGraphQLBundle();
}

module.exports = { buildGraphQLBundle };
