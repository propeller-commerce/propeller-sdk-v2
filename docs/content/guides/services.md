---
id: services
title: Services
sidebar_position: 1
description: How services group GraphQL operations.
---

# Services

Services group related GraphQL operations. Each service is exposed two ways:

- **Factory function** (preferred): `cartService(client)` returns an object
  with the service methods. Tree-shakeable — only the operations you actually
  call are bundled.
- **Class form** (backward-compatible): `new CartService(client)` returns a
  thin wrapper around the factory. Same method names. Most signatures are
  unchanged from v0.9.x; methods whose operation needs more variables than the
  old signature could express now take a single `variables` object — see
  [Operation variables](/guides/operation-variables).

Core services include `productService`, `orderService`, `cartService`,
`userService`, `paymentService`, `categoryService`, `attributeService`,
`discountService`, `bundleService`, `crossupsellService`, `companyService`,
`taxService`, `shipmentService`, `warehouseService`, `businessRuleService` —
52 in total covering catalog, cart, order, user, B2B, media, and admin
domains. The [API Reference](/api/) lists every one.

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

Service methods accept an optional trailing `fetchOptions` argument for
per-call transport hints (e.g. Next.js data-cache control). The codegen
classifier strips this parameter when checking alignment, so adding cache
hints does not affect type drift. See
[Per-operation cache hints](/configuration/cache-hints).

```typescript
const product = await productService(client).getProduct(
  { productId: 42, language: 'NL' },
  { next: { revalidate: 300, tags: ['catalog', 'product:42'] } },
);
```
