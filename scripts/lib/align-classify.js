'use strict';

/**
 * Shared classifier for service-method ↔ GraphQL-operation variable alignment.
 *
 * Live consumer: scripts/build-graphql-bundle.js — to know which generated
 * `<Op>Variables` names to suppress because a service hand-authors a KEPT
 * interface of the same name.
 *
 * It was ALSO written for the one-shot alignment/typing codemods (now spent
 * and relocated to docs/history/ — they are not part of any build). Their
 * output is committed; only the generator still calls this at build time.
 *
 * It is read-only: it parses sources and returns a structured report. It
 * never writes files.
 *
 * Classification per factory method that calls `runOperation`:
 *   FROZEN   — hard allowlist (ClusterService.getClusterConfig). Never touched.
 *   ZERO_VAR — operation declares no variables. Method must take no argument.
 *   SCALAR   — convenience: the method's params map 1:1 onto the operation's
 *              declared variables (by name) and are passed positionally /
 *              shorthand; not a single `*Variables` interface. Kept as-is.
 *   KEEP     — already takes a single `variables` object that satisfies the
 *              operation's required vars (R ⊆ provided ⊆ V). Kept as-is.
 *   MISALIGNED — anything else: a required operation variable cannot be sent
 *              through the current signature. Converted.
 *
 * For each hand-authored `export interface <Name>Variables` in a service file
 * the classifier also reports whether it is KEEP (still referenced by a
 * KEEP/SCALAR method after conversion) or RETIRE (only referenced by methods
 * being converted away from it) so the generator can reserve exactly the KEEP
 * names and the codemod can delete exactly the RETIRE declarations.
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { parse, Kind } = require('graphql');

const SRC_DIR = path.join(__dirname, '../../src');
const SERVICE_DIR = path.join(SRC_DIR, 'service');
const GRAPHQL_DIR = path.join(SRC_DIR, 'graphql');

// Methods that must NEVER be modified, keyed by `<File>.<method>`. Memory:
// ClusterService.getClusterConfig signature/body is intentionally frozen.
const FROZEN = new Set(['ClusterService.getClusterConfig']);

function pascal(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// op name -> Set of { name, required } from the .graphql variable definitions.
function loadOperationVars() {
  const byOp = new Map();
  for (const sub of ['query', 'mutation']) {
    const dir = path.join(GRAPHQL_DIR, sub);
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      if (!entry.endsWith('.graphql')) continue;
      const src = fs.readFileSync(path.join(dir, entry), 'utf8');
      let doc;
      try {
        doc = parse(src);
      } catch {
        continue;
      }
      const op = doc.definitions.find((d) => d.kind === Kind.OPERATION_DEFINITION);
      if (!op || !op.name) continue;
      const vars = (op.variableDefinitions || []).map((v) => ({
        name: v.variable.name.value,
        required: v.type.kind === 'NonNullType',
      }));
      byOp.set(op.name.value, vars);
    }
  }
  return byOp;
}

function getJsDocAndStart(node, sourceFile) {
  // Include leading JSDoc/comment trivia so the codemod can replace or delete
  // the whole logical unit (declaration + its doc comment).
  const full = node.getFullStart();
  const start = node.getStart(sourceFile);
  const leading = ts.getLeadingCommentRanges(sourceFile.text, full) || [];
  if (leading.length) return leading[0].pos;
  return start;
}

function findFactoryReturnObject(sourceFile) {
  // The factory is `export function xxxService(client) { return { ...methods }; }`
  let objLiteral = null;
  let factoryName = null;
  sourceFile.forEachChild(function visit(node) {
    if (
      ts.isFunctionDeclaration(node) &&
      node.name &&
      /Service$/.test(node.name.text) &&
      node.body
    ) {
      for (const stmt of node.body.statements) {
        if (
          ts.isReturnStatement(stmt) &&
          stmt.expression &&
          ts.isObjectLiteralExpression(stmt.expression)
        ) {
          objLiteral = stmt.expression;
          factoryName = node.name.text;
        }
      }
    }
  });
  return { objLiteral, factoryName };
}

function findBcClass(sourceFile) {
  let cls = null;
  sourceFile.forEachChild((node) => {
    if (ts.isClassDeclaration(node) && node.name && /Service$/.test(node.name.text)) {
      cls = node;
    }
  });
  return cls;
}

// Extract `runOperation(client, <docId>, '<opName>', <argExpr?>)` from a method body.
function extractRunOperation(methodNode) {
  let found = null;
  function walk(n) {
    if (found) return;
    if (
      ts.isCallExpression(n) &&
      ts.isIdentifier(n.expression) &&
      n.expression.text === 'runOperation'
    ) {
      const args = n.arguments;
      const opArg = args[2];
      const opName =
        opArg && ts.isStringLiteral(opArg) ? opArg.text : null;
      found = {
        opName,
        varsArg: args[3] || null,
        callNode: n,
      };
      return;
    }
    n.forEachChild(walk);
  }
  if (methodNode.body) methodNode.body.forEachChild(walk);
  return found;
}

// Describe the parameters of a method node.
function describeParams(methodNode) {
  return methodNode.parameters.map((p) => ({
    name: p.name.getText(),
    typeText: p.type ? p.type.getText() : null,
    optional: !!p.questionToken,
  }));
}

// What does the vars argument expression look like?
//  - 'identifier:NAME'                  → passes a single identifier (e.g. `variables`)
//  - 'spread-lang:NAME'                 → `{ ...NAME, language: ... }`
//  - 'object:[k1,k2]'                   → object literal with shorthand/explicit props
//  - 'none'                             → no 4th arg
//  - 'other'                            → anything else
function describeVarsArg(varsArg) {
  if (!varsArg) return { kind: 'none' };
  if (ts.isIdentifier(varsArg)) return { kind: 'identifier', name: varsArg.text };
  if (ts.isObjectLiteralExpression(varsArg)) {
    const spreads = varsArg.properties.filter((p) => ts.isSpreadAssignment(p));
    const keys = varsArg.properties
      .filter((p) => p.name && ts.isIdentifier(p.name))
      .map((p) => p.name.text);
    if (spreads.length === 1 && ts.isIdentifier(spreads[0].expression)) {
      return {
        kind: 'spread-lang',
        name: spreads[0].expression.text,
        keys,
      };
    }
    return { kind: 'object', keys };
  }
  return { kind: 'other' };
}

function interfaceFieldSet(sourceFile, ifaceName) {
  let result = null;
  sourceFile.forEachChild((node) => {
    if (
      ts.isInterfaceDeclaration(node) &&
      node.name.text === ifaceName
    ) {
      result = node.members
        .filter((m) => ts.isPropertySignature(m) && m.name && ts.isIdentifier(m.name))
        .map((m) => ({ name: m.name.text, optional: !!m.questionToken }));
    }
  });
  return result;
}

/**
 * Classify one method.
 * Returns { class: 'FROZEN'|'ZERO_VAR'|'SCALAR'|'KEEP'|'MISALIGNED', ... }
 */
