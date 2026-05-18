---
id: enums-and-serialization
title: Enums and serialization
sidebar_position: 6
description: Enum imports and JSON serialization.
---

# Enums and serialization

## Enum imports

Enums are top-level exports. Use direct or namespace imports:

```typescript
// Direct:
import { ProductStatus } from 'propeller-sdk-v2';
const status = ProductStatus.A;

// Namespace (preferred by the audited consumer apps):
import * as Enums from 'propeller-sdk-v2';
const status = Enums.ProductStatus.A;
```

## Serialization

Every response and input type is a plain TypeScript `interface`. Service
methods return plain JSON values typed as those interfaces — what the server
sends, accessed by field:

```typescript
import type { Product, CreateProductInput } from 'propeller-sdk-v2';
import { ProductStatus } from 'propeller-sdk-v2';

const status: ProductStatus = ProductStatus.A;
const input: CreateProductInput = { /* fields */ };

const product = await productService(client).getProduct({ productId: 1 });
product.id;
product.sku;
product.price?.gross;
```

Because responses are plain objects, `JSON.stringify` / `JSON.parse`
roundtrips (Redux DevTools, IndexedDB, SSR hydration, localStorage) work
cleanly — no rehydration step.
