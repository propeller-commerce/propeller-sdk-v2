#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing ALL JSDoc issues in type files to eliminate warnings...');

// Get all type files
const typeDir = path.join(process.cwd(), 'src/type');
const typeFiles = fs.readdirSync(typeDir)
  .filter(file => file.endsWith('.ts'));

// Get all enum files
const enumDir = path.join(process.cwd(), 'src/enum');
const enumFiles = fs.readdirSync(enumDir)
  .filter(file => file.endsWith('.ts'));

// Get all service files
const serviceDir = path.join(process.cwd(), 'src/service');
const serviceFiles = fs.readdirSync(serviceDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'BaseService.ts');

let totalFiles = typeFiles.length + enumFiles.length + serviceFiles.length;
let fixedFiles = 0;

console.log(`📁 Found ${typeFiles.length} type files, ${enumFiles.length} enum files, ${serviceFiles.length} service files`);

// Function to fix JSDoc in a file
function fixJSDocInFile(filePath, fileName) {
  console.log(`Processing: ${fileName}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Remove all problematic JSDoc tags
  const patterns = [
    // Remove @getter tags
    /\*\s*@getter\s+\w+/g,
    // Remove @setter tags  
    /\*\s*@setter\s+\w+/g,
    // Remove @constructor tags
    /\*\s*@constructor\s*/g,
    // Remove @description tags (but keep the description text)
    /\*\s*@description\s+/g,
    // Remove @method tags
    /\*\s*@method\s+\w+/g,
    // Remove @interface tags
    /\*\s*@interface\s+\w+/g,
    // Remove @class tags
    /\*\s*@class\s+\w+/g
  ];
  
  patterns.forEach(pattern => {
    content = content.replace(pattern, '');
  });
  
  // Clean up empty lines that might be left after removing tags
  content = content.replace(/\n\s*\*\s*\n/g, '\n');
  
  // Remove trailing whitespace
  content = content.replace(/\s+$/gm, '');
  
  // If content changed, write it back
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedFiles++;
    console.log(`  ✅ Fixed`);
  } else {
    console.log(`  ⏭️  No changes needed`);
  }
}

// Process type files
console.log('\n🔧 Processing type files...');
typeFiles.forEach(fileName => {
  const filePath = path.join(typeDir, fileName);
  fixJSDocInFile(filePath, `types/${fileName}`);
});

// Process enum files
console.log('\n🔧 Processing enum files...');
enumFiles.forEach(fileName => {
  const filePath = path.join(enumDir, fileName);
  fixJSDocInFile(filePath, `enums/${fileName}`);
});

// Process service files
console.log('\n🔧 Processing service files...');
serviceFiles.forEach(fileName => {
  const filePath = path.join(serviceDir, fileName);
  fixJSDocInFile(filePath, `services/${fileName}`);
});

console.log(`\n🎉 JSDoc fix complete!`);
console.log(`📁 Total files processed: ${totalFiles}`);
console.log(`🔧 Files fixed: ${fixedFiles}`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Run: npm run docs:full`);
console.log(`   2. Check that warnings are eliminated`);
console.log(`   3. The documentation should now build cleanly`);
console.log(`\n🚀 Run: npm run docs:full`);