function classifyMethod(ctx, methodName) {
  const { fileBase, sourceFile, opVars } = ctx;
  const key = `${fileBase}.${methodName}`;
  if (FROZEN.has(key)) return { class: 'FROZEN', reason: 'hard allowlist' };

  const method = ctx.methodsByName.get(methodName);
  const ro = extractRunOperation(method);
  if (!ro || !ro.opName) {
    // Not a plain single-runOperation passthrough → never touch it.
    return { class: 'KEEP', reason: 'no resolvable single runOperation call' };
  }
  const vars = opVars.get(ro.opName);
  if (!vars) return { class: 'KEEP', reason: `op ${ro.opName} not found in .graphql` };

  const V = new Set(vars.map((v) => v.name));
  const R = new Set(vars.filter((v) => v.required).map((v) => v.name));
  // Strip a trailing optional `fetchOptions?: GraphQLFetchOptions` parameter
  // before classifying. It's an SDK transport hint (per-call cache/next
  // forwarding to fetch()), not part of the operation contract, so it must
  // not push an otherwise-aligned method into MISALIGNED. See SDK 0.11.0
  // release notes for the contract.
  const rawParams = describeParams(method);
  const params =
    rawParams.length > 0 &&
    rawParams[rawParams.length - 1].name === 'fetchOptions' &&
    rawParams[rawParams.length - 1].typeText === 'GraphQLFetchOptions' &&
    rawParams[rawParams.length - 1].optional
      ? rawParams.slice(0, -1)
      : rawParams;
  const argShape = describeVarsArg(ro.varsArg);
  const genName = pascal(ro.opName) + 'Variables';

  // ZERO_VAR: operation declares no variables.
  if (V.size === 0) {
    if (params.length === 0 && argShape.kind === 'none')
      return { class: 'ZERO_VAR', op: ro.opName, already: true };
    return { class: 'ZERO_VAR', op: ro.opName, already: false, genName };
  }

  // KEEP (already aligned): single param typed as some *Variables interface,
  // passed straight through (`variables` or `{ ...variables, language }`),
  // and that interface satisfies every REQUIRED op var (R ⊆ provided) and
  // declares nothing outside V (provided ⊆ V).
  if (
    params.length === 1 &&
    params[0].typeText &&
    /Variables$/.test(params[0].typeText) &&
    (argShape.kind === 'identifier' || argShape.kind === 'spread-lang') &&
    argShape.name === params[0].name
  ) {
    const ifaceName = params[0].typeText.replace(/\[\]$/, '');
    const fields = interfaceFieldSet(sourceFile, ifaceName);
    if (fields) {
      const provided = new Set(fields.map((f) => f.name));
      const requiredCovered = [...R].every((r) => provided.has(r));
      const noExtraneous = [...provided].every((p) => V.has(p));
      if (requiredCovered && noExtraneous) {
        return {
          class: 'KEEP',
          op: ro.opName,
          iface: ifaceName,
          handAuthored: fields !== null,
          reason: 'aligned single-variables object',
        };
      }
    }
    // Single *Variables param but it does NOT cover required vars / has
    // extraneous fields → it's a misaligned hand-authored interface.
    return {
      class: 'MISALIGNED',
      op: ro.opName,
      genName,
      fromIface: ifaceName,
      reason: 'hand-authored interface does not match operation vars',
    };
  }

  // SCALAR convenience: params map 1:1 onto V by name (every param name is a
  // declared var, and every REQUIRED var is supplied by a param), passed
  // positionally / as a shorthand object — and NOT via a *Variables interface.
  const paramNames = new Set(params.map((p) => p.name));
  const everyParamIsVar =
    params.length > 0 && params.every((p) => V.has(p.name));
  const everyRequiredSupplied = [...R].every((r) => paramNames.has(r));
  const notVariablesIface =
    params.length === 0 ||
    !params.some((p) => p.typeText && /Variables$/.test(p.typeText));
  if (everyParamIsVar && everyRequiredSupplied && notVariablesIface) {
    return {
      class: 'SCALAR',
      op: ro.opName,
      reason: 'scalar/positional 1:1 convenience',
    };
  }

  return {
    class: 'MISALIGNED',
    op: ro.opName,
    genName,
    reason: 'params cannot express all required operation variables',
  };
}

