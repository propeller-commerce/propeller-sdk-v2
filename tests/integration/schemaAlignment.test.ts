/**
 * Schema alignment test.
 *
 * Validates each generated per-op GraphQL document (under src/generated/operations/)
 * against the upstream schema at schema.json. Generated documents already have
 * fragments inlined by scripts/build-graphql-bundle.js, so each can be validated
 * as a self-contained document.
 *
 * schema.json is .gitignored; run `node scripts/fetch-schema.js` to fetch it.
 * The test setup tries to fetch on demand if missing and the env vars
 * PROPELLER_ENDPOINT + PROPELLER_API_KEY are present.
 */
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import {
  buildClientSchema,
  parse,
  validate,
  GraphQLSchema,
  IntrospectionQuery,
  specifiedRules,
  NoUnusedFragmentsRule,
} from 'graphql';

const REPO_ROOT = path.join(__dirname, '..', '..');
const SCHEMA_PATH = path.join(REPO_ROOT, 'schema.json');
const OPERATIONS_DIR = path.join(REPO_ROOT, 'src', 'generated', 'operations');
const ALLOWLIST_PATH = path.join(__dirname, 'schemaAlignment.allowlist.json');

// Allowlist: pre-existing schema-drift bugs in the SDK (177 ops as of v0.10.0).
// The test guards against NEW drift; the allowlist must shrink over time and is
// audited each release. Format: { "opName": ["error substring", ...] }
// Each error in the actual failures must match at least one allowed substring
// for that op, or the test fails.
function loadAllowlist(): Record<string, string[]> {
  if (!fs.existsSync(ALLOWLIST_PATH)) return {};
  return JSON.parse(fs.readFileSync(ALLOWLIST_PATH, 'utf8'));
}

function ensureSchema(): void {
  if (fs.existsSync(SCHEMA_PATH)) return;
  try {
    execSync('node scripts/fetch-schema.js', { cwd: REPO_ROOT, stdio: 'inherit' });
  } catch {
    // Caller will see a clearer error from loadSchema.
  }
}

function loadSchema(): GraphQLSchema {
  ensureSchema();
  if (!fs.existsSync(SCHEMA_PATH)) {
    throw new Error(
      `schema.json missing at ${SCHEMA_PATH}. Run \`node scripts/fetch-schema.js\` (needs PROPELLER_ENDPOINT + PROPELLER_API_KEY).`
    );
  }
  const raw = fs.readFileSync(SCHEMA_PATH);
  // schema.json may be UTF-16 LE with BOM (legacy `gq` output) or plain UTF-8
  // (fetch-schema.js output). Detect via BOM bytes.
  let text: string;
  if (raw.length >= 2 && raw[0] === 0xff && raw[1] === 0xfe) {
    text = raw.toString('utf16le').replace(/^﻿/, '');
  } else {
    text = raw.toString('utf8').replace(/^﻿/, '');
  }
  const parsed = JSON.parse(text);
  const introspection: IntrospectionQuery = parsed.data ?? parsed;
  return buildClientSchema(introspection);
}

// Drop NoUnusedFragments — inlined documents include their fragments but the
// operation may not reference every one (some are nested-into-nested).
const VALIDATION_RULES = specifiedRules.filter((r) => r !== NoUnusedFragmentsRule);

function extractDocument(generatedFileText: string): string {
  // Generated file shape: `export const document = \`<query string>\`;`
  const match = generatedFileText.match(/`([\s\S]*)`/);
  if (!match) throw new Error('Could not extract document from generated module.');
  // Unescape the template-literal escapes applied by build-graphql-bundle.js.
  return match[1]
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$')
    .replace(/\\\\/g, '\\');
}

describe('Schema alignment', () => {
  let schema: GraphQLSchema;

  beforeAll(() => {
    schema = loadSchema();
  });

  it('schema.json exists and is parseable', () => {
    expect(schema).toBeDefined();
  });

  it('every generated operation validates against the upstream schema', () => {
    if (!fs.existsSync(OPERATIONS_DIR)) {
      throw new Error(
        `Operations dir missing at ${OPERATIONS_DIR}. Run \`node scripts/build-graphql-bundle.js\` first.`
      );
    }
    const files = fs
      .readdirSync(OPERATIONS_DIR)
      .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
      .map((f) => path.join(OPERATIONS_DIR, f));

    expect(files.length).toBeGreaterThan(400); // sanity: ~459 ops

    const failures: { file: string; errors: string[] }[] = [];

    for (const file of files) {
      const generated = fs.readFileSync(file, 'utf8');
      let docString: string;
      try {
        docString = extractDocument(generated);
      } catch (err: any) {
        failures.push({ file, errors: [err.message] });
        continue;
      }
      let ast;
      try {
        ast = parse(docString);
      } catch (err: any) {
        failures.push({ file, errors: [`parse error: ${err.message}`] });
        continue;
      }
      const errors = validate(schema, ast, VALIDATION_RULES);
      if (errors.length > 0) {
        failures.push({
          file,
          errors: errors.map((e) => e.message),
        });
      }
    }

    // Apply the allowlist: drop failures whose errors all match an allowed
    // substring for that op. Anything left is NEW drift that breaks the build.
    const allowlist = loadAllowlist();
    const newFailures = failures.filter((f) => {
      const op = path.basename(f.file, '.ts');
      const allowed = allowlist[op];
      if (!allowed) return true;
      return !f.errors.every((err) => allowed.some((sub) => err.includes(sub)));
    });

    if (newFailures.length > 0) {
      // Group by error message for a compact summary.
      const buckets = new Map<string, string[]>();
      for (const f of newFailures) {
        for (const err of f.errors) {
          if (!buckets.has(err)) buckets.set(err, []);
          buckets.get(err)!.push(path.basename(f.file, '.ts'));
        }
      }
      const summary = Array.from(buckets.entries())
        .sort((a, b) => b[1].length - a[1].length)
        .map(
          ([err, ops]) =>
            `\n  [${ops.length}] ${err}\n    e.g. ${ops.slice(0, 3).join(', ')}${ops.length > 3 ? ' …' : ''}`
        )
        .join('');
      throw new Error(
        `${newFailures.length} NEW operations failed schema validation (not in allowlist), ${buckets.size} unique error(s):${summary}\n\n` +
          `If these are pre-existing drift to be fixed later, add the op + matching error substring to tests/integration/schemaAlignment.allowlist.json.`
      );
    }
  });
});
