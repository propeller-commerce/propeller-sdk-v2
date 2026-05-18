---
id: operation-variables
title: Operation variables and return shapes
sidebar_position: 2
description: How service method variables and return types work.
---

# Operation variables and return shapes

Each service method takes the variables its GraphQL operation actually
declares. Methods that need more than a single input take one `variables`
object argument:

```typescript
import { productService, type ProductUpdateVariables } from 'propeller-sdk-v2';

const products = productService(client);

// `productUpdate` declares $productId: Int! and $input: UpdateProductInput!
const vars: ProductUpdateVariables = {
  productId: 123,
  input: { /* UpdateProductInput */ },
};
await products.updateProduct(vars);
```

## Two interface families, by design

You'll see two naming shapes and it's worth knowing why:

- **`<Op>Variables`** (e.g. `ProductUpdateVariables`) — *generated* from the
  GraphQL operation. Field names and required/optional status mirror the
  operation's declared variables exactly. Re-exported through an explicit
  public barrel so they can never collide with the hand-authored names below.
- **Hand-authored** interfaces use *both* suffixes — `<Op>QueryVariables`
  (e.g. `ProductQueryVariables`) and plain `<Op>Variables` (e.g.
  `CartStartVariables`). They live in the service file, kept because they carry
  per-field JSDoc and are the stable names existing consumers already import.

The suffix is therefore *not* a reliable generated-vs-hand-authored signal. You
don't have to track which is which day-to-day — your editor resolves the
correct type from the method signature.

Methods whose operation takes a single value keep their direct signature
(e.g. `getProductSurcharges(productId)`, `loginService.login(input)`).
Operations that declare no variables take no argument
(`logoutService.logout()`).

## SDK-defaulted variables

Two variables are filled in for you when omitted: `language` (falls back to the
client's `defaultLanguage`) and `imageVariantFilters` (defaults to
`{ transformations: [] }`). Both are surfaced as *optional* on the interfaces
even where the operation declares them non-null, because the SDK guarantees a
valid value reaches the wire. An explicit value always wins.

## Return types are the named type; only selected fields are populated

A method's return type is the operation's named GraphQL type (e.g.
`updateProduct(...)` → `Promise<Product>`). That type describes the *shape* of
the entity, not a promise that every field is filled. Each operation only
selects — and the server only returns — the fields its GraphQL document asks
for. This is normal GraphQL partial-response behaviour: read only the fields
the operation fetches, exactly as with any GraphQL client.

> **Known, accepted limitation.** The return type is the *full* named interface
> even though a given operation populates only a subset — so a field the
> interface declares non-optional can be `undefined` at runtime, and
> **TypeScript will not flag it**. This is a deliberate trade-off: the SDK does
> **not** generate per-operation result types or widen returns to `Partial<T>`.
> Treat any field outside the operation's selection set as possibly absent and
> use optional chaining (`product.price?.gross`). To see exactly which fields
> an operation selects, browse the [API Reference](/api/).
