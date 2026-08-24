#!/usr/bin/env node
/**
 * Fetch the upstream GraphQL schema via introspection and write it to
 * schema.json (plain UTF-8) at the repo root.
 *
 * schema.json is .gitignored — it's a regenerable alignment artifact, not
 * source. The schema-alignment test fetches it on demand if missing.
 *
 * Env vars (loaded from .env if present):
 *   PROPELLER_ENDPOINT   — full GraphQL URL (e.g. https://api.helice.cloud/v2/graphql)
 *   PROPELLER_API_KEY    — apikey header value
 *
 * Usage:
 *   node scripts/fetch-schema.js          # skip if schema.json already exists
 *   node scripts/fetch-schema.js --force  # always re-fetch
 */

const fs = require('fs');
const path = require('path');

const SCHEMA_PATH = path.join(__dirname, '..', 'schema.json');
const FORCE = process.argv.includes('--force');

function loadDotEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    const [, key, val] = m;
    if (process.env[key] === undefined) {
      process.env[key] = val.replace(/^["']|["']$/g, '');
    }
  }
}

const INTROSPECTION_QUERY = `
query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types { ...FullType }
    directives {
      name
      description
      locations
      args { ...InputValue }
    }
  }
}
fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args { ...InputValue }
    type { ...TypeRef }
    isDeprecated
    deprecationReason
  }
  inputFields { ...InputValue }
  interfaces { ...TypeRef }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes { ...TypeRef }
}
fragment InputValue on __InputValue {
  name
  description
  type { ...TypeRef }
  defaultValue
}
fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType { kind name }
            }
          }
        }
      }
    }
  }
}
`;

async function main() {
  loadDotEnv();

  if (!FORCE && fs.existsSync(SCHEMA_PATH)) {
    console.log(`schema.json already present at ${SCHEMA_PATH}; pass --force to re-fetch.`);
    return;
  }

  const endpoint = process.env.PROPELLER_ENDPOINT;
  const apiKey = process.env.PROPELLER_API_KEY;

  if (!endpoint || !apiKey) {
    console.error('Missing PROPELLER_ENDPOINT or PROPELLER_API_KEY (set in .env or environment).');
    process.exit(1);
  }

  console.log(`Fetching introspection from ${endpoint} …`);
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: apiKey,
    },
    body: JSON.stringify({ query: INTROSPECTION_QUERY }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error(`HTTP ${res.status}: ${body.slice(0, 500)}`);
    process.exit(1);
  }

  const json = await res.json();
  if (json.errors) {
    console.error('Introspection returned errors:', JSON.stringify(json.errors, null, 2));
    process.exit(1);
  }

  fs.writeFileSync(SCHEMA_PATH, JSON.stringify(json, null, 2), 'utf8');
  const size = fs.statSync(SCHEMA_PATH).size;
  console.log(`Wrote ${SCHEMA_PATH} (${(size / 1024 / 1024).toFixed(2)} MB, UTF-8).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
