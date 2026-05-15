# Propeller V2 SDK

A TypeScript GraphQL client for the Propeller Commerce Platform. Bundles every supported query, mutation, and fragment so consumers don't need to maintain GraphQL documents themselves.

- **Framework-agnostic.** Ships dual ESM + CJS builds. Works with Next.js, Vite, Webpack, Node, and bare browsers.
- **No runtime GraphQL parser.** Fragments are inlined at build time; the SDK does not depend on the `graphql` package at runtime.
- **Type-safe.** Full TypeScript definitions for every enum, input, and response type.
- **Secure-by-default config.** Defaults to proxy mode so API keys can stay server-side.

## Installation

```bash
npm install propeller-sdk-v2
```

## Quick start

```typescript
import { initializeClient, getClient, ProductService, ProductStatus, Format, Fit } from 'propeller-sdk-v2';

// Initialize once in your app entry point.
initializeClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',          // recommended — keep API keys server-side
  clientId: 'my-storefront',      // optional, sent as X-Client-ID header
  getAccessToken: () => localStorage.getItem('access_token') ?? undefined,
});

const productService = new ProductService(getClient());

const products = await productService.getProducts({
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

Services wrap related GraphQL operations and return typed response objects. Every service extends `BaseService` and takes a `GraphQLClient` in its constructor.

Core services include `ProductService`, `OrderService`, `CartService`, `UserService`, `PaymentService`, `CategoryService`, `AttributeService`, `DiscountService`, `BundleService`, `CrossupsellService`, `CompanyService`, `TaxService`, `ShipmentService`, `WarehouseService`, `BusinessRuleService` — 58 in total covering catalog, cart, order, user, B2B, media, and admin domains. See [the documentation](https://propeller-commerce.github.io/propeller-sdk-v2/) for the full list.

```typescript
import { CartService } from 'propeller-sdk-v2';

const cartService = new CartService(getClient());
const cart = await cartService.getCart({
  cartId: '...',
  language: 'NL',
  imageSearchFilters: { page: 1, offset: 1 },
  imageVariantFilters: { /* ... */ },
});
```

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

Services and the `query` / `mutate` / `queryByName` / `mutateByName` helpers throw `GraphQLOperationError` when the server returns a non-empty `errors` array. `client.execute()` itself returns the raw response so callers who want to inspect partial responses can.

```typescript
import { GraphQLOperationError } from 'propeller-sdk-v2';

try {
  const product = await productService.getProduct({ productId: 1 });
} catch (err) {
  if (err instanceof GraphQLOperationError) {
    // err.errors      — GraphQLErrorEntry[]
    // err.operationName — string | undefined
    // err.variables    — Record<string, any> | undefined
    console.error('Operation failed:', err.errors);
  } else {
    // Network, HTTP, or timeout error
    console.error('Request failed:', err);
  }
}
```

HTTP errors (non-2xx) include the response body in the thrown message (truncated to 500 chars) so upstream GraphQL parse errors surface clearly.

## Authentication

In proxy mode, every request runs `config.getAccessToken()` and attaches `Authorization: Bearer <token>` when a token is returned. The provider may be sync or async.

```typescript
// Browser (default): reads localStorage['access_token']
initializeClient({ endpoint: '/api/graphql' });

// SSR (Next.js): read from cookies on each request
initializeClient({
  endpoint: '/api/graphql',
  getAccessToken: async () => {
    const session = await getServerSession();
    return session?.accessToken;
  },
});

// In-memory store
let token: string | undefined;
initializeClient({ endpoint: '/api/graphql', getAccessToken: () => token });
```

`client.setAccessToken(token)` and `client.clearAccessToken()` write to / clear `localStorage` only when the default provider is in use; with a custom `getAccessToken` you manage the storage yourself.

`client.isAuthenticated()` is async and resolves to `true` iff the configured provider yields a token.

## Type definitions

The SDK exports every type used by Propeller's GraphQL schema as a TypeScript `class` with a single `constructor(data: Partial<X> = {}) { Object.assign(this, data); }` body. Service methods return real class instances (via `new X(data)`), which gives instance methods a home — getters and resolvers can be added on the prototype without changing any call site. Input types (`*Input`) stay as plain `interface`s. Enums are exported at the top level.

```typescript
import { Product, CreateProductInput, ProductStatus } from 'propeller-sdk-v2';

const status: ProductStatus = ProductStatus.A;

const input: CreateProductInput = {
  /* fields */
};

// Service methods return a class instance — `product instanceof Product` is true.
const product: Product = await productService.getProduct({ productId: 1 });
```

If you prefer the `Enums.X.Y` qualified call-site form, use a namespace import:

```typescript
import * as Enums from 'propeller-sdk-v2';
const status = Enums.ProductStatus.A;
```

`JSON.stringify` on response objects produces a full payload (enumerable own properties from `Object.assign`), so Redux DevTools / IndexedDB / SSR rehydration all work normally. Note: instance methods are *not* serialized, so re-hydrated state will be a plain object — wrap with `new Product(rehydrated)` if you need the prototype back.

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

## Documentation

See the [generated TypeDoc site](https://propeller-commerce.github.io/propeller-sdk-v2/) for the full API reference.

## License

MIT — see `LICENSE`.
