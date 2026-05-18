# Tests

Unit and integration tests for `propeller-sdk-v2`. The whole suite runs
**offline with no credentials** — every network call is mocked, and the
schema check uses a committed snapshot.

```bash
npm test            # run once
npm run test:watch  # watch mode
npm run test:coverage
npm run test:ci     # --ci --coverage --watchAll=false (what CI runs)
```

## Layout (what actually exists)

```
tests/
  client/GraphQLClient.test.ts          unit — transport layer
  service/ProductService.test.ts        unit — a representative service
  service/LogoutService.test.ts         unit — a zero-variable service
  service/runOperation.test.ts          unit — the shared executor
  types/Getters.test.ts                 unit — getLocalized helper
  integration/schemaAlignment.test.ts   guard — generated docs vs schema
  integration/variablesNoCollision.test.ts  guard — variable-name barrels
  integration/runOperationShapeCanary.test.ts  guard — codemod consistency
  integration/treeShakeBudget.test.ts   guard — bundle size budget
  integration/schema.snapshot.json      committed offline introspection
  integration/schemaAlignment.allowlist.json  drift allowlist (empty `{}`)
  setup.ts                              jest setup
  config.ts, helpers/testHelpers.ts     legacy staging helpers, currently
                                        UNUSED by any test (do not rely on
                                        them; they hit no live API)
```

There is intentionally **no** exhaustive per-service CRUD suite. The unit
tests cover the transport and one representative service each; correctness of
the ~460 bundled operations is covered structurally by the schema-alignment
guard, not by per-operation behaviour tests.

## What the unit tests cover

- **`GraphQLClient.test.ts`** — header building, proxy vs direct mode, API-key
  routing for order-editor mutations, `Authorization` injection, operation-name
  extraction (incl. comment stripping), timeout/abort, HTTP-error mapping.
  `global.fetch` is mocked; no real requests.
- **`ProductService.test.ts` / `LogoutService.test.ts`** — that a service
  factory (and its backward-compat class) sends the right operation name and
  unwraps `data.<field>`. Mocked fetch with hand-built payloads — these prove
  the SDK's wrapping/unwrapping plumbing, **not** that an operation is valid
  against the real API (that is the schema-alignment guard's job).
- **`runOperation.test.ts`** — partial-response handling, the
  `throwOnPartialErrors` option, the no-data/no-errors throw that backs the
  non-null `data` guarantee, and `imageVariantFilters` defaulting.
- **`Getters.test.ts`** — `getLocalized` language match / fallback chain.

## What the integration guards cover

- **`schemaAlignment.test.ts`** — parses and `validate()`s **every** generated
  document in `src/generated/operations/` against the Propeller schema. It
  uses a live `schema.json` at the repo root if one is present (it is
  `.gitignored` and not required), otherwise the committed
  `schema.snapshot.json`. The allowlist is empty (`{}`) — **any** drift fails
  the suite. The snapshot carries a generation date; the test only **warns**
  (never fails) if it is more than 60 days old. This is the load-bearing
  guard that substitutes for live-API testing of operation validity.
- **`variablesNoCollision.test.ts`** — the generated and hand-authored
  `*Variables` name sets are disjoint (no ambiguous re-export), and the kept
  manifest equals the hand-authored set.
- **`runOperationShapeCanary.test.ts`** — internal consistency across the
  ~346 service methods: the `runOperation<{X:T}>` type arg, the
  `result.data.X` read, the declared return, and the cast agree. It is a
  **codemod-regression canary, not a schema proof** — the file's own header
  says so.
- **`treeShakeBudget.test.ts`** — bundles a fixture importing only one
  service with esbuild and asserts a size budget, guarding against an
  `export *` regression re-pulling the whole operations index.

## Refreshing the schema snapshot (maintainers only)

Contributors do not need this. To regenerate `schema.snapshot.json` (needs
live introspection credentials):

```bash
npm run snapshot:schema   # uses PROPELLER_ENDPOINT + PROPELLER_API_KEY
```
