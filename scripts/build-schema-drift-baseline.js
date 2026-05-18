#!/usr/bin/env node
'use strict';

/**
 * One-shot baseline seeder for the schema-type drift guard (Phase 3).
 *
 * Mirrors scripts/build-schema-allowlist.js: runs the comparison with an
 * EMPTY manifest, buckets every current divergence into
 * scripts/.schema-drift-exceptions.json, so the guard is green on the
 * introducing commit and thereafter fails only on NEW drift. The committed
 * manifest is the honest debt ledger — it should shrink over releases as the
 * hand-authored types are brought back in line with the schema.
 *
 * Run once when introducing the guard; rerun (and review the git diff) after a
 * deliberate schema refresh that legitimately changes the deviation set.
 *
 *   node scripts/build-schema-drift-baseline.js
 *
 * The guard itself (check:type-drift) is the consumer of this file; this
 * script only WRITES it. Findings are bucketed:
 *   - ExtraMember / MissingMember / DeprecatedMemberDeclared → exemptFields
 *     (per Type.field) — narrowest, most reviewable granularity.
 *   - NullabilityFlip → knownNullabilityFlips (Type → [field, …]).
 *   - DeprecatedFieldSelected → allowedDeprecatedSelections (op → [Type.field]).
 *   - KindMismatch / MissingFile / BarrelMissing → reported, NOT auto-excepted
 *     (these are structural and must be looked at by a human, not silently
 *     baselined).
 */

const fs = require('fs');
const path = require('path');

// Re-run the guard's comparison by requiring its internals. To collect the
// raw findings (rather than the pass/fail exit code) we shell the guard with
// an env flag that makes it print findings as JSON.
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'scripts', '.schema-drift-exceptions.json');
const GUARD = path.join(ROOT, 'scripts', 'check-schema-type-drift.js');

function collectFindings() {
  const out = execFileSync('node', [GUARD], {
    cwd: ROOT,
    env: { ...process.env, SCHEMA_DRIFT_EMIT_JSON: '1', SCHEMA_DRIFT_NO_MANIFEST: '1' },
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  const start = out.indexOf('___FINDINGS_JSON___');
  if (start === -1) throw new Error('guard did not emit findings JSON');
  return JSON.parse(out.slice(start + '___FINDINGS_JSON___'.length).trim());
}

function main() {
  const findings = collectFindings();

  const manifest = {
    $comment:
      'Reviewed deliberate deviations + baselined pre-existing drift between ' +
      'the hand-authored src/type|enum and the upstream GraphQL schema. The ' +
      'guard (npm run check:type-drift) FAILS on any divergence NOT listed ' +
      'here, so this is a debt ledger: it should SHRINK over releases as types ' +
      'are brought back in line. Reseed after a deliberate schema refresh with ' +
      '`node scripts/build-schema-drift-baseline.js` and review the git diff. ' +
      'Deprecated schema members are already excluded from the projection — ' +
      'an absent deprecated member is correct and never appears here.',
    exemptTypes: {
      AnyAddress:
        'SDK-only convenience union of the five address shapes; no schema ' +
        'counterpart. Hand-authored on purpose (see src/type/AnyAddress.ts).',
    },
    exemptFields: {},
    knownNullabilityFlips: {},
    allowedDeprecatedSelections: {},
    exemptSchemaOnlyTypes: 'default-skip-all',
  };

  const structural = [];

  for (const f of findings) {
    if (f.kind === 'ExtraMember' || f.kind === 'MissingMember' || f.kind === 'DeprecatedMemberDeclared') {
      (manifest.exemptFields[f.type] ||= {});
      const reason =
        f.kind === 'ExtraMember'
          ? 'baselined: SDK declares a member not in the live schema'
          : f.kind === 'DeprecatedMemberDeclared'
            ? 'baselined: SDK still declares a member the schema marks @deprecated'
            : 'baselined: schema declares a member the SDK type is missing';
      manifest.exemptFields[f.type][f.detail] = reason;
    } else if (f.kind === 'NullabilityFlip') {
      const field = String(f.detail).split(' ')[0];
      (manifest.knownNullabilityFlips[f.type] ||= []);
      if (!manifest.knownNullabilityFlips[f.type].includes(field)) {
        manifest.knownNullabilityFlips[f.type].push(field);
      }
    } else if (f.kind === 'DeprecatedFieldSelected') {
      (manifest.allowedDeprecatedSelections[f.type] ||= []);
      if (!manifest.allowedDeprecatedSelections[f.type].includes(f.detail)) {
        manifest.allowedDeprecatedSelections[f.type].push(f.detail);
      }
    } else {
      structural.push(f); // KindMismatch / MissingFile / BarrelMissing
    }
  }

  // Stable ordering for legible git diffs.
  const sortObj = (o) =>
    Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
  manifest.exemptFields = sortObj(manifest.exemptFields);
  for (const k of Object.keys(manifest.exemptFields)) {
    manifest.exemptFields[k] = sortObj(manifest.exemptFields[k]);
  }
  manifest.knownNullabilityFlips = sortObj(manifest.knownNullabilityFlips);
  for (const k of Object.keys(manifest.knownNullabilityFlips)) {
    manifest.knownNullabilityFlips[k].sort();
  }
  manifest.allowedDeprecatedSelections = sortObj(manifest.allowedDeprecatedSelections);
  for (const k of Object.keys(manifest.allowedDeprecatedSelections)) {
    manifest.allowedDeprecatedSelections[k].sort();
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  const counts = findings.reduce((m, f) => ((m[f.kind] = (m[f.kind] || 0) + 1), m), {});
  // eslint-disable-next-line no-console
  console.log(
    `Wrote ${path.relative(ROOT, MANIFEST_PATH)} baselining ${findings.length} ` +
      `divergence(s): ${JSON.stringify(counts)}.`
  );
  if (structural.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `\n⚠️  ${structural.length} STRUCTURAL finding(s) were NOT auto-baselined ` +
        `(KindMismatch/MissingFile/BarrelMissing need a human decision):`
    );
    for (const s of structural.slice(0, 30)) {
      // eslint-disable-next-line no-console
      console.warn(`   ${s.kind}: ${s.type} → ${s.detail}`);
    }
    if (structural.length > 30) console.warn(`   … and ${structural.length - 30} more`);
  }
}

main();
