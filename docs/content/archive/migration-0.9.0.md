---
id: migration-0.9.0
title: Migrating to v0.9.0
sidebar_label: v0.9.0 migration
description: Archived migration guide for the v0.9.0 release.
---

# Migrating to propeller-sdk-v2 v0.9.0

This guide lists every change applied to the two reference consumer apps (`propeller-next`, `propeller-vue`) during the v0.9.0 bump, and turns them into a checklist any other consumer can follow.

Most call sites need **only one mechanical edit** (split `Enums` out of named imports into a star import). A small set of files need substantive fixes for renamed fields, paginated return shapes, and deep-import paths. The substantive changes are listed in full below — search your codebase for the symbols and apply.

## TL;DR — apply in this order

1. **Bump the dependency** to `0.9.0` in `package.json`. Re-install.
2. **Run typecheck** (`tsc --noEmit` / `vue-tsc --noEmit`) and grep for the symbols in the “Substantive fixes” section.
3. **Fix the `Enums` import** in every file that uses it (single regex below; covers ~90 % of breakages).
4. **Rewrite deep imports** that read from `propeller-sdk-v2/dist/...` to read from the top-level entry.
5. **Apply per-area substantive fixes** (cart, cluster config, order list, etc.) listed below.
6. Re-run typecheck. Iterate on anything still red — the residual errors should all map back to a row in the “Removed / renamed” table.

## 1. The dominant fix: `Enums` import

Before 0.9.0 the SDK exported a re-export object called `Enums`. The 0.9.0 build expects the namespace-import form (`import * as Enums from 'propeller-sdk-v2'`). Almost every consumer file hits this.

**Before**

```ts
import { Cart, Contact, Enums, GraphQLClient } from 'propeller-sdk-v2';
```

**After**

```ts
import * as Enums from 'propeller-sdk-v2';
import { Cart, Contact, GraphQLClient } from 'propeller-sdk-v2';
```

The mechanical rule: pull the `Enums` identifier out of the named-import list, and add a separate star import on the line above. Everything else in the file stays the same — `Enums.CartAddressType.INVOICE` etc. continues to work.

This applies whether your existing form was `import { Enums } from 'propeller-sdk-v2'` or `import { ... Enums ... }` interleaved with other named imports.

**Files affected in propeller-next:** ~40
**Files affected in propeller-vue:** ~40

If you want a single sweep, this regex catches the common shapes. Run it across `**/*.{ts,tsx,vue}`:

```
find pattern : import\s+\{([^}]*?)\bEnums\b,?\s*([^}]*)\}\s+from\s+['"]propeller-sdk-v2['"];?
replacement  : (manual — split into two lines as shown above)
```

## 2. Deep imports — switch to top-level

The 0.9.0 build moves a few cross-module types so deep imports break. Switch any `propeller-sdk-v2/dist/...` import to read from the package root.

**Before**

```ts
import type { CartQueryVariables } from 'propeller-sdk-v2/dist/service/CartService';
import { ViewerInput } from 'propeller-sdk-v2/dist/service/UserService';
```

**After**

```ts
import type { CartQueryVariables } from 'propeller-sdk-v2';
import { ViewerInput } from 'propeller-sdk-v2';
```

If a symbol you’re reaching for via deep import isn’t re-exported from the root, file an issue — every public type should be reachable from `propeller-sdk-v2` directly.

**Files in propeller-next:** `composables/shared/utils/fetchActiveCart.ts`, `lib/services/AuthService.ts`

## 3. Substantive fixes — search & replace targets

These are the **non-mechanical** edits. Search your repo for each pattern; if you find it, apply the fix.

### 3.1 `Order.date` — removed

`order.date` was the upstream-deprecated alias for `createdAt` and is gone. Use `order.createdAt` directly.

```ts
// Before
formatDate(order.date || order.createdAt || '');

// After
formatDate(order.createdAt || '');
```

### 3.2 `Cart.shopId`, `Cart.userId`, `Cart.user` — removed

Drop any reference. In the propeller-next reference, `utils/cartHelpers.ts#serializeCart` removed the `shopId: cart.shopId` line.

```ts
// Before
const cleanCart = {
  cartId: cart.cartId,
  channelId: cart.channelId,
  shopId: cart.shopId,     // remove
  contactId: cart.contactId,
  ...
};

// After
const cleanCart = {
  cartId: cart.cartId,
  channelId: cart.channelId,
  contactId: cart.contactId,
  ...
};
```

If you were calling `cartService.setCartUser(...)` or accessing `cart.user` / `cart.userId`, switch to the supported `cart.contactId` / `cart.customerId` accessors.

### 3.3 `Order.shopId`, `Order.externalId` — removed

Same pattern as Cart. Remove the field; if you need the data, fetch via the contact / customer linkage.

### 3.4 `Cart` deserialization — no longer a class constructor

`deserializeCart` in propeller-next used `new Cart(cartData)`. Cart wrapper classes use `Object.assign` and accept partials; you can cast the plain JSON to `Cart` directly.

