/* Auto-generated. Do not edit. */
import type { AddOrderStatusesToOrderStatusSetInput, AddSurchargesToProductInput, AdminUsersSearchInput, AttributeCreateInput, AttributeCsvInput, AttributeDescriptionCreateInput, AttributeDescriptionCsvInput, AttributeDescriptionSearchInput, AttributeDescriptionUpdateInput, AttributeResultSearchInput, AttributeSearchInput, AttributeUpdateInput, Base64FileInput, BulkCostPriceCreateInput, BulkCostPriceCsvInput, BulkCostPriceSearchInput, BulkCostPriceUpdateInput, BulkPriceCreateInput, BulkPriceCsvInput, BulkPriceSearchInput, BulkPriceUpdateInput, BundleAddItemsInput, BundleCreateInput, BundleSearchInput, BundleUpdateInput, BusinessRuleCreateInput, BusinessRuleDecisionTableAddColumnInput, BusinessRuleDecisionTableDeleteColumnInput, BusinessRuleDecisionTableDeleteRowInput, BusinessRuleDecisionTableMoveRowInput, BusinessRuleDecisionTableSearchInput, BusinessRuleDecisionTableSetCellInput, BusinessRuleDecisionTableUpdateInput, BusinessRuleSearchInput, BusinessRuleUpdateInput, CarrierCreateInput, CarrierUpdateInput, CarriersSearchInput, CartAcceptPurchaseAuthorizationRequestInput, CartActionCodeInput, CartDeleteItemInput, CartItemsBulkUpsertInput, CartSearchInput, CartSetContactInput, CartSetCustomerInput, CartSetUserInput, CategoryAddProductsClustersInput, CategoryCsvInput, CategoryProductSearchInput, CategoryRemoveProductsClustersInput, CategorySearchInput, ChannelCreateInput, ChannelUpdateInput, ClusterAssignProductsInput, ClusterBulkMoveInput, ClusterConfigCreateInput, ClusterConfigSettingInput, ClusterConfigSettingUpdateInput, ClusterCreateInput, ClusterCsvInput, ClusterOptionCreateInput, ClusterOptionUpdateInput, ClusterUnassignProductsInput, ClusterUpdateInput, CompanyAddressCreateInput, CompanyAddressDeleteInput, CompanyAddressUpdateInput, CompanyCsvInput, CompanySearchArguments, CompanySearchIndexUpdateMappingInput, CompanySearchReindexInput, ComputedOrderlistsInput, ContactAddToCompaniesInput, ContactCompaniesSearchInput, ContactCsvInput, ContactPurchaseAuthorizationConfigSearchInput, ContactRemoveFromCompaniesInput, ContactSearchArguments, CostPriceCreateInput, CostPriceSearchInput, CostPriceUpdateInput, CreateAccountInput, CreateAuthenticationInput, CreateCategoryInput, CreateContactInput, CreateInventoryInput, CreateOrderStatusInput, CreateOrderStatusSetInput, CreatePaymentInput, CreateProductInput, CreateSparePartsMachineInput, CreateSurchargeInput, CreateTenantDto, CreateUserDto, CreateWarehouseAddressInput, CreateWarehouseInput, CrossupsellCreateInput, CrossupsellSearchInput, CrossupsellUpdateInput, CustomerAddressCreateInput, CustomerAddressDeleteInput, CustomerAddressUpdateInput, CustomerCsvInput, CustomerInput, CustomerSearchArguments, DeleteWarehouseAddressInput, DiscountCreateInput, DiscountCsvInput, DiscountSearchInput, DiscountUpdateInput, DocumentCsvInput, DocumentTemplateCreateInput, DocumentTemplateUpdateInput, EmailEventInput, EmailSendEventInput, EmailTemplateCreateInput, EmailTemplateUpdateInput, EventActionConfigSearchInput, EventToEmailConfigCreateInput, EventToEmailConfigUpdateInput, EventToWebHookConfigCreateInput, EventToWebHookConfigUpdateInput, ExchangeRefreshTokenInput, FavoriteListsCreateInput, FavoriteListsItemsInput, FavoriteListsSearchInput, FavoriteListsUpdateInput, FilterAvailableAttributeInput, ImageCsvInput, IncentiveRuleOrderItemSetCellInput, IncentiveRuleSetActionInput, InventoryCsvInput, LoginInput, MagicTokenCreateInput, MagicTokenSearchInput, MagicTokenUpdateInput, MediaAttachmentInput, MediaDocumentInput, MediaDocumentProductSearchInput, MediaDocumentSearchInput, MediaImageInput, MediaImageProductSearchInput, MediaImageSearchInput, MediaVideoInput, MediaVideoProductSearchInput, MediaVideoSearchInput, OrderCreateInput, OrderRevisionSearchInput, OrderRevisionsInvalidateInput, OrderSearchArguments, OrderSetStatusInput, OrderStatusSearchByInput, OrderStatusSetSearchByInput, OrderStatusSetsSearchInput, OrderStatusesSearchInput, OrderUpdateAddressInput, OrderlistCompaniesInput, OrderlistCreateInput, OrderlistItemsInput, OrderlistSearchInput, OrderlistUpdateInput, OrderlistUsersInput, PasswordRecoveryLinkInput, PasswordResetLinkEmailInput, PayMethodCreateInput, PayMethodSearchInput, PayMethodUpdateInput, PaymentsSearchInput, PriceCalculateDefaultInput, PriceCalculateInput, PriceCalculateProductInput, PriceCreateInput, PriceCsvInput, PriceSearchInput, PriceUpdateInput, PricesheetAssignInput, PricesheetCreateInput, PricesheetCsvInput, PricesheetSearchInput, PricesheetUnassignInput, PricesheetUpdateInput, PricesheetsEffectiveInput, ProductBulkMoveInput, ProductCsvInput, ProductSearchInput, PurchaseAuthorizationConfigCreateInput, PurchaseAuthorizationConfigSearchInput, PurchaseAuthorizationConfigUpdateInput, RegisterContactInput, RegisterCustomerInput, RemoveOrderStatusesFromOrderStatusSetInput, RemoveSurchargesFromProductInput, RoleCreateInput, RoleDefinitionCreateInput, RoleDefinitionSearchInput, RoleDefinitionUpdateInput, RoleSearchInput, RoleUpdateInput, SearchByInput, SearchSparePartsMachineInput, ShipmentCreateInput, ShipmentItemCreateInput, ShipmentItemSearchInput, ShipmentItemUpdateInput, ShipmentSearchInput, ShipmentUpdateInput, SurchargeSearchInput, TaxCreateInput, TaxSearchInput, TaxUpdateInput, TemplateErrorLogSearchInput, TemplateRenderInput, TemplateSearchInput, TenantCreateInput, TenantUpdateInput, TenderAddItemsInput, TenderDiscountInput, TenderPaymentInput, TenderPostageInput, TenderStartInput, TenderUpdateAddressInput, TenderUpdateInput, TenderUpdateItemInput, TicketCreateInput, TicketSearchInput, TicketUpdateInput, TrackAndTraceCreateInput, TrackAndTraceSearchInput, TrackAndTraceUpdateInput, TransformationsInput, TriggerContactSendWelcomeEmailEventInput, TriggerCustomEventInput, TriggerCustomerSendWelcomeEmailEventInput, TriggerOrderSendConfirmEventInput, TriggerQuoteSendEventInput, TriggerQuoteSendRequestEventInput, TriggerQuoteSendValidationEventInput, UpdateCategoryInput, UpdateContactInput, UpdateCustomerInput, UpdateInventoryInput, UpdateMediaAttachmentInput, UpdateMediaDocumentInput, UpdateMediaImageInput, UpdateMediaVideoInput, UpdateOrderStatusInput, UpdateOrderStatusSetInput, UpdatePaymentInput, UpdateProductInput, UpdateSurchargeInput, UpdateUserDto, UpdateWarehouseAddressInput, UpdateWarehouseInput, UpsertSparePartsMachineInput, UserBulkPriceProductInput, ValuesetCreateInput, ValuesetItemCreateInput, ValuesetItemSearchInput, ValuesetItemUpdateInput, ValuesetSearchInput, ValuesetUpdateInput, VerifyTokenInput, VideoCsvInput, WarehousesSearchInput, ZoneTaxCodeCreateInput, ZoneTaxCodeSearchInput, ZoneTaxCodeUpdateInput } from '../type';
import type { AddressType, TaxCode, YesNo } from '../enum';

