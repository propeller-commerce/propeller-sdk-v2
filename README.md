# Propeller V2 SDK

A TypeScript GraphQL client for the Propeller Commerce Platform. Ships a typed service for every supported query and mutation — with the GraphQL documents and fragments generated and bundled per operation, so consumers don't write or maintain GraphQL themselves and only the operations they import are pulled into their bundle.

- **Framework-agnostic.** Ships dual ESM + CJS builds. Works with Next.js, Vite, Webpack, Node, and bare browsers.
- **No runtime GraphQL parser.** Fragments are inlined at build time; the SDK does not depend on the `graphql` package at runtime.
- **Type-safe.** Full TypeScript definitions for every enum, input, and response type. (Types describe the entity's full shape; an operation populates only the fields it selects — see "Return types are the named type; only selected fields are populated" below.)
- **Secure-by-default config.** Defaults to proxy mode so API keys can stay server-side.

## Installation

```bash
npm install propeller-sdk-v2
```

## Quick start (v0.10.0)

```typescript
import { createClient, productService, ProductStatus, Format, Fit } from 'propeller-sdk-v2';

// Initialize once in your app entry point.
const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',          // recommended — keep API keys server-side
  clientId: 'my-storefront',      // optional, sent as X-Client-ID header
  defaultLanguage: 'NL',          // optional; service calls without an explicit `language` fall back to this
  getAccessToken: () => localStorage.getItem('access_token') ?? undefined,
});

// Factory pattern (preferred, tree-shakes).
const products = productService(client);

const result = await products.getProducts({
  input: {
    page: 1,
    offset: 20,
    term: 'laptop',
    statuses: [ProductStatus.A, ProductStatus.N],
    language: 'NL',
  },
  imageSearchFilters: { page: 1, offset: 1 },
  imageVariantFilters: {
    transformations: {
      name: 'product_thumb',
      transformation: {
        format: Format.WEBP,
        height: 300,
        width: 300,
        fit: Fit.BOUNDS,
      },
    },
  },
  language: 'NL',
});
```

### Upgrading from v0.9.x

The class form continues to work in v0.10.0 as a thin backward-compatible
wrapper:

```typescript
import { GraphQLClient, ProductService } from 'propeller-sdk-v2';
const client = new GraphQLClient({ endpoint: '/api/graphql' });
const productService = new ProductService(client);
const product = await productService.getProduct({ productId: 1 });
```

See [MIGRATION-0.10.0.md](./MIGRATION-0.10.0.md) for the full upgrade guide.

## Configuration

`GraphQLClientConfig` accepts:

| Field | Type | Default | Notes |
| --- | --- | --- | --- |
| `endpoint` | `string` | — | **Required.** Direct API URL or your proxy endpoint. |
| `securityMode` | `'proxy' \| 'direct'` | `'proxy'` | Use `'proxy'` in production. `'direct'` exposes API keys client-side. |
| `proxyEndpoint` | `string` | `endpoint` | Override for proxy URL when you want `endpoint` to point at the upstream. |
| `clientId` | `string` | — | Sent as `X-Client-ID` in proxy mode. |
| `apiKey` | `string` | — | **Direct mode only.** Ignored in proxy mode (with a warning). |
| `orderEditorApiKey` | `string` | — | Direct mode only. Used for the mutations in `orderEditorMutations`. |
| `orderEditorMutations` | `string[]` | `['orderSetStatus', 'passwordResetLink', 'triggerQuoteSendRequest', 'triggerOrderSendConfirm']` | Override to route additional mutations through `orderEditorApiKey`. |
| `headers` | `Record<string, string>` | — | Merged into every request. |
| `timeout` | `number` | `30000` | Request timeout (ms). Triggers `AbortController`. |
| `debug` | `boolean` | `false` | Gates internal `[GraphQL Client]` logs. Config-validation warnings always fire. |
| `getAccessToken` | `() => string \| undefined \| Promise<string \| undefined>` | reads `localStorage['access_token']` in browser | Use this for SSR (`getServerSession`, HTTP-only cookies) or in-memory token stores. |
| `defaultLanguage` | `string` | — | ISO 639-1 tag (e.g. `'NL'`). Service methods that take an optional top-level `language` and don't receive one fall back to this value before sending the request. An explicit `language` on the call always wins. |
| `throwOnPartialErrors` | `boolean` | `false` | On a partial response (`data` *and* `errors`), services return the data and debug-log the errors. Set `true` to throw `GraphQLOperationError` instead. `client.execute()` never throws regardless. |

### Proxy contract

When `securityMode: 'proxy'`, the SDK posts to `proxyEndpoint || endpoint` with:

- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
  - `X-Client-ID: <clientId>` (if configured)
  - `Authorization: Bearer <token>` (if `getAccessToken()` returns a token)
  - Any `headers` you supplied in config
- **Body:** `{ query, variables, operationName }`

Your proxy is expected to:

1. Attach the upstream `apikey` header (and `orderEditorApiKey` for the operations you allow-list).
2. Forward the request to the upstream Propeller GraphQL endpoint.
3. Return the upstream JSON response untouched.

A minimal Node/Edge handler looks like:

```ts
export async function handler(req: Request) {
  const upstream = await fetch('https://api.helice.cloud/v2/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.PROPELLER_API_KEY!,
    },
    body: await req.text(),
  });
  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
```

## Services

Services group related GraphQL operations. Each service is exposed two ways:

- **Factory function** (preferred): `cartService(client)` returns an object
  with the service methods. Tree-shakeable — only the operations you actually
  call are bundled.
- **Class form** (backward-compatible): `new CartService(client)` returns a
  thin wrapper around the factory. Same method names. Most signatures are
  unchanged from v0.9.x; methods whose operation needs more variables than the
  old signature could express now take a single `variables` object (see
  [Operation variables](#operation-variables) below).

Core services include `productService`, `orderService`, `cartService`,
`userService`, `paymentService`, `categoryService`, `attributeService`,
`discountService`, `bundleService`, `crossupsellService`, `companyService`,
`taxService`, `shipmentService`, `warehouseService`, `businessRuleService` —
52 in total covering catalog, cart, order, user, B2B, media, and admin
domains. See [the documentation](https://propeller-commerce.github.io/propeller-sdk-v2/)
for the full list.

```typescript
import { cartService } from 'propeller-sdk-v2';

const carts = cartService(client);
const cart = await carts.getCart({
  cartId: '...',
  language: 'NL',
  imageSearchFilters: { page: 1, offset: 1 },
  imageVariantFilters: { /* ... */ },
});
```

### Operation variables and return shapes

Each service method takes the variables its GraphQL operation actually
declares. Methods that need more than a single input take one `variables`
object argument:

```typescript
import { productService, type ProductUpdateVariables } from 'propeller-sdk-v2';

const products = productService(client);

// `productUpdate` declares $productId: Int! and $input: UpdateProductInput!
const vars: ProductUpdateVariables = {
  productId: 123,
  input: { /* UpdateProductInput */ },
};
await products.updateProduct(vars);
```

**Two interface families, by design.** You'll see two naming shapes and it's
worth knowing why:

- **`<Op>Variables`** (e.g. `ProductUpdateVariables`) — *generated* from the
  GraphQL operation. Field names and required/optional status mirror the
  operation's declared variables exactly. These are emitted by the build and
  re-exported through an explicit public barrel
  (`generated/operationVariablesPublic`), so they can never collide with the
  hand-authored names below.
- **Hand-authored** interfaces use *both* suffixes — `<Op>QueryVariables`
  (e.g. `ProductQueryVariables`) and plain `<Op>Variables` (e.g.
  `CartStartVariables`), the plain form being the majority of the kept set.
  They live in the service file, kept because they carry per-field JSDoc and
  are the stable names existing consumers already import.

The suffix is therefore *not* a reliable generated-vs-hand-authored signal —
plenty of hand-authored names also end in plain `<Op>Variables`. The committed
manifest `scripts/.kept-service-variables.json` is the single source of truth
for which names are hand-authored; a drift guard (`npm run validate`) fails the
build if the generated set and the kept set ever overlap.

You don't have to track which is which day-to-day — your editor resolves the
correct type from the method signature. The split is documented here only so
the two names aren't a mystery.

Methods whose operation takes a single value keep their direct signature
(e.g. `getProductSurcharges(productId)`, `loginService.login(input)`).
Operations that declare no variables take no argument
(`logoutService.logout()`).

**SDK-defaulted variables.** Two variables are filled in for you when omitted:
`language` (falls back to the client's `defaultLanguage`) and
`imageVariantFilters` (defaults to `{ transformations: [] }`). Both are
surfaced as *optional* on the interfaces even where the operation declares
them non-null, because the SDK guarantees a valid value reaches the wire — so
a plain `getProduct({ productId })` just works. An explicit value always wins.

**Return types are the named type; only selected fields are populated.**
A method's return type is the operation's named GraphQL type (e.g.
`updateProduct(...)` → `Promise<Product>`). That type describes the *shape* of
the entity, not a promise that every field is filled. Each operation only
selects — and the server only returns — the fields its GraphQL document asks
for. `updateProduct` selects just `productId`, so you get a `Product` with
`productId` set and the other fields absent (`undefined`). This is normal
GraphQL partial-response behaviour: read only the fields the operation
fetches, exactly as you would with any GraphQL client. The strongly-typed
`Product` is a convenience for the fields you *do* get back, not a guarantee
that the whole entity was fetched.

> **Known, accepted limitation.** The return type is the *full* named
> interface even though a given operation populates only a subset — so a
> field the interface declares non-optional (e.g. `Product.categoryPath`) can
> be `undefined` at runtime, and **TypeScript will not flag it**. This is a
> deliberate trade-off, not a bug: the SDK does **not** generate
> per-operation result types (`Pick<>`/`<Op>Result`) or widen returns to
> `Partial<T>`. Treat any field outside the operation's selection set as
> possibly absent and use optional chaining (`product.price?.gross`). To see
> exactly which fields an operation selects, read its document in
> [`src/generated/operations/`](./src/generated/operations/) (or the
> [API docs](https://propeller-commerce.github.io/propeller-sdk-v2/)).

## Direct GraphQL access

For ad-hoc queries that aren't covered by a service:

```typescript
import { GraphQLClient } from 'propeller-sdk-v2';

const client = new GraphQLClient({
  endpoint: 'https://api.propeller.com/graphql',
  securityMode: 'direct',
  apiKey: 'your-api-key',
});

// Object-form arguments (preferred):
const result = await client.execute({
  query: `query GetProducts($offset: Int!) {
    products(input: { offset: $offset }) {
      id
      name
    }
  }`,
  variables: { offset: 10 },
});

// Or higher-level helpers that throw on GraphQL errors:
const data = await client.query<{ viewer: { id: number } }>(
  `query Viewer { viewer { id } }`
);
```

## Error handling

Services and the `query` / `mutate` / `queryByName` / `mutateByName` helpers
throw `GraphQLOperationError` **only when the response is a hard failure** —
the server returned errors *and no `data`*. When the server returns a partial
response (GraphQL's normal contract: `data` present *alongside* `errors`), the
data is returned and the errors are surfaced through the client's debug log
rather than thrown. If you need the raw `errors` array in the partial case,
call `client.execute()` directly — it never throws and always returns the raw
`{ data, errors }`.

```typescript
import { GraphQLOperationError } from 'propeller-sdk-v2';

try {
  const product = await productService.getProduct({ productId: 1 });
} catch (err) {
  if (err instanceof GraphQLOperationError) {
    // err.errors        — GraphQLErrorEntry[]
    // err.operationName — string | undefined
    // err.variables     — Record<string, any> | undefined
    // err.document      — the exact GraphQL query/mutation string that failed
    console.error('Operation failed:', err.operationName, err.errors);
    console.error('Query was:', err.document);
  } else {
    // Network, HTTP, or timeout error
    console.error('Request failed:', err);
  }
}
```

`err.document` carries the exact GraphQL document that produced the error —
useful for logging the failing query verbatim (e.g. when diagnosing schema
drift) without trawling the source.

HTTP errors (non-2xx) include the response body in the thrown message
(truncated to 500 chars) so upstream GraphQL parse errors surface clearly.

## Authentication

In proxy mode, every request runs `config.getAccessToken()` and attaches `Authorization: Bearer <token>` when a token is returned. The provider may be sync or async.

```typescript
// Browser (default): reads localStorage['access_token']
const client = createClient({ endpoint: '/api/graphql' });

// SSR (Next.js): read from cookies on each request
const client = createClient({
  endpoint: '/api/graphql',
  getAccessToken: async () => {
    const session = await getServerSession();
    return session?.accessToken;
  },
});

// In-memory store
let token: string | undefined;
const client = createClient({ endpoint: '/api/graphql', getAccessToken: () => token });
```

`client.setAccessToken(token)` and `client.clearAccessToken()` write to / clear `localStorage` only when the default provider is in use; with a custom `getAccessToken` you manage the storage yourself.

`client.isAuthenticated()` is async and resolves to `true` iff the configured provider yields a token.

## Legacy / deprecated APIs

The following are still exported from the package root for backward
compatibility but are **deprecated** and will be removed in a future release.
They emit a one-time `console.warn` on first use and carry `@deprecated` JSDoc
so your IDE flags call sites.

| Deprecated | Use instead |
| --- | --- |
| `createGraphQLClient(config)` | `createClient(config)` |
| `initializeClient(config)` + `getClient()` (global singleton) | `const client = createClient(config)` and pass `client` explicitly to service factories |

```typescript
// ❌ Deprecated — global singleton
import { initializeClient, getClient, productService } from 'propeller-sdk-v2';
initializeClient({ endpoint: '/api/graphql' });
const products = productService(getClient());

// ✅ Preferred — explicit client
import { createClient, productService } from 'propeller-sdk-v2';
const client = createClient({ endpoint: '/api/graphql' });
const products = productService(client);
```

## Type definitions

Every response and input type is a plain TypeScript `interface`. Service
methods return plain JSON values typed as those interfaces — what the server
sends, accessed by field. Read fields directly; localized arrays use the
`getLocalized` helper (below).

```typescript
import type { Product, CreateProductInput } from 'propeller-sdk-v2';
import { ProductStatus } from 'propeller-sdk-v2';

const status: ProductStatus = ProductStatus.A;

const input: CreateProductInput = {
  /* fields */
};

// Typed as `Product`; only the fields the `product` operation selects are
// populated — see "Return types" above. Read with optional chaining.
const product = await productService(client).getProduct({ productId: 1 });

product.id;
product.sku;
product.price?.gross;
```

### Localized fields

For localized arrays (e.g. `product.names: LocalizedString[]`), use the
`getLocalized` helper:

```typescript
import { getLocalized } from 'propeller-sdk-v2';

const name = getLocalized(product.names, 'EN', 'NL');         // EN, fall back to NL, then first
const desc = getLocalized(product.descriptions, locale);      // no fallback
```

### Enum imports

Enums are top-level exports. Use direct or namespace imports:

```typescript
// Direct:
import { ProductStatus } from 'propeller-sdk-v2';
const status = ProductStatus.A;

// Namespace (preferred by the audited consumer apps):
import * as Enums from 'propeller-sdk-v2';
const status = Enums.ProductStatus.A;
```

### Serialization

Responses are plain objects, so `JSON.stringify` / `JSON.parse` roundtrips
(Redux DevTools, IndexedDB, SSR hydration, localStorage) work cleanly — no
rehydration step.

## Development

```bash
# Install
npm install

# Build (runs fragment inliner + dual ESM/CJS compile)
npm run build

# Typecheck without emit
npm run typecheck

# Test
npm test
```

The build pipeline:

1. `npm run build:graphql` — `scripts/build-graphql-bundle.js` reads every file under `src/graphql/`, transitively inlines fragment spreads, and writes pre-resolved strings to `src/generated/`.
2. `npm run build:cjs` — emits `dist/cjs/` (CommonJS).
3. `npm run build:esm` — emits `dist/esm/` (ES modules).

The `graphql` package is only required at build time and lives in `devDependencies`.

### Schema-type drift guard

`src/type/*.ts` and `src/enum/*.ts` are hand-authored. `npm run check:type-drift`
(part of `npm run validate`, and a CI step) projects the upstream GraphQL
schema and fails the build when the committed types/enums structurally diverge
from it — a missing/extra field, an enum-value change, a nullability flip, or a
generated operation that selects a deprecated field.

Two rules to know:

- **Deprecated schema members are intentionally omitted.** A field or enum
  value the schema marks `@deprecated` (e.g. `Product.mediaImages` →
  *"Deprecated in favor of `media.images`"*) is dropped from the reference
  projection. Its absence from the SDK is the *correct* state and is never a
  finding. Don't add deprecated members back, and don't select them in
  `src/graphql/**`.
- **`scripts/.schema-drift-exceptions.json` is a reviewed debt ledger.**
  Pre-existing drift is baselined there so the guard catches only *new*
  divergence. The file should *shrink* over releases. To rebaseline after a
  deliberate schema refresh: `node scripts/build-schema-drift-baseline.js`,
  then review the `git diff` — every entry must be an explainable deviation.

It is offline-first: it uses the committed `tests/integration/schema.snapshot.json`
when no live `schema.json` is present, so CI and forks pass without
credentials (it warns, never fails, when the snapshot is >60 days old).

## Documentation

See the [documentation site](https://propeller-commerce.github.io/propeller-sdk-v2/)
for guides and the full API reference. The site is a Docusaurus app in
[`docs/`](./docs); guide pages live in `docs/content/**` and the API reference
is generated from the source JSDoc.

## License

MIT — see `LICENSE`.