```ts
// Before
return new Cart(cartData);

// After
return cartData as Cart;
```

(Optional: if you want runtime instance methods like getters, you can still wrap with `new Cart(cartData)` — both forms now work.)

### 3.5 Side-effect-free service constructors

If you were calling `await cartService.initializeService()` (or any `initializeService` on a service singleton), delete the call. Services are no longer stateful — they take a `GraphQLClient` at construction time and that’s it.

```ts
// Before
await cartService.initializeService();
const updatedCart = await populateCartAddresses(cartToUse);

// After
const updatedCart = await populateCartAddresses(cartToUse);
```

### 3.6 `Taxcode` enum renamed to `TaxCode`

Casing aligns with the upstream schema. Update any references.

```ts
// Before
import { Taxcode } from 'propeller-sdk-v2';
const code: Taxcode = Taxcode.H;

// After
import { TaxCode } from 'propeller-sdk-v2';
const code: TaxCode = TaxCode.H;
```

If you’re reading this via `Enums.Taxcode.*`, change to `Enums.TaxCode.*`.

## 4. Removed services / methods

If you imported any of these by name, the import is now broken. They have **no direct replacement** — the upstream schema removed the read side. Most consumers don’t touch them; if you do, the migration is non-mechanical and depends on what the call was doing.

### Service files deleted entirely

- `ExternalAddressService`
- `SparePartService`
- `SiteService`
- `SparePartsMachineMediaService`
- `MediaService` (top-level grab-bag — the per-type services `MediaImageService`, `MediaVideoService`, `MediaDocumentService`, `MediaAttachmentService` are still present)

### Methods removed (service still exists)

| Service                  | Removed method(s)                                              |
| ------------------------ | --------------------------------------------------------------- |
| `ClusterService`         | `getClusters`                                                   |
| `AddressService`         | `getAddressesByUserId`                                          |
| `UserService`            | `updateUser`, `userAddressCreate`, `userAddressUpdate`, `userAddressDelete` |
| `MediaAttachmentService` | read methods (`getMediaAttachment*`); CRUD mutations still work |
| `WarehouseAddressService`| read methods; CRUD mutations still work                         |

### Methods now marked `@deprecated` (still callable, may be removed in 1.0)

- `UserService.logout` / `LogoutService.logout`
- `BundleService.bundleAddItems` (upstream-deprecated wire name; method still works)
- `CartService.cartSetUser`
- `PasswordResetService.publishPasswordResetEmailEvent`
- `AddressService.getAddressesByOrderId`

## 5. Internal renames you do **not** need to act on

These are wire-level GraphQL operation renames. The TypeScript service method names are unchanged, so your code is unaffected — but if you read SDK source you’ll see different `executeQuery('...')` strings than before.

| TS method (unchanged)                                  | Old op name                    | New op name              |
| ------------------------------------------------------ | ------------------------------ | ------------------------ |
| `ClusterService.getClusterConfig`                      | `clusterGetConfig`             | `clusterConfig`          |
| `MachineService.updateMachine`                         | `machineUpdate`                | `machineUpsert`          |
| `RegisterContactResponseService.registerContact`       | `registerContact`              | `contactRegister`        |
| `RegisterCustomerResponseService.registerCustomer`     | `registerCustomer`             | `customerRegister`       |
| `SparePartsMachineService.getSparePartsMachine`        | `sparePartsMachine`            | `machine`                |
| `SparePartsMachineService.getSparePartsMachines`       | `sparePartsMachines`           | `machines`               |
| `SparePartsMachineService.createSparePartsMachine`     | `sparePartsMachineCreate`      | `machineCreate`          |
| `TenderService.addItemToTender`                        | `tenderAddItem`                | `tenderAddItems`         |
| `TemplateService.getDocumentTemplate` / `getEmailTemplate` | `documentTemplate` / `emailTemplate` | `template` (unified) |
| `ClusterConfigService.updateClusterConfigSetting`      | `clusterConfigSettingUpdate`   | `clusterConfigUpdateSetting` |

`TenderService.addItemToTender` still accepts a single item — the SDK wraps it into the new `TenderAddItemsInput { products: [...] }` envelope internally. A new `addItemsToTender(id, input: TenderAddItemsInput)` is also available if you have multiple items.

`TemplateService.getDocumentTemplate` / `getEmailTemplate` now both return `IBaseTemplate` (interface). If your code needs the concrete subtype, discriminate via `__typename` or cast.

## 6. Paginated return-shape changes

A few service methods used to return `T[]` but the upstream schema is paginated. Returns are now the wrapping `XResponse` (with `.items`). If you destructured the array directly you’ll need to read `.items`.