/**
 * Variables for the `addCompanyManager` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AddCompanyManagerVariables {
  userId: number;
  companyId: number;
}

/**
 * Variables for the `addressesByCompanyId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AddressesByCompanyIdVariables {
  companyId: number;
  type?: AddressType;
}

/**
 * Variables for the `addressesByCustomerId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AddressesByCustomerIdVariables {
  customerId: number;
  type?: AddressType;
}

/**
 * Variables for the `addressesByOrderId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AddressesByOrderIdVariables {
  orderId: number;
  type?: AddressType;
}

/**
 * Variables for the `addSurchargesToProduct` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AddSurchargesToProductVariables {
  input: AddSurchargesToProductInput;
}

/**
 * Variables for the `adminUserCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserCreateVariables {
  input: CreateUserDto;
}

/**
 * Variables for the `adminUserDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserDeleteVariables {
  email: string;
}

/**
 * Variables for the `adminUsers` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUsersVariables {
  input?: AdminUsersSearchInput;
}

/**
 * Variables for the `adminUserTenantCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserTenantCreateVariables {
  input: CreateTenantDto;
}

/**
 * Variables for the `adminUserTenantDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserTenantDeleteVariables {
  id: number;
}

/**
 * Variables for the `adminUserTenant` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserTenantVariables {
  id: number;
}

/**
 * Variables for the `adminUserUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserUpdateVariables {
  email: string;
  input: UpdateUserDto;
}

/**
 * Variables for the `adminUser` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AdminUserVariables {
  email: string;
}

/**
 * Variables for the `attributeCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeCreateVariables {
  input: AttributeCreateInput;
}

/**
 * Variables for the `attributeCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeCsvImportVariables {
  input: AttributeCsvInput;
}

/**
 * Variables for the `attributeDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDeleteVariables {
  id: string;
}

/**
 * Variables for the `attributeDescriptionCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionCreateVariables {
  input: AttributeDescriptionCreateInput;
}

/**
 * Variables for the `attributeDescriptionCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionCsvImportVariables {
  input: AttributeDescriptionCsvInput;
}

/**
 * Variables for the `attributeDescriptionDeleteBulk` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionDeleteBulkVariables {
  ids: string[];
}

/**
 * Variables for the `attributeDescriptionDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionDeleteVariables {
  id: string;
}

/**
 * Variables for the `attributeDescriptions` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionsVariables {
  input: AttributeDescriptionSearchInput;
}

/**
 * Variables for the `attributeDescriptionUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionUpdateVariables {
  id: string;
  input: AttributeDescriptionUpdateInput;
}

/**
 * Variables for the `attributeDescription` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeDescriptionVariables {
  id: string;
}

/**
 * Variables for the `attributeResultByCategoryId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByCategoryIdVariables {
  categoryId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributeResultByClusterId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByClusterIdVariables {
  clusterId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributeResultByCompanyId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByCompanyIdVariables {
  companyId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributeResultByContactId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByContactIdVariables {
  contactId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributeResultByCustomerId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByCustomerIdVariables {
  customerId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributeResultByProductId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeResultByProductIdVariables {
  productId: number;
  input: AttributeResultSearchInput;
}

/**
 * Variables for the `attributesByProductId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributesByProductIdVariables {
  productId: number;
  input: AttributeSearchInput;
}

/**
 * Variables for the `attributes` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributesVariables {
  input: AttributeSearchInput;
}

/**
 * Variables for the `attributeUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeUpdateVariables {
  id: string;
  input: AttributeUpdateInput;
}

/**
 * Variables for the `attribute` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AttributeVariables {
  id: string;
}

/**
 * Variables for the `authenticationCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AuthenticationCreateVariables {
  input: CreateAuthenticationInput;
}

/**
 * Variables for the `authenticationDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AuthenticationDeleteVariables {
  uid: string;
}

/**
 * Variables for the `authentication` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface AuthenticationVariables {
  email: string;
}

/**
 * Variables for the `bulkCostPriceCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPriceCreateVariables {
  input: BulkCostPriceCreateInput;
}

/**
 * Variables for the `bulkCostPriceCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPriceCsvImportVariables {
  input: BulkCostPriceCsvInput;
}

/**
 * Variables for the `bulkCostPriceDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPriceDeleteVariables {
  id: string;
}

/**
 * Variables for the `bulkCostPricesBulk` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPricesBulkVariables {
  input: BulkCostPriceCreateInput[];
}

/**
 * Variables for the `bulkCostPricesDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPricesDeleteVariables {
  priceId: string;
}

/**
 * Variables for the `bulkCostPrices` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPricesVariables {
  input?: BulkCostPriceSearchInput;
}

/**
 * Variables for the `bulkCostPriceUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkCostPriceUpdateVariables {
  id: string;
  input: BulkCostPriceUpdateInput;
}

/**
 * Variables for the `bulkPriceCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPriceCreateVariables {
  input: BulkPriceCreateInput;
}

/**
 * Variables for the `bulkPriceCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPriceCsvImportVariables {
  input: BulkPriceCsvInput;
}

/**
 * Variables for the `bulkPriceDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPriceDeleteVariables {
  id: string;
}

/**
 * Variables for the `bulkPricesCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPricesCreateVariables {
  input: BulkPriceCreateInput[];
}

/**
 * Variables for the `bulkPricesDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPricesDeleteVariables {
  priceId: string;
}

/**
 * Variables for the `bulkPrices` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPricesVariables {
  input?: BulkPriceSearchInput;
}

/**
 * Variables for the `bulkPriceUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BulkPriceUpdateVariables {
  id: string;
  input: BulkPriceUpdateInput;
}

/**
 * Variables for the `bundleAddItemsAndReturnBundle` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleAddItemsAndReturnBundleVariables {
  id: string;
  input: BundleAddItemsInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundleAddItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleAddItemsVariables {
  id: string;
  input: BundleAddItemsInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundleCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleCreateVariables {
  input: BundleCreateInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundleDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleDeleteVariables {
  id: string;
}

/**
 * Variables for the `bundleRemoveItemAndReturnBundle` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleRemoveItemAndReturnBundleVariables {
  id: string;
  productId: number;
  taxZone?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundleRemoveItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleRemoveItemVariables {
  id: string;
  productId: number;
}

/**
 * Variables for the `bundles` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundlesVariables {
  input?: BundleSearchInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundleUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleUpdateVariables {
  id: string;
  input: BundleUpdateInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `bundle` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BundleVariables {
  id: string;
  taxZone?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `businessRuleCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleCreateVariables {
  input: BusinessRuleCreateInput;
}

/**
 * Variables for the `businessRuleDecisionTableAddColumn` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableAddColumnVariables {
  input: BusinessRuleDecisionTableAddColumnInput;
}

/**
 * Variables for the `businessRuleDecisionTableAddRow` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableAddRowVariables {
  input: BusinessRuleDecisionTableSearchInput;
}

/**
 * Variables for the `businessRuleDecisionTableDeleteColumn` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableDeleteColumnVariables {
  input: BusinessRuleDecisionTableDeleteColumnInput;
}

/**
 * Variables for the `businessRuleDecisionTableDeleteRow` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableDeleteRowVariables {
  input: BusinessRuleDecisionTableDeleteRowInput;
}

/**
 * Variables for the `businessRuleDecisionTableMoveRow` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableMoveRowVariables {
  input: BusinessRuleDecisionTableMoveRowInput;
}

/**
 * Variables for the `businessRuleDecisionTableSetCell` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableSetCellVariables {
  input: BusinessRuleDecisionTableSetCellInput;
}

/**
 * Variables for the `businessRuleDecisionTableUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableUpdateVariables {
  input: BusinessRuleDecisionTableUpdateInput;
}

/**
 * Variables for the `businessRuleDecisionTable` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDecisionTableVariables {
  input: BusinessRuleDecisionTableSearchInput;
}

/**
 * Variables for the `businessRuleDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleDeleteVariables {
  id: string;
}

/**
 * Variables for the `businessRuleFieldDefinitions` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleFieldDefinitionsVariables {
  name: string;
}

/**
 * Variables for the `businessRuleJDM` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleJDMVariables {
  id: string;
  language?: string;
}

/**
 * Variables for the `businessRules` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRulesVariables {
  filter?: BusinessRuleSearchInput;
}

/**
 * Variables for the `businessRuleUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleUpdateVariables {
  id: string;
  input: BusinessRuleUpdateInput;
}

/**
 * Variables for the `businessRule` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface BusinessRuleVariables {
  id: string;
}

/**
 * Variables for the `carrierAssignWarehouseAndReturnCarrier` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierAssignWarehouseAndReturnCarrierVariables {
  id: number;
  warehouseId: number;
}

/**
 * Variables for the `carrierAssignWarehouse` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierAssignWarehouseVariables {
  id: number;
  warehouseId: number;
}

/**
 * Variables for the `carrierCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierCreateVariables {
  input: CarrierCreateInput;
}

/**
 * Variables for the `carrierDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierDeleteVariables {
  id: number;
}

/**
 * Variables for the `carriers` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarriersVariables {
  input?: CarriersSearchInput;
}

/**
 * Variables for the `carrierUnassignWarehouseAndReturnCarrier` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierUnassignWarehouseAndReturnCarrierVariables {
  id: number;
  warehouseId: number;
}

/**
 * Variables for the `carrierUnassignWarehouse` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierUnassignWarehouseVariables {
  id: number;
  warehouseId: number;
}

/**
 * Variables for the `carrierUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierUpdateVariables {
  id: number;
  input: CarrierUpdateInput;
}

/**
 * Variables for the `carrier` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CarrierVariables {
  id: number;
}

/**
 * Variables for the `cartAcceptPurchaseAuthorizationRequest` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartAcceptPurchaseAuthorizationRequestVariables {
  id: string;
  input?: CartAcceptPurchaseAuthorizationRequestInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartAddActionCode` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartAddActionCodeVariables {
  id: string;
  input: CartActionCodeInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartDeleteItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartDeleteItemVariables {
  id: string;
  input: CartDeleteItemInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartInvalidateCache` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartInvalidateCacheVariables {
  id?: string;
}

/**
 * Variables for the `cartItemBulk` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartItemBulkVariables {
  input: CartItemsBulkUpsertInput;
}

/**
 * Variables for the `cartRemoveActionCode` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartRemoveActionCodeVariables {
  id: string;
  input: CartActionCodeInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartRequestPurchaseAuthorization` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartRequestPurchaseAuthorizationVariables {
  id: string;
}

/**
 * Variables for the `cartSetContact` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartSetContactVariables {
  id: string;
  input: CartSetContactInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartSetCustomer` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartSetCustomerVariables {
  id: string;
  input: CartSetCustomerInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `cartSetUser` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartSetUserVariables {
  id: string;
  input: CartSetUserInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `carts` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartsVariables {
  input: CartSearchInput;
}

/**
 * Variables for the `cart` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CartVariables {
  cartId: string;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `categories` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoriesVariables {
  filter?: CategorySearchInput;
  userId?: number;
  language?: string;
}

/**
 * Variables for the `categoryAddProductsClusters` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryAddProductsClustersVariables {
  id: number;
  input: CategoryAddProductsClustersInput;
  categoryProductSearchInput?: CategoryProductSearchInput;
  language?: string;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `categoryCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryCreateVariables {
  input: CreateCategoryInput;
  categoryProductSearchInput?: CategoryProductSearchInput;
  language?: string;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `categoryCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryCsvImportVariables {
  input: CategoryCsvInput;
}

/**
 * Variables for the `categoryDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryDeleteVariables {
  categoryId: number;
}

/**
 * Variables for the `categoryRemoveProductsClusters` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryRemoveProductsClustersVariables {
  id: number;
  input: CategoryRemoveProductsClustersInput;
  categoryProductSearchInput?: CategoryProductSearchInput;
  language?: string;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `categoryUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryUpdateVariables {
  categoryId: number;
  input: UpdateCategoryInput;
  categoryProductSearchInput?: CategoryProductSearchInput;
  language?: string;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `category` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CategoryVariables {
  categoryId?: number;
  slug?: string;
  userId?: number;
  hidden?: YesNo;
  language?: string;
  priceCalculateProductInput?: PriceCalculateProductInput;
  categoryProductSearchInput?: CategoryProductSearchInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}

/**
 * Variables for the `channelCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ChannelCreateVariables {
  input: ChannelCreateInput;
}

/**
 * Variables for the `channelDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ChannelDeleteVariables {
  id: number;
}

/**
 * Variables for the `channelUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ChannelUpdateVariables {
  id: number;
  input: ChannelUpdateInput;
}

/**
 * Variables for the `channel` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ChannelVariables {
  channelId: number;
}

/**
 * Variables for the `claimsReset` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClaimsResetVariables {
  uid: string;
  email: string;
}

/**
 * Variables for the `clusterAssignProducts` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterAssignProductsVariables {
  clusterId: number;
  input: ClusterAssignProductsInput;
  language?: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `clusterBulkMove` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterBulkMoveVariables {
  input: ClusterBulkMoveInput;
}

/**
 * Variables for the `clusterConfigAddSetting` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterConfigAddSettingVariables {
  clusterConfigId: number;
  input: ClusterConfigSettingInput;
}

/**
 * Variables for the `clusterConfigCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterConfigCreateVariables {
  input: ClusterConfigCreateInput;
}

/**
 * Variables for the `clusterConfigDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterConfigDeleteVariables {
  id: number;
}

/**
 * Variables for the `clusterConfigRemoveSetting` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterConfigRemoveSettingVariables {
  clusterConfigId: number;
  settingId: number;
}

/**
 * Variables for the `clusterConfigUpdateSetting` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterConfigUpdateSettingVariables {
  clusterConfigId: number;
  settingId: number;
  input: ClusterConfigSettingUpdateInput;
}

/**
 * Variables for the `clusterCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterCreateVariables {
  input: ClusterCreateInput;
  language?: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `clusterCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterCsvImportVariables {
  input: ClusterCsvInput;
}

/**
 * Variables for the `clusterOptionCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterOptionCreateVariables {
  clusterId: number;
  input: ClusterOptionCreateInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `clusterOptionDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterOptionDeleteVariables {
  clusterId: number;
  optionId: number;
}

/**
 * Variables for the `clusterOptionUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterOptionUpdateVariables {
  clusterId: number;
  optionId: number;
  input: ClusterOptionUpdateInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `clusterProductCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterProductCreateVariables {
  id: number;
  input: CreateProductInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `clusterProductDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterProductDeleteVariables {
  id: number;
  productId: number;
}

/**
 * Variables for the `clusterProductUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterProductUpdateVariables {
  id: number;
  productId: number;
  input: UpdateProductInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `clusterUnassignProducts` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterUnassignProductsVariables {
  clusterId: number;
  input: ClusterUnassignProductsInput;
  language?: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `clusterUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterUpdateVariables {
  id: number;
  input: ClusterUpdateInput;
  language?: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
}

/**
 * Variables for the `cluster` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ClusterVariables {
  clusterId?: number;
  slug?: string;
  language?: string;
  applyOrderlists?: boolean;
  orderlistIds?: number[];
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `companies` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompaniesVariables {
  input?: CompanySearchArguments;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `companyAddressCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanyAddressCreateVariables {
  input: CompanyAddressCreateInput;
}

/**
 * Variables for the `companyAddressDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanyAddressDeleteVariables {
  input: CompanyAddressDeleteInput;
}

/**
 * Variables for the `companyAddressUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanyAddressUpdateVariables {
  input: CompanyAddressUpdateInput;
}

/**
 * Variables for the `companyCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanyCsvImportVariables {
  input: CompanyCsvInput;
}

/**
 * Variables for the `companyDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanyDeleteVariables {
  id: number;
}

/**
 * Variables for the `companySearchCleanupOrphanedIndices` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanySearchCleanupOrphanedIndicesVariables {
  input: CompanySearchReindexInput;
}

/**
 * Variables for the `companySearchFixAliasWriteIndex` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanySearchFixAliasWriteIndexVariables {
  input: CompanySearchReindexInput;
}

/**
 * Variables for the `companySearchIndexUpdateMapping` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanySearchIndexUpdateMappingVariables {
  input: CompanySearchIndexUpdateMappingInput;
}

/**
 * Variables for the `companySearchReindex` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CompanySearchReindexVariables {
  input: CompanySearchReindexInput;
}

/**
 * Variables for the `computedOrderlists` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ComputedOrderlistsVariables {
  input: ComputedOrderlistsInput;
}

/**
 * Variables for the `contactAddToCompanies` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactAddToCompaniesVariables {
  id: number;
  input: ContactAddToCompaniesInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contactCreateAccount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactCreateAccountVariables {
  id: number;
  input?: CreateAccountInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contactCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactCreateVariables {
  input: CreateContactInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contactCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactCsvImportVariables {
  input: ContactCsvInput;
}

/**
 * Variables for the `contactDeleteAccount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactDeleteAccountVariables {
  id: number;
}

/**
 * Variables for the `contactDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactDeleteVariables {
  id: number;
}

/**
 * Variables for the `contactRegister` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactRegisterVariables {
  contactAttributesInput?: AttributeResultSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  contactRegisterInput: RegisterContactInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
}

/**
 * Variables for the `contactRemoveFromCompanies` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactRemoveFromCompaniesVariables {
  id: number;
  input: ContactRemoveFromCompaniesInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contacts` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactsVariables {
  input?: ContactSearchArguments;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contactUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactUpdateVariables {
  id: number;
  input: UpdateContactInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `contact` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ContactVariables {
  id: number;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `costPriceCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPriceCreateVariables {
  input: CostPriceCreateInput;
}

/**
 * Variables for the `costPriceDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPriceDeleteVariables {
  id: string;
}

/**
 * Variables for the `costPricesBulk` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPricesBulkVariables {
  input: CostPriceCreateInput[];
}

/**
 * Variables for the `costPricesDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPricesDeleteVariables {
  priceId: string;
}

/**
 * Variables for the `costPrices` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPricesVariables {
  input?: CostPriceSearchInput;
}

/**
 * Variables for the `costPriceUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CostPriceUpdateVariables {
  id: string;
  input: CostPriceUpdateInput;
}

/**
 * Variables for the `crossupsellCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CrossupsellCreateVariables {
  input: CrossupsellCreateInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `crossupsellDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CrossupsellDeleteVariables {
  id: string;
}

/**
 * Variables for the `crossupsells` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CrossupsellsVariables {
  input?: CrossupsellSearchInput;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  priceCalculateProductInput: PriceCalculateProductInput;
}

/**
 * Variables for the `crossupsellUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CrossupsellUpdateVariables {
  id: string;
  input: CrossupsellUpdateInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `crossupsell` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CrossupsellVariables {
  id: string;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `customerAddressCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerAddressCreateVariables {
  input: CustomerAddressCreateInput;
}

/**
 * Variables for the `customerAddressDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerAddressDeleteVariables {
  input: CustomerAddressDeleteInput;
}

/**
 * Variables for the `customerAddressUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerAddressUpdateVariables {
  input: CustomerAddressUpdateInput;
}

/**
 * Variables for the `customerCreateAccount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerCreateAccountVariables {
  id: number;
  input?: CreateAccountInput;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `customerCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerCreateVariables {
  input: CustomerInput;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `customerCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerCsvImportVariables {
  input: CustomerCsvInput;
}

/**
 * Variables for the `customerDeleteAccount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerDeleteAccountVariables {
  id: number;
}

/**
 * Variables for the `customerDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerDeleteVariables {
  id: number;
}

/**
 * Variables for the `customerRegister` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerRegisterVariables {
  customerAttributesInput?: AttributeResultSearchInput;
  customerRegisterInput: RegisterCustomerInput;
}

/**
 * Variables for the `customers` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomersVariables {
  input?: CustomerSearchArguments;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `customerUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerUpdateVariables {
  id: number;
  input: UpdateCustomerInput;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `customer` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface CustomerVariables {
  id: number;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `discountCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountCreateVariables {
  input: DiscountCreateInput;
}

/**
 * Variables for the `discountCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountCsvImportVariables {
  input: DiscountCsvInput;
}

/**
 * Variables for the `discountDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountDeleteVariables {
  id: string;
}

/**
 * Variables for the `discountsDeleteByPricesheetId` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountsDeleteByPricesheetIdVariables {
  pricesheetId: string;
}

/**
 * Variables for the `discounts` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountsVariables {
  input?: DiscountSearchInput;
}

/**
 * Variables for the `discountUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountUpdateVariables {
  id: string;
  input: DiscountUpdateInput;
}

/**
 * Variables for the `discount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DiscountVariables {
  id: string;
}

/**
 * Variables for the `documentTemplateCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DocumentTemplateCreateVariables {
  input: DocumentTemplateCreateInput;
}

/**
 * Variables for the `documentTemplateRenderToPDF` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DocumentTemplateRenderToPDFVariables {
  id: string;
  input: TemplateRenderInput;
}

/**
 * Variables for the `documentTemplateUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface DocumentTemplateUpdateVariables {
  id: string;
  input: DocumentTemplateUpdateInput;
}

/**
 * Variables for the `emailTemplateAddAttachment` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EmailTemplateAddAttachmentVariables {
  id: string;
  documentTemplateId: string;
}

/**
 * Variables for the `emailTemplateCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EmailTemplateCreateVariables {
  input: EmailTemplateCreateInput;
}

/**
 * Variables for the `emailTemplateRemoveAttachment` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EmailTemplateRemoveAttachmentVariables {
  id: string;
  documentTemplateId: string;
}

/**
 * Variables for the `emailTemplateRenderAndSend` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EmailTemplateRenderAndSendVariables {
  id: string;
  input: TemplateRenderInput;
}

/**
 * Variables for the `emailTemplateUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EmailTemplateUpdateVariables {
  id: string;
  input: EmailTemplateUpdateInput;
}

/**
 * Variables for the `eventActionConfigDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventActionConfigDeleteVariables {
  id: string;
}

/**
 * Variables for the `eventActionConfigs` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventActionConfigsVariables {
  input: EventActionConfigSearchInput;
}

/**
 * Variables for the `eventActionConfig` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventActionConfigVariables {
  id: string;
}

/**
 * Variables for the `eventToEmailConfigCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventToEmailConfigCreateVariables {
  input: EventToEmailConfigCreateInput;
}

/**
 * Variables for the `eventToEmailConfigUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventToEmailConfigUpdateVariables {
  id: string;
  input: EventToEmailConfigUpdateInput;
}

/**
 * Variables for the `eventToWebHookConfigCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventToWebHookConfigCreateVariables {
  input: EventToWebHookConfigCreateInput;
}

/**
 * Variables for the `eventToWebHookConfigUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface EventToWebHookConfigUpdateVariables {
  id: string;
  input: EventToWebHookConfigUpdateInput;
}

/**
 * Variables for the `exchangeRefreshToken` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ExchangeRefreshTokenVariables {
  input: ExchangeRefreshTokenInput;
}

/**
 * Variables for the `favoriteListAddItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListAddItemsVariables {
  id: string;
  input: FavoriteListsItemsInput;
}

/**
 * Variables for the `favoriteListClearItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListClearItemsVariables {
  id: string;
  products?: boolean;
  clusters?: boolean;
}

/**
 * Variables for the `favoriteListCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListCreateVariables {
  input: FavoriteListsCreateInput;
}

/**
 * Variables for the `favoriteListDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListDeleteVariables {
  id: string;
}

/**
 * Variables for the `favoriteListRemoveItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListRemoveItemsVariables {
  id: string;
  input: FavoriteListsItemsInput;
}

/**
 * Variables for the `favoriteLists` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListsVariables {
  input?: FavoriteListsSearchInput;
}

/**
 * Variables for the `favoriteListUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListUpdateVariables {
  id: string;
  input: FavoriteListsUpdateInput;
}

/**
 * Variables for the `favoriteList` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface FavoriteListVariables {
  id: string;
  language?: string;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `incentiveRuleCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface IncentiveRuleCreateVariables {
  input: BusinessRuleCreateInput;
}

/**
 * Variables for the `incentiveRuleSetAction` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface IncentiveRuleSetActionVariables {
  input: IncentiveRuleSetActionInput;
}

/**
 * Variables for the `incentiveRuleSetOrderItemConditions` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface IncentiveRuleSetOrderItemConditionsVariables {
  input: IncentiveRuleOrderItemSetCellInput;
}

/**
 * Variables for the `inventoryCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface InventoryCreateVariables {
  input: CreateInventoryInput;
}

/**
 * Variables for the `inventoryCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface InventoryCsvImportVariables {
  input: InventoryCsvInput;
}

/**
 * Variables for the `inventoryDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface InventoryDeleteVariables {
  id: number;
}

/**
 * Variables for the `inventoryUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface InventoryUpdateVariables {
  id: number;
  input: UpdateInventoryInput;
}

/**
 * Variables for the `inventory` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface InventoryVariables {
  id: number;
}

/**
 * Variables for the `login` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface LoginVariables {
  input: LoginInput;
}

/**
 * Variables for the `machineCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MachineCreateVariables {
  input: CreateSparePartsMachineInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
}

/**
 * Variables for the `machineDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MachineDeleteVariables {
  id: string;
}

/**
 * Variables for the `machines` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MachinesVariables {
  input?: SearchSparePartsMachineInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
}

/**
 * Variables for the `machineUpsert` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MachineUpsertVariables {
  input: UpsertSparePartsMachineInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
}

/**
 * Variables for the `machine` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MachineVariables {
  id?: string;
  slug?: string;
  language?: string;
  source?: string;
  sourceId?: string;
  imageVariantFilters: TransformationsInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
}

/**
 * Variables for the `magicTokenCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokenCreateVariables {
  input: MagicTokenCreateInput;
}

/**
 * Variables for the `magicTokenDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokenDeleteVariables {
  id: string;
}

/**
 * Variables for the `magicTokenLogin` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokenLoginVariables {
  id: string;
}

/**
 * Variables for the `magicTokens` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokensVariables {
  input?: MagicTokenSearchInput;
}

/**
 * Variables for the `magicTokenUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokenUpdateVariables {
  id: string;
  input: MagicTokenUpdateInput;
}

/**
 * Variables for the `magicToken` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MagicTokenVariables {
  id: string;
}

/**
 * Variables for the `mediaAttachmentCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaAttachmentCreateVariables {
  input: MediaAttachmentInput;
}

/**
 * Variables for the `mediaAttachmentDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaAttachmentDeleteVariables {
  id: string;
}

/**
 * Variables for the `mediaAttachmentUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaAttachmentUpdateVariables {
  id: string;
  input: UpdateMediaAttachmentInput;
}

/**
 * Variables for the `mediaDocumentCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentCreateVariables {
  input: MediaDocumentInput;
}

/**
 * Variables for the `mediaDocumentCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentCsvImportVariables {
  input: DocumentCsvInput;
}

/**
 * Variables for the `mediaDocumentDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentDeleteVariables {
  mediaId: string;
}

/**
 * Variables for the `mediaDocuments` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentsVariables {
  search?: MediaDocumentSearchInput;
}

/**
 * Variables for the `mediaDocumentUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentUpdateVariables {
  input: UpdateMediaDocumentInput;
}

/**
 * Variables for the `mediaDocument` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaDocumentVariables {
  mediaId: string;
}

/**
 * Variables for the `mediaImageCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImageCreateVariables {
  input: MediaImageInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `mediaImageCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImageCsvImportVariables {
  input: ImageCsvInput;
}

/**
 * Variables for the `mediaImageDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImageDeleteVariables {
  mediaId: string;
}

/**
 * Variables for the `mediaImages` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImagesVariables {
  search?: MediaImageSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `mediaImageUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImageUpdateVariables {
  input: UpdateMediaImageInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `mediaImage` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaImageVariables {
  mediaId: string;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `media` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVariables {
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `mediaVideoCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideoCreateVariables {
  input: MediaVideoInput;
}

/**
 * Variables for the `mediaVideoCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideoCsvImportVariables {
  input: VideoCsvInput;
}

/**
 * Variables for the `mediaVideoDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideoDeleteVariables {
  mediaId: string;
}

/**
 * Variables for the `mediaVideos` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideosVariables {
  search?: MediaVideoSearchInput;
}

/**
 * Variables for the `mediaVideoUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideoUpdateVariables {
  input: UpdateMediaVideoInput;
}

/**
 * Variables for the `mediaVideo` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface MediaVideoVariables {
  mediaId: string;
}

/**
 * Variables for the `orderAddresses` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderAddressesVariables {
  orderId: number;
  type?: AddressType;
}

/**
 * Variables for the `orderAddress` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderAddressVariables {
  id: number;
  orderId: number;
}

/**
 * Variables for the `orderCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderCreateVariables {
  order: OrderCreateInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `orderDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderDeleteVariables {
  orderId: number;
}

/**
 * Variables for the `orderGetPDF` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderGetPDFVariables {
  orderId: number;
}

/**
 * Variables for the `orderlistAddItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistAddItemsVariables {
  id: number;
  input: OrderlistItemsInput;
}

/**
 * Variables for the `orderlistAssignCompanies` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistAssignCompaniesVariables {
  id: number;
  input: OrderlistCompaniesInput;
}

/**
 * Variables for the `orderlistAssignUsers` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistAssignUsersVariables {
  id: number;
  input: OrderlistUsersInput;
}

/**
 * Variables for the `orderlistCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistCreateVariables {
  input: OrderlistCreateInput;
}

/**
 * Variables for the `orderlistDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistDeleteVariables {
  id: number;
}

/**
 * Variables for the `orderlistRemoveItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistRemoveItemsVariables {
  id: number;
  input: OrderlistItemsInput;
}

/**
 * Variables for the `orderlists` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistsVariables {
  input?: OrderlistSearchInput;
}

/**
 * Variables for the `orderlistUnassignCompanies` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistUnassignCompaniesVariables {
  id: number;
  input: OrderlistCompaniesInput;
}

/**
 * Variables for the `orderlistUnassignUsers` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistUnassignUsersVariables {
  id: number;
  input: OrderlistUsersInput;
}

/**
 * Variables for the `orderlistUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistUpdateVariables {
  id: number;
  input: OrderlistUpdateInput;
}

/**
 * Variables for the `orderlist` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderlistVariables {
  id: number;
}

/**
 * Variables for the `orderRevisionRestore` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderRevisionRestoreVariables {
  orderId: number;
  revisionNumber: number;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `orderRevisionsInvalidate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderRevisionsInvalidateVariables {
  input: OrderRevisionsInvalidateInput;
}

/**
 * Variables for the `orderRevisions` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderRevisionsVariables {
  input: OrderRevisionSearchInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `orderRevision` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderRevisionVariables {
  orderId: number;
  revisionNumber: number;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `orderSendConfirmationEmail` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderSendConfirmationEmailVariables {
  orderId: number;
  attachments?: Base64FileInput[];
}

/**
 * Variables for the `orderSetStatus` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderSetStatusVariables {
  input: OrderSetStatusInput;
}

/**
 * Variables for the `orderStatusCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusCreateVariables {
  input: CreateOrderStatusInput;
}

/**
 * Variables for the `orderStatusDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusDeleteVariables {
  id: number;
}

/**
 * Variables for the `orderStatuses` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusesVariables {
  input?: OrderStatusesSearchInput;
}

/**
 * Variables for the `orderStatusSetAddOrderStatuses` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetAddOrderStatusesVariables {
  id: number;
  input: AddOrderStatusesToOrderStatusSetInput;
}

/**
 * Variables for the `orderStatusSetCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetCreateVariables {
  input: CreateOrderStatusSetInput;
}

/**
 * Variables for the `orderStatusSetDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetDeleteVariables {
  id: number;
}

/**
 * Variables for the `orderStatusSetRemoveOrderStatuses` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetRemoveOrderStatusesVariables {
  id: number;
  input: RemoveOrderStatusesFromOrderStatusSetInput;
}

/**
 * Variables for the `orderStatusSets` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetsVariables {
  input?: OrderStatusSetsSearchInput;
}

/**
 * Variables for the `orderStatusSetUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetUpdateVariables {
  id: number;
  input: UpdateOrderStatusSetInput;
}

/**
 * Variables for the `orderStatusSet` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusSetVariables {
  input: OrderStatusSetSearchByInput;
}

/**
 * Variables for the `orderStatusUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusUpdateVariables {
  id: number;
  input: UpdateOrderStatusInput;
}

/**
 * Variables for the `orderStatus` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderStatusVariables {
  input: OrderStatusSearchByInput;
}

/**
 * Variables for the `orders` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrdersVariables {
  input?: OrderSearchArguments;
}

/**
 * Variables for the `orderUpdateAddress` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderUpdateAddressVariables {
  id: number;
  addressId: number;
  input: OrderUpdateAddressInput;
}

/**
 * Variables for the `order` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface OrderVariables {
  orderId?: number;
  orderUUID?: string;
  language?: string;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `passwordResetLink` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PasswordResetLinkVariables {
  input?: PasswordRecoveryLinkInput;
}

/**
 * Variables for the `paymentCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PaymentCreateVariables {
  input: CreatePaymentInput;
}

/**
 * Variables for the `paymentDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PaymentDeleteVariables {
  searchBy: SearchByInput;
}

/**
 * Variables for the `payments` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PaymentsVariables {
  input?: PaymentsSearchInput;
}

/**
 * Variables for the `paymentUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PaymentUpdateVariables {
  searchBy: SearchByInput;
  input: UpdatePaymentInput;
}

/**
 * Variables for the `payment` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PaymentVariables {
  searchBy: SearchByInput;
}

/**
 * Variables for the `payMethodCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PayMethodCreateVariables {
  input: PayMethodCreateInput;
}

/**
 * Variables for the `payMethodDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PayMethodDeleteVariables {
  id: number;
}

/**
 * Variables for the `payMethods` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PayMethodsVariables {
  input?: PayMethodSearchInput;
}

/**
 * Variables for the `payMethodUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PayMethodUpdateVariables {
  id: number;
  input: PayMethodUpdateInput;
}

/**
 * Variables for the `payMethod` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PayMethodVariables {
  id: number;
}

/**
 * Variables for the `priceCalculate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceCalculateVariables {
  input: PriceCalculateInput;
}

/**
 * Variables for the `priceCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceCreateVariables {
  input: PriceCreateInput;
}

/**
 * Variables for the `priceCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceCsvImportVariables {
  input: PriceCsvInput;
}

/**
 * Variables for the `priceDefault` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceDefaultVariables {
  input: PriceCalculateDefaultInput;
}

/**
 * Variables for the `priceDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceDeleteVariables {
  id: string;
}

/**
 * Variables for the `priceExplain` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceExplainVariables {
  input: PriceCalculateInput;
}

/**
 * Variables for the `pricesheetAssign` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetAssignVariables {
  id: string;
  input: PricesheetAssignInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheetCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetCreateVariables {
  input: PricesheetCreateInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheetCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetCsvImportVariables {
  input: PricesheetCsvInput;
}

/**
 * Variables for the `pricesheetDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetDeleteVariables {
  id: string;
}

/**
 * Variables for the `pricesheetsEffective` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetsEffectiveVariables {
  input: PricesheetsEffectiveInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheets` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetsVariables {
  input?: PricesheetSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheetUnassign` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetUnassignVariables {
  id: string;
  input: PricesheetUnassignInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheetUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetUpdateVariables {
  id: string;
  input: PricesheetUpdateInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `pricesheet` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesheetVariables {
  id: string;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `prices` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PricesVariables {
  input?: PriceSearchInput;
}

/**
 * Variables for the `priceUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceUpdateVariables {
  id: string;
  input: PriceUpdateInput;
}

/**
 * Variables for the `price` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PriceVariables {
  id: string;
}

/**
 * Variables for the `productBulkMove` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductBulkMoveVariables {
  input: ProductBulkMoveInput;
}

/**
 * Variables for the `productCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductCreateVariables {
  input: CreateProductInput;
}

/**
 * Variables for the `productCsvImport` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductCsvImportVariables {
  input: ProductCsvInput;
}

/**
 * Variables for the `productDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductDeleteVariables {
  productId: number;
}

/**
 * Variables for the `productSurcharges` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductSurchargesVariables {
  productId: number;
  input?: SurchargeSearchInput;
}

/**
 * Variables for the `products` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductsVariables {
  input?: ProductSearchInput;
  language?: string;
  priceCalculateProductInput?: PriceCalculateProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  imageVariantFilters: TransformationsInput;
  filterAvailableAttributeInput?: FilterAvailableAttributeInput;
}

/**
 * Variables for the `productUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductUpdateVariables {
  productId: number;
  input: UpdateProductInput;
}

/**
 * Variables for the `product` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ProductVariables {
  productId?: number;
  slug?: string;
  sku?: string;
  language?: string;
  applyOrderlists?: boolean;
  orderlistIds?: number[];
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  imageVariantFilters: TransformationsInput;
}

/**
 * Variables for the `publishEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PublishEmailEventVariables {
  input: EmailEventInput;
}

/**
 * Variables for the `publishEmailSendEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PublishEmailSendEventVariables {
  input: EmailSendEventInput;
}

/**
 * Variables for the `publishPasswordResetEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PublishPasswordResetEmailEventVariables {
  input: PasswordResetLinkEmailInput;
}

/**
 * Variables for the `purchaseAuthorizationConfigCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PurchaseAuthorizationConfigCreateVariables {
  input?: PurchaseAuthorizationConfigCreateInput;
}

/**
 * Variables for the `purchaseAuthorizationConfigDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PurchaseAuthorizationConfigDeleteVariables {
  id: string;
}

/**
 * Variables for the `purchaseAuthorizationConfigs` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PurchaseAuthorizationConfigsVariables {
  input?: PurchaseAuthorizationConfigSearchInput;
}

/**
 * Variables for the `purchaseAuthorizationConfigUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PurchaseAuthorizationConfigUpdateVariables {
  id: string;
  input?: PurchaseAuthorizationConfigUpdateInput;
}

/**
 * Variables for the `purchaseAuthorizationConfig` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface PurchaseAuthorizationConfigVariables {
  id: string;
}

/**
 * Variables for the `quoteGetPDF` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface QuoteGetPDFVariables {
  quoteId: number;
}

/**
 * Variables for the `removeCompanyManager` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RemoveCompanyManagerVariables {
  userId: number;
  companyId: number;
}

/**
 * Variables for the `removeSurchargesFromProduct` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RemoveSurchargesFromProductVariables {
  input: RemoveSurchargesFromProductInput;
}

/**
 * Variables for the `roleCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleCreateVariables {
  input: RoleCreateInput;
}

/**
 * Variables for the `roleDefinitionCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDefinitionCreateVariables {
  input: RoleDefinitionCreateInput;
}

/**
 * Variables for the `roleDefinitionDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDefinitionDeleteVariables {
  id: string;
}

/**
 * Variables for the `roleDefinitions` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDefinitionsVariables {
  input?: RoleDefinitionSearchInput;
}

/**
 * Variables for the `roleDefinitionUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDefinitionUpdateVariables {
  id: string;
  input: RoleDefinitionUpdateInput;
}

/**
 * Variables for the `roleDefinition` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDefinitionVariables {
  id: string;
}

/**
 * Variables for the `roleDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleDeleteVariables {
  id: string;
}

/**
 * Variables for the `roles` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RolesVariables {
  input: RoleSearchInput;
}

/**
 * Variables for the `roleUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleUpdateVariables {
  id: string;
  input: RoleUpdateInput;
}

/**
 * Variables for the `role` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface RoleVariables {
  id: string;
}

/**
 * Variables for the `shipmentCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentCreateVariables {
  input: ShipmentCreateInput;
}

/**
 * Variables for the `shipmentDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentDeleteVariables {
  id: string;
}

/**
 * Variables for the `shipmentItemCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentItemCreateVariables {
  input: ShipmentItemCreateInput;
}

/**
 * Variables for the `shipmentItemDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentItemDeleteVariables {
  id: string;
}

/**
 * Variables for the `shipmentItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentItemsVariables {
  input?: ShipmentItemSearchInput;
}

/**
 * Variables for the `shipmentItemUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentItemUpdateVariables {
  id: string;
  input: ShipmentItemUpdateInput;
}

/**
 * Variables for the `shipmentItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentItemVariables {
  id: string;
}

/**
 * Variables for the `shipments` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentsVariables {
  input?: ShipmentSearchInput;
}

/**
 * Variables for the `shipmentUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentUpdateVariables {
  id: string;
  input: ShipmentUpdateInput;
}

/**
 * Variables for the `shipment` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShipmentVariables {
  id: string;
}

/**
 * Variables for the `shop` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ShopVariables {
  shopId: number;
}

/**
 * Variables for the `surchargeCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface SurchargeCreateVariables {
  input: CreateSurchargeInput;
}

/**
 * Variables for the `surchargeDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface SurchargeDeleteVariables {
  id: string;
}

/**
 * Variables for the `surcharges` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface SurchargesVariables {
  input?: SurchargeSearchInput;
}

/**
 * Variables for the `surchargeUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface SurchargeUpdateVariables {
  id: string;
  input: UpdateSurchargeInput;
}

/**
 * Variables for the `surcharge` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface SurchargeVariables {
  id: string;
}

/**
 * Variables for the `taxCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TaxCreateVariables {
  input: TaxCreateInput;
}

/**
 * Variables for the `taxDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TaxDeleteVariables {
  id: string;
}

/**
 * Variables for the `taxes` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TaxesVariables {
  input?: TaxSearchInput;
}

/**
 * Variables for the `taxUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TaxUpdateVariables {
  id: string;
  input: TaxUpdateInput;
}

/**
 * Variables for the `tax` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TaxVariables {
  id?: string;
  code?: TaxCode;
  zone?: string;
}

/**
 * Variables for the `templateDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplateDeleteVariables {
  id: string;
}

/**
 * Variables for the `templateErrorLogs` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplateErrorLogsVariables {
  input: TemplateErrorLogSearchInput;
}

/**
 * Variables for the `templateErrorLog` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplateErrorLogVariables {
  id: string;
}

/**
 * Variables for the `templateRenderToHTML` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplateRenderToHTMLVariables {
  id: string;
  input: TemplateRenderInput;
}

/**
 * Variables for the `templates` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplatesVariables {
  input: TemplateSearchInput;
}

/**
 * Variables for the `template` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TemplateVariables {
  id: string;
}

/**
 * Variables for the `tenantCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenantCreateVariables {
  input: TenantCreateInput;
}

/**
 * Variables for the `tenantDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenantDeleteVariables {
  id?: string;
}

/**
 * Variables for the `tenantUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenantUpdateVariables {
  input: TenantUpdateInput;
  id?: string;
}

/**
 * Variables for the `tenderAddItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderAddItemsVariables {
  id: string;
  input: TenderAddItemsInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderApplyIncentives` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderApplyIncentivesVariables {
  id: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderDeleteBonusItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderDeleteBonusItemVariables {
  id: string;
  itemId: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderDeleteItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderDeleteItemVariables {
  id: string;
  itemId: string;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderDeleteVariables {
  id: string;
}

/**
 * Variables for the `tenderProcess` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderProcessVariables {
  id: string;
}

/**
 * Variables for the `tenderStart` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderStartVariables {
  input: TenderStartInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdateAddress` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdateAddressVariables {
  id: string;
  input: TenderUpdateAddressInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdateDiscount` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdateDiscountVariables {
  id: string;
  input: TenderDiscountInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdateInvoiceUser` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdateInvoiceUserVariables {
  id: string;
  userId: number;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdateItem` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdateItemVariables {
  id: string;
  itemId: string;
  input: TenderUpdateItemInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdatePayment` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdatePaymentVariables {
  id: string;
  input: TenderPaymentInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdatePostage` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdatePostageVariables {
  id: string;
  input: TenderPostageInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tenderUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderUpdateVariables {
  id: string;
  input: TenderUpdateInput;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `tender` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TenderVariables {
  tenderId?: string;
  orderId?: number;
  attributeResultSearchInput?: AttributeResultSearchInput;
  priceCalculateProductInput?: PriceCalculateProductInput;
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  imageSearchFilters?: MediaImageProductSearchInput;
  language?: string;
  imageVariantFilters: TransformationsInput;
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactSearchArguments?: ContactSearchArguments;
}

/**
 * Variables for the `ticketCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TicketCreateVariables {
  input: TicketCreateInput;
}

/**
 * Variables for the `ticketDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TicketDeleteVariables {
  id: string;
}

/**
 * Variables for the `tickets` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TicketsVariables {
  input?: TicketSearchInput;
}

/**
 * Variables for the `ticketUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TicketUpdateVariables {
  id: string;
  input: TicketUpdateInput;
}

/**
 * Variables for the `ticket` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TicketVariables {
  id: string;
}

/**
 * Variables for the `trackAndTraceCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TrackAndTraceCreateVariables {
  input: TrackAndTraceCreateInput;
}

/**
 * Variables for the `trackAndTraceDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TrackAndTraceDeleteVariables {
  id: string;
}

/**
 * Variables for the `trackAndTraces` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TrackAndTracesVariables {
  input?: TrackAndTraceSearchInput;
}

/**
 * Variables for the `trackAndTraceUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TrackAndTraceUpdateVariables {
  id: string;
  input: TrackAndTraceUpdateInput;
}

/**
 * Variables for the `trackAndTrace` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TrackAndTraceVariables {
  id: string;
}

/**
 * Variables for the `triggerContactSendWelcomeEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerContactSendWelcomeEmailEventVariables {
  input: TriggerContactSendWelcomeEmailEventInput;
}

/**
 * Variables for the `triggerCustomerSendWelcomeEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerCustomerSendWelcomeEmailEventVariables {
  input: TriggerCustomerSendWelcomeEmailEventInput;
}

/**
 * Variables for the `triggerCustomEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerCustomEventVariables {
  input: TriggerCustomEventInput;
}

/**
 * Variables for the `triggerOrderSendConfirm` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerOrderSendConfirmVariables {
  input: TriggerOrderSendConfirmEventInput;
}

/**
 * Variables for the `triggerPasswordSendInitEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerPasswordSendInitEmailEventVariables {
  input: PasswordRecoveryLinkInput;
}

/**
 * Variables for the `triggerPasswordSendResetEmailEvent` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerPasswordSendResetEmailEventVariables {
  input: PasswordRecoveryLinkInput;
}

/**
 * Variables for the `triggerQuoteSendRequest` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerQuoteSendRequestVariables {
  input: TriggerQuoteSendRequestEventInput;
}

/**
 * Variables for the `triggerQuoteSendValidation` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerQuoteSendValidationVariables {
  input: TriggerQuoteSendValidationEventInput;
}

/**
 * Variables for the `triggerQuoteSend` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface TriggerQuoteSendVariables {
  input: TriggerQuoteSendEventInput;
}

/**
 * Variables for the `user` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface UserVariables {
  id?: number;
  login?: string;
  contactAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
}

/**
 * Variables for the `valuesetCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetCreateVariables {
  input: ValuesetCreateInput;
}

/**
 * Variables for the `valuesetDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetDeleteVariables {
  id: number;
}

/**
 * Variables for the `valuesetItemCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetItemCreateVariables {
  input: ValuesetItemCreateInput;
}

/**
 * Variables for the `valuesetItemDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetItemDeleteVariables {
  id: number;
}

/**
 * Variables for the `valuesetItems` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetItemsVariables {
  input?: ValuesetItemSearchInput;
}

/**
 * Variables for the `valuesetItemUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetItemUpdateVariables {
  id: number;
  input: ValuesetItemUpdateInput;
}

/**
 * Variables for the `valuesets` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetsVariables {
  input?: ValuesetSearchInput;
}

/**
 * Variables for the `valuesetUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetUpdateVariables {
  id: number;
  input: ValuesetUpdateInput;
}

/**
 * Variables for the `valueset` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ValuesetVariables {
  id: number;
}

/**
 * Variables for the `verifyToken` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface VerifyTokenVariables {
  input: VerifyTokenInput;
}

/**
 * Variables for the `viewer` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ViewerVariables {
  contactAttributesInput?: AttributeResultSearchInput;
  contactPAConfigInput?: ContactPurchaseAuthorizationConfigSearchInput;
  companyAttributesInput?: AttributeResultSearchInput;
  customerAttributesInput?: AttributeResultSearchInput;
  contactCompaniesSearchInput?: ContactCompaniesSearchInput;
}

/**
 * Variables for the `warehouseAddressCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseAddressCreateVariables {
  id: number;
  input: CreateWarehouseAddressInput;
}

/**
 * Variables for the `warehouseAddressDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseAddressDeleteVariables {
  id: number;
  input: DeleteWarehouseAddressInput;
}

/**
 * Variables for the `warehouseAddressUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseAddressUpdateVariables {
  id: number;
  input: UpdateWarehouseAddressInput;
}

/**
 * Variables for the `warehouseCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseCreateVariables {
  input: CreateWarehouseInput;
}

/**
 * Variables for the `warehouseDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseDeleteVariables {
  id: number;
}

/**
 * Variables for the `warehouses` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehousesVariables {
  input?: WarehousesSearchInput;
}

/**
 * Variables for the `warehouseUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseUpdateVariables {
  id: number;
  input: UpdateWarehouseInput;
}

/**
 * Variables for the `warehouse` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface WarehouseVariables {
  id: number;
}

/**
 * Variables for the `zoneTaxCodeCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodeCreateVariables {
  input: ZoneTaxCodeCreateInput;
}

/**
 * Variables for the `zoneTaxCodeDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodeDeleteVariables {
  id: string;
}

/**
 * Variables for the `zoneTaxCodesCreate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodesCreateVariables {
  input: ZoneTaxCodeCreateInput[];
}

/**
 * Variables for the `zoneTaxCodesDelete` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodesDeleteVariables {
  priceId: string;
}

/**
 * Variables for the `zoneTaxCodes` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodesVariables {
  input?: ZoneTaxCodeSearchInput;
}

/**
 * Variables for the `zoneTaxCodeUpdate` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodeUpdateVariables {
  id: string;
  input: ZoneTaxCodeUpdateInput;
}

/**
 * Variables for the `zoneTaxCode` GraphQL operation. Generated from the
 * operation signature — field names and required/optional status mirror
 * the operation's declared variables exactly.
 */
export interface ZoneTaxCodeVariables {
  id: string;
}
