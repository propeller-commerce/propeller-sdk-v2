#!/usr/bin/env node
'use strict';

/**
 * JSDoc @param alignment codemod (one-shot, spent after its single run —
 * kept here for provenance like the other docs/scripts/history-codemods/*).
 *
 * WHY: The variables-alignment work renamed many service method parameters to
 * a single `variables: <Op>Variables` object, but the hand-authored JSDoc
 * still documents the OLD conceptual names (`@param input ...`, `@param id
 * ...`, `@param categoryId ...`). TypeDoc emits ~350 warnings:
 *   "The signature X.foo has an @param with name "input", which was not used".
 * The docs are also subtly wrong (they name a parameter that doesn't exist).
 *
 * WHAT: For every method whose leading JSDoc has `@param` tags, rewrite the
 * `@param` NAME tokens to match the method's REAL parameter names, positionally,
 * preserving each line's human description verbatim. Methods whose JSDoc
 * already matches the signature are byte-preserved, so correct multi-param
 * methods like `updateAttribute(id, input)` are untouched.
 *
 * SURGICAL & SAFE:
 *  - TypeScript AST locates each MethodDeclaration / function-valued property
 *    and its JSDoc; edits are {start,end,text} spans applied bottom-up so
 *    offsets never shift.
 *  - Only `@param <name>` NAME tokens inside a method's own JSDoc are touched.
 *    Descriptions, @returns, prose, and the signature are byte-preserved.
 *  - If #params !== #(@param tags), or a tag already matches, that tag is
 *    left as-is (conservative — never guesses).
 *  - Each file is re-parsed after editing; a syntax error aborts the run.
 *
 * Run: node docs/scripts/history-codemods/codemod-jsdoc-param-align.js
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const SERVICE_DIR = path.resolve(__dirname, '..', '..', '..', 'src', 'service');

/** Collect (method JSDoc range, real param names) for a source file. */
function collectEdits(srcText, fileName) {
  const sf = ts.createSourceFile(
    fileName,
    srcText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  /** @type {{start:number,end:number,text:string}[]} */
  const edits = [];

  /** Real parameter names of a function-like node, in order. */
  const paramNames = (fn) =>
    (fn.parameters || []).map((p) =>
      ts.isIdentifier(p.name) ? p.name.text : null,
    );

  /**
   * Rewrite a whole JSDoc comment so its @param tags match `realNames`.
   * Whole-comment replacement (one edit span) keeps the logic simple and the
   * three cases explicit:
   *   - tags == params  -> rename each @param name positionally.
   *   - many tags, 1 param -> collapse to ONE @param <realName>, keeping the
   *     first @param line's description (the others were the old multi-arg
   *     shape; the param is now a single object).
   *   - 0 params, >=1 tag -> drop all @param lines (no-arg method).
   * Non-@param lines (summary, @returns, blanks) are byte-preserved.
   */
  function alignJsDoc(jsDoc, realNames) {
    const full = jsDoc.getFullText(sf); // raw comment incl. /** ... */
    const start = jsDoc.getStart(sf);
    const end = start + full.length;
    // CRLF-safe: split keeping the exact line terminator on each line so the
    // reconstructed comment is byte-identical except for the @param edits.
    const rawLines = full.split(/(?<=\n)/); // keep trailing \n (and \r\n)
    const lines = rawLines.map((l) => l.replace(/\r?\n$/, ''));
    const eols = rawLines.map((l) => {
      const m = l.match(/\r?\n$/);
      return m ? m[0] : '';
    });

    const paramRe = /^(\s*\*?\s*)@param\s+([A-Za-z_$][\w$]*)(\s*)(.*)$/;
    const paramIdx = [];
    lines.forEach((ln, i) => {
      if (paramRe.test(ln)) paramIdx.push(i);
    });
    if (paramIdx.length === 0) return;

    const nParams = realNames.length;
    let changed = false;
    const out = []; // [{text, eol}]
    let seenParams = 0;

    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      const eol = eols[i];
      const mm = ln.match(paramRe);
      if (!mm) {
        out.push({text: ln, eol});
        continue;
      }
      const [, indent, oldName, gap, desc] = mm;

      if (nParams === 0) {
        // No-arg method: drop every @param line (and its EOL).
        changed = true;
        continue;
      }

      if (paramIdx.length === nParams) {
        // Positional rename.
        const real = realNames[seenParams];
        seenParams++;
        if (real && real !== oldName) {
          out.push({text: `${indent}@param ${real}${gap || ' '}${desc}`, eol});
          changed = true;
        } else {
          out.push({text: ln, eol});
        }
        continue;
      }

      // Mismatch with a single real param: keep only the FIRST @param,
      // rename it, drop the rest.
      if (nParams === 1) {
        if (seenParams === 0) {
          const real = realNames[0];
          seenParams++;
          if (real !== oldName || paramIdx.length !== 1) {
            out.push({text: `${indent}@param ${real}${gap || ' '}${desc}`, eol});
            changed = true;
          } else {
            out.push({text: ln, eol});
          }
        } else {
          // additional old @param lines -> drop (and its EOL)
          changed = true;
        }
        continue;
      }

      // Any other mismatch (multi-param but tag count differs): too ambiguous
      // to guess — leave the comment untouched entirely.
      return;
    }

    if (!changed) return;
    const rebuilt = out.map((o) => o.text + o.eol).join('');
    edits.push({start, end, text: rebuilt});
  }

  function visit(node) {
    // Factory object methods + BC-class methods + arrow/func props with JSDoc.
    const isFnLike =
      ts.isMethodDeclaration(node) ||
      ts.isFunctionDeclaration(node) ||
      ((ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)) &&
        node.initializer &&
        (ts.isArrowFunction(node.initializer) ||
          ts.isFunctionExpression(node.initializer)));
    if (isFnLike) {
      const fn =
        ts.isMethodDeclaration(node) || ts.isFunctionDeclaration(node)
          ? node
          : node.initializer;
      const jsDocs = ts.getJSDocCommentsAndTags
        ? node.jsDoc || (ts.isPropertyAssignment(node) ? node.jsDoc : undefined)
        : undefined;
      const docs = node.jsDoc || (fn && fn.jsDoc);
      if (docs && docs.length) {
        const realNames = paramNames(fn);
        for (const d of docs) alignJsDoc(d, realNames);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  return edits;
}

function applyEdits(srcText, edits) {
  // Bottom-up so earlier offsets stay valid.
  edits.sort((a, b) => b.start - a.start);
  let out = srcText;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}

function main() {
  const files = fs
    .readdirSync(SERVICE_DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => path.join(SERVICE_DIR, f));

  let changedFiles = 0;
  let changedTags = 0;
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const edits = collectEdits(src, file);
    if (edits.length === 0) continue;
    const next = applyEdits(src, edits);
    // Re-parse guard.
    const reparsed = ts.createSourceFile(
      file,
      next,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    const synErr = reparsed.parseDiagnostics && reparsed.parseDiagnostics.length;
    if (synErr) {
      console.error(
        `[jsdoc-align] ABORT: re-parse error in ${path.basename(file)} — no files written.`,
      );
      process.exit(1);
    }
    fs.writeFileSync(file, next, 'utf8');
    changedFiles++;
    changedTags += edits.length;
    console.log(
      `[jsdoc-align] ${path.basename(file)}: ${edits.length} @param name(s) aligned`,
    );
  }
  console.log(
    `[jsdoc-align] done — ${changedTags} @param token(s) across ${changedFiles} file(s)`,
  );
}

main();
