/**
 * Guard for review risk-item "ambiguous re-export sneaks back" (finding #6).
 *
 * `src/index.ts` does `export * from './service'` AND
 * `export * from './generated/operationVariablesPublic'`. If the same
 * `<Op>Variables` name were exported by BOTH barrels, TypeScript silently
 * drops the ambiguous re-export (TS2308) and consumers lose the type with no
 * error. The whole kept-name / public-barrel machinery exists to make that
 * structurally impossible. This test fails the build the moment the invariant
 * is violated, so the machinery can't quietly regress.
 */
import * as fs from 'fs';
import * as path from 'path';

const SRC = path.join(__dirname, '../../src');
const SERVICE_DIR = path.join(SRC, 'service');
const PUBLIC_BARREL = path.join(SRC, 'generated/operationVariablesPublic.ts');
const KEPT_MANIFEST = path.join(__dirname, '../../scripts/.kept-service-variables.json');

function handAuthoredVariableNames(): Set<string> {
  const names = new Set<string>();
  for (const file of fs.readdirSync(SERVICE_DIR)) {
    if (!file.endsWith('.ts') || file === 'index.ts') continue;
    const text = fs.readFileSync(path.join(SERVICE_DIR, file), 'utf8');
    const re = /export\s+interface\s+([A-Za-z0-9_]+Variables)\b/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) names.add(m[1]);
  }
  return names;
}

function publicBarrelNames(): Set<string> {
  const text = fs.readFileSync(PUBLIC_BARREL, 'utf8');
  const names = new Set<string>();
  // `export type {\n  AName,\n  BName,\n} from './operationVariables';`
  const re = /^\s*([A-Za-z0-9_]+Variables),?\s*$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) names.add(m[1]);
  return names;
}

describe('operation-variable export collision guard', () => {
  it('no name is exported by both ./service and ./generated/operationVariablesPublic', () => {
    const hand = handAuthoredVariableNames();
    const generated = publicBarrelNames();
    const overlap = [...generated].filter((n) => hand.has(n));
    expect(overlap).toEqual([]);
  });

  it('the kept manifest exactly equals the hand-authored interface set', () => {
    const hand = [...handAuthoredVariableNames()].sort();
    const manifest: string[] = JSON.parse(fs.readFileSync(KEPT_MANIFEST, 'utf8')).sort();
    // Drift here means build-graphql-bundle.js would reserve the wrong names
    // and a collision could form on the next regenerate.
    expect(manifest).toEqual(hand);
  });

  it('the public barrel is non-empty (sanity: generation actually ran)', () => {
    expect(publicBarrelNames().size).toBeGreaterThan(300);
  });
});
