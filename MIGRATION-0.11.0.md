# Migrating to propeller-sdk-v2 v0.11.0

v0.11.0 is **purely additive**. No existing code needs to change. The release
introduces a per-operation `fetchOptions` slot that host frameworks (Next.js
in particular) can use to attach transport-level cache hints to the
underlying `fetch()` call.

If you don't use Next.js (or aren't ready to opt into server-side data
caching), upgrade and ignore the new field — every existing call signature is
unchanged.

---

## What's new

### `GraphQLFetchOptions`

A new exported type, deliberately narrow:

```ts
export interface GraphQLFetchOptions {
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: readonly string[];
  };
}
```

The shape happens to match the Next.js `fetch` extension. The SDK has no
runtime dependency on Next; it simply forwards `cache` and `next` to
`fetch()` if you supply them.

### `GraphQLOperation.fetchOptions`

```ts
export interface GraphQLOperation {
  operationName?: string;
  query: string;
  variables?: Record<string, any>;
  fetchOptions?: GraphQLFetchOptions;   // ← new, optional
}
```

`client.execute({ ..., fetchOptions })` is the lowest-level entry point.

### `runOperation()` gains an optional fifth argument

```ts
runOperation(client, document, operationName, variables, fetchOptions?)
```

Every service factory routes through `runOperation`, so adding cache hints
to a particular call goes via the operation object — no per-service input
shape needs to change.

---

## Recommended pattern for Next.js consumers

```ts
// In your Server Component / Server Action:
import { createClient, type GraphQLFetchOptions } from 'propeller-sdk-v2';

const client = createClient({ endpoint: process.env.GRAPHQL_ENDPOINT! });

const product = await client.execute({
  query: getProductDocument,
  variables: { productId: 42 },
  operationName: 'GetProduct',
  fetchOptions: {
    next: {
      revalidate: 300,                       // 5-minute window
      tags: ['catalog', 'product', 'product:42'],
    },
  },
});
```

To bust the cache from a route handler / Server Action:

```ts
import { revalidateTag } from 'next/cache';
revalidateTag('product:42');
```

---

## Things to know

### `fetchOptions` is NEVER in the cache key

The SDK serialises only `{ query, variables, operationName }` into the
request body. Two calls with identical operations but different `tags` hit
the **same** Next.js cache entry. This is intentional — `fetchOptions`
controls transport, not the wire payload.

### Why the type isn't `RequestInit`

We deliberately did not type `fetchOptions` as a full `RequestInit`. That
would have let callers reach `method`, `body`, `headers`, and `signal` —
all of which the SDK owns (HTTP method, JSON payload, auth header, 30 s
timeout signal). The narrow type makes the contract obvious and the SDK's
invariants enforceable at the type level.

`Pick<RequestInit, 'next' | 'cache'>` was also rejected: `next` isn't in
standard `lib.dom` `RequestInit`, so the Pick would silently degenerate to
just `cache`.

### `exactOptionalPropertyTypes`

If your project enables `exactOptionalPropertyTypes` in `tsconfig.json`,
**omit** the `fetchOptions` field rather than setting it to `undefined`:

```ts
// ✗ Rejected under exactOptionalPropertyTypes
client.execute({ query, variables, fetchOptions: undefined });

// ✓ Omit when unused
client.execute({ query, variables });
```

### `AbortSignal` and the cache

The SDK still attaches its 30 s timeout signal to every `fetch()` call. In
Next 15+ this does **not** opt the call out of the data cache (the
caching-with-signal bug was Next 13/14 era). If you observe cache misses
where you expected hits, verify with the SDK's `debug: true` flag and the
backend access log; in our testing the signal does not interfere.

### Lockfile bump

If you're consuming the SDK via `npm`, run `npm install` after upgrading so
your lockfile resolves the new version. Projects pinning via git URL
(`github:...#master`) need `npm install <pkg> --package-lock-only` to
re-resolve the ref.

---

## What didn't change

- All ~117 service-method signatures.
- The wire payload format (`{ query, variables, operationName }`).
- The proxy/direct security mode logic.
- The auth-token resolver contract (`getAccessToken`).
- The `runOperation` partial-error handling.
- Every existing type export.

If your code compiles under v0.10.2, it compiles under v0.11.0 without edits.
