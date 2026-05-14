# Changelog

All notable changes to `propeller-sdk-v2` are documented here.

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
