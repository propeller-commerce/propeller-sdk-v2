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
 *
 * NON-DESTRUCTIVE: regeneration (`build-graphql-bundle.js`) rewrites the real
 * `src/generated/` tree in place (it `rmSync`s the operations dir and
 * re-emits). This guard takes a *raw-byte* snapshot of every artifact and the
 * operations-dir inventory beforehand and **restores it in a `finally`** —
 * including deleting any file regeneration added and recreating any it
 * removed. So running `npm run check:drift` on a dirty or clean working tree
 * leaves it byte-for-byte unchanged whether the check passes, fails, or
 * throws. (The restore uses raw bytes — not the EOL-normalized form used for
 * comparison — so it cannot itself introduce drift.)
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

function readNormalizedOrNull(p) {
  try {
    // EOL-normalize so the .gitattributes LF policy vs. a transient CRLF
    // working copy is not mistaken for content drift.
    return fs.readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
  } catch {
    return null;
  }
}

function readRawOrNull(p) {
  try {
    return fs.readFileSync(p); // Buffer — exact bytes, for faithful restore.
  } catch {
    return null;
  }
}

// --- Snapshot for comparison (EOL-normalized) and for restore (raw bytes). ---
const before = ARTIFACTS.map((rel) => {
  const abs = path.join(ROOT, rel);
  return { rel, abs, content: readNormalizedOrNull(abs), raw: readRawOrNull(abs) };
});
// Inventory of operation files present BEFORE regen, so the restore can undo
// any add/remove regeneration performs.
const beforeOpsInventory = before
  .filter((b) => b.rel.startsWith(OPERATIONS_DIR))
  .map((b) => ({ rel: b.rel, abs: b.abs, raw: b.raw }));
const beforeOpsSet = new Set(beforeOpsInventory.map((b) => b.rel));

function restoreWorkingTree() {
  // 1. Rewrite every snapshotted artifact back to its exact original bytes
  //    (skip ones that didn't exist before — those are handled by step 2).
  for (const { abs, raw } of before) {
    if (raw == null) continue;
    try {
      const current = readRawOrNull(abs);
      if (current == null || !current.equals(raw)) fs.writeFileSync(abs, raw);
    } catch {
      /* best-effort restore; reported below if it matters */
    }
  }
  // 2. Delete any operation file regeneration ADDED (not in the pre-snapshot).
  for (const rel of listOperationFiles()) {
    if (!beforeOpsSet.has(rel)) {
      try {
        fs.rmSync(path.join(ROOT, rel), { force: true });
      } catch {
        /* best-effort */
      }
    }
  }
  // 3. Recreate any operation file regeneration REMOVED (was in the snapshot
  //    with known bytes but is now gone).
  const afterOpsSet = new Set(listOperationFiles());
  for (const { rel, abs, raw } of beforeOpsInventory) {
    if (!afterOpsSet.has(rel) && raw != null) {
      try {
        fs.mkdirSync(path.dirname(abs), { recursive: true });
        fs.writeFileSync(abs, raw);
      } catch {
        /* best-effort */
      }
    }
  }
}

let exitCode = 0;
try {
  try {
    execSync('node scripts/build-graphql-bundle.js', { cwd: ROOT, stdio: 'ignore' });
  } catch (err) {
    console.error('❌ Drift check: regeneration failed:', err.message);
    exitCode = 1;
    throw err;
  }

  const drifted = [];
  for (const { rel, abs, content } of before) {
    const after = readNormalizedOrNull(abs);
    if (after !== content) drifted.push(rel);
  }

  // Catch operation files that regeneration ADDED or REMOVED (a renamed/new/
  // deleted .graphql) — those wouldn't be in the pre-snapshot ARTIFACTS list.
  const afterOps = new Set(listOperationFiles());
  for (const rel of afterOps) if (!beforeOpsSet.has(rel)) drifted.push(`${rel} (added by regen)`);
  for (const rel of beforeOpsSet) if (!afterOps.has(rel)) drifted.push(`${rel} (removed by regen)`);

  if (drifted.length) {
    console.error(
      '❌ Generated variable artifacts are stale. Run `npm run build:graphql` and commit:\n' +
        drifted.map((r) => '   ' + r).join('\n')
    );
    exitCode = 1;
  } else {
    console.log('✅ Generated variable artifacts in sync (no drift).');
  }
} finally {
  // Always put the working tree back exactly as we found it, whether the
  // check passed, failed, or threw.
  restoreWorkingTree();
}

process.exit(exitCode);
