---
id: build-a-frontend
title: Build a frontend
sidebar_position: 3
description: An end-to-end walkthrough — initialise the client, fetch products, render, and handle errors.
---

# Build a frontend

This walkthrough stitches the core pieces together: initialise the client once,
fetch data through a typed service, render it, and handle errors.

## 1. Initialise the client once

Create the client at your app entry point and reuse it. Proxy mode keeps your
API key server-side.

```typescript
import { createClient } from 'propeller-sdk-v2';

export const client = createClient({
  endpoint: '/api/graphql',          // your proxy route
  securityMode: 'proxy',
  defaultLanguage: 'NL',
  getAccessToken: () => localStorage.getItem('access_token') ?? undefined,
});
```

See [Client configuration](/configuration/client-config) for every field and
[Proxy contract](/configuration/proxy-contract) for what your proxy must do.

## 2. Fetch data through a typed service

Services group related operations. Prefer the factory form — it tree-shakes,
so only the operations you call are bundled.

```typescript
import { productService } from 'propeller-sdk-v2';
import { client } from './client';

const products = productService(client);

const list = await products.getProducts({
  input: { page: 1, offset: 20, term: 'laptop', language: 'NL' },
});
```

The return type is the operation's named GraphQL type. Only the fields the
operation selects are populated — read them with optional chaining. See
[Operation variables and return shapes](/guides/operation-variables).

## 3. Render

Responses are plain JSON objects typed as interfaces, so they render and
serialize without any rehydration step.

```tsx
function ProductList({ items }: { items: Product[] }) {
  return (
    <ul>
      {items.map((p) => (
        <li key={p.id}>
          {p.sku} — {p.price?.gross}
        </li>
      ))}
    </ul>
  );
}
```

For localized fields (e.g. `product.names`), use the `getLocalized` helper —
see [Localized fields](/guides/localized-fields).

## 4. Handle errors

Service methods throw `GraphQLOperationError` only on a hard failure (errors
and no data). Partial responses return data and log the errors.

```typescript
import { GraphQLOperationError } from 'propeller-sdk-v2';

try {
  const product = await products.getProduct({ productId: 1 });
} catch (err) {
  if (err instanceof GraphQLOperationError) {
    console.error(err.operationName, err.errors);
  } else {
    console.error('Request failed:', err);
  }
}
```

Full detail in [Error handling](/guides/error-handling).

## Next steps

- [Using the SDK: services](/guides/services)
- [Authentication](/configuration/authentication)
- [API Reference](/api/)
