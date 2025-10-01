#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Build script to generate browser-compatible GraphQL bundles
 * This reads all .graphql files and creates TypeScript modules that can be imported
 */

const SRC_DIR = path.join(__dirname, '../src');
const GRAPHQL_DIR = path.join(SRC_DIR, 'graphql');
const OUTPUT_DIR = path.join(SRC_DIR, 'generated');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Read all GraphQL files from a directory
 */
function readGraphQLFiles(dir) {
  const files = {};
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const entries = fs.readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && entry.endsWith('.graphql')) {
      const name = entry.replace('.graphql', '');
      const content = fs.readFileSync(fullPath, 'utf8');
      files[name] = content;
    }
  }
  
  return files;
}

/**
 * Generate TypeScript module content
 */
function generateTSModule(files, type) {
  const exports = Object.keys(files).map(name => {
    const content = files[name];
    const escapedContent = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    return `export const ${name} = \`${escapedContent}\`;`;
  }).join('\n\n');
  
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

/**
 * Generate index file that exports all bundles
 */
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

/**
 * Main build function
 */
function buildGraphQLBundle() {
  console.log('🔨 Building GraphQL bundle for browser compatibility...');
  
  // Read all GraphQL files
  const queries = readGraphQLFiles(path.join(GRAPHQL_DIR, 'query'));
  const mutations = readGraphQLFiles(path.join(GRAPHQL_DIR, 'mutation'));
  const fragments = readGraphQLFiles(path.join(GRAPHQL_DIR, 'fragment'));
  
  console.log(`📄 Found ${Object.keys(queries).length} queries`);
  console.log(`📄 Found ${Object.keys(mutations).length} mutations`);
  console.log(`📄 Found ${Object.keys(fragments).length} fragments`);
  
  // Generate TypeScript modules
  const queriesTS = generateTSModule(queries, 'queries');
  const mutationsTS = generateTSModule(mutations, 'mutations');
  const fragmentsTS = generateTSModule(fragments, 'fragments');
  const indexTS = generateIndexFile();
  
  // Write files
  fs.writeFileSync(path.join(OUTPUT_DIR, 'queries.ts'), queriesTS);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'mutations.ts'), mutationsTS);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'fragments.ts'), fragmentsTS);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexTS);
  
  console.log('✅ GraphQL bundle generated successfully!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  
  // Generate stats
  const totalFiles = Object.keys(queries).length + Object.keys(mutations).length + Object.keys(fragments).length;
  console.log(`📊 Total GraphQL documents bundled: ${totalFiles}`);
}

// Run the build
if (require.main === module) {
  buildGraphQLBundle();
}

module.exports = { buildGraphQLBundle }; 