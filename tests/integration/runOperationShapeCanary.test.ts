/**
 * Service runOperation-shape consistency canary.
 *
 * HONEST SCOPE (second-review finding #3): this is NOT a correctness guard
 * against the GraphQL schema. The three things it compares per method — the
 * `runOperation<{ field: T }>` type-argument, the `result.data.<field>`
 * property read, and the declared `Promise<T>` — are all authored by the
 * same codemod in the same file, so their agreement proves *internal
 * consistency*, not that `T` is what the operation actually returns. It does
 * NOT validate selection sets or schema shapes (the partial-response
 * behaviour where a method returns the named type but the operation selects
 * a subset is expected and documented — see README "Operation variables and
 * return shapes"; it is not something this test should or does flag).
 *
 * What it DOES protect: a future edit or codemod regression that
 * reintroduces an untyped `runOperation(...)` (silently `any` again) or
 * desyncs the type-arg / return-field / declared-return within a method.
 * That regression is real and this catches it cheaply across all ~346
 * methods; the value is the canary, not a schema proof.
 */
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

const SERVICE_DIR = path.join(__dirname, '../../src/service');

interface Call {
  file: string;
  method: string;
  typeArgKey: string | null;
  typeArgValue: string | null;
  returnField: string | null;
  returnCast: string | null;
  declaredReturn: string | null;
}

function unwrapPromise(typeNode: ts.TypeNode | undefined, sf: ts.SourceFile): string | null {
  if (!typeNode) return null;
  if (
    ts.isTypeReferenceNode(typeNode) &&
    ts.isIdentifier(typeNode.typeName) &&
    typeNode.typeName.text === 'Promise' &&
    typeNode.typeArguments?.length === 1
  ) {
    return typeNode.typeArguments[0].getText(sf);
  }
  return typeNode.getText(sf);
}

function collectCalls(): Call[] {
  const calls: Call[] = [];
  for (const file of fs.readdirSync(SERVICE_DIR)) {
    if (!file.endsWith('.ts') || file === 'index.ts' || file === 'runOperation.ts') continue;
    const full = path.join(SERVICE_DIR, file);
    const sf = ts.createSourceFile(full, fs.readFileSync(full, 'utf8'), ts.ScriptTarget.Latest, true);

    // Walk methods (factory object methods are MethodDeclaration on the
    // returned object literal; BC-class methods are MethodDeclaration too).
    const walkMethods = (node: ts.Node) => {
      if (ts.isMethodDeclaration(node) && node.body) {
        const methodName =
          node.name && ts.isIdentifier(node.name) ? node.name.text : '<anon>';
        let call: ts.CallExpression | null = null;
        let returnField: string | null = null;
        let returnCast: string | null = null;

        const inner = (n: ts.Node) => {
          if (
            !call &&
            ts.isCallExpression(n) &&
            ts.isIdentifier(n.expression) &&
            n.expression.text === 'runOperation'
          ) {
            call = n;
          }
          if (returnField === null && ts.isReturnStatement(n) && n.expression) {
            let e: ts.Expression = n.expression;
            if (ts.isAsExpression(e)) {
              returnCast = e.type.getText(sf);
              e = e.expression;
            }
            while (ts.isParenthesizedExpression(e)) e = e.expression;
            if (
              ts.isPropertyAccessExpression(e) &&
              ts.isPropertyAccessExpression(e.expression) &&
              ts.isIdentifier(e.expression.expression) &&
              e.expression.expression.text === 'result' &&
              e.expression.name.text === 'data'
            ) {
              returnField = e.name.text;
            }
          }
          ts.forEachChild(n, inner);
        };
        inner(node.body);

        if (call) {
          const c = call as ts.CallExpression;
          let typeArgKey: string | null = null;
          let typeArgValue: string | null = null;
          if (c.typeArguments?.length === 1) {
            const ta = c.typeArguments[0];
            if (ts.isTypeLiteralNode(ta) && ta.members.length === 1) {
              const m = ta.members[0];
              if (ts.isPropertySignature(m) && m.name && ts.isIdentifier(m.name)) {
                typeArgKey = m.name.text;
                typeArgValue = m.type ? m.type.getText(sf) : null;
              }
            }
          }
          calls.push({
            file,
            method: methodName,
            typeArgKey,
            typeArgValue,
            returnField,
            returnCast,
            declaredReturn: unwrapPromise(node.type, sf),
          });
        }
      }
      ts.forEachChild(node, walkMethods);
    };
    walkMethods(sf);
  }
  return calls;
}

describe('service runOperation-shape consistency canary (internal, not a schema guard)', () => {
  const calls = collectCalls();

  it('discovers the expected number of runOperation methods', () => {
    // Factory + BC-class delegates both contain the method bodies; factory
    // methods carry the runOperation call. Sanity floor.
    expect(calls.length).toBeGreaterThan(300);
  });

  it('every runOperation call carries a single-key object type argument', () => {
    const untyped = calls
      .filter((c) => c.typeArgKey === null)
      .map((c) => `${c.file}:${c.method}`);
    expect(untyped).toEqual([]);
  });

  it('type-argument key matches the returned result.data.<field>', () => {
    const mismatched = calls
      .filter((c) => c.returnField !== null && c.typeArgKey !== c.returnField)
      .map((c) => `${c.file}:${c.method} (typeArg=${c.typeArgKey} return=${c.returnField})`);
    expect(mismatched).toEqual([]);
  });

  it('type-argument value matches the method declared Promise<Return>', () => {
    const mismatched = calls
      .filter(
        (c) =>
          c.declaredReturn !== null &&
          c.typeArgValue !== null &&
          c.typeArgValue !== c.declaredReturn
      )
      .map(
        (c) =>
          `${c.file}:${c.method} (typeArg=${c.typeArgValue} declared=${c.declaredReturn})`
      );
    expect(mismatched).toEqual([]);
  });

  it('where a return cast exists it agrees with the declared return type', () => {
    const mismatched = calls
      .filter(
        (c) =>
          c.returnCast !== null &&
          c.declaredReturn !== null &&
          c.returnCast !== c.declaredReturn
      )
      .map(
        (c) => `${c.file}:${c.method} (cast=${c.returnCast} declared=${c.declaredReturn})`
      );
    expect(mismatched).toEqual([]);
  });
});
