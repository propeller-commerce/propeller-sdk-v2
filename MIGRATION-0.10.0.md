# Migrating to propeller-sdk-v2 v0.10.0

v0.10.0 is a **breaking** architectural overhaul. It removes the wrapper
classes (response types are now plain interfaces), the `client` Proxy export,
and several deprecated config keys, and it changes 117 service-method
signatures to take a single `variables` object. Every consumer needs *some*
code change; how much depends on how you used v0.9.x.

The public surface was kept as close to v0.9.x as practical: the heaviest
edits are concentrated. **If** you used the `lib/api.ts` singleton-export
pattern (the setup `propeller-next` and `propeller-vue` use), the bulk of the
change is ~10 lines in that one file plus the method-rename table below. If
you instantiated services or read class methods (`product.getName(...)`,
`instanceof`) directly across your codebase, expect proportionally more.
Run `tsc --noEmit` after upgrading — the compiler enumerates the call sites
that need changing.

> **Return types are the named GraphQL type, not a per-operation projection.**
> A method that returns `Promise<Product>` is typed as the full `Product`, but
> a given operation only *populates* the fields its GraphQL document selects
> (e.g. `productService(client).updateProduct(...)` resolves with a `Product`
> whose `productId` is set and the rest absent — standard GraphQL
> partial-response behaviour). Don't assume every field of a returned object
> is present; read only what the operation fetches. See "Operation variables
> and return shapes" in the README.

---

## What changed conceptually

| | v0.9.x | v0.10.0 |
|---|---|---|
| Response types (`Product`, `Cart`, …) | Wrapper classes with constructors + 2,291 generated getter methods | Plain TypeScript interfaces |
| `product.getName('NL')` | Method on the class | Use `getLocalized(product.names, 'NL')` |
| Service constructor | `new ProductService(client)` | `new ProductService(client)` *(still works)* or `productService(client)` |
| Bundled query/mutation maps | All 459 ops preloaded into every client | Per-op imports — services bring their own GraphQL documents |
| Tree-shaking | Broken (every client preloaded ~46k lines of GraphQL strings) | Working — `sideEffects: false` + per-op imports |
| `client` Proxy export | Available, `@deprecated` | **Removed** |
| Deprecated config keys (`customFragmentsPath`, …) | Available, `@deprecated` | **Removed** |
| `BaseService` parent class | Used by every service | **Removed** (services use `runOperation` internally) |
| Schema-alignment test | None | New: `tests/integration/schemaAlignment.test.ts` |

## The mechanical changes for consumers

### 1. Class wrappers → interfaces

Response objects are now plain TypeScript interfaces. They come back from the
server as JSON; the SDK no longer wraps them in `new Product(…)` (this was
runtime-overhead for no gain — consumers never used the class methods).

**Effects you might notice:**

- `product instanceof Product` no longer compiles (and never worked sensibly
  after `JSON.parse(localStorage.getItem('product'))` round-trips anyway).
- `product.getName('NL')`, `product.getPrice()`, etc. do not exist. Use
  field access directly: `product.name`, `product.price`. For localized
  fields, use the new `getLocalized` helper.
- `JSON.stringify(cart) → localStorage → JSON.parse as Cart` continues to
  work; in fact it works *better* (no class methods to lose).

```diff
- import { Product } from 'propeller-sdk-v2';
- const name = product.getName('EN');
- const price = product.getPrice();
+ import type { Product } from 'propeller-sdk-v2';
+ import { getLocalized } from 'propeller-sdk-v2';
+ const name = getLocalized(product.names, 'EN', 'NL');
+ const price = product.price; // plain field access
```

In practice both audited consumer apps (`propeller-next`, `propeller-vue`)
already use direct field access (`product.price`, `cart.cartId`) and never
called any getters. If your code matches that pattern, there is **no call-site
change**.

### 2. `lib/api.ts` wiring — minimum churn path

The class form is preserved. You can keep your wiring file almost untouched:

```ts
// v0.9.x — KEEP WORKING in v0.10.0
import { GraphQLClient, ProductService, CartService } from 'propeller-sdk-v2';
const graphqlClient = new GraphQLClient({ endpoint, apiKey });
export const productService = new ProductService(graphqlClient);
export const cartService = new CartService(graphqlClient);
```

