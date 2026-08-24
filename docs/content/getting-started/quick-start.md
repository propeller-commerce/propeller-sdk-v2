---
id: quick-start
title: Quick start
sidebar_position: 2
description: Create a client and call a typed service.
---

# Quick start

```typescript
import { createClient, productService, ProductStatus, Format, Fit } from '@propeller-commerce/propeller-sdk-v2';

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

## Upgrading from v0.9.x

The class form continues to work in v0.10.0 as a thin backward-compatible
wrapper:

```typescript
import { GraphQLClient, ProductService } from '@propeller-commerce/propeller-sdk-v2';
const client = new GraphQLClient({ endpoint: '/api/graphql' });
const productService = new ProductService(client);
const product = await productService.getProduct({ productId: 1 });
```

See the [v0.9.0 migration guide](/archive/migration-0.9.0) and the
[Changelog](/changelog) for the full upgrade path. For the full configuration
surface, see [Client configuration](/configuration/client-config). To build a
complete app, follow [Build a frontend](/getting-started/build-a-frontend).
