#!/usr/bin/env node
/**
 * Codemod: convert src/service/*Service.ts classes into factory functions.
 *
 * Before:
 *   export class ProductService extends BaseService {
 *     async getProduct(vars): Promise<Product> {
 *       const result = await this.executeQuery('product', vars);
 *       return new Product(result.data.product);
 *     }
 *   }
 *
 * After:
 *   import { document as productDoc } from '../generated/operations/product';
 *   import { GraphQLClient } from '../client/GraphQLClient';
 *   import { runOperation } from './runOperation';
 *   import type { Product } from '../type/Product';
 *
 *   export function productService(client: GraphQLClient) {
 *     return {
 *       async getProduct(vars): Promise<Product> {
 *         const result = await runOperation(client, productDoc, 'product', vars);
 *         return result.data.product as Product;
 *       },
 *     };
 *   }
 *
 *   // BC: keep the class form too as a thin wrapper.
 *   export class ProductService {
 *     private readonly _svc;
 *     constructor(client: GraphQLClient) { this._svc = productService(client); }
 *     // method bindings forwarded onto _svc
 *   }
 *
 * BaseService inheritance is removed entirely. The class form is preserved
 * for backwards compatibility — consumers using `new ProductService(client)`
 * keep working unchanged.
 *
 * Usage:
 *   node scripts/codemod-services-to-factories.js --dry
 *   node scripts/codemod-services-to-factories.js --apply
 *   node scripts/codemod-services-to-factories.js --apply --file=PATH
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const SERVICE_DIR = path.join(__dirname, '..', 'src', 'service');
const OPERATIONS_DIR_RELATIVE = '../generated/operations';

// Services with hand-written control flow (typename discrimination, custom
// inline-query strings, etc.) that the codemod can't handle generically.
// These are rewritten manually after the bulk codemod.
const SKIP = new Set([
  'TemplateErrorLogService.ts', // inline GraphQL via client.query (not executeQuery)
  'UserService.ts',             // __typename branching in getViewer/getUser
]);

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
  if (ranges.length === 0) return '';
  const lastRange = ranges[ranges.length - 1];
  if (lastRange.kind !== ts.SyntaxKind.MultiLineCommentTrivia) return '';
  const between = sourceText.slice(lastRange.end, node.getStart());
  if (!/^\s*$/.test(between)) return '';
  return sourceText.slice(lastRange.pos, lastRange.end);
}

/**
 * Walk a method body to find the executeQuery/executeMutation call and the
 * subsequent `return ...` expression. Returns { opName, returnExpr } or null.
 */
function analyzeMethodBody(method, sourceText) {
  if (!method.body) return null;
  let opName = null;
  let opKind = null; // 'query' | 'mutation'
  let returnExprText = null;

  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.expression.kind === ts.SyntaxKind.ThisKeyword
    ) {
      const methodName = node.expression.name.text;
      if (methodName === 'executeQuery' || methodName === 'executeMutation') {
        const firstArg = node.arguments[0];
        if (firstArg && ts.isStringLiteral(firstArg)) {
          opName = firstArg.text;
          opKind = methodName === 'executeQuery' ? 'query' : 'mutation';
        }
      }
    }
    if (ts.isReturnStatement(node) && node.expression) {
      returnExprText = node.expression.getText();
    }
    ts.forEachChild(node, visit);
  }
  visit(method.body);

  if (!opName) return null;
  return { opName, opKind, returnExprText };
}

/**
 * Extract the full text of a method's parameter list and return type.
 */
function extractSignature(method, sourceText) {
  const start = method.name.getEnd();
  const bodyStart = method.body ? method.body.getStart() : method.getEnd();
  return sourceText.slice(start, bodyStart).trim();
}

