#!/usr/bin/env node
'use strict';

/**
 * Schema-type drift guard (Phase 2 entrypoint) — `npm run check:type-drift`.
 *
 * Compares the deprecation-filtered schema projection
 * (scripts/lib/schema-type-project.js) against the hand-authored
 * src/type/*.ts and src/enum/*.ts (scripts/lib/sdk-type-extract.js), plus a
 * lightweight src/graphql/** pass for deprecated-field selections. Any
 * divergence not listed in scripts/.schema-drift-exceptions.json fails the
 * build.
 *
 * Read-only: never writes src/. Mirrors the single-exit-code, grouped-summary
 * spirit of scripts/check-generated-drift.js (without its destructive restore —
 * nothing under src/ is mutated).
 *
 * LOAD-BEARING: deprecated schema members are excluded from the projection, so
 * a deprecated member absent from the SDK is the EXPECTED state and never a
 * finding. An SDK file that still DECLARES a deprecated member is flagged
 * (DeprecatedMemberDeclared). A src/graphql operation selecting a deprecated
 * field is flagged (DeprecatedFieldSelected).
 */

const fs = require('fs');
const path = require('path');
const {
  buildClientSchema,
  parse,
  TypeInfo,
  visit,
  visitWithTypeInfo,
  getNamedType,
} = require('graphql');

const { buildSchemaProjection, resolveIntrospection } = require('./lib/schema-type-project');
const { extractSdkTypes, effectiveMemberSet } = require('./lib/sdk-type-extract');

const ROOT = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'scripts', '.schema-drift-exceptions.json');
const TYPE_INDEX = path.join(ROOT, 'src', 'type', 'index.ts');
const ENUM_INDEX = path.join(ROOT, 'src', 'enum', 'index.ts');
const TYPE_DIR = path.join(ROOT, 'src', 'type');
const ENUM_DIR = path.join(ROOT, 'src', 'enum');
const OPERATIONS_DIR = path.join(ROOT, 'src', 'generated', 'operations');

const EMPTY_MANIFEST = {
  exemptTypes: {},
  exemptFields: {},
  knownNullabilityFlips: {},
  allowedDeprecatedSelections: {},
  exemptSchemaOnlyTypes: 'default-skip-all',
};

function loadManifest() {
  // The baseline seeder runs the comparison with NO manifest to collect the
  // raw divergence set.
  if (process.env.SCHEMA_DRIFT_NO_MANIFEST === '1') return { ...EMPTY_MANIFEST };
  if (!fs.existsSync(MANIFEST_PATH)) return { ...EMPTY_MANIFEST };
  const m = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  return { ...EMPTY_MANIFEST, ...m };
}

function listBarrelExports(indexFile) {
  if (!fs.existsSync(indexFile)) return new Set();
  const out = new Set();
  const re = /export\s+\*\s+from\s+'\.\/([^']+)'/g;
  const text = fs.readFileSync(indexFile, 'utf8');
  let m;
  while ((m = re.exec(text)) !== null) out.add(m[1]);
  return out;
}

function listTypeFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => path.basename(f, '.ts'));
}

/**
 * Build the schema once as a graphql GraphQLSchema for the deprecated-field
 * selection pass (reuses the same introspection source as the projection).
 */
function buildGraphQLSchema() {
  const { schema } = resolveIntrospection();
  return buildClientSchema({ __schema: schema });
}

function extractDocument(generatedFileText) {
  const match = generatedFileText.match(/`([\s\S]*)`/);
  if (!match) return null;
  return match[1]
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$')
    .replace(/\\\\/g, '\\');
}

