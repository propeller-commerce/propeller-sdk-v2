#!/usr/bin/env node
'use strict';

/**
 * Schema-type drift guard — reference projection (Phase 1).
 *
 * Builds an in-memory, deprecation-filtered projection of the upstream GraphQL
 * schema from introspection. The drift guard
 * (scripts/check-schema-type-drift.js) compares this projection against the
 * hand-authored src/type/*.ts and src/enum/*.ts so schema↔type drift becomes a
 * loud CI failure instead of a silent latent bug.
 *
 * LOAD-BEARING RULE — deprecation filtering:
 *   Every field / inputField / enumValue with `isDeprecated === true` is
 *   DROPPED from the projected member set. The SDK deliberately omits
 *   deprecated members (e.g. Product.mediaImages → "Deprecated in favor of
 *   media.images"); a deprecated member absent from the SDK is the EXPECTED,
 *   correct state and must never be a finding. The deprecated names are kept
 *   separately on `deprecatedMembers` so the comparison can positively flag an
 *   SDK file that STILL declares a now-deprecated member.
 *
 * This module never writes to src/. It is read-only.
 *
 * Reuse (one source of truth):
 *   - `readIntrospection` from scripts/build-schema-snapshot.js (UTF-16 BOM /
 *     UTF-8 aware, `parsed.data ?? parsed`, `.__schema`).
 *   - `SCALAR_TS` / `GQL_TS_ALIASES` from scripts/build-graphql-bundle.js so
 *     scalar + alias mapping matches the operation-variable generator exactly.
 *   - Offline-fallback precedence + 60-day staleness warning ported from
 *     tests/integration/schemaAlignment.test.ts:loadSchema.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { readIntrospection } = require('../build-schema-snapshot');
const { SCALAR_TS, GQL_TS_ALIASES } = require('../build-graphql-bundle');

const ROOT = path.join(__dirname, '..', '..');
const LIVE_SCHEMA = path.join(ROOT, 'schema.json');
const SNAPSHOT = path.join(ROOT, 'tests', 'integration', 'schema.snapshot.json');
const STALE_AFTER_DAYS = 60;

/**
 * Resolve the introspection source with the same precedence the
 * schema-alignment test uses: prefer a freshly-fetched live schema.json,
 * else the committed offline snapshot, else fetch on demand (only when both
 * are missing). Returns { schema, generatedAt, source }.
 */
function resolveIntrospection() {
  let file;
  let source;
  if (fs.existsSync(LIVE_SCHEMA)) {
    file = LIVE_SCHEMA;
    source = 'live';
  } else if (fs.existsSync(SNAPSHOT)) {
    file = SNAPSHOT;
    source = 'snapshot';
  } else {
    try {
      execSync('node scripts/fetch-schema.js', { cwd: ROOT, stdio: 'inherit' });
    } catch {
      /* fall through to the explicit error below */
    }
    if (!fs.existsSync(LIVE_SCHEMA)) {
      throw new Error(
        `No schema available: ${LIVE_SCHEMA} and ${SNAPSHOT} both missing. ` +
          `Run \`node scripts/fetch-schema.js\` (needs PROPELLER_ENDPOINT + ` +
          `PROPELLER_API_KEY) or restore tests/integration/schema.snapshot.json.`
      );
    }
    file = LIVE_SCHEMA;
    source = 'fetched';
  }

  // readIntrospection returns the `__schema` payload directly. The snapshot
  // wraps it as { __generatedAt, __schema }; read the stamp before decoding.
  let generatedAt = null;
  if (source === 'snapshot') {
    try {
      const wrapper = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
      if (typeof wrapper.__generatedAt === 'string') {
        generatedAt = wrapper.__generatedAt;
        const ageDays = (Date.now() - Date.parse(generatedAt)) / 86_400_000;
        if (ageDays > STALE_AFTER_DAYS) {
          // eslint-disable-next-line no-console
          console.warn(
            `[schemaTypeDrift] Offline schema snapshot is ${Math.round(ageDays)} ` +
              `days old (generated ${generatedAt}). It may not reflect the live API. ` +
              `Refresh: \`node scripts/build-schema-snapshot.js\`.`
          );
        }
      }
    } catch {
      /* staleness is advisory only — never fail on it */
    }
  }

  return { schema: readIntrospection(file), generatedAt, source };
}