function analyzeServiceFile(filePath, opVars) {
  const text = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(
    filePath,
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const fileBase = path.basename(filePath, '.ts');
  const { objLiteral } = findFactoryReturnObject(sourceFile);
  const bcClass = findBcClass(sourceFile);
  const methodsByName = new Map();
  if (objLiteral) {
    for (const prop of objLiteral.properties) {
      if (
        (ts.isMethodDeclaration(prop) || ts.isPropertyAssignment(prop)) &&
        prop.name &&
        ts.isIdentifier(prop.name)
      ) {
        if (ts.isMethodDeclaration(prop)) methodsByName.set(prop.name.text, prop);
      }
    }
  }
  const ctx = { fileBase, sourceFile, opVars, methodsByName };
  const methods = [];
  for (const name of methodsByName.keys()) {
    methods.push({ name, ...classifyMethod(ctx, name) });
  }

  // Hand-authored *Variables interfaces in this file.
  const handIfaces = [];
  sourceFile.forEachChild((node) => {
    if (
      ts.isInterfaceDeclaration(node) &&
      /Variables$/.test(node.name.text)
    ) {
      handIfaces.push(node.name.text);
    }
  });

  return {
    fileBase,
    filePath,
    sourceFile,
    objLiteral,
    bcClass,
    methodsByName,
    methods,
    handIfaces,
  };
}

/**
 * Whole-repo analysis. Returns:
 *   files:        per-file analysis (incl. ts SourceFile + node handles)
 *   methods:      flat list of { file, name, class, op, ... }
 *   keptNames:    Set of hand-authored *Variables names still referenced by a
 *                 KEEP/SCALAR method (generator must reserve these).
 *   retireNames:  Set of hand-authored *Variables names only referenced by
 *                 MISALIGNED methods being converted (codemod deletes these).
 */
function analyzeAll() {
  const opVars = loadOperationVars();
  const files = [];
  for (const entry of fs.readdirSync(SERVICE_DIR)) {
    if (!entry.endsWith('.ts') || entry === 'index.ts' || entry === 'runOperation.ts')
      continue;
    files.push(analyzeServiceFile(path.join(SERVICE_DIR, entry), opVars));
  }

  const allMethods = [];
  for (const f of files)
    for (const m of f.methods) allMethods.push({ file: f.fileBase, ...m });

  // Determine which hand-authored interfaces survive.
  const keptNames = new Set();
  const retireNames = new Set();
  for (const f of files) {
    for (const ifaceName of f.handIfaces) {
      // Referenced by any KEEP/SCALAR/FROZEN method in this file?
      const referencedByKept = f.methods.some((m) => {
        if (!['KEEP', 'SCALAR', 'FROZEN', 'ZERO_VAR'].includes(m.class)) return false;
        const method = f.methodsByName.get(m.name);
        return (
          method &&
          method.parameters.some(
            (p) => p.type && p.type.getText().replace(/\[\]$/, '') === ifaceName
          )
        );
      });
      if (referencedByKept) keptNames.add(ifaceName);
      else retireNames.add(ifaceName);
    }
  }

  return { opVars, files, allMethods, keptNames, retireNames };
}

module.exports = {
  FROZEN,
  pascal,
  loadOperationVars,
  analyzeServiceFile,
  analyzeAll,
  getJsDocAndStart,
  extractRunOperation,
  describeParams,
  describeVarsArg,
};
