---
id: caching
title: Caching recipes
sidebar_position: 4
description: Host-framework patterns for caching anonymous catalog reads — Next.js data cache, in-process Express proxy, Cloudflare Workers, Nitro.
---

# Caching recipes

The SDK doesn't cache anything itself. Caching is the host framework's job;
the SDK's job is to forward your cache metadata verbatim. There are two
shapes for that metadata, and which one you use depends on **where the
cache lives**.

| Cache lives in… | Use | Reason |
| --- | --- | --- |
| The runtime that handles `fetch()` (Next.js, Cloudflare Workers, Nitro) | [`fetchOptions`](/configuration/cache-hints) on the operation | Those runtimes read cache hints directly off the `fetch()` call. |
| An application-level proxy the SDK posts to (a Node SSR server's `/api/graphql`) | `headers` on [`GraphQLClientConfig`](/configuration/client-config) | The proxy can't see `fetchOptions` — it only sees the HTTP request. Cache metadata travels in headers. |

Both patterns share the same design rules:

- **Anonymous reads are cached. Authenticated reads are not.** Detect
  auth at the cache boundary (the Next.js cookie read, or a server-side
  check before posting) and skip the cache hints for logged-in users —
  their responses are personalised.
- **Mutations are never cached.** GraphQL `mutation` operations always
  hit the upstream. Most are issued client-side anyway.
- **Tag your reads by entity.** A single `revalidateTag('product:42')`
  call should be able to bust every cached response that touched
  product 42. Use a `tagFor(entity, id?)` helper so the tag scheme is
  consistent across the codebase.

## Recipe 1 — Next.js App Router

The runtime is Next.js itself, so `fetchOptions.next` is the right slot.

```typescript title="lib/server.ts"
import { createClient, type GraphQLFetchOptions } from '@propeller-commerce/propeller-sdk-v2';
import { cookies } from 'next/headers';

const ANONYMOUS_TTL = 300; // 5 minutes
const TAG_CATALOG = 'catalog';

export function tagFor(
  entity: 'product' | 'category' | 'cluster' | 'menu' | 'search',
  id?: number | string,
): string {
  return id === undefined ? entity : `${entity}:${id}`;
}

// One process-wide client. The cookie read decides per-request whether
// to attach cache hints; the client itself is stateless.
const client = createClient({ endpoint: process.env.GRAPHQL_ENDPOINT! });

export async function fetchProduct(productId: number) {
  // Reading the cookie forces dynamic rendering. Authenticated users
  // bypass the cache automatically — they never get cache hints.
  const isAuthenticated = (await cookies()).has('access_token');
  const fetchOptions: GraphQLFetchOptions | undefined = isAuthenticated
    ? undefined
    : {
        next: {
          revalidate: ANONYMOUS_TTL,
          tags: [TAG_CATALOG, tagFor('product'), tagFor('product', productId)],
        },
      };

  // Service methods take fetchOptions as an optional trailing arg.
  return productService(client).getProduct(
    { productId, language: 'NL' },
    fetchOptions,
  );
}
```

Surgical invalidation from a webhook or admin action:

```typescript title="app/api/revalidate/route.ts"
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  if (req.headers.get('x-revalidate-secret') !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  const { tag } = await req.json();
  // Pass `"*"` for a nuclear wipe — rewrite to your umbrella tag.
  revalidateTag(tag === '*' ? TAG_CATALOG : tag, 'max');
  return NextResponse.json({ ok: true, tag });
}
```

## Recipe 2 — Express / Node SSR proxy

The runtime here is your own Express server; the cache is an in-process LRU
keyed by the request body. The SDK can't reach it via `fetchOptions` (it
posts to your `/api/graphql`, not to a runtime that reads cache hints).
The right transport is **request headers**.

```typescript title="src/lib/server.ts"
import { GraphQLClient, createClient } from '@propeller-commerce/propeller-sdk-v2';

const TAG_CATALOG = 'catalog';
const CACHE_TAGS_HEADER = 'X-Propeller-Cache-Tags';

export function tagFor(
  entity: 'product' | 'category' | 'cluster' | 'menu' | 'search',
  id?: number | string,
): string {
  return id === undefined ? entity : `${entity}:${id}`;
}

// Mint a child client per call that carries the tag set in headers.
// The proxy reads the header and indexes the cached response by tag.
function withCacheTags(
  base: GraphQLClient,
  extraTags: readonly string[],
): GraphQLClient {
  return createClient({
    endpoint: base.getEndpoint(),
    headers: { [CACHE_TAGS_HEADER]: [TAG_CATALOG, ...extraTags].join(',') },
  });
}

export async function fetchProduct(productId: number) {
  const tagged = withCacheTags(client, [
    tagFor('product'),
    tagFor('product', productId),
  ]);
  return productService(tagged).getProduct({ productId, language: 'NL' });
}
```

```javascript title="server.js (excerpt)"
// Express handler parses the header into a tag set, computes SHA-256(body)
// for the cache key, and stores tags → keys for surgical busts:
const cacheTags = parseCacheTagsHeader(req.headers['x-propeller-cache-tags']);
const key = sha256(rawBody);
if (cacheable) {
  const hit = cache.get(key);
  if (hit) return res.status(hit.status).set(hit.headers).end(hit.body);
}
// Forward to upstream, then store with the tag set.
```

The `/api/revalidate` route iterates the tag index and evicts every
entry pinned to the tag. Same wildcard convention works: `{"tag": "*"}`
clears all entries.

## Recipe 3 — Cloudflare Workers / Nitro

Same shape as Next.js, different field semantics. The `next` slot is
populated by Workers' fetch and Nitro's `undici` wrapper; the SDK forwards
it without inspecting the values.

```typescript
const product = await client.execute({
  query: productDoc,
  variables: { productId: 42 },
  operationName: 'product',
  fetchOptions: {
    // Cloudflare Workers: cf-cache-everything semantics.
    // Nitro: forwarded into the undici dispatcher.
    next: { revalidate: 300, tags: ['catalog', 'product:42'] },
  },
});
```

Check your runtime's docs for the supported subset — `revalidate` is
universal; per-runtime extensions of `next` are honoured if the runtime
recognises them and ignored otherwise.

## Don'ts

- **Don't reorder fields in your input objects casually.** Frameworks that
  hash the request body (Next.js, the Express recipe) treat
  `{a: 1, b: 2}` and `{b: 2, a: 1}` as different cache entries. Keep the
  build order stable.
- **Don't put high-cardinality data in tags.** Free-form search terms,
  user IDs, timestamps — each one becomes a tag index entry. Tag by
  entity class instead (`search`, not `search:drill`).
- **Don't cache authenticated reads.** A logged-in user's pricing,
  inventory, and order data are personalised. Skip `fetchOptions` (or
  omit the headers slot) the moment you detect a session.

## See also

- [Per-operation cache hints](/configuration/cache-hints) — the
  `GraphQLFetchOptions` type and its design rationale.
- [Client configuration](/configuration/client-config) — the `headers`
  field for proxy-based cache transports.
- [Direct GraphQL access](/guides/direct-graphql) — `client.execute()`
  is where `fetchOptions` is attached when you bypass the service layer.