function rewriteService(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);

  // Find the single top-level class.
  let serviceClass = null;
  for (const stmt of sf.statements) {
    if (
      ts.isClassDeclaration(stmt) &&
      stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      serviceClass = stmt;
      break;
    }
  }
  if (!serviceClass) return null;
  const className = serviceClass.name.text; // e.g. "ProductService"
  if (!className.endsWith('Service')) return null;
  const factoryName = className[0].toLowerCase() + className.slice(1); // "productService"
  const noun = className.slice(0, -'Service'.length); // "Product"

  // Collect everything before the class (imports + helper interfaces/types).
  // We must preserve `export interface XQueryVariables` declarations that
  // live above the class — they're part of the public API.
  const classJsdoc = getLeadingJsdoc(serviceClass, sourceText);
  const preClassEnd = classJsdoc ? sourceText.indexOf(classJsdoc) : serviceClass.getStart();
  const preClassText = sourceText.slice(0, preClassEnd);
  const preClassClean = preClassText;
  const postClassText = sourceText.slice(serviceClass.getEnd());

  // Walk class members.
  const methods = [];
  for (const member of serviceClass.members) {
    if (!ts.isMethodDeclaration(member)) continue;
    if (!ts.isIdentifier(member.name)) continue;
    if (member.name.text === 'constructor') continue;
    const analysis = analyzeMethodBody(member, sourceText);
    if (!analysis) continue;
    const methodJsdoc = getLeadingJsdoc(member, sourceText);
    const sig = extractSignature(member, sourceText);
    const isAsync = member.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword);
    methods.push({
      name: member.name.text,
      jsdoc: methodJsdoc,
      sig,
      isAsync,
      opName: analysis.opName,
      opKind: analysis.opKind,
      returnExprText: analysis.returnExprText,
    });
  }

  if (methods.length === 0) {
    // No GraphQL methods — leave file alone.
    return null;
  }

  // Build the new file.
  // 1. Preserve the original pre-class text MINUS the BaseService import.
  //    This keeps imports, `export interface XQueryVariables` declarations,
  //    re-exported types, and anything else hand-written.
  const existingImports = preClassClean
    .replace(/^\s*import\s+\{\s*BaseService\s*\}\s+from\s+['"]\.\/BaseService['"];?\s*\n?/m, '');

  // Dedupe op-document imports (the same op might be called by multiple
  // methods, e.g. getDocumentTemplate + getEmailTemplate both → 'template').
  const uniqueOps = Array.from(new Set(methods.map((m) => m.opName)));
  const opImports = uniqueOps
    .map((op) => `import { document as ${op}Doc } from '${OPERATIONS_DIR_RELATIVE}/${op}';`)
    .join('\n');

  const alreadyImportsClient = /from\s+['"]\.\.\/client\/GraphQLClient['"]/.test(existingImports);
  const clientImport = alreadyImportsClient
    ? ''
    : `import { GraphQLClient } from '../client/GraphQLClient';`;
  const runOpImport = `import { runOperation } from './runOperation';`;

  // 2. Factory function.
  const factoryBody = methods
    .map((m) => {
      const jsdoc = m.jsdoc ? `    ${m.jsdoc.replace(/\n/g, '\n    ')}\n` : '';
      const asyncKw = m.isAsync ? 'async ' : 'async ';
      // Replace `new SomeType(result.data.X)` patterns with a plain cast where
      // possible. The original return expression takes forms like:
      //   return new Product(result.data.product);
      //   return result.data.foo;
      //   return result.data.foo.map((x: any) => new Bar(x));
      // For v0.10.0 (interfaces, no runtime coercion):
      //   `new T(result.data.x)`        → `result.data.x as T`
      //   `result.data.x.map(...)`      → `result.data.x as T[]`  (Address[] etc.)
      //   `result.data.x`               → `result.data.x`
      let returnText = m.returnExprText || 'undefined';
      // Pattern A: new T(result.data.X)
      const newCtorRe = /^new\s+(\w+)\s*\(\s*result\.data\.([\w.]+)\s*\)\s*;?$/;
      const mA = returnText.match(newCtorRe);
      if (mA) {
        returnText = `result.data.${mA[2]} as ${mA[1]}`;
      } else {
        // Pattern B: result.data.X.map((x: any) => new T(x))
        const mapRe = /^result\.data\.([\w.]+)\.map\(\s*\(?\s*\w+(?::\s*\w+)?\s*\)?\s*=>\s*new\s+(\w+)\s*\([^)]*\)\s*\)\s*;?$/;
        const mB = returnText.match(mapRe);
        if (mB) {
          returnText = `result.data.${mB[1]} as ${mB[2]}[]`;
        }
        // Other patterns left as-is (e.g. result.data.X — already a value).
      }

      return (
        `${jsdoc}    ${asyncKw}${m.name}${m.sig} {\n` +
        `      const result = await runOperation(client, ${m.opName}Doc, '${m.opName}', { ${methodVariableNames(m.sig)} });\n` +
        `      return ${returnText};\n` +
        `    },`
      );
    })
    .join('\n');

  // 3. Class shim for BC.
  const methodForwarders = methods
    .map((m) => {
      // Pull args from the original signature: e.g. `(productId: number)` → `(productId)`.
      const argNames = paramNames(m.sig);
      const typedParams = argNames.map((n) => `${n}: any`).join(', ');
      const argList = argNames.join(', ');
      return `  ${m.name}(${typedParams}) { return this._svc.${m.name}(${argList}); }`;
    })
    .join('\n');

  let out = '';
  out += existingImports;
  if (existingImports && !existingImports.endsWith('\n')) out += '\n';
  out += clientImport + '\n';
  out += runOpImport + '\n';
  out += opImports + '\n';
  if (classJsdoc) out += classJsdoc + '\n';
  out += `export function ${factoryName}(client: GraphQLClient) {\n  return {\n${factoryBody}\n  };\n}\n\n`;
  out += `/**\n * Backwards-compatible class form. New code should call \`${factoryName}(client)\`.\n */\n`;
  out += `export class ${className} {\n`;
  out += `  private readonly _svc: ReturnType<typeof ${factoryName}>;\n`;
  out += `  constructor(client: GraphQLClient) { this._svc = ${factoryName}(client); }\n`;
  out += methodForwarders + '\n';
  out += `}\n`;
  out += postClassText;

  return out;
}

/**
 * Given a method-signature text like `(productId: number, input: Bar)`,
 * return the shorthand property list for the variables object.
 * Output: "productId, input" — used as `{ productId, input }`.
 *
 * Special case: single-arg `variables: SomeType` is spread so we pass the
 * caller's already-shaped variables object straight through. This mirrors the
 * v0.9.x pattern where some methods accept a fully-formed variables bag.
 */
function methodVariableNames(sigText) {
  const params = paramNames(sigText);
  if (params.length === 1 && params[0] === 'variables') {
    return '...variables';
  }
  return params.join(', ');
}

function paramNames(sigText) {
  // sigText starts with "(...)". Crude parse: split on commas at top-level.
  const inside = sigText.replace(/^\(|\)\s*(:[\s\S]*)?$/g, '');
  if (!inside.trim()) return [];
  const params = [];
  let depth = 0;
  let buf = '';
  for (const ch of inside) {
    if (ch === '<' || ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === '>' || ch === ')' || ch === ']' || ch === '}') depth--;
    if (ch === ',' && depth === 0) {
      params.push(buf.trim());
      buf = '';
    } else buf += ch;
  }
  if (buf.trim()) params.push(buf.trim());
  return params.map((p) => p.split(/[:?=]/)[0].trim());
}

function main() {
  let files;
  if (fileArg) {
    files = [fileArg.split('=')[1]];
  } else {
    files = fs
      .readdirSync(SERVICE_DIR)
      .filter(
        (f) =>
          f.endsWith('.ts') &&
          f !== 'BaseService.ts' &&
          f !== 'index.ts' &&
          f !== 'runOperation.ts' &&
          !SKIP.has(f)
      )
      .map((f) => path.join(SERVICE_DIR, f))
      .sort();
  }

  let changed = 0;
  let shown = 0;
  for (const full of files) {
    const result = rewriteService(full);
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
