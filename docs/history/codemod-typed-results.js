#!/usr/bin/env node
'use strict';

/**
 * Result-typing codemod (review finding #1).
 *
 * Every service method runs `runOperation(client, doc, 'op', vars)` and then
 * `return result.data.<field> [as <T>];`. Because `runOperation<T = any>`
 * defaults its generic to `any`, `result.data` is `any`, so the `as <T>`
 * casts were unchecked assertions over `any` (and the no-cast returns were
 * silently `any`). The compiler verified nothing about the response shape.
 *
 * This codemod injects a type argument into every `runOperation(...)` call so
 * `result.data` is `{ <field>: <ReturnType> }`, where:
 *   - `<field>` is the property read in the method's `return result.data.<field>`
 *   - `<ReturnType>` is the method's declared `Promise<ReturnType>`
 *     (after `runOperation` was changed so its generic types `result.data`).
 *
 * After this:
 *   - `return result.data.product as Product;` is `Product as Product`
 *     — a compiler-checked identity, not an `any` escape.
 *   - `return result.data.attributeDelete;` (no cast) is genuinely typed.
 *
 * SURGICAL & SAFE — same discipline as codemod-align-variables.js:
 *   - TS AST locates exact nodes; the ONLY edit per method is inserting the
 *     `<{ field: RetType }>` type-argument list immediately after the
 *     `runOperation` identifier in its call expression. Bodies, params,
 *     casts, JSDoc, BC delegates: byte-preserved.
 *   - Skips a call that already has a type argument (idempotent).
 *   - Skips any method whose return/return-type isn't the canonical shape and
 *     reports it (none expected; aborts loudly if the shape assumption breaks).
 *   - Edits applied bottom-up; each file re-parsed; any parse error aborts the
 *     whole run with nothing written.
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { analyzeAll, extractRunOperation } = require('./lib/align-classify');

const DRY = process.argv.includes('--dry');

/** Unwrap `Promise<X>` → text of `X`; otherwise return the annotation text. */
function returnInnerType(methodNode, sf) {
  const t = methodNode.type;
  if (!t) return null;
  if (
    ts.isTypeReferenceNode(t) &&
    ts.isIdentifier(t.typeName) &&
    t.typeName.text === 'Promise' &&
    t.typeArguments &&
    t.typeArguments.length === 1
  ) {
    return t.typeArguments[0].getText(sf);
  }
  return t.getText(sf);
}

/** The `result.data.<field>` property name from the method's return stmt. */
function returnedDataField(methodNode, sf) {
  let field = null;
  const walk = (n) => {
    if (field) return;
    if (ts.isReturnStatement(n) && n.expression) {
      let e = n.expression;
      if (ts.isAsExpression(e)) e = e.expression; // `result.data.x as T` → `result.data.x`
      while (ts.isParenthesizedExpression(e)) e = e.expression;
      if (
        ts.isPropertyAccessExpression(e) &&
        ts.isPropertyAccessExpression(e.expression) &&
        ts.isIdentifier(e.expression.expression) &&
        e.expression.expression.text === 'result' &&
        e.expression.name.text === 'data'
      ) {
        field = e.name.text;
      }
      return;
    }
    n.forEachChild(walk);
  };
  if (methodNode.body) methodNode.body.forEachChild(walk);
  return field;
}

function buildEdits() {
  const { files } = analyzeAll();
  const fileEdits = new Map();
  const summary = [];
  const skipped = [];

  for (const f of files) {
    const sf = f.sourceFile;
    const edits = [];

    for (const [, method] of f.methodsByName) {
      const ro = extractRunOperation(method);
      if (!ro || !ro.callNode) continue;
      const call = ro.callNode;

      // Idempotent: leave calls that already carry a type argument.
      if (call.typeArguments && call.typeArguments.length > 0) continue;

      const retType = returnInnerType(method, sf);
      const field = returnedDataField(method, sf);
      if (!retType || !field) {
        skipped.push(
          `${f.fileBase}.${method.name && method.name.getText ? method.name.getText(sf) : '<anon>'} ` +
            `(retType=${retType}, field=${field})`
        );
        continue;
      }

      // Insert `<{ field: RetType }>` right after the `runOperation` callee.
      const insertAt = call.expression.getEnd();
      edits.push({
        start: insertAt,
        end: insertAt,
        text: `<{ ${field}: ${retType} }>`,
      });
      summary.push(`${f.fileBase}.${field}: runOperation<{ ${field}: ${retType} }>`);
    }

    if (edits.length) fileEdits.set(f.filePath, edits);
  }

  return { fileEdits, summary, skipped };
}

function applyEdits(filePath, edits) {
  let text = fs.readFileSync(filePath, 'utf8');
  edits.sort((a, b) => b.start - a.start || b.end - a.end);
  for (const e of edits) text = text.slice(0, e.start) + e.text + text.slice(e.end);
  return text;
}

function main() {
  const { fileEdits, summary, skipped } = buildEdits();

  if (skipped.length) {
    console.error(
      `❌ ${skipped.length} method(s) not in canonical runOperation/return shape — aborting:\n  ` +
        skipped.join('\n  ')
    );
    process.exit(1);
  }

  let changed = 0;
  for (const [filePath, edits] of fileEdits) {
    const newText = applyEdits(filePath, edits);
    const reparsed = ts.createSourceFile(filePath, newText, ts.ScriptTarget.Latest, true);
    const diags = reparsed.parseDiagnostics || [];
    if (diags.length) {
      console.error(
        `❌ Parse error after editing ${path.basename(filePath)} — aborting (nothing written). ` +
          JSON.stringify(diags[0].messageText)
      );
      process.exit(1);
    }
    if (!DRY) fs.writeFileSync(filePath, newText, 'utf8');
    changed++;
  }

  console.log(`${DRY ? '[dry] ' : ''}Typed ${summary.length} runOperation call(s) across ${changed} file(s).`);
}

if (require.main === module) main();

module.exports = { buildEdits };
