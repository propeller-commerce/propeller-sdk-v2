# Changelog

All notable changes to `propeller-sdk-v2` are documented here.

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
