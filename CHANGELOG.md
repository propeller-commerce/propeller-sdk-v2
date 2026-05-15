# Changelog

All notable changes to `propeller-sdk-v2` are documented here.

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