This continues to compile and run. The class form (`new ProductService`) is a
thin wrapper over the factory form (`productService(client)`) — both are
exported.

If you want the tree-shake benefit (only import the ops a given service
uses), prefer the factory form:

```ts
// v0.10.0 — preferred
import { createClient, productService, cartService } from 'propeller-sdk-v2';
const graphqlClient = createClient({ endpoint, apiKey, defaultLanguage: 'NL' });
export const productServiceInstance = productService(graphqlClient);
export const cartServiceInstance = cartService(graphqlClient);
```

Both styles can coexist.

### 3. Removed deprecated symbols

These were `@deprecated` in v0.9.x and emitted warnings — they are gone in
v0.10.0.

| Removed | Replacement |
|---|---|
| `client` Proxy export | `getClient()` |
| `GraphQLClientConfig.customFragmentsPath` | (no replacement needed — fragments inline at build time) |
| `GraphQLClientConfig.customQueriesPath` | (no replacement needed) |
| `GraphQLClientConfig.customMutationsPath` | (no replacement needed) |
| `GraphQLClientConfig.allowCustomOverride` | (no replacement needed) |
| `GraphQLOperation.skipFragmentResolution` | (no replacement needed) |
| `BaseService` | service factories use the internal `runOperation` helper |
| `client.reloadOperations()` | not needed (no preload) |

If you were relying on `queryByName('foo')` returning a bundled operation,
note that bundled queries are no longer preloaded into the client. Register
your custom queries explicitly via `client.registerQuery('foo', '<query>')`
before calling `queryByName('foo')`. The service factories cover all 459
bundled operations directly — prefer those for service-defined ops.

### 4. Schema-alignment test (no setup needed)

If you contribute back to this repo or run the test suite,
`tests/integration/schemaAlignment.test.ts` validates every generated
operation document against the Propeller schema. It runs **fully offline
against a committed snapshot** — `tests/integration/schema.snapshot.json` is
checked into the repo, so **no credentials and no `.env` are required**:

```bash
npm test
```

The test prefers a live `schema.json` at the repo root if one is present (it
is `.gitignored` and not required); otherwise it falls back to the committed
snapshot. The snapshot carries a generation date, and the test **warns**
(it does not fail) if the snapshot is more than 60 days old. Refreshing the
snapshot is a maintainer step that needs live introspection credentials —
`npm run snapshot:schema` (uses `PROPELLER_ENDPOINT` + `PROPELLER_API_KEY`).
Contributors do not need to do this.

## Quick checklist

- [ ] Search your codebase for `instanceof Product`, `instanceof Cart`, etc. Replace with field/`__typename` checks (or delete — exploration found zero such checks in `propeller-next`/`propeller-vue`).
- [ ] Search for `.get*(` method calls on response objects (e.g. `product.getName('NL')`, `cart.getCartId()`). Replace with field access (`product.names…`, `cart.cartId`) or `getLocalized()` for localized fields.
- [ ] Remove any deprecated `GraphQLClientConfig` keys from your wiring.
- [ ] Optional: switch `new ProductService(client)` to `productService(client)` for tree-shake friendliness.
- [ ] Run `tsc --noEmit` / `vue-tsc --noEmit` to surface any remaining issues.

## Reverting

v0.10.0 is a breaking, architectural change. It removes wrapper classes, the
`client` Proxy export, and several deprecated config keys, and it changes 117
service-method signatures — reverting requires *code* changes back, not just a
dependency flip. There is no in-place compatibility shim.

To go back, pin the exact previous version and restore the call sites you
changed (the v0.9.x class/`new XService(client)` forms, `product.getName(...)`,
etc.):

```bash
npm install --save-exact propeller-sdk-v2@0.9.0
```

Note this is a `0.x` line: under SemVer, even a minor bump may break. Pin an
**exact** version (`--save-exact` / a non-range `package.json` entry) and
upgrade deliberately against this changelog until a 1.0.0 stabilizes the
public surface.