/**
 * Introspection-shape analogue of resolveInner() in build-graphql-bundle.js.
 * The two walkers are siblings and never crossed: build-graphql-bundle walks
 * the GraphQL SDL AST ({kind:'NonNullType', type}, {kind:'NamedType',
 * name:{value}}); introspection TypeRefs are {kind:'NON_NULL', ofType},
 * {kind:'LIST', ofType}, and named leaves {kind:'SCALAR'|'OBJECT'|..,
 * name:'Int', ofType:null}. Structurally 1:1, only accessors differ.
 *
 * Returns the TS type string (for diagnostics only — phase-1 comparison uses
 * name+nullability, not type-string equality).
 */
function resolveIntrospectionRef(ref) {
  if (!ref) return 'any';
  if (ref.kind === 'NON_NULL') return resolveIntrospectionRef(ref.ofType);
  if (ref.kind === 'LIST') return `${resolveIntrospectionRef(ref.ofType)}[]`;
  let name = ref.name;
  if (SCALAR_TS[name]) return SCALAR_TS[name];
  if (GQL_TS_ALIASES[name]) name = GQL_TS_ALIASES[name];
  // Unknown custom scalars (e.g. JSON) map to `any`, matching resolveInner's
  // unknown branch in build-graphql-bundle.js.
  if (ref.kind === 'SCALAR') return 'any';
  return name;
}

function aliasName(schemaName) {
  return GQL_TS_ALIASES[schemaName] || schemaName;
}

/**
 * Build the deprecation-filtered projection.
 *
 * @returns {{
 *   generatedAt: string|null,
 *   source: 'live'|'snapshot'|'fetched',
 *   types: Map<string, {
 *     kind: string,
 *     members: Map<string, { required: boolean, tsHint: string }>,
 *     enumValues: Set<string>,
 *   }>,
 *   deprecatedMembers: Map<string, Set<string>>,
 * }}
 */
function buildSchemaProjection() {
  const { schema, generatedAt, source } = resolveIntrospection();
  const types = new Map();
  const deprecatedMembers = new Map();

  for (const t of schema.types) {
    if (!t || typeof t.name !== 'string' || t.name.startsWith('__')) continue;
    const name = aliasName(t.name);
    const members = new Map();
    const enumValues = new Set();
    const deprecated = new Set();

    if (t.kind === 'OBJECT' || t.kind === 'INTERFACE') {
      for (const f of t.fields || []) {
        if (f.isDeprecated === true) {
          deprecated.add(f.name);
          continue; // load-bearing rule: deprecated members are NOT projected
        }
        members.set(f.name, {
          required: f.type && f.type.kind === 'NON_NULL',
          tsHint: resolveIntrospectionRef(f.type),
        });
      }
    } else if (t.kind === 'INPUT_OBJECT') {
      // Standard introspection input fields carry no isDeprecated; treat a
      // missing flag as not-deprecated. (Newer specs add it; honor it if present.)
      for (const f of t.inputFields || []) {
        if (f.isDeprecated === true) {
          deprecated.add(f.name);
          continue;
        }
        members.set(f.name, {
          required: f.type && f.type.kind === 'NON_NULL',
          tsHint: resolveIntrospectionRef(f.type),
        });
      }
    } else if (t.kind === 'ENUM') {
      for (const v of t.enumValues || []) {
        if (v.isDeprecated === true) {
          deprecated.add(v.name);
          continue;
        }
        enumValues.add(v.name);
      }
    }
    // SCALAR / UNION carry no member set; recorded for kind comparison only.

    types.set(name, { kind: t.kind, members, enumValues });
    if (deprecated.size > 0) deprecatedMembers.set(name, deprecated);
  }

  return { generatedAt, source, types, deprecatedMembers };
}

module.exports = {
  buildSchemaProjection,
  resolveIntrospectionRef,
  resolveIntrospection,
};

if (require.main === module) {
  const p = buildSchemaProjection();
  // eslint-disable-next-line no-console
  console.log(
    `[schemaTypeDrift] projection: ${p.types.size} types, ` +
      `${p.deprecatedMembers.size} types carry deprecated members ` +
      `(source: ${p.source}${p.generatedAt ? `, stamped ${p.generatedAt}` : ''}).`
  );
}
