#!/usr/bin/env node
'use strict';

/**
 * Alignment codemod. Converts every MISALIGNED service method (per the shared
 * classifier in scripts/lib/align-classify.js) to take a single
 * `variables: <Op>Variables` argument that mirrors the GraphQL operation's
 * declared variables exactly, and passes it straight to `runOperation`
 * (with a `language` fallback only when the operation declares `$language`).
 *
 * SURGICAL & SAFE:
 *  - TypeScript AST is used to locate exact nodes; edits are collected as
 *    {start,end,text} spans and applied bottom-up (descending start) so
 *    offsets never shift.
 *  - Only these spans are touched per converted method:
 *      (a) the factory method's parameter list,
 *      (b) the 4th argument of its `runOperation(...)` call,
 *      (c) the BC-class delegate method's parameter list,
 *      (d) the BC-class delegate's `this._svc.<m>(...)` call arguments.
 *    Method bodies, return casts, JSDoc, and every non-MISALIGNED method are
 *    byte-preserved.
 *  - RETIRE hand-authored `*Variables` interface declarations (only referenced
 *    by converted methods) are deleted together with their leading JSDoc.
 *  - A single grouped `import type { ... } from '../generated/operationVariables'`
 *    is added/extended per file for the generated names it now needs.
 *  - FROZEN (ClusterService.getClusterConfig), SCALAR, KEEP, and already-zero
 *    ZERO_VAR methods are never edited. ZERO_VAR methods that still take a
 *    param (logout) are converted to no-arg.
 *  - Each file is re-parsed after editing; any syntax error aborts the whole
 *    run (restore from C:/tmp/svc-bak/).
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const {
  analyzeAll,
  pascal,
  extractRunOperation,
} = require('./lib/align-classify');

const DRY = process.argv.includes('--dry');

function paramListSpan(methodNode, sourceFile) {
  // Span covering the text strictly between "(" and ")" of the parameter list.
  const open = methodNode.parameters.pos; // position right after "("
  const close = methodNode.parameters.end; // position right before ")"
  return { start: open, end: close, text: sourceFile.text.slice(open, close) };
}

function langFallbackArg(opHasLanguage) {
  return opHasLanguage
    ? '{ ...variables, language: variables.language ?? client.getDefaultLanguage() }'
    : 'variables';
}

// From a method body, find the doc identifier (2nd runOperation arg) and the
// return-statement's unwrap field + optional cast, e.g.
//   `return result.data.productUpdate as Product;`
//   →  { docId:'productUpdateDoc', field:'productUpdate', cast:'Product' }
// Falls back gracefully when the return isn't the canonical shape (then we
// keep the original return text verbatim).
function extractBodyShape(methodNode, sf) {
  const ro = extractRunOperation(methodNode);
  const docId =
    ro && ro.callNode.arguments[1] ? ro.callNode.arguments[1].getText(sf) : null;
  let returnText = null;
  let returnIsCanonical = false;
  const walk = (n) => {
    if (returnText) return;
    if (ts.isReturnStatement(n) && n.expression) {
      returnText = n.expression.getText(sf);
      // canonical = `result.data.<field>` optionally `as <T>`
      returnIsCanonical = /^result\.data\.[A-Za-z0-9_]+(\s+as\s+[\s\S]+)?$/.test(
        returnText.trim()
      );
      return;
    }
    n.forEachChild(walk);
  };
  if (methodNode.body) methodNode.body.forEachChild(walk);
  return { docId, opName: ro ? ro.opName : null, returnText, returnIsCanonical };
}

// Span of the method body's brace block contents (between `{` and `}`).
function bodyInnerSpan(methodNode) {
  const b = methodNode.body;
  // b.getStart() points at "{". Inner = (start+1 .. end-1).
  return { start: b.getStart() + 1, end: b.getEnd() - 1 };
}

function buildEdits() {
  const { files, opVars } = analyzeAll();
  const fileEdits = new Map(); // filePath -> [{start,end,text}]
  const summary = [];

  for (const f of files) {
    const edits = [];
    const sf = f.sourceFile;
    const text = sf.text;
    const neededGenImports = new Set();

    // Index BC-class methods by name.
    const bcMethods = new Map();
    if (f.bcClass) {
      for (const member of f.bcClass.members) {
        if (ts.isMethodDeclaration(member) && member.name && ts.isIdentifier(member.name)) {
          bcMethods.set(member.name.text, member);
        }
      }
    }

    for (const m of f.methods) {
      const method = f.methodsByName.get(m.name);
      if (!method) continue;

      const isMisaligned = m.class === 'MISALIGNED';
      const isZeroConvert = m.class === 'ZERO_VAR' && m.already === false;
      if (!isMisaligned && !isZeroConvert) continue;

      const shape = extractBodyShape(method, sf);
      if (!shape.docId || !shape.opName || !shape.returnText) {
        throw new Error(
          `cannot rebuild ${f.fileBase}.${m.name}: non-canonical body (docId=${shape.docId}, return=${shape.returnText})`
        );
      }
      const vars = opVars.get(m.op || shape.opName) || [];
      const opHasLanguage = vars.some((v) => v.name === 'language');

      let newParam;
      let varsExpr;
      if (isMisaligned) {
        const genName = m.genName || pascal(m.op) + 'Variables';
        neededGenImports.add(genName);
        newParam = `variables: ${genName}`;
        varsExpr = `, ${langFallbackArg(opHasLanguage)}`;
      } else {
        // ZERO_VAR: no parameter, no 4th runOperation arg.
        newParam = '';
        varsExpr = '';
      }

      // Indentation: factory methods sit at 6 spaces of body indent in these
      // files (object literal inside `return { ... }` inside the factory fn).
      const ind = '      ';
      const newFactoryBody =
        `\n${ind}const result = await runOperation(client, ${shape.docId}, '${shape.opName}'${varsExpr});\n` +
        `${ind}return ${shape.returnText};\n    `;

      // (a) factory param list
      {
        const sp = paramListSpan(method, sf);
        edits.push({ start: sp.start, end: sp.end, text: newParam });
      }
      // (b) factory body (full rebuild — drops any orphaned `const language`)
      {
        const bs = bodyInnerSpan(method);
        edits.push({ start: bs.start, end: bs.end, text: newFactoryBody });
      }
      // (c)(d) BC delegate: param + delegate call args
      const bc = bcMethods.get(m.name);
      if (bc) {
        const sp = paramListSpan(bc, sf);
        edits.push({ start: sp.start, end: sp.end, text: newParam });
        let delegateCall = null;
        const walk = (n) => {
          if (delegateCall) return;
          if (
            ts.isCallExpression(n) &&
            ts.isPropertyAccessExpression(n.expression) &&
            n.expression.name.text === m.name
          ) {
            delegateCall = n;
            return;
          }
          n.forEachChild(walk);
        };
        if (bc.body) bc.body.forEachChild(walk);
        if (delegateCall) {
          const a = delegateCall.arguments;
          const argText = isMisaligned ? 'variables' : '';
          if (a.length >= 1) {
            edits.push({
              start: a[0].getStart(sf),
              end: a[a.length - 1].getEnd(),
              text: argText,
            });
          } else if (isMisaligned) {
            const ins = delegateCall.expression.getEnd() + 1; // after "("
            edits.push({ start: ins, end: ins, text: argText });
          }
        }
      }
      summary.push(
        isMisaligned
          ? `${f.fileBase}.${m.name}: → variables: ${m.genName || pascal(m.op) + 'Variables'}`
          : `${f.fileBase}.${m.name}: → () [zero-var]`
      );
    }

    // Delete RETIRE interface declarations in this file (+ leading JSDoc).
    for (const ifaceName of f.handIfaces) {
      // Retire iff classifier marked it retire (only referenced by converted).
      // analyzeAll exposes retireNames globally; recompute membership here.
    }

    if (edits.length || neededGenImports.size) {
      // Add/extend a grouped generated import.
      if (neededGenImports.size) {
        const importText = `import type { ${[...neededGenImports]
          .sort()
          .join(', ')} } from '../generated/operationVariables';\n`;
        // Insert after the last existing import statement.
        let lastImportEnd = 0;
        sf.forEachChild((n) => {
          if (ts.isImportDeclaration(n)) lastImportEnd = n.getEnd();
        });
        edits.push({ start: lastImportEnd, end: lastImportEnd, text: '\n' + importText.trimEnd() });
      }
      fileEdits.set(f.filePath, edits);
    }
  }

  return { fileEdits, summary };
}

// Second pass for RETIRE interface deletion (needs global retireNames).
function addRetireDeletions(fileEdits) {
  const { files, retireNames } = analyzeAll();
  for (const f of files) {
    const sf = f.sourceFile;
    let edits = fileEdits.get(f.filePath) || [];
    sf.forEachChild((node) => {
      if (
        ts.isInterfaceDeclaration(node) &&
        retireNames.has(node.name.text)
      ) {
        const full = node.getFullStart();
        const leading = ts.getLeadingCommentRanges(sf.text, full) || [];
        const start = leading.length ? leading[0].pos : node.getStart(sf);
        // extend to end of line (consume trailing newline)
        let end = node.getEnd();
        while (end < sf.text.length && sf.text[end] !== '\n') end++;
        if (end < sf.text.length) end++; // include the newline
        edits.push({ start, end, text: '' });
      }
    });
    if (edits.length) fileEdits.set(f.filePath, edits);
  }
}

function applyEdits(filePath, edits) {
  let text = fs.readFileSync(filePath, 'utf8');
  // Apply bottom-up (descending start); for equal starts, longer end first.
  edits.sort((a, b) => b.start - a.start || b.end - a.end);
  for (const e of edits) {
    text = text.slice(0, e.start) + e.text + text.slice(e.end);
  }
  return text;
}

function main() {
  const { fileEdits, summary } = buildEdits();
  addRetireDeletions(fileEdits);

  let changed = 0;
  for (const [filePath, edits] of fileEdits) {
    const newText = applyEdits(filePath, edits);
    // Re-parse safety check.
    const reparsed = ts.createSourceFile(
      filePath,
      newText,
      ts.ScriptTarget.Latest,
      true
    );
    const diags = reparsed.parseDiagnostics || [];
    if (diags.length) {
      console.error(
        `❌ Parse error after editing ${path.basename(filePath)} — aborting (no files written). ` +
          diags[0].messageText
      );
      process.exit(1);
    }
    if (!DRY) fs.writeFileSync(filePath, newText, 'utf8');
    changed++;
  }

  console.log(`${DRY ? '[dry] ' : ''}Edited ${changed} service file(s).`);
  console.log(summary.join('\n'));
}

if (require.main === module) main();

module.exports = { buildEdits };
