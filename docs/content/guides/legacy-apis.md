---
id: legacy-apis
title: Legacy / deprecated APIs
sidebar_position: 7
description: Backward-compatible exports that are deprecated.
---

# Legacy / deprecated APIs

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
import { initializeClient, getClient, productService } from '@propeller-commerce/propeller-sdk-v2';
initializeClient({ endpoint: '/api/graphql' });
const products = productService(getClient());

// ✅ Preferred — explicit client
import { createClient, productService } from '@propeller-commerce/propeller-sdk-v2';
const client = createClient({ endpoint: '/api/graphql' });
const products = productService(client);
```
