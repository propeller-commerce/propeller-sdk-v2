#!/usr/bin/env node
'use strict';

/**
 * Drift guard. The generated variable artifacts
 *   - src/generated/operationVariables.ts
 *   - src/generated/operationVariablesPublic.ts
 *   - src/generated/index.ts
 *   - scripts/.kept-service-variables.json
 * are derived deterministically from the `.graphql` sources + the shared
 * classifier over `src/service/*.ts`. If a `.graphql` or a service signature
 * changes without regenerating, the SDK would ship a stale variables surface.
 *
 * This guard is content-based and commit-state-agnostic: it snapshots the
 * current artifacts, regenerates the bundle, and fails if any artifact's
 * bytes changed. That catches both "edited a .graphql but didn't rebuild"
 * (committed file now differs) and any non-idempotent generator bug —
 * without false-flagging artifacts that are simply not committed yet.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const ARTIFACTS = [
  'src/generated/operationVariables.ts',
  'src/generated/operationVariablesPublic.ts',
  'src/generated/index.ts',
  'scripts/.kept-service-variables.json',
];

function readOrNull(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return null;
  }
}

const before = ARTIFACTS.map((rel) => ({ rel, content: readOrNull(path.join(ROOT, rel)) }));

try {
  execSync('node scripts/build-graphql-bundle.js', { cwd: ROOT, stdio: 'ignore' });
} catch (err) {
  console.error('❌ Drift check: regeneration failed:', err.message);
  process.exit(1);
}

const drifted = [];
for (const { rel, content } of before) {
  const after = readOrNull(path.join(ROOT, rel));
  if (after !== content) drifted.push(rel);
}

if (drifted.length) {
  console.error(
    '❌ Generated variable artifacts are stale. Run `npm run build:graphql` and commit:\n' +
      drifted.map((r) => '   ' + r).join('\n')
  );
  process.exit(1);
}
console.log('✅ Generated variable artifacts in sync (no drift).');
