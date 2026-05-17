#!/usr/bin/env node
'use strict';

/**
 * Drift guard. The generated artifacts
 *   - src/generated/operationVariables.ts
 *   - src/generated/operationVariablesPublic.ts
 *   - src/generated/index.ts
 *   - scripts/.kept-service-variables.json
 *   - every src/generated/operations/*.ts  (the per-op GraphQL documents)
 * are derived deterministically from the `.graphql` sources + the shared
 * classifier over `src/service/*.ts`. If a `.graphql` or a service signature
 * changes without regenerating, the SDK would ship a stale surface.
 *
 * This guard is content-based and commit-state-agnostic: it snapshots the
 * current artifacts, regenerates the bundle, and fails if any artifact's
 * content changed. That catches both "edited a .graphql but didn't rebuild"
 * (committed file now differs) and any non-idempotent generator bug —
 * without false-flagging artifacts that are simply not committed yet.
 *
 * The operations/*.ts set is included because it is exactly the gap that let
 * a stale `productUpdate.ts` ship (it needed a manual catch in commit
 * 89cd5ce; review finding #4). Comparison is EOL-normalized so the
 * .gitattributes LF policy vs. a transient CRLF working copy is not flagged
 * as drift — only real content changes fail the guard.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OPERATIONS_DIR = 'src/generated/operations';

function listOperationFiles() {
  const dir = path.join(ROOT, OPERATIONS_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => `${OPERATIONS_DIR}/${f}`)
    .sort();
}

const ARTIFACTS = [
  'src/generated/operationVariables.ts',
  'src/generated/operationVariablesPublic.ts',
  'src/generated/index.ts',
  'scripts/.kept-service-variables.json',
  ...listOperationFiles(),
];

function readOrNull(p) {
  try {
    // EOL-normalize so the .gitattributes LF policy vs. a transient CRLF
    // working copy is not mistaken for content drift.
    return fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
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

// Catch operation files that regeneration ADDED or REMOVED (a renamed/new/
// deleted .graphql) — those wouldn't be in the pre-snapshot ARTIFACTS list.
const beforeOps = new Set(before.map((b) => b.rel).filter((r) => r.startsWith(OPERATIONS_DIR)));
const afterOps = new Set(listOperationFiles());
for (const rel of afterOps) if (!beforeOps.has(rel)) drifted.push(`${rel} (added by regen)`);
for (const rel of beforeOps) if (!afterOps.has(rel)) drifted.push(`${rel} (removed by regen)`);

if (drifted.length) {
  console.error(
    '❌ Generated variable artifacts are stale. Run `npm run build:graphql` and commit:\n' +
      drifted.map((r) => '   ' + r).join('\n')
  );
  process.exit(1);
}
console.log('✅ Generated variable artifacts in sync (no drift).');
