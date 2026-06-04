# Changelog

All notable changes to `@propeller-commerce/propeller-sdk-v2` are documented here.

---

## [0.11.1] - 2026-06-04

### Changed

- **Package renamed to `@propeller-commerce/propeller-sdk-v2`** and published to the public
  npm registry for the first time. Install with
  `npm install @propeller-commerce/propeller-sdk-v2`. The GitHub repository URL is unchanged.
  Consumers previously installing via the `github:` URL should switch to
  `"@propeller-commerce/propeller-sdk-v2": "^0.11"`. No API or runtime behaviour changes.

## [0.11.0] - 2026-05-23

Adds a per-operation transport hint slot so host frameworks (Next.js, the
Vue projects' Express SSR proxy, Cloudflare Workers, Nitro) can attach
data-cache options to the underlying `fetch()` call. Additive, fully
backward-compatible — existing callers see no behaviour or type changes.

Note on the `next` field name: it looks Next.js-coupled but is in fact the
de-facto extension slot used by every runtime that extends
`RequestInit` — Next, Cloudflare Workers, Nitro (via `undici`). The SDK
forwards it unmodified and has no Next.js dependency. Hosts that use a
*different* mechanism (e.g. an application-level proxy keyed by request
headers, like propeller-vue's `/api/graphql` LRU) set `headers` on the
client config instead — `fetchOptions` is purely for the runtimes that
consume hints directly on `fetch()`.

### Added

- **`GraphQLFetchOptions` type** (`client/GraphQLClient.ts`). A deliberately
  narrow shape — `{ cache?: RequestCache; next?: { revalidate?, tags? } }` —
  that callers can attach to a single operation to control transport behaviour.
  Exposed via the main entry: `import type { GraphQLFetchOptions } from 'propeller-sdk-v2'`.
- **`fetchOptions` field on `GraphQLOperation`**. Optional. When set, the SDK
  extracts `cache` and `next` from it and forwards them to `fetch()`. The
  shape happens to match the Next.js `fetch` extension, so a Next-aware host
  can attach `{ next: { revalidate: 300, tags: ['product:42'] } }` without
  the SDK taking a Next.js dependency.
- **Optional fifth parameter `fetchOptions` on `runOperation()`** (the helper
  every service method routes through). Service factories that want to expose
  cache hints can pass them through with no per-service type change.

### Why the shape is narrow

We deliberately did NOT type `fetchOptions` as `RequestInit` — callers could
have reached `method` / `body` / `headers` / `signal` and broken SDK
invariants (the HTTP method, the JSON payload, the auth headers, and the
30 s timeout signal are all SDK-owned). `Pick<RequestInit, 'next' | 'cache'>`
was rejected because `next` is not a standard `lib.dom` field — the Pick
would degenerate. The bespoke `GraphQLFetchOptions` keeps the surface tiny
and Next-agnostic.

### Cache-key safety

`fetchOptions` is NEVER serialised into the GraphQL request body. The wire
payload remains `{ query, variables, operationName }`. Two callers passing
the same operation with different `tags` hit the same cache entry — no
cache-key pollution.

### Migration

See [`MIGRATION-0.11.0.md`](./MIGRATION-0.11.0.md) for the Next.js wiring
example and a note on `exactOptionalPropertyTypes`.

---

## [0.10.2] - 2026-05-18

Documentation-quality release. **No runtime behaviour, types, or method
signatures changed** — only JSDoc `@param` names. Safe to upgrade with no
migration.

### Fixed

- Corrected JSDoc `@param` names on service methods so they match the actual
  parameter. Methods aligned to take a single `variables: <Op>Variables`
  object still documented the old conceptual names (`@param input`,
  `@param id`, `@param categoryId`, …); these now read `@param variables`.
  This removes ~350 TypeDoc "@param … which was not used" warnings and makes
  the generated API reference and IDE parameter hints accurate. Correctly
  documented multi-argument methods (e.g. `updateAttribute(id, input)`) are
  unchanged.

---

## [0.10.1] - 2026-05-18

Documentation-only release. **No SDK code, types, or runtime behaviour changed**
— the published package is byte-identical to `0.10.0` apart from the version
number. Safe to upgrade with no migration.

### Changed

- Rebuilt the documentation site from scratch as a Docusaurus 3 app (replacing
  the previous TypeDoc default-theme output) so it matches
  `docs.propeller-commerce.com`: branded navbar/footer, dark mode, local
  search, hand-authored guides plus the full generated API reference. Published
  to the same URL (`https://propeller-commerce.github.io/propeller-sdk-v2/`).
- Dropped the generated docs from the npm tarball (`documentation/**/*` removed
  from `package.json` `files`) — the package is now leaner; the docs live only
  on GitHub Pages.

---

## [0.10.0] - 2026-05-18

> **Breaking release.** Because the changes below are breaking, pin an exact
> version (see Reverting in the migration guide).

Architectural overhaul. Single coordinated breaking release addressing the
class-wrapper, tree-shaking, and deprecated-symbol debt accumulated through
0.x. See [MIGRATION-0.10.0.md](./MIGRATION-0.10.0.md) for the consumer playbook.

### Breaking

- **Wrapper classes → interfaces.** Every type in `src/type/*.ts` (721 files
  — ~400 `*Input` types and ~321 entity/response types) is now
  `export interface X` instead of `export class X` with `Object.assign`
  constructors. Removed ~2,291 auto-generated getter methods. `new Product(…)`,
  `product instanceof Product`, `product.getName('NL')` etc. no longer compile.
  Use direct field access (`product.names`) and the new `getLocalized()` helper
  for localized fields. Audited consumers (`propeller-next`, `propeller-vue`)
  already used direct field access throughout — call-site change is zero.
- **`client` Proxy export removed** from `src/client/GraphQLClient.ts`. Use
  `createClient(config)` and pass the client explicitly to service factories.
- **Service helpers no longer discard partial responses.** `runOperation` (and
  `client.query` / `client.mutate`) now throw `GraphQLOperationError` **only
  when the response has errors AND no `data`**. If the server returns partial
  data alongside errors (the normal GraphQL contract), the data is returned and
  the errors are logged via the client debug channel instead of thrown. Use
  `client.execute()` for the raw `{ data, errors }`. Previously *any* non-empty
  `errors` array threw, discarding partial data.
- **Deprecated `GraphQLClientConfig` keys removed:** `customFragmentsPath`,
  `customQueriesPath`, `customMutationsPath`, `allowCustomOverride`,
  `skipFragmentResolution`. These were no-ops since v0.4.0 (fragment inlining
  moved to build time) and have been emitting warnings.
- **`BaseService` class removed.** Services no longer inherit from a base
  class; each imports its own GraphQL documents and uses the internal
  `runOperation(client, doc, opName, vars)` helper.
- **Service methods aligned to their GraphQL operation's variables.** Every
  service method whose parameters could not express its operation's full set
  of declared variables now takes a single `variables: <Op>Variables` object
  whose fields mirror the operation's declared variables and their
  nullability exactly (`$x: T!` → `x: T`, `$x: T` → `x?: T`). The canonical
  example: `productService.updateProduct(input)` →
  `updateProduct({ productId, input })` — the `productUpdate` mutation
  declares `$productId: Int!` and `$input: UpdateProductInput!`, but the old
  signature could only send `input`, so `productId` was undeliverable. 117
  methods across 41 services were converted; both class form and factory form
  change in lockstep. Scalar-convenience methods that already map 1:1 onto
  their operation's single variable (e.g. `getProductSurcharges(productId)`,
  `loginService.login(input)`) and methods that already took a correct
  `*Variables` object are unchanged. `logoutService.logout()` no longer takes
  a `userId` argument — the `logout` mutation declares no variables. The
  schema-faithful `<Op>Variables` interfaces are exported from the package
  root; a handful of hand-authored interfaces that only existed to model a
  too-narrow argument set were retired in favour of the generated ones.
- **Bundled-map preload removed.** `new GraphQLClient(...)` no longer eats the
  full ~46k-line `queries.ts` + `mutations.ts` bundle on construction. With
  `sideEffects: false` (already set) + per-op imports, a consumer that imports
  only `productService` ships only its query strings.
- **`generated/queries.ts`, `generated/mutations.ts`, `generated/fragments.ts`
  removed.** Replaced by per-op modules under `generated/operations/<op>.ts`,
  each exporting a single `document` string.

### Added

- `createClient(config)` — preferred client factory, mirrors `new GraphQLClient(config)`.
- `GraphQLClientConfig.defaultLanguage` — ISO 639-1 default locale. Service
  factory methods that accept an optional top-level `language` variable and
  aren't given one now fall back to this value (`variables.language ??
  client.getDefaultLanguage()`) before the request is sent. An explicit
  `language` on the call always wins. (In the initial v0.10.0 draft this config
  field was stored but never read by any call site — now wired through.)
- `GraphQLOperationError.document` — the exact GraphQL query/mutation string
  that produced the error, for verbatim logging of failing operations.
- `getLocalized(values, lang, fallback?)` — single helper that replaces ~100
  per-class `getNameLocalized('NL')`-style methods.
- `AnyAddress` — discriminated union of `Address | CartAddress | OrderAddress
  | TenderAddress | WarehouseAddress` for UIs that render any address shape.
- Service factory functions — every `XxxService` class now also has a
  lower-case factory export (`xxxService(client) → { method1, method2, … }`).
  The class form is preserved as a thin BC wrapper.
- `runOperation(client, doc, opName, vars)` exported from `src/service/` —
  internal helper used by every service factory.
- `scripts/fetch-schema.js` — POST-based introspection helper that writes
  `schema.json` as plain UTF-8 (fixes the legacy UTF-16 LE pitfall). Reads
  `PROPELLER_ENDPOINT` + `PROPELLER_API_KEY` from `.env`.
- `tests/integration/schemaAlignment.test.ts` — validates every one of the 459
  generated GraphQL operations against the upstream schema. **The allowlist is
  empty (`{}`)** — every operation matches the live schema with zero drift. The
  test is now a strict regression guard: any new drift fails the build.
- `tests/integration/treeShakeBudget.test.ts` — rewritten to bundle a
  `{ createClient, productService }` fixture with **esbuild** (bundle + minify +
  tree-shaking) and assert real output size. Measured at v0.10.0: ~73 KB
  minified, ~11 KB minified+gzipped (budgets 150 / 30 KB). Replaces the prior
  naive transitive-import file-size sum, which over-counted ~13×.
- `scripts/build-schema-allowlist.js` — one-shot to rebuild the allowlist.

### Deprecated

- `createGraphQLClient(config)` — use `createClient(config)`.
- `initializeClient(config)` + `getClient()` (the global-singleton pattern) —
  create a client with `createClient()` and pass it explicitly to service
  factories. All three now carry `@deprecated` JSDoc and emit a one-time
  `console.warn` (per process, per function) on first use. They remain exported
  from the package root for backward compatibility and will be removed in a
  future release.

### Removed (dead scripts / files)

- `scripts/fix-all-jsdoc.js` and `scripts/fix-jsdoc.ps1` — not wired into build.
- `src/service/BaseService.ts` — replaced by `runOperation`.
- `MIGRATION-0.9.0.md` from repo root — archived to `docs/archive/`.

### Internal

- Build pipeline (`scripts/build-graphql-bundle.js`) now emits per-op modules
  instead of one giant map. Fragment inlining logic is unchanged.
- Source maps and declaration maps are no longer emitted to `dist/cjs`
  (consumers don't need them; saves ~600 KB).
- `tsconfig.cjs.json` sets `declarationMap: false`, `sourceMap: false`.
- **Schema drift fully resolved.** The 177-op allowlist (latent v0.9.x drift
  exposed by the new alignment test) was burned down to zero: authored 46
  missing GraphQL fragments (schema-driven, cycle-broken, required-arg-aware),
  added missing variable declarations to 71 operations (resolved from the
  schema via `graphql` `TypeInfo`), and fixed ~10 individual source bugs
  (wrong fragment-on-type spreads, a missing `...` spread operator, removed
  fields, `Order!` selection-set, `Taxcode` schema-casing).
- **BC class-shim methods are now fully typed.** Every `XxxService` class
  wrapper method mirrors its factory counterpart's parameter and return types
  instead of `(arg: any)` — consumers on the class form regain full
  type-checking.
- Stale `@extends BaseService` JSDoc lines stripped from 22 service files; the
  no-op `{ ...variables }` defensive spread dropped from factory call sites.
- **Variables alignment tooling.** `scripts/build-graphql-bundle.js` now emits
  `src/generated/operationVariables.ts` (one schema-faithful `<Op>Variables`
  per operation) plus an explicit `operationVariablesPublic.ts` re-export
  barrel listing only names the generator declared — so a generated name can
  never ambiguously re-export against a hand-authored service interface.
  `scripts/lib/align-classify.js` is the shared classifier (single source of
  truth) used by the generator and, originally, the one-shot AST-surgical
  alignment codemod (now spent — its output is committed and the driver lives
  in `docs/history/` for provenance, not in the build). `npm run validate` now
  runs `check:drift` (regenerate + byte-compare) so a stale generated surface
  fails the build. `ClusterService.getClusterConfig` is hard-exempt and
  byte-identical to its prior form.

### Migration

See [MIGRATION-0.10.0.md](./MIGRATION-0.10.0.md). Most consumers change ~10
lines of `lib/api.ts` and nothing else.

---

## [0.9.0] - 2026-05-15

Full schema-sync release. Re-introspected from the upstream API and removed every point of drift between the SDK and the live schema. Service method names are preserved across the board — only the GraphQL operation strings inside `executeQuery`/`executeMutation` and the matching `.graphql` files were renamed.

### Breaking

- **42 `@deprecated` fields removed** from `src/type/*.ts` (Product.mediaImages/Videos/Documents, Cart.shopId/userId/user, Order.shopId/externalId/date, Channel.channelId/shop/defaultLetterId, Company.path/slug/inheritProductList, Cluster.drillDowns, OrderStatus.isExportable/Confirmable/Archivable, Pricesheet.contacts/customers/companies, Orderlist.users/companies, Inventory.dateModified, InventoryResponse.dateModified/messages/total, AdminUserTenant.name, Carrier.shippingCost, Contact.debtorId, CompanyContactSearch.debtorId, OrderTotals.orderId, Price.cost, Surcharge.shopId, Tax.shopId, Tender.siteId/shopId, TenderCarrier.amount, Warehouse.shopId, InventoryDeleteResponse.messages, Product.shortName). Their generated getters and fragment-field references are stripped in the same pass.
- **~12 service methods removed** for operations no longer in the schema:
  - Entire services deleted: `ExternalAddressService`, `SparePartService`, `SiteService`, `SparePartsMachineMediaService`, `MediaService`.
  - Methods removed from kept services: `AddressService.getAddressesByUserId`, `ClusterService.getClusters`, `UserService.updateUser`/`createUserAddress`/`updateUserAddress`/`deleteUserAddress`, `MediaAttachmentService.getMediaAttachment(s)`, `WarehouseAddressService.getWarehouseAddress(es)`.
- **Return-shape fixes for ~30 services** where the TS return type didn't match the schema. Notable cases:
  - `CategoryService.getCategories(): Promise<Category[]>` → `Promise<CategoryResponse>`
  - `CategoryService.addProductsClustersToCategory(): Promise<Category>` → `Promise<CategoryAddProductsClustersResponse>`
  - `CategoryService.removeProductsClustersFromCategory(): Promise<Category>` → `Promise<CategoryRemoveProductsClustersResponse>`
  - `AttributeService.getAttributeResultByX(): Promise<AttributeResult>` → `Promise<AttributeResultResponse>` (6 methods)
  - `InventoryService.getInventory(): Promise<Inventory[]>` → `Promise<InventoryResponse>`
  - `CompanyService.importCompaniesCsv(): Promise<Company[]>` → `Promise<CsvImportResponse>`
  - `DiscountService.importDiscountsCsv(): Promise<any>` → `Promise<CsvImportResponse>`
  - `BundleService.addItemsToBundle(): Promise<Bundle>` → `Promise<BundleItem[]>`
  - `BusinessRuleService.getBusinessRuleFieldDefinitions(): Promise<any>` → `Promise<BusinessRuleFieldDefinitionGroup>`
  - `CartService.bulkUpdateCartItems(): Promise<Cart>` → `Promise<BulkResponseData>`
  - `ClusterConfigService.getClusterConfig(): Promise<ClusterConfig>` → `Promise<ClusterConfigResponse>` (also: arg renamed from `id` to `clusterConfigId`)
  - `ClusterConfigService.createClusterConfig(): Promise<ClusterConfig>` → `Promise<ClusterConfigResponse>`
  - `ClusterConfigService.updateClusterConfigSetting()` — signature now `(clusterConfigId, settingId, input)`; returns `Promise<UpdateClusterConfigSettingResponse>`.
  - `ClusterService.getClusterConfig(): Promise<Cluster>` → `Promise<ClusterConfigResponse>` (also: arg renamed `clusterId` → `clusterConfigId`)
  - `EventActionConfigService.getEventActionConfig(): Promise<EventActionConfigResponse>` → `Promise<IEventActionConfig>`
  - `EventActionConfigService.getEventActionConfigs(): Promise<EventActionConfigResponse[]>` → `Promise<EventActionConfigResponse>`
  - `EventActionConfigService.createEventToEmailConfig()/updateEventToEmailConfig(): Promise<EventActionConfigResponse>` → `Promise<EventToEmailConfig>`
  - `EventActionConfigService.createEventToWebHookConfig()/updateEventToWebHookConfig(): Promise<EventActionConfigResponse>` → `Promise<EventToWebHookConfig>`
  - `GCIPUserService.getGCIPUser(): Promise<any>` → `Promise<IBaseUser>`
  - `Media{Image,Video,Document,Attachment}Service.deleteMediaX(): Promise<boolean>` → `Promise<DeleteMediaXResponse>`
  - `OrderService.sendOrderConfirmationEmail(): Promise<boolean>` → `Promise<SendOrderConfirmResponseType>`
  - `OrderService.getOrderPDF()/getQuotePDF(): Promise<any>` → `Promise<Base64File>`
  - `OrderService.getOrderAddress(): Promise<Address>` → `Promise<OrderAddress>`
  - `OrderService.getOrderAddresses(): Promise<Address[]>` → `Promise<OrderAddress[]>`
  - `PaymentService.deletePayment(): Promise<boolean>` → `Promise<Payment>`
  - `PriceService.getDefaultPrice()/explainPrice(): Promise<ProductPrice>` → `Promise<ProductPrice[]>`
  - `ProductService.addSurchargesToProduct(): Promise<boolean>` → `Promise<ConfirmationResponse>`
  - `ProductService.getProductSurcharges(): Promise<SurchargesResponse>` → `Promise<SurchargeProductResponse>`
  - `PurchaseAuthorizationConfigService.getPurchaseAuthorizationConfigs(): Promise<...Response[]>` → `Promise<...Response>` (single paginated response)
  - `SurchargeService.deleteSurcharge(): Promise<boolean>` → `Promise<Surcharge>`
  - `TemplateService.renderDocumentTemplateToPDF(): Promise<any>` → `Promise<Base64File>`
  - `TenderService.addItemToTender()/addItemsToTender(): Promise<Tender>` → `Promise<TenderResponse>` (signatures now take `id: string` first)
  - `UserService.triggerContactSendWelcomeEmailEvent()/triggerCustomerSendWelcomeEmailEvent(): Promise<any>` → `Promise<boolean>`
  - `VerifyTokenService.verifyToken(): Promise<any>` → `Promise<VerifyToken>`
  - `TemplateService.getDocumentTemplate()/getEmailTemplate()` — id arg type changed from `number` to `string` to match `template(id: String!)`.
- **Type-shape fixes**:
  - `BusinessRuleDateExpression.type: string` → `BusinessRuleExpressionTypes`
  - `BusinessRuleDateExpression.operator: string` → `BusinessRuleDateExpressionOperators`
  - `OrderRevision.snapshot: any` → `Order`
  - `Tender.revisions: any[]` → `OrderRevisionResponse`
- **Input-shape fixes**:
  - `OrderRevisionSearchInput.sortInputs: any[]` → `OrderRevisionSortInput[]`
  - `TemplateErrorLogSearchInput.sortInputs: any[]` → `TemplateErrorLogSortInput[]`
  - `UpdateMediaDocumentInput.uploadDocument: UploadFileInput` → `UploadFileInput[]`
  - `UpdateMediaImageInput.uploadImage: UploadFileInput` → `UploadFileInput[]`
  - `UpdateMediaVideoInput.video: UploadVideoInput` → `UploadVideoInput[]`
  - `SurchargeSearchInput.taxCode: Taxcode` → `TaxCode`
  - `UpdateSurchargeInput.taxCode: Taxcode` → `TaxCode`
- **`Taxcode` enum renamed to `TaxCode`** (matches schema casing). 27 type files updated to import the new name. The compat alias `export { Taxcode as TaxCode }` is removed — consumers must use `TaxCode`.
- **2 interfaces converted to classes** for 0.7.0/0.8.0 consistency (gain generated getter methods): `OrderRevisionResponse`, `TemplateErrorLogResponse`.

### Internal (no consumer-visible change to method names)

- 10 GraphQL operations renamed at the wire level to match upstream — service method names are unchanged. Mapping:
  - `clusterGetConfig` → `clusterConfig`
  - `documentTemplate` → `template`, `emailTemplate` → `template` (both methods now hit the unified `template` query)
  - `machineUpdate` → `machineUpsert`
  - `registerContact` → `contactRegister`
  - `registerCustomer` → `customerRegister`
  - `sparePartsMachine` → `machine`, `sparePartsMachines` → `machines`, `sparePartsMachineCreate` → `machineCreate`, `sparePartsMachineUpdate` → `machineUpsert`
  - `tenderAddItem` → `tenderAddItems` (input type now `TenderAddItemsInput` — `addItemToTender(id, input)` adapts the singular input internally; `addItemsToTender(id, input)` takes the new shape directly)
  - `clusterConfigSettingUpdate` → `clusterConfigUpdateSetting`
- Deprecated `.graphql` files removed (alongside their service methods or after rename).
- Fragments updated to drop fields the schema marks deprecated.

### Deprecated (still callable, schema-marked upstream-deprecated)

Service methods now carry `@deprecated` JSDoc tags so TS consumers see the warning in their IDE:

- `CartService.setCartUser` — use `setCartContact`/`setCartCustomer`.
- `LogoutService.logout`, `UserService.logout` — `signOut` mutation coming upstream.
- `AddressService.getAddressesByOrderId`, `OrderService.getAddressesByOrderId` — use `OrderService.getOrderAddresses`.
- `MediaImageService.getMediaImage(s)`, `MediaVideoService.getMediaVideo(s)`, `MediaDocumentService.getMediaDocument(s)` — read via `media.image/images/video/videos/document/documents` on parent resource.
- `ShopService.getShop`, `ShopService.getShops` — shop queries will be removed in a future version.
- `BundleService.addItemsToBundle` — prefer `bundleAddItemsAndReturnBundle`.
- `EventActionConfigService.publishPasswordResetEmailEvent` — use `UserService.sendPasswordResetEmail` (routes through the event-action-manager and template engine).

### Migration

- Run `tsc --noEmit` against your consumer. Every breakage is a removed-field or shape-change that maps to a documented replacement above.
- For paginated return-shape fixes (e.g. CategoryResponse), unwrap with `.items` to get the old array shape: `(await svc.getCategories()).items`.
- For `TaxCode` enum: search/replace `Taxcode` → `TaxCode` in your code.
- For `getOrderAddress(es)`: replace `Address`/`Address[]` consumer types with `OrderAddress`/`OrderAddress[]`.
- For Template methods: id arg is now `string` (was `number`).
- For Tender add-item methods: pass the tender id as the first arg.

---

## [0.8.0] - 2026-05-15

Generates getter methods on every response class in `src/type/`. Each property gets one matching getter; behavior depends on the property's type. The 0.7.0 release restored the classes; this one fills them in.

### Added

- **Localized-array getters**: properties typed as `LocalizedString[]`, `LocalizedStringArray[]`, `LocalizedImage[]`, `LocalizedDocument[]`, `LocalizedAttachment[]`, `LocalizedVideo[]`, or `LocalizedTemplateContent[]` get a `getX(language: string = 'NL')` method. The method matches the requested language, falls back to `'NL'`, and returns the inner value (`.value` / `.values` / `.originalUrl` / `.uri` / `.content` depending on the container). Plural field names are singularized (`product.names` → `product.getName('NL')`). 87 getters of this form.
- **Class-typed getters**: properties whose type is another `src/type/` class (`Foo` or `Foo[]`) get a coercing+memoizing getter. First call wraps a plain object via `new Foo(...)` and writes it back to the field; subsequent calls return the same instance. 173 scalar + 153 array getters of this form (326 total).
- **Pass-through getters**: every other property (scalars, enums, interface refs, primitive arrays) gets a one-line `getX(): T { return this.x; }` for a uniform method-based API. 1,878 getters.
- **Test coverage**: 5 new tests in `tests/types/Getters.test.ts` covering language matching, NL fallback, undefined behavior, class coercion + memoization, and scalar pass-through.

Total: **2,291 getters** across **269 classes**.

### Unchanged

- The 6 `Attribute*Value` classes keep their existing `get value() / set value()` accessors. The new generated getters for their data fields (`id`, `type`, `textValues`, etc.) sit alongside.
- `JSON.stringify` output is unchanged — methods live on the prototype, not as own enumerable properties.
- Service return shape is unchanged. Methods come along for free now that the classes have them.
- The base `AttributeValue` is still an interface (074d6fd shim — no methods).

### Migration

- Consumers can continue using property access (`product.name`, `cart.items[0].price`) without change.
- New surface area: `product.getName('NL')` for localized resolution, `cart.items[0].getPrice()` for class-instance coercion (so calling further methods on the result works without manual wrapping).
- Re-hydrating from JSON still requires `new Product(serialized)` to get the methods back — `JSON.parse` alone yields plain objects.

---

## [0.7.0] - 2026-05-15

Restores the wrapper-class pattern that 0.5.0 removed. The reason: classes are the natural home for instance methods, and we plan to add per-property getters (e.g. `Product.getName(language = 'NL')` for `LocalizedString[]` fields, `Product.getPrice()` returning a typed `ProductPrice`) in follow-up work. Interfaces have no runtime presence, so those methods had nowhere to live.

### BREAKING

- **`src/type/*.ts` types are classes again** (~270 files). Each declares `export class X { ... constructor(data: Partial<X> = {}) { Object.assign(this, data); } }` with the same property set as 0.6.0 (no fields re-added, no fields removed). Definite-assignment markers (`!:`) are back on required properties.
- **Services return class instances**: every `return data as X` from 0.5.0 reverts to `return new X(data)`. Array returns use `data.map(x => new X(x))`. Consumers that called `Object.getPrototypeOf` on responses or relied on identity-with-plain-objects are affected; literal-construction (`const x: Product = { id: 1 } as any`) still works because `Partial<X>` accepts that shape.
- The 6 concrete `Attribute{Text,Color,DateTime,Decimal,Enum,Int}Value` types are classes again with their pre-0.5.0 `get value()` / `set value()` accessor shape delegating to the typed backing field.

### Unchanged (kept from 0.5.0 / 0.6.0)

- The base `AttributeValue` is still an interface — upstream only exposes `id`, and our `type` / `value` discriminator fields are a TypeScript-only structural shim (introduced in 074d6fd). Concrete `Attribute*Value` classes `implements AttributeValue`.
- Enum top-level exports remain — there is no `Enums.*` namespace. The qualified call-site form is preserved by `import * as Enums from 'propeller-sdk-v2'`.
- `initializeService()` stubs remain deleted from every service.
- Every 0.6.0 schema-alignment edit stays (removed fields, `@deprecated` markers, `user`/`tax`/`startSession` operation shapes, `Tax.id: string`).

### Migration

- Consumers consuming SDK responses: no source change required. Class instances satisfy any `Product` / `Cart` / `Order` type position they already use.
- Consumers constructing response types in tests or mocks: use `new Cart({ ... })` (matches the ≤0.4.0 pattern; was `{ ... } as Cart` in 0.5.0–0.6.0).
- Runtime check: `(await cartService.getCart(...)).constructor.name === 'Cart'` now returns `true`. Methods added in follow-up releases will be reachable on every returned instance.

### Tests

- `tests/service/ProductService.test.ts` and `LogoutService.test.ts` reinstate `toBeInstanceOf` assertions removed in 0.5.0. All 36 tests pass.

---

## [0.6.0] - 2026-05-14

Schema alignment pass against the live Propeller v2 GraphQL endpoint (`https://api.helice.cloud/v2/graphql`). The fetched schema had drifted from the SDK's snapshot since v0.2.0 (Feb 19, 2026). This release applies the deletions, surfaces newly-deprecated fields, and updates `schema.json`.

### BREAKING

- **63 type fields removed** across `src/type/*.ts` interfaces. These fields no longer exist upstream; any consumer reading them was already getting `undefined` at runtime. TypeScript will now flag the reads at compile time.
- **150 enum values removed** across `src/enum/*.ts`. Most are concentrated in `BusinessRule*`, `Template*`, `Inventory*`, and other admin/configuration enums.
- **`UserSearchInput` removed** from `src/service/UserService.ts`. The upstream `user` query no longer accepts a `UserSearchInput`; it now takes direct `id: Int` and `login: String` arguments. The `UserService.getUser` signature changes from `getUser(input: UserSearchInput)` to `getUser({ id?: number; login?: string })`. The previously-exported `UserSearchInput` interface is also removed.
- **`UserService.getUsers` removed.** The upstream `users` query no longer exists. The local `getUsers` method was not wired to a real `.graphql` file and not called by either active consumer.
- **`TaxService.getTax(id)` signature changed** from `id: number` to `id: string`. Upstream `Tax.id` is `String!`.
- **`query tax($shopId: Int)` argument removed**: upstream no longer accepts `shopId`.
- **`mutation startSession($siteId: Int)` argument removed**: upstream `startSession` takes zero arguments now.

### Deprecated

- 26 type fields gained `@deprecated` JSDoc tags carrying the upstream `deprecationReason` text. These fields are still served by the API but flagged for removal; consumer code should plan to migrate off them.
- 4 enum values gained `@deprecated` JSDoc tags for the same reason.

### Updated

- `schema.json` refreshed from upstream. Stored UTF-16 LE with BOM per existing convention. Size grew from 8.5 MB to a tighter representation (UTF-8 source converted on write).
- Build pipeline (`scripts/build-graphql-bundle.js`) re-ran fragment inlining; `src/generated/queries.ts` and `mutations.ts` regenerated.

### Not added

- 6 new queries, 11 new mutations, 27 new types, and 6 new enums exist upstream (mostly `agent*` and `gqlApiKey*` / `restApiKey*` surface for AI-agent and API-key admin). These are inventoried but not added in this release. File issues for any that consumer apps need.

### Migration

For each `type_field_removed_from_ts` entry: if your code reads the field, the cleanest migration is to delete the read (the field has been `undefined` at runtime ever since the upstream removed it). If you genuinely need the data, check the upstream schema for the replacement field name — most removals correlate with a renamed/restructured equivalent.

For `getUser`: replace `getUser({ userId: 123 } as UserSearchInput)` with `getUser({ id: 123 })`. For email-based lookup, use `getUser({ login: 'user@example.com' })`.

For `getTax`: change the type of the `id` parameter from `number` to `string`.

---

## [0.5.0] - 2026-05-14

Coordinated breaking-change release. The SDK is now smaller, honest about its types, and uses idiomatic TypeScript shapes. Two consumer apps (`propeller-next`, `propeller-vue`) ship matching migration PRs alongside this tag.

### BREAKING

- **Response types are now `interface`s, not classes.** All 270 wrapper classes in `src/type/*.ts` (e.g. `Product`, `Cart`, `Order`, `Address`, `ProductsResponse`, etc.) are now TypeScript interfaces. The `Object.assign`-style constructor and the `!:` definite-assignment markers are gone.
  - **Migration:** anywhere you wrote `new Cart(data)` or `new Product(data)`, replace with `data as Cart` / `data as Product`. Property access (`product.id`, `cart.items`, etc.) keeps working identically.
  - **`instanceof Cart` checks no longer work** because the class is gone. Audit-verified: no consumer in either `propeller-next` or `propeller-vue` used `instanceof` against an SDK type. If you have such code outside those repos, you'll need to switch to a structural check (e.g. `__typename` discriminator on the response).
- **Enums are now top-level exports.** The `export * as Enums from './enum'` namespace is removed; `export * from './enum'` takes its place. Existing consumer code using the `Enums.X.Y` qualified form keeps working *iff* the import is switched from `import { Enums } from 'propeller-sdk-v2'` to `import * as Enums from 'propeller-sdk-v2'`. No call-site edits are required — only the import line. Both consumer repos ship this change in their 0.5.0 migration PRs.
- **`initializeService()` no-op method removed** from all 54 concrete services. The method has always been an empty stub; calling it was a no-op. Consumers calling `someService.initializeService()` must delete the call. Audit-verified: one such call in `propeller-next/app/checkout/page.tsx:101` is removed in the consumer migration PR.

### Changed

- Service methods that previously wrapped their responses with `new X(data)` now return `data as X`. Functionally identical (the 0.3.0 wrapper class only ran `Object.assign(this, data)` and added a prototype). Net effect: zero per-response allocations and slightly smaller `dist/`.
- The six `Attribute*Value` types (`AttributeColorValue`, `AttributeDateTimeValue`, `AttributeDecimalValue`, `AttributeEnumValue`, `AttributeIntValue`, `AttributeTextValue`) had `get value()` / `set value()` getters that aliased their concrete value field. As interfaces these are flat fields now — `value: any` is declared on each. Reading `.value` continues to work; the runtime aliasing to the concrete field (`colorValue`, `dateTimeValue`, etc.) is no longer automatic — read the concrete field directly.

### Migration recipe

Per consumer file:

```diff
-import { Enums } from 'propeller-sdk-v2';
+import * as Enums from 'propeller-sdk-v2';
```

```diff
-return new Cart(cartData);
+return cartData as Cart;
```

```diff
-await cartService.initializeService();
```

Bump the SDK install ref to `#v0.5.0` (or pin to the commit SHA during testing).

---

## [0.4.0] - 2026-05-14

Internal cleanup pass that is intentionally **non-breaking** for existing consumers. The public surface (wrapper-class shape, service method signatures, `Enums.*` namespace, `client` singleton) is preserved. Highlights below.

### Added

- **Dual ESM + CJS build.** Bundlers (Next.js, Vite, etc.) now resolve real `import` syntax via `dist/esm/`; Node `require()` continues to work via `dist/cjs/`. Driven by a new `exports` field in `package.json` with `import`/`require`/`types` conditions.
- **`orderEditorMutations` config option.** Override the built-in list of mutations routed to `orderEditorApiKey` in direct mode without an SDK upgrade. The built-in list (`orderSetStatus`, `passwordResetLink`, `triggerQuoteSendRequest`, `triggerOrderSendConfirm`) remains the default.
- **Config-validation warnings at construction.** `console.warn` (always-on, not gated by `debug`) when `securityMode: 'proxy'` is combined with `apiKey`/`orderEditorApiKey`, when `securityMode: 'direct'` is set without `apiKey`, and when deprecated config fields are supplied.
- **CI workflow** (`.github/workflows/ci.yml`) running typecheck, build, and tests on Node 18 / 20 / 22.

### Changed

- **Build-time fragment inlining.** `scripts/build-graphql-bundle.js` now parses each operation, transitively inlines all referenced fragments at build time, and writes pre-resolved strings to `src/generated/queries.ts` and `mutations.ts`. The runtime fragment resolver (`src/client/fragmentResolver.ts`) and the runtime `graphql` parse/print step are gone. **`graphql` is now a devDependency**, not a runtime dependency — consumer bundles shed roughly the `graphql` package's footprint.
- **HTTP error messages now include the response body** (truncated to 500 chars). Previously the SDK threw `HTTP error! status: 400` and discarded the body, hiding the GraphQL parse error or upstream error text.
- **`extractOperationName` strips leading `#` comments** before matching the `query NAME`/`mutation NAME` pattern. Anonymous operations now cleanly return `undefined` instead of misidentifying themselves.
- **Deprecated `client` Proxy export now binds `this` correctly.** Methods accessed through the singleton (`client.query(...)`) used to lose their `this` context; they now route through a bound function. `getClient()` remains the preferred path.

### Deprecated

- **`customFragmentsPath`, `customQueriesPath`, `customMutationsPath`, `allowCustomOverride`.** Build-time inlining replaces the runtime override path. These config fields are now silently ignored at runtime and emit a deprecation warning at construction.
- **`GraphQLOperation.skipFragmentResolution`.** No-op since 0.4.0 — there is no runtime fragment resolution to skip. Kept on the interface for source-compatibility.

### Removed

- **`src/client/fragmentResolver.ts`** — runtime fragment AST registry and inlining. Functionality moved to build script.
- **`loadGraphQLDirectory` / `loadFragments` / `loadQueries` / `loadMutations` private methods** on `GraphQLClient` and the runtime `require('fs')` / `require('path')` calls they made. Bundlers no longer flag the SDK for accessing the Node filesystem.

### Fixed

- README examples now match the actual API: `client.execute({ query, variables })` (object form, not positional args), `error.errors` on `GraphQLOperationError` (not `error.response.errors`), accurate service count.
- `SECURITY_SOLUTION.md` removed. Replaced with a "Proxy contract" section in the README that documents the request/response shape consumers need their proxy to support, without referencing a serverless-proxy directory that never shipped.

### Migration notes

- **No code changes required** for typical consumers. Imports, service instantiation (`new ProductService(client)`), method calls, and response object shapes (`product.id`, `product.names`, etc.) are unchanged.
- **Bundler users** will see a smaller bundle (`graphql` no longer ends up in your dependency graph through this SDK).
- **If you used `customFragmentsPath` or related runtime overrides**, see the new build-time approach: edit `src/graphql/fragment/*.graphql` and rerun `npm run build:graphql`. The runtime config fields remain typed for source-compat but are ignored.
- **If you relied on `console.log` from `GraphQLClient`**, pass `debug: true` in config. All internal logs are gated; the new config-validation warnings always fire because they indicate configuration mistakes.

---

## [0.3.0] - 2026-05-14

Architectural hygiene pass. Two behavior changes worth flagging in **BREAKING** below; the rest is internal cleanup that consumers should not notice except as better behavior.

### BREAKING

- **GraphQL errors now throw** (`C1`). When the server returns a non-empty `errors` array, services now throw `GraphQLOperationError` (new export from `propeller-sdk-v2`) instead of returning a response whose `data` is `undefined` and crashing the wrapper-class constructor with a confusing `TypeError`. Callers wrapping service calls in `try/catch` will now receive a typed error with `errors`, `operationName`, and `variables`. Same applies to `GraphQLClient.query()` / `mutate()` / `queryByName()` / `mutateByName()`. `GraphQLClient.execute()` itself still returns the raw response so low-level callers can inspect partial results.
- **Wrapper-type classes are now public-field classes** (`S1`). The ~270 response wrapper classes (e.g. `Product`, `Cart`, `Order`, `ProductsResponse`) were previously implemented with `private _field` + getter/setter pairs. The private fields broke `JSON.stringify`, Redux DevTools serialization, IndexedDB persistence, SSR rehydration, and postMessage transfer. They now use public fields with `!:` definite-assignment for required properties. **Property names are unchanged** — consumer code reading `product.id`, `product.names`, etc. continues to work identically. The `Partial<T>` constructor argument is unchanged. The only observable changes are: (1) `JSON.stringify(product)` now produces a useful object instead of `{}`, (2) `instanceof` still works, (3) `data.field!` is no longer silently coerced inside the constructor — a missing required field stays `undefined` instead of being typed as if present.

### Changed

- `GraphQLClient.getAccessToken()` is now async (`Promise<string | undefined>`) and `isAuthenticated()` is now async. The previous sync return path only worked because the implementation hardcoded `localStorage`; with the new `getAccessToken` config callback (see Added) the resolver may be async.
- `BaseService` constructor no longer parses ~200 fragment ASTs per instance (`C3`). The parsed fragment registry is now module-scoped and shared across every service and every client in the process.
- `BaseService.executeQuery` / `executeMutation` no longer log to the consumer's console on every call (`C4`).
- `GraphQLClient` internal logging is now uniformly gated behind `config.debug`. The previously un-gated `★ →` debug logs in `loadQueries` are now off by default.
- `GraphQLClient.execute` no longer `console.warn`s GraphQL errors. Callers either throw via the higher-level helpers or inspect `result.errors` directly.

### Added

- `GraphQLOperationError` — exported error class with typed `errors: GraphQLErrorEntry[]`, `operationName`, and `variables` fields.
- `GraphQLClientConfig.getAccessToken?: AccessTokenProvider` (`S2`). Supply a custom resolver (sync or async) to integrate the SDK with SSR (Next.js cookies / `getServerSession`), in-memory token stores, refresh flows, or `httpOnly` cookie patterns. Defaults to reading `localStorage['access_token']` in the browser.
- `AccessTokenProvider` type export.

### Removed

- The duplicate regex-based fragment resolver inside `GraphQLClient` (`C2`). Fragment inlining now goes through a single AST-based path shared by all callers (`BaseService`, `client.execute`, `client.query`, `client.mutate`). The previous regex resolver was reachable from public `client.execute`/`query`/`mutate` calls and gave different results than the AST resolver `BaseService` used.
- Per-instance fragment AST parsing in `BaseService` (`C3`).
- Misleading `module` and `browser` fields in `package.json` (`P3`). Both pointed at the CommonJS bundle and could mislead bundlers that honor `module` into treating CJS as ESM. The package is now plain CJS with `main` + `types`; ESM support will land as a separate change with proper conditional exports.

### Fixed

- README claimed "52 service classes"; corrected to 56 (`P6`).

---

## [0.2.0] - 2026-02-20

Major schema synchronization pass. The SDK is now aligned with the current Propeller v2 GraphQL API.

### Added

#### Enums (`src/enum/`)
- `ALLOW_QUOTE_INVALIDATION` — `YES | NO`
- `AttributeAttributeDescriptionTermField` — `NAME | DESCRIPTION`
- `ClusterBulkMoveErrorCode` — `VALIDATION | DB_INSERT | UNKNOWN`
- `CompanySearchIndexTemplate` — `COMPANY_SEARCH | CONTACT_SEARCH | TEMP_ADDRESS | TEMP_CONTACT_COMPANY | TEMP_ATTRIBUTE`
- `OrderRevisionSortField` — `REVISION_NUMBER | CREATED_AT`
- `ProductBulkMoveErrorCode` — `VALIDATION | DB_INSERT | UNKNOWN`
- `RESTRICT_SALES_PRICING_VISIBILITY` — `YES | NO`
- `TaxCode` — `H | L | N | M | CUST`
- `TemplateErrorLogSortField` — `CREATED_AT | ERROR_TYPE | TEMPLATE_ID`
- `TicketSortField` — full set of sort fields for tickets
- `TicketStatus` — `OPEN | IN_PROGRESS | COMPLETED | ARCHIVED`
- `WarehouseSortField` — `LAST_MODIFIED_AT | CREATED_AT`

#### Types (`src/type/`)
- `BulkDeleteResponse` — `deletedIds`, `failedIds`
- `ClaimsResetAllResponse` — `successCount`, `errorCount`, `totalProcessed`, `completed`
- `ClusterBulkMoveError`, `ClusterBulkMoveResponse`
- `ComputedOrderlistsResponse`
- `ProductBulkMoveError`, `ProductBulkMoveResponse`
- `Tenant`, `TenantCreateInput`, `TenantUpdateInput`
- `Ticket`, `TicketCreateInput`, `TicketUpdateInput`, `TicketSearchInput`, `TicketSortInput`, `TicketResponse`
- 25+ new input types: `AddressBulkItemInput`, `AttributeBulkCreateInput`, `CartChildItemBulkInput`, `ChannelCreateInput`, `ChannelUpdateInput`, `ClusterBulkMoveInput`, `ClusterMoveItem`, `ComputedOrderlistsInput`, `OrderAddressBulkInput`, `OrderItemDeleteInput`, `OrderRevisionByOrderSearchInput`, `OrderRevisionsInvalidateInput`, `OrderRevisionSortInput`, `PricesheetsEffectiveInput`, `ProductBulkMoveInput`, `ProductMoveItem`, `SourceSearchInput`, `SourceUpsertInput`, `TemplateErrorLogSortInput`, `ValuesetCreateItemInput`, `WarehouseSortInput`, and others

#### GraphQL fragments (`src/graphql/fragment/`)
- `AttributeDescriptionFields` (critical — was missing, fixing all attributeDescription queries)
- `TicketFields`, `TicketResponseFields`
- `TenantFields`
- `ComputedOrderlistsResponseFields`
- `ClusterBulkMoveErrorFields`, `ClusterBulkMoveResponseFields`
- `ProductBulkMoveErrorFields`, `ProductBulkMoveResponseFields`
- `BulkDeleteResponseFields`
- `OrderRevisionFields`

#### GraphQL queries (`src/graphql/query/`)
- `ticket.graphql`, `tickets.graphql`
- `tenant.graphql`
- `eventActionConfig.graphql`
- `computedOrderlists.graphql`
- `pricesheetsEffective.graphql`

#### GraphQL mutations (`src/graphql/mutation/`)
- 99 missing mutations generated from schema (tickets, tenants, channels, bulk-move, admin users, order revisions, etc.)

#### Services (`src/service/`)
- `AttributeService` — merged `AttributeDescriptionService` + `AttributeResultService` into one; added `getAttribute`, `getAttributes`, `createAttribute`, `updateAttribute`, `deleteAttribute`
- `TicketService` — full CRUD for tickets
- `TenantService` — full CRUD for tenants

### Changed

#### Types
- `Channel` — added `descriptions`, `createdAt`, `lastModifiedAt`, `tenant` fields
- `Cluster` — added `shortNames: LocalizedString[]`
- `Product` — added `shortNames: LocalizedString[]`
- `TenderCarrier` — `id` corrected to `number`; `amount` is now required
- `Company`, `Customer`, `User` — removed deprecated `parentUsergroupId`, `usergroup`, `usergroupPath` fields (Usergroup removed from schema)

#### Services
- `CartService` — replaced deleted `Cart*Variables` external types with locally-defined interfaces
- `CategoryService` — replaced deleted `CategoryInput` with `any`
- `ClusterService` — replaced deleted `Cluster*Variables` with local interfaces using `ClusterCreateInput`/`ClusterUpdateInput`
- `ExternalAddressService` — replaced deleted `ExternalAddress*` types with `any` (type removed from schema)
- `OrderService` — replaced deleted `OrderInput` with `any`
- `PaymentService` — replaced deleted `PaymentInput` with `any`
- `SiteService` — replaced deleted `Site` type with `any` (type removed from schema)
- `SurchargeService` — removed unused `SurchargeInput` import

### Removed

#### Enums
- `AttributeGroupType`, `DocumentType`, `InvoiceStatus`, `LogLevel`, `NotificationType`, `PaymentStatus`, `QuoteStatus`, `UsergroupSortableField`

#### Types (~70 files removed — all absent from current schema)
- All `AttributeGroup*`, `AttributeSet*` types
- All `Cart*Variables`, `CartPurchaseAuthorizationRequestInput`
- All `Category*Input` (CategoryInput, CategoryAttributeInput, CategoryAttributeValueInput)
- All `Cluster*Input`/`ClusterInput`/`Cluster*Variables`
- All `Company*Input`, `Contact*Input`, `Customer*Input` attribute value inputs
- `Document`, `DocumentInput`, `ExternalAddress*`, `Invoice`, `InvoiceInput`
- `Log`, `LogInput`, `Notification`, `NotificationInput`
- `OrderInput`, `PaymentInput`, `ProductInput`, `QuoteInput`, `ShipmentInput`, `Site`, `SurchargeInput`
- All `Usergroup*`, `UserAddress*Input`

#### GraphQL files
- Queries: `addressesByUserId`, `clusterGetConfig`, `externalAddress`, `site`, `usergroup`, `usergroups`
- Mutations: `externalAddressCreate`, `externalAddressUpdate`, `userAddressCreate`, `userAddressDelete`, `userAddressUpdate`, `usergroupCreate`, `usergroupUpdate`

---

## [0.1.23] and earlier

Initial SDK release and iterative improvements prior to the 0.2.0 schema sync.
