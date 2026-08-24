---
id: stock-filtering
title: Stock filtering
sidebar_position: 9
description: Filter catalogue and category listings by inventory quantity.
---

# Stock filtering

Product searches accept an `inventory` filter that narrows results by stock
level. Filtering happens **server-side**, so the pagination fields on the
response (`itemsFound`, `pages`) describe the *filtered* set and can be used
directly for paging — you never have to filter client-side and re-count.

```typescript
import { createClient, productService } from '@propeller-commerce/propeller-sdk-v2';

const products = productService(createClient({ endpoint: '/api/graphql' }));

// In-stock products only
const inStock = await products.getProducts({
  input: {
    page: 1,
    offset: 24,
    inventory: { totalQuantity: { greaterThan: 1 } },
  },
});

console.log(inStock.itemsFound); // count of IN-STOCK products, not the catalogue
```

## Operators are inclusive

`NumberSearchInput` has three operators, and the two range ones are **inclusive
despite their names**:

| Operator | Means | Not |
| --- | --- | --- |
| `greaterThan: N` | stock `>= N` | not `> N` |
| `lessThan: N` | stock `<= N` | not `< N` |
| `equal: N` | stock `== N` | |

Products that were never stocked have no inventory record and count as **0**.

## The two cases you actually want

```typescript
// ✅ In stock — at least one available
{ inventory: { totalQuantity: { greaterThan: 1 } } }   // >= 1

// ✅ Out of stock — exactly zero, including never-stocked products
{ inventory: { totalQuantity: { equal: 0 } } }

// ✅ Out of stock, also catching negative balances
{ inventory: { totalQuantity: { lessThan: 0 } } }      // <= 0
```

:::warning Don't use `lessThan: 1` for out-of-stock
`lessThan: 1` means `<= 1`, so it includes every product with exactly one
item left — which is in stock. Use `equal: 0` or `lessThan: 0` instead.
:::

`greaterThan: 1` (>= 1) likewise *does* include stock-1 products. That is
correct: one item is in stock.

## Where it is available

The same `inventory` filter is accepted on every product-search input, so it
works for catalogue listings, category listings and spare-parts searches alike:

| Input type | Reached via |
| --- | --- |
| `ProductSearchInput` | `productService.getProducts({ input })` |
| `CategoryProductSearchInput` | the `categoryProductSearchInput` variable on the category queries |
| `ProductSearchByCategoryInput` | `productService.productSearchByCategory({ input })` |
| `ProductSearchSearchInput` | product search |
| `SparePartsMachineProductSearchInput` | spare-parts machine search |

Besides `totalQuantity` (all warehouses), the filter also exposes
`localQuantity` (local warehouse) and `supplierQuantity` (supplier warehouse).
All three take the same `NumberSearchInput` shape and the same inclusive
operator semantics.
