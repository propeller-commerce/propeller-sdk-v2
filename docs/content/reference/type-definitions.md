---
id: type-definitions
title: Type definitions
sidebar_position: 1
description: How types are shaped, and the schema-type drift guard.
---

# Type definitions

Every response and input type is a plain TypeScript `interface`. Service
methods return plain JSON values typed as those interfaces — read fields
directly; localized arrays use the
[`getLocalized` helper](/guides/localized-fields).

```typescript
import type { Product, CreateProductInput } from 'propeller-sdk-v2';
import { ProductStatus } from 'propeller-sdk-v2';

const status: ProductStatus = ProductStatus.A;
const input: CreateProductInput = { /* fields */ };

// Typed as `Product`; only the fields the `product` operation selects are
// populated — see "Return types" in Operation variables. Read with optional
// chaining.
const product = await productService(client).getProduct({ productId: 1 });
product.id;
product.sku;
product.price?.gross;
```

Browse the full generated reference for every type, enum, service, and the
client in the [API Reference](/api/).

## Schema-type drift guard

`src/type/*.ts` and `src/enum/*.ts` are hand-authored. `npm run check:type-drift`
(part of `npm run validate`, and a CI step) projects the upstream GraphQL
schema and fails the build when the committed types/enums structurally diverge
from it — a missing/extra field, an enum-value change, a nullability flip, or a
generated operation that selects a deprecated field.

Two rules to know:

- **Deprecated schema members are intentionally omitted.** A field or enum
  value the schema marks `@deprecated` is dropped from the reference
  projection. Its absence from the SDK is the *correct* state.
- **`scripts/.schema-drift-exceptions.json` is a reviewed debt ledger.**
  Pre-existing drift is baselined there so the guard catches only *new*
  divergence. The file should *shrink* over releases.

It is offline-first: it uses the committed schema snapshot when no live
`schema.json` is present, so CI and forks pass without credentials.