function main() {
  const manifest = loadManifest();
  const projection = buildSchemaProjection();
  const sdk = extractSdkTypes();
  const findings = [];

  const exemptTypes = manifest.exemptTypes || {};
  const exemptFields = manifest.exemptFields || {};
  const knownFlips = manifest.knownNullabilityFlips || {};

  // ---- 1. Schema → SDK comparison -----------------------------------------
  for (const [typeName, sdef] of projection.types) {
    if (typeName in exemptTypes) continue;

    const kind = sdef.kind;
    const hasMembers = kind === 'OBJECT' || kind === 'INTERFACE' || kind === 'INPUT_OBJECT';
    const isEnum = kind === 'ENUM';
    if (!hasMembers && !isEnum) continue; // SCALAR/UNION: no member surface

    const decl = sdk.get(typeName);

    if (!decl || decl.kind === 'unknown') {
      // Schema type with no usable SDK file. Curated-subset decision: by
      // default these are NOT failures (the SDK ships a subset).
      if (manifest.exemptSchemaOnlyTypes === 'strict') {
        findings.push({ kind: 'MissingFile', type: typeName, detail: kind });
      }
      continue;
    }

    if (isEnum) {
      if (decl.kind !== 'enum') {
        findings.push({ kind: 'KindMismatch', type: typeName, detail: `schema ENUM vs SDK ${decl.kind}` });
        continue;
      }
      const fieldExempt = exemptFields[typeName] || {};
      for (const v of sdef.enumValues) {
        if (v in fieldExempt) continue;
        if (!decl.enumValues.has(v)) {
          findings.push({ kind: 'MissingMember', type: typeName, detail: v });
        }
      }
      // SDK enum value the schema does not have (live) and is not deprecated.
      const dep = projection.deprecatedMembers.get(typeName) || new Set();
      for (const v of decl.enumValues) {
        if (v in fieldExempt) continue;
        if (sdef.enumValues.has(v)) continue;
        if (dep.has(v)) continue; // SDK keeps deprecated values w/ @deprecated JSDoc — fine
        findings.push({ kind: 'ExtraMember', type: typeName, detail: v });
      }
      continue;
    }

    // OBJECT / INTERFACE / INPUT_OBJECT
    if (decl.kind === 'union') {
      findings.push({ kind: 'KindMismatch', type: typeName, detail: `schema ${kind} vs SDK union` });
      continue;
    }
    if (decl.kind !== 'interface') {
      findings.push({ kind: 'KindMismatch', type: typeName, detail: `schema ${kind} vs SDK ${decl.kind}` });
      continue;
    }

    const effective = effectiveMemberSet(typeName, sdk);
    const fieldExempt = exemptFields[typeName] || {};

    for (const [memberName, mdef] of sdef.members) {
      if (memberName in fieldExempt) continue;
      const own = effective.get(memberName);
      if (!own) {
        findings.push({ kind: 'MissingMember', type: typeName, detail: memberName });
        continue;
      }
      // Nullability → optionality: schema-required must be non-optional.
      const schemaRequired = !!mdef.required;
      const sdkOptional = !!own.optional;
      const flipExempt = (knownFlips[typeName] || []).includes(memberName);
      if (schemaRequired && sdkOptional && !flipExempt) {
        findings.push({ kind: 'NullabilityFlip', type: typeName, detail: `${memberName} (schema non-null, SDK optional)` });
      }
    }

    // SDK declares a member the schema marks @deprecated → cleanup signal.
    const deprecated = projection.deprecatedMembers.get(typeName) || new Set();
    for (const memberName of (decl.ownMembers ? decl.ownMembers.keys() : [])) {
      if (memberName in fieldExempt) continue;
      if (deprecated.has(memberName)) {
        findings.push({ kind: 'DeprecatedMemberDeclared', type: typeName, detail: memberName });
      } else if (!sdef.members.has(memberName)) {
        // Own member that is neither a live schema field nor deprecated → extra.
        findings.push({ kind: 'ExtraMember', type: typeName, detail: memberName });
      }
    }
  }

  // ---- 2. Barrel completeness ---------------------------------------------
  const typeBarrel = listBarrelExports(TYPE_INDEX);
  for (const f of listTypeFiles(TYPE_DIR)) {
    if (!typeBarrel.has(f)) findings.push({ kind: 'BarrelMissing', type: f, detail: 'src/type/index.ts' });
  }
  const enumBarrel = listBarrelExports(ENUM_INDEX);
  for (const f of listTypeFiles(ENUM_DIR)) {
    if (!enumBarrel.has(f)) findings.push({ kind: 'BarrelMissing', type: f, detail: 'src/enum/index.ts' });
  }

  // ---- 3. src/graphql operations must not select deprecated fields --------
  if (fs.existsSync(OPERATIONS_DIR)) {
    let gqlSchema;
    try {
      gqlSchema = buildGraphQLSchema();
    } catch (e) {
      // If the schema cannot be built as a client schema, skip this pass
      // rather than fail the whole guard on an unrelated introspection issue.
      gqlSchema = null;
      // eslint-disable-next-line no-console
      console.warn(`[schemaTypeDrift] skipped deprecated-selection pass: ${e.message}`);
    }
    if (gqlSchema) {
      const allowedSel = manifest.allowedDeprecatedSelections || {};
      const files = fs
        .readdirSync(OPERATIONS_DIR)
        .filter((f) => f.endsWith('.ts') && f !== 'index.ts');
      for (const file of files) {
        const op = path.basename(file, '.ts');
        const doc = extractDocument(fs.readFileSync(path.join(OPERATIONS_DIR, file), 'utf8'));
        if (!doc) continue;
        let ast;
        try {
          ast = parse(doc);
        } catch {
          continue; // schema-alignment test owns parse-error reporting
        }
        const ti = new TypeInfo(gqlSchema);
        const allowed = new Set(allowedSel[op] || []);
        visit(
          ast,
          visitWithTypeInfo(ti, {
            Field(node) {
              const fd = ti.getFieldDef();
              if (fd && fd.deprecationReason != null) {
                const parent = getNamedType(ti.getParentType());
                const key = `${parent ? parent.name : '?'}.${node.name.value}`;
                if (allowed.has(node.name.value) || allowed.has(key)) return;
                findings.push({ kind: 'DeprecatedFieldSelected', type: op, detail: key });
              }
            },
          })
        );
      }
    }
  }

  // ---- Report -------------------------------------------------------------
  // Machine-readable escape hatch for the baseline seeder.
  if (process.env.SCHEMA_DRIFT_EMIT_JSON === '1') {
    // eslint-disable-next-line no-console
    console.log('___FINDINGS_JSON___' + JSON.stringify(findings));
    return 0;
  }

  if (findings.length === 0) {
    const exCount =
      Object.keys(exemptTypes).length +
      Object.values(exemptFields).reduce((n, o) => n + Object.keys(o).length, 0);
    // eslint-disable-next-line no-console
    console.log(
      `✅ Hand-authored types in sync with schema (${exCount} reviewed exception(s), ` +
        `source: ${projection.source}${projection.generatedAt ? `, stamped ${projection.generatedAt}` : ''}).`
    );
    return 0;
  }

  const byKind = {};
  for (const f of findings) (byKind[f.kind] ||= []).push(f);
  // eslint-disable-next-line no-console
  console.error(`❌ ${findings.length} schema-type drift(s) not in exceptions:\n`);
  for (const [k, list] of Object.entries(byKind)) {
    // eslint-disable-next-line no-console
    console.error(`  [${list.length}] ${k}`);
    for (const f of list.slice(0, 40)) {
      // eslint-disable-next-line no-console
      console.error(`      ${f.type} → ${f.detail}`);
    }
    if (list.length > 40) console.error(`      … and ${list.length - 40} more`);
  }
  // eslint-disable-next-line no-console
  console.error(
    `\nFix the hand-authored file, or — if the deviation is deliberate — add it to ` +
      `scripts/.schema-drift-exceptions.json (reseed: node scripts/build-schema-drift-baseline.js).`
  );
  return 1;
}

if (require.main === module) {
  let code = 1;
  try {
    code = main();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`[schemaTypeDrift] fatal: ${e.stack || e.message}`);
    code = 1;
  }
  process.exit(code);
}

module.exports = { main };