| Method                                  | Old return            | New return                          |
| --------------------------------------- | --------------------- | ----------------------------------- |
| `CategoryService.getCategories`         | `Category[]`          | `CategoryResponse` (`.items`)        |
| `MediaImageService.deleteMediaImage`    | `boolean`             | `DeleteMediaImageResponse`           |
| `MediaVideoService.deleteMediaVideo`    | `boolean`             | `DeleteMediaVideoResponse`           |
| `MediaDocumentService.deleteMediaDocument` | `boolean`          | `DeleteMediaDocumentResponse`        |
| `MediaAttachmentService.deleteMediaAttachment` | `boolean`     | `DeleteMediaAttachmentResponse`      |
| `AttributeService.getAttributeResultBy*` (6 methods) | `AttributeResult[]` | `AttributeResultResponse` |
| `ClusterConfigService.getClusterConfig` | `ClusterConfig`       | `ClusterConfigResponse`              |
| `ClusterConfigService.updateClusterConfigSetting` | various   | `UpdateClusterConfigSettingResponse` |
| `BundleService.addItemsToBundle`        | `boolean`             | `BundleItem[]`                       |
| `CartService.bulkUpdateCartItems`       | `boolean`             | `BulkResponseData`                   |
| `InventoryService.getInventory`         | `Inventory`           | `InventoryResponse`                  |
| `PriceService.getDefaultPrice`, `explainPrice` | `ProductPrice` | `ProductPrice[]`                     |
| `PaymentService.deletePayment`          | `boolean`             | `Payment`                            |
| `SurchargeService.deleteSurcharge`      | `boolean`             | `Surcharge`                          |
| `OrderService.sendOrderConfirmationEmail` | `boolean`           | `SendOrderConfirmResponseType`       |
| `OrderService.getOrderPDF`, `getQuotePDF` | `string`            | `Base64File`                         |
| `TemplateService.renderDocumentTemplateToPDF` | `string`        | `Base64File`                         |
| `CategoryService.addProductsClustersToCategory` | `boolean`     | `CategoryAddProductsClustersResponse` |
| `CategoryService.removeProductsClustersFromCategory` | `boolean`| `CategoryRemoveProductsClustersResponse` |

If you’ve been doing `(await categoryService.getCategories(...)).map(...)`, change to `(await categoryService.getCategories(...)).items.map(...)`.

## 7. Type-shape changes (object types)

If you constructed any of these objects in app code (rare — they’re mostly response types you read), update the field types:

| Type                          | Field        | Old type            | New type                                  |
| ----------------------------- | ------------ | ------------------- | ----------------------------------------- |
| `BusinessRuleDateExpression`  | `type`       | `string`            | `BusinessRuleExpressionTypes` enum        |
| `BusinessRuleDateExpression`  | `operator`   | `string`            | `BusinessRuleDateExpressionOperators` enum |
| `OrderRevision`               | `snapshot`   | `any`               | `Order`                                   |
| `Tender`                      | `revisions`  | `any[]`             | `OrderRevisionResponse`                   |

## 8. Input-shape changes

If you build any of these inputs in app code:

| Input                          | Field          | Old type                  | New type                          |
| ------------------------------ | -------------- | ------------------------- | --------------------------------- |
| `UpdateMediaDocumentInput`     | `uploadDocument` | `UploadFileInput`       | `UploadFileInput[]` (now optional) |
| `UpdateMediaImageInput`        | `uploadImage`  | `UploadFileInput`         | `UploadFileInput[]` (now optional) |
| `UpdateMediaVideoInput`        | `video`        | `UploadVideoInput`        | `UploadVideoInput[]` (now optional) |
| `UpdateSurchargeInput`         | `taxCode`      | `Taxcode`                 | `TaxCode` (rename + optional)     |
| `SurchargeSearchInput`         | `taxCode`      | `Taxcode`                 | `TaxCode` (rename + optional)     |
| `OrderRevisionSearchInput`     | `sortInputs`   | `any[]`                   | `OrderRevisionSortInput[]`        |
| `TemplateErrorLogSearchInput`  | `sortInputs`   | `any[]`                   | `TemplateErrorLogSortInput[]`     |

## 9. Recommended migration sequence

For a medium-sized app (≈50 SDK-touching files):

1. Bump `propeller-sdk-v2` in `package.json` to `0.9.0`, re-install.
2. Run `tsc --noEmit` (or `vue-tsc --noEmit`). Count the errors — that’s your scope.
3. Apply the **Enums import fix** across the codebase. This will collapse 80–90 % of errors.
4. Re-run typecheck. The remaining errors should be specific call sites — match each one to a row in §3–§8 above.
5. Final typecheck should be clean. Run your test suite and exercise the affected screens in dev (cart, checkout, category list, product detail, order history, address book).

Reference branches for diffs you can copy:
- propeller-next: working tree on the `develop` branch (uncommitted)
- propeller-vue: working tree on the `develop` branch (uncommitted), except `useProductInfo.ts` which still needs §3.1 applied

## 10. Reporting drift

If you hit a breakage that isn’t covered here, it’s likely a missed schema delta. Capture: the old call site, the new error, and what the schema currently exposes — open an issue against `propeller-sdk-v2`. The SDK now ships a schema-alignment test (`tests/integration/SchemaAlignment.test.ts`) but it can’t catch consumer-side semantic changes, only wire-level drift.
