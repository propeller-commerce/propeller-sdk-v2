#!/usr/bin/env node
'use strict';

/**
 * Regenerate the committed offline schema snapshot
 * (tests/integration/schema.snapshot.json) from a fresh introspection.
 *
 * The schema-alignment test validates all generated GraphQL documents against
 * a schema. The live schema.json is .gitignored and needs credentials, so a
 * committed compact snapshot is the offline/CI fallback. Without a way to
 * refresh it and a staleness signal, that snapshot silently rots — the test
 * keeps passing against a frozen schema while the live API drifts (review
 * finding #5).
 *
 * This script:
 *   1. ensures a fresh live schema.json (runs scripts/fetch-schema.js --force
 *      unless schema.json is already present and --reuse is passed),
 *   2. minifies it to introspection-only JSON,
 *   3. stamps `__generatedAt` (ISO date) so the test can warn when stale.
 *
 * NOT wired into any automated chain — refreshing the snapshot needs live
 * introspection credentials (PROPELLER_ENDPOINT + PROPELLER_API_KEY), so it
 * is a deliberate maintainer step run via `npm run snapshot:schema` (or
 * `node scripts/build-schema-snapshot.js`). `prepublishOnly` runs
 * `npm run validate` (typecheck + check:drift + build) and does NOT rebuild
 * the snapshot. Staleness is surfaced instead by the schema-alignment test,
 * which WARNS (it does not fail) when the committed snapshot is >60 days old
 * — so a months-old snapshot is visible, not silently shipped.
 *
 * Usage:
 *   node scripts/build-schema-snapshot.js          # fetch fresh, rebuild
 *   node scripts/build-schema-snapshot.js --reuse  # reuse existing schema.json
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const LIVE = path.join(ROOT, 'schema.json');
const SNAPSHOT = path.join(ROOT, 'tests/integration/schema.snapshot.json');
const REUSE = process.argv.includes('--reuse');

function readIntrospection(file) {
  const raw = fs.readFileSync(file);
  const text =
    raw.length >= 2 && raw[0] === 0xff && raw[1] === 0xfe
      ? raw.toString('utf16le').replace(/^﻿/, '')
      : raw.toString('utf8').replace(/^﻿/, '');
  const parsed = JSON.parse(text);
  const root = parsed.data ?? parsed;
  if (!root.__schema) throw new Error(`${file} has no __schema payload.`);
  return root.__schema;
}

function main() {
  if (!REUSE || !fs.existsSync(LIVE)) {
    console.log('Fetching fresh schema.json …');
    try {
      execSync('node scripts/fetch-schema.js --force', { cwd: ROOT, stdio: 'inherit' });
    } catch (err) {
      if (fs.existsSync(LIVE)) {
        console.warn('⚠️  fetch-schema failed; falling back to existing schema.json.');
      } else {
        console.error(
          '❌ Cannot build snapshot: schema fetch failed and no schema.json present ' +
            '(needs PROPELLER_ENDPOINT + PROPELLER_API_KEY). Pass --reuse if you have a schema.json.'
        );
        process.exit(1);
      }
    }
  }

  const introspection = readIntrospection(LIVE);
  // Compact (no whitespace), introspection-only, with a generation stamp the
  // schema-alignment test reads to warn on staleness. buildClientSchema only
  // reads `__schema`, so the extra sibling key is inert.
  const out = JSON.stringify({
    __generatedAt: new Date().toISOString().slice(0, 10),
    __schema: introspection,
  });
  fs.writeFileSync(SNAPSHOT, out, 'utf8');
  const mb = (fs.statSync(SNAPSHOT).size / 1024 / 1024).toFixed(2);
  console.log(`✅ Wrote ${path.relative(ROOT, SNAPSHOT)} (${mb} MB, stamped ${JSON.parse(out).__generatedAt}).`);
}

main();
