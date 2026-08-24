#!/usr/bin/env node
/**
 * One-shot script: validate every generated op against schema.json, write the
 * current failures as `tests/integration/schemaAlignment.allowlist.json`.
 *
 * Use this to baseline pre-existing drift so the schema-alignment test can
 * guard against NEW drift while we burn down the existing debt across releases.
 *
 * Run once when first adding the alignment test; update if new operations are
 * intentionally added that have known schema drift (rare).
 */
const fs = require('fs');
const path = require('path');
const {
  buildClientSchema,
  parse,
  validate,
  specifiedRules,
  NoUnusedFragmentsRule,
} = require('graphql');

const REPO_ROOT = path.join(__dirname, '..');
const SCHEMA_PATH = path.join(REPO_ROOT, 'schema.json');
const OPERATIONS_DIR = path.join(REPO_ROOT, 'src', 'generated', 'operations');
const ALLOWLIST_PATH = path.join(REPO_ROOT, 'tests', 'integration', 'schemaAlignment.allowlist.json');

function loadSchema() {
  const raw = fs.readFileSync(SCHEMA_PATH);
  let text;
  if (raw.length >= 2 && raw[0] === 0xff && raw[1] === 0xfe) {
    text = raw.toString('utf16le').replace(/^﻿/, '');
  } else {
    text = raw.toString('utf8').replace(/^﻿/, '');
  }
  const parsed = JSON.parse(text);
  return buildClientSchema(parsed.data ?? parsed);
}

function extractDocument(generatedFileText) {
  const match = generatedFileText.match(/`([\s\S]*)`/);
  if (!match) throw new Error('Could not extract document');
  return match[1]
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$')
    .replace(/\\\\/g, '\\');
}

const VALIDATION_RULES = specifiedRules.filter((r) => r !== NoUnusedFragmentsRule);

function main() {
  const schema = loadSchema();
  const files = fs
    .readdirSync(OPERATIONS_DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  const allowlist = {};
  for (const file of files) {
    const op = path.basename(file, '.ts');
    const src = fs.readFileSync(path.join(OPERATIONS_DIR, file), 'utf8');
    let ast;
    try {
      ast = parse(extractDocument(src));
    } catch (err) {
      allowlist[op] = [`parse error: ${err.message}`];
      continue;
    }
    const errors = validate(schema, ast, VALIDATION_RULES);
    if (errors.length > 0) {
      // Store the FULL error messages so the test can match by substring.
      allowlist[op] = errors.map((e) => e.message);
    }
  }

  fs.mkdirSync(path.dirname(ALLOWLIST_PATH), { recursive: true });
  fs.writeFileSync(ALLOWLIST_PATH, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  const count = Object.keys(allowlist).length;
  console.log(`Wrote ${ALLOWLIST_PATH} with ${count} known-failing operations.`);
}

main();
