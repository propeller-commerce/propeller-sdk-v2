#!/usr/bin/env node
/**
 * AST-based codemod: convert wrapper classes in src/type/*.ts to interfaces.
 *
 * For each file containing `export class Foo [implements Bar]? { ... }`:
 *   1. Collect field declarations (preserving JSDoc + optionality markers).
 *      `field!: Type` → `field: Type` (definite-assignment is class-only syntax).
 *      `field?: Type` → `field?: Type` (preserved).
 *   2. Discard the constructor + all method members.
 *   3. Emit `export interface Foo { /JSDoc/ field: Type; ... }`.
 *
 * Preserves all top-of-file imports and any non-class statements.
 *
 * Usage:
 *   node scripts/codemod-class-to-interface.js --dry             # preview, no writes
 *   node scripts/codemod-class-to-interface.js --apply           # write changes
 *   node scripts/codemod-class-to-interface.js --apply --file=PATH
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const TYPE_DIR = path.join(__dirname, '..', 'src', 'type');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const APPLY = argv.includes('--apply');
const fileArg = argv.find((a) => a.startsWith('--file='));

if (!DRY && !APPLY) {
  console.error('Pass --dry or --apply');
  process.exit(1);
}

function getLeadingJsdoc(node, sourceText) {
  const ranges = ts.getLeadingCommentRanges(sourceText, node.getFullStart()) || [];
  // Take only the comment range immediately attached to the node (the last one
  // before the node's start, separated by at most whitespace).
  if (ranges.length === 0) return '';
  const lastRange = ranges[ranges.length - 1];
  // Only keep block comments (JSDoc); discard line comments.
  if (lastRange.kind !== ts.SyntaxKind.MultiLineCommentTrivia) return '';
  const between = sourceText.slice(lastRange.end, node.getStart());
  // The JSDoc must be the immediate prefix (only whitespace/newline between).
  if (!/^\s*$/.test(between)) return '';
  return sourceText.slice(lastRange.pos, lastRange.end);
}

function rewriteClassToInterface(classDecl, sourceText) {
  const name = classDecl.name.text;
  const classJsdoc = getLeadingJsdoc(classDecl, sourceText);

  // `class X implements A, B` → `interface X extends A, B`
  let extendsClause = '';
  if (classDecl.heritageClauses) {
    const implementsList = [];
    for (const hc of classDecl.heritageClauses) {
      if (hc.token === ts.SyntaxKind.ImplementsKeyword) {
        for (const t of hc.types) {
          implementsList.push(t.getText());
        }
      }
    }
    if (implementsList.length > 0) {
      extendsClause = ` extends ${implementsList.join(', ')}`;
    }
  }

  const fieldLines = [];
  for (const member of classDecl.members) {
    if (!ts.isPropertyDeclaration(member)) continue;
    if (!member.name || !ts.isIdentifier(member.name)) continue;

    const fieldName = member.name.text;
    // Optionality / definite-assignment:
    //  - `field?: T` → `field?: T`
    //  - `field!: T` → `field: T`
    //  - `field: T`  → `field: T`
    const hasQuestion = member.questionToken !== undefined;
    const hasExclamation = member.exclamationToken !== undefined;
    const optionalMarker = hasQuestion ? '?' : '';

    if (!member.type) {
      // Should never happen in generated wrapper classes — every field is typed.
      continue;
    }
    const typeText = member.type.getText(sourceText.length ? undefined : undefined).trim();
    // Note: getText() on a node from a real SourceFile works without explicit source.

    const memberJsdoc = getLeadingJsdoc(member, sourceText);
    const indent = '  ';
    let line = '';
    if (memberJsdoc) {
      line += indent + memberJsdoc + '\n';
    }
    line += `${indent}${fieldName}${optionalMarker}: ${typeText};`;
    fieldLines.push(line);
  }

  const body = fieldLines.join('\n');
  let out = '';
  if (classJsdoc) out += classJsdoc + '\n';
  out += `export interface ${name}${extendsClause} {\n${body}\n}`;
  return out;
}

function processFile(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  if (!/^export class /m.test(sourceText)) return null;

  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);

  // Find class declarations to replace (top-level only).
  const replacements = [];
  for (const stmt of sourceFile.statements) {
    if (ts.isClassDeclaration(stmt) && stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
      const classJsdoc = getLeadingJsdoc(stmt, sourceText);
      const start = classJsdoc ? sourceText.indexOf(classJsdoc) : stmt.getStart();
      const end = stmt.getEnd();
      const replacement = rewriteClassToInterface(stmt, sourceText);
      replacements.push({ start, end, replacement });
    }
  }
  if (replacements.length === 0) return null;

  // Apply replacements in reverse order so offsets stay valid.
  replacements.sort((a, b) => b.start - a.start);
  let out = sourceText;
  for (const r of replacements) {
    out = out.slice(0, r.start) + r.replacement + out.slice(r.end);
  }
  return out;
}

function main() {
  let files;
  if (fileArg) {
    files = [fileArg.split('=')[1]];
  } else {
    files = fs
      .readdirSync(TYPE_DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => path.join(TYPE_DIR, f))
      .sort();
  }

  let changed = 0;
  let shown = 0;
  for (const full of files) {
    const result = processFile(full);
    if (result === null) continue;
    changed++;
    if (APPLY) {
      fs.writeFileSync(full, result, 'utf8');
    } else if (shown < 2) {
      console.log(`\n--- ${path.basename(full)} (preview) ---`);
      console.log(result);
      shown++;
    }
  }
  console.log(`\nMode: ${APPLY ? 'APPLY' : 'DRY'}`);
  console.log(`Files ${APPLY ? 'changed' : 'would change'}: ${changed}`);
}

main();
