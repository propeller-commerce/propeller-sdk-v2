---
id: cache-hints
title: Per-operation cache hints
sidebar_position: 4
description: GraphQLFetchOptions — the per-call transport-hint slot for host frameworks (Next.js data cache, Cloudflare Workers, Nitro, in-process proxies).
---

# Per-operation cache hints

Added in `v0.11.0`. The SDK ships with no opinion about caching — by default
every operation hits the upstream API on every call. To opt into a host
framework's cache layer, attach a `GraphQLFetchOptions` value to the operation
and the SDK will forward it verbatim to the underlying `fetch()`.

## The type

```typescript
export interface GraphQLFetchOptions {
  /** Standard fetch cache mode (`'force-cache' | 'no-store' | …`). */
  cache?: RequestCache;
  /**
   * Host-framework `fetch()` extension. The de-facto slot used by Next.js,
   * Cloudflare Workers, and Nitro (when wrapping `undici`).
   */
  next?: {
    revalidate?: number | false;
    tags?: readonly string[];
  };
}
```

Exposed from the main entry:

```typescript
import type { GraphQLFetchOptions } from '@propeller-commerce/propeller-sdk-v2';
```

## Why the shape is narrow

`GraphQLFetchOptions` deliberately exposes only two fields. `RequestInit`
was rejected because callers could have reached `method`, `body`, `headers`,
and `signal` — those are SDK invariants (the HTTP method, the JSON payload,
the auth headers, and the 30 s timeout signal). `Pick<RequestInit, 'next' |
'cache'>` was rejected because `next` is not a standard `lib.dom` field —
the Pick would degenerate.

The `next` field name looks Next.js-coupled but is in fact the de-facto
extension slot used by every runtime that extends `RequestInit` — Next,
Cloudflare Workers, and Nitro (via `undici`). The SDK has no Next.js
dependency.

## Cache-key safety

`fetchOptions` is **never** serialised into the GraphQL request body. The
wire payload remains `{ query, variables, operationName }`. Two calls to
the same operation with different `tags` correctly hit the same upstream
cache entry — no cache-key pollution.

```typescript
// Both of these produce IDENTICAL request bodies. A framework data cache
// (e.g. Next.js) will serve the second from cache and merge the tag sets.
client.execute({
  query: productDoc,
  variables: { productId: 42 },
  operationName: 'product',
  fetchOptions: { next: { revalidate: 300, tags: ['catalog'] } },
});
client.execute({
  query: productDoc,
  variables: { productId: 42 },
  operationName: 'product',
  fetchOptions: { next: { revalidate: 300, tags: ['product:42'] } },
});
```

## Attaching via the service layer

Every service method takes `fetchOptions` as an optional trailing argument.
The KEEP / SCALAR classifier in the codegen pipeline strips this parameter
when checking alignment, so adding cache hints does not affect type drift.

```typescript
import { productService } from '@propeller-commerce/propeller-sdk-v2';

const products = productService(client);
const product = await products.getProduct(
  { productId: 42, language: 'NL' },
  { next: { revalidate: 300, tags: ['catalog', 'product:42'] } },
);
```

## Attaching via `client.execute()`

For direct GraphQL access ([Direct GraphQL access](/guides/direct-graphql)),
`fetchOptions` is a field on the operation object itself:

```typescript
const result = await client.execute({
  query: productDoc,
  variables: { productId: 42 },
  operationName: 'product',
  fetchOptions: {
    next: { revalidate: 300, tags: ['catalog', 'product:42'] },
    cache: 'force-cache',
  },
});
```

## When to use `headers` instead

`fetchOptions` is the right slot when the cache lives **inside the runtime
that handles `fetch()`** — Next.js's data cache, Cloudflare Workers' Cache
API, Nitro's storage layer.

If the cache instead lives in an **application-level proxy** that the SDK
calls into (e.g. a Node SSR server with its own LRU keyed by request body),
that proxy needs cache metadata in the **request headers**, not in
`fetchOptions`. For that pattern, set `headers` on
[`GraphQLClientConfig`](/configuration/client-config) so every request
carries the metadata; the proxy reads it from the request and decides
what to do.

The propeller-vue project uses exactly this pattern — see
[Caching guide](/guides/caching) for both shapes side by side.

## `exactOptionalPropertyTypes`

Under `exactOptionalPropertyTypes: true`, an explicit
`fetchOptions: undefined` is rejected. Omit the field instead:

```typescript
// ❌ Type error under exactOptionalPropertyTypes
client.execute({ query, variables, operationName, fetchOptions: undefined });

// ✅ Omit when not needed
client.execute({ query, variables, operationName });
```

## See also

- [Caching guide](/guides/caching) — recipes for Next.js, Express proxy,
  and Cloudflare Workers / Nitro.
- [Client configuration](/configuration/client-config) — the `headers`
  field for proxy-based cache transports.
- [Migration to 0.11.0](https://gitlab.com/propellor-eu/cloud/frontend/sdks/npm/propeller-sdk-v2/-/blob/master/MIGRATION-0.11.0.md)
  — the introduction note and rationale for the narrow type shape.
