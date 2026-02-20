/**
 * Generated GraphQL mutations bundle
 * This file is auto-generated. Do not edit manually.
 */

export const addCompanyManager = `mutation addCompanyManager(\$userId: Int!, \$companyId: Int!) {
  addCompanyManager(userId: \$userId, companyId: \$companyId)
}
`;

export const addSurchargesToProduct = `mutation addSurchargesToProduct(\$input: AddSurchargesToProductInput!) {
  addSurchargesToProduct(input: \$input) {
    status
    message
  }
}`;

export const adminUserCreate = `mutation adminUserCreate(\$input: CreateUserDto!) {
  adminUserCreate(input: \$input) {
    ...AdminUserFields
  }
}`;

export const adminUserDelete = `mutation adminUserDelete(\$email: String!) {
  adminUserDelete(email: \$email)
}
`;

export const adminUserTenantCreate = `mutation adminUserTenantCreate(\$input: CreateTenantDto!) {
  adminUserTenantCreate(input: \$input) {
    ...AdminUserTenantFields
  }
}`;

export const adminUserTenantDelete = `mutation adminUserTenantDelete(\$id: Int!) {
  adminUserTenantDelete(id: \$id) {
    ...AdminUserTenantFields
  }
}`;

export const adminUserUpdate = `mutation adminUserUpdate(\$email: String!, \$input: UpdateUserDto!) {
  adminUserUpdate(email: \$email, input: \$input) {
    ...AdminUserFields
  }
}`;

export const attributeCreate = `mutation attributeCreate(\$input: AttributeCreateInput!) {
  attributeCreate(input: \$input) {
    ...AttributeFields
  }
}
`;

export const attributeCsvImport = `mutation attributeCsvImport(\$input: AttributeCsvInput!) {
  attributeCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const attributeDelete = `mutation attributeDelete(\$id: String!) {
  attributeDelete(id: \$id)
}
`;

export const attributeDescriptionCreate = `mutation attributeDescriptionCreate(\$input: AttributeDescriptionCreateInput!) {
  attributeDescriptionCreate(input: \$input) {
    ...AttributeDescriptionFields
  }
}`;

export const attributeDescriptionCsvImport = `mutation attributeDescriptionCsvImport(\$input: AttributeDescriptionCsvInput!) {
  attributeDescriptionCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const attributeDescriptionDelete = `mutation attributeDescriptionDelete(\$id: String!) {
  attributeDescriptionDelete(id: \$id)
}
`;

export const attributeDescriptionDeleteBulk = `mutation attributeDescriptionDeleteBulk(\$ids: [String!]!) {
  attributeDescriptionDeleteBulk(ids: \$ids) {
    ...BulkDeleteResponseFields
  }
}
`;

export const attributeDescriptionUpdate = `mutation attributeDescriptionUpdate(\$id: String!, \$input: AttributeDescriptionUpdateInput!) {
  attributeDescriptionUpdate(id: \$id, input: \$input) {
    ...AttributeDescriptionFields
  }
}`;

export const attributeUpdate = `mutation attributeUpdate(\$id: String!, \$input: AttributeUpdateInput!) {
  attributeUpdate(id: \$id, input: \$input) {
    ...AttributeFields
  }
}
`;

export const authenticationCreate = `mutation authenticationCreate(\$input: CreateAuthenticationInput!) {
  authenticationCreate(input: \$input) {
    ...LoginFields
  }
}`;

export const authenticationDelete = `mutation authenticationDelete(\$uid: String!) {
  authenticationDelete(uid: \$uid)
}
`;

export const bulkCostPriceCreate = `mutation bulkCostPriceCreate(\$input: BulkCostPriceCreateInput!) {
  bulkCostPriceCreate(input: \$input) {
    ...BulkCostPriceFields
  }
}`;

export const bulkCostPriceCsvImport = `mutation bulkCostPriceCsvImport(\$input: BulkCostPriceCsvInput!) {
  bulkCostPriceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const bulkCostPriceDelete = `mutation bulkCostPriceDelete(\$id: String!) {
  bulkCostPriceDelete(id: \$id)
}
`;

export const bulkCostPricesBulk = `mutation bulkCostPricesBulk(\$input: [BulkCostPriceCreateInput!]!) {
  bulkCostPricesBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;

export const bulkCostPricesDelete = `mutation bulkCostPricesDelete(\$priceId: String!) {
  bulkCostPricesDelete(priceId: \$priceId)
}
`;

export const bulkCostPriceUpdate = `mutation bulkCostPriceUpdate(\$id: String!, \$input: BulkCostPriceUpdateInput!) {
  bulkCostPriceUpdate(id: \$id, input: \$input) {
    ...BulkCostPriceFields
  }
}`;

export const bulkPriceCreate = `mutation bulkPriceCreate(\$input: BulkPriceCreateInput!) {
  bulkPriceCreate(input: \$input) {
    ...BulkPriceFields
  }
}`;

export const bulkPriceCsvImport = `mutation bulkPriceCsvImport(\$input: BulkPriceCsvInput!) {
  bulkPriceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const bulkPriceDelete = `mutation bulkPriceDelete(\$id: String!) {
  bulkPriceDelete(id: \$id)
}
`;

export const bulkPricesCreate = `mutation bulkPricesCreate(\$input: [BulkPriceCreateInput!]!) {
  bulkPricesCreate(input: \$input) {
    ...BulkResponseDataFields
  }
}`;

export const bulkPricesDelete = `mutation bulkPricesDelete(\$priceId: String!) {
  bulkPricesDelete(priceId: \$priceId)
}
`;

export const bulkPriceUpdate = `mutation bulkPriceUpdate(\$id: String!, \$input: BulkPriceUpdateInput!) {
  bulkPriceUpdate(id: \$id, input: \$input) {
    ...BulkPriceFields
  }
}`;

export const bundleAddItems = `mutation bundleAddItems(\$id: String!, \$input: BundleAddItemsInput!) {
  bundleAddItems(id: \$id, input: \$input) {
    ...BundleItemFields
  }
}`;

export const bundleAddItemsAndReturnBundle = `mutation bundleAddItemsAndReturnBundle(\$id: String!, \$input: BundleAddItemsInput!) {
  bundleAddItemsAndReturnBundle(id: \$id, input: \$input) {
    ...BundleFields
  }
}
`;

export const bundleCreate = `mutation bundleCreate(\$input: BundleCreateInput!) {
  bundleCreate(input: \$input) {
    ...BundleFields
  }
}`;

export const bundleDelete = `mutation bundleDelete(\$id: String!) {
  bundleDelete(id: \$id)
}
`;

export const bundleRemoveItem = `mutation bundleRemoveItem(\$id: String!, \$productId: Int!) {
  bundleRemoveItem(id: \$id, productId: \$productId)
}
`;

export const bundleRemoveItemAndReturnBundle = `mutation bundleRemoveItemAndReturnBundle(\$id: String!, \$productId: Int!, \$taxZone: String) {
  bundleRemoveItemAndReturnBundle(id: \$id, productId: \$productId, taxZone: \$taxZone) {
    ...BundleFields
  }
}
`;

export const bundleUpdate = `mutation bundleUpdate(\$id: String!, \$input: BundleUpdateInput!) {
  bundleUpdate(id: \$id, input: \$input) {
    ...BundleFields
  }
}`;

export const businessRuleCreate = `mutation businessRuleCreate(\$input: BusinessRuleCreateInput!) {
  businessRuleCreate(input: \$input) {
    ...BusinessRuleFields
  }
}`;

export const businessRuleDecisionTableAddColumn = `mutation businessRuleDecisionTableAddColumn(\$input: BusinessRuleDecisionTableAddColumnInput!) {
  businessRuleDecisionTableAddColumn(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableAddRow = `mutation businessRuleDecisionTableAddRow(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTableAddRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableDeleteColumn = `mutation businessRuleDecisionTableDeleteColumn(\$input: BusinessRuleDecisionTableDeleteColumnInput!) {
  businessRuleDecisionTableDeleteColumn(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableDeleteRow = `mutation businessRuleDecisionTableDeleteRow(\$input: BusinessRuleDecisionTableDeleteRowInput!) {
  businessRuleDecisionTableDeleteRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableMoveRow = `mutation businessRuleDecisionTableMoveRow(\$input: BusinessRuleDecisionTableMoveRowInput!) {
  businessRuleDecisionTableMoveRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableSetCell = `mutation businessRuleDecisionTableSetCell(\$input: BusinessRuleDecisionTableSetCellInput!) {
  businessRuleDecisionTableSetCell(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDecisionTableUpdate = `mutation businessRuleDecisionTableUpdate(\$input: BusinessRuleDecisionTableUpdateInput!) {
  businessRuleDecisionTableUpdate(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleDelete = `mutation businessRuleDelete(\$id: ID!) {
  businessRuleDelete(id: \$id)
}
`;

export const businessRuleUpdate = `mutation businessRuleUpdate(\$id: ID!, \$input: BusinessRuleUpdateInput!) {
  businessRuleUpdate(id: \$id, input: \$input) {
    ...BusinessRuleFields
  }
}`;

export const carrierAssignWarehouse = `mutation carrierAssignWarehouse(\$id: Int!, \$warehouseId: Int!) {
  carrierAssignWarehouse(id: \$id, warehouseId: \$warehouseId)
}
`;

export const carrierAssignWarehouseAndReturnCarrier = `mutation carrierAssignWarehouseAndReturnCarrier(\$id: Int!, \$warehouseId: Int!) {
  carrierAssignWarehouseAndReturnCarrier(id: \$id, warehouseId: \$warehouseId) {
    ...CarrierFields
  }
}
`;

export const carrierCreate = `mutation carrierCreate(\$input: CarrierCreateInput!) {
  carrierCreate(input: \$input) {
    ...CarrierFields
  }
}`;

export const carrierDelete = `mutation carrierDelete(\$id: Int!) {
  carrierDelete(id: \$id)
}
`;

export const carrierUnassignWarehouse = `mutation carrierUnassignWarehouse(\$id: Int!, \$warehouseId: Int!) {
  carrierUnassignWarehouse(id: \$id, warehouseId: \$warehouseId)
}
`;

export const carrierUnassignWarehouseAndReturnCarrier = `mutation carrierUnassignWarehouseAndReturnCarrier(\$id: Int!, \$warehouseId: Int!) {
  carrierUnassignWarehouseAndReturnCarrier(id: \$id, warehouseId: \$warehouseId) {
    ...CarrierFields
  }
}
`;

export const carrierUpdate = `mutation carrierUpdate(\$id: Int!, \$input: CarrierUpdateInput!) {
  carrierUpdate(id: \$id, input: \$input) {
    ...CarrierFields
  }
}`;

export const cartAcceptPurchaseAuthorizationRequest = `mutation cartAcceptPurchaseAuthorizationRequest(
  \$id: String!
  \$input: CartAcceptPurchaseAuthorizationRequestInput
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAcceptPurchaseAuthorizationRequest(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddActionCode = `mutation cartAddActionCode(
  \$id: String!
  \$input: CartActionCodeInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddBundle = `mutation cartAddBundle(
  \$id: String!
  \$input: CartAddBundleInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddBundle(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddItem = `mutation cartAddItem(
  \$id: String!
  \$input: CartAddItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddItem(id: \$id, input: \$input) {
    ... CartFields
  }
}`;

export const cartDelete = `mutation cartDelete(\$id: String!) {
  cartDelete(id: \$id)
}`;

export const cartDeleteItem = `mutation cartDeleteItem(
  \$id: String!
  \$input: CartDeleteItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartDeleteItem(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartInvalidateCache = `mutation cartInvalidateCache(\$id: String) {
  cartInvalidateCache(id: \$id)
}
`;

export const cartItemBulk = `mutation cartItemBulk(\$input: CartItemsBulkUpsertInput!) {
  cartItemBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;

export const cartProcess = `mutation cartProcess(\$id: String!, \$input: CartProcessInput!) {
  cartProcess(id: \$id, input: \$input) {
    cartOrderId
    cart {
      cartId
    }
  }
}`;

export const cartRemoveActionCode = `mutation cartRemoveActionCode(
  \$id: String!
  \$input: CartActionCodeInput!
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartRemoveActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartRequestPurchaseAuthorization = `mutation cartRequestPurchaseAuthorization(\$id: String!) {
  cartRequestPurchaseAuthorization(id: \$id) {
    cartId
  }
}`;

export const cartSetContact = `mutation cartSetContact(\$id: String!, \$input: CartSetContactInput!) {
  cartSetContact(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartSetCustomer = `mutation cartSetCustomer(\$id: String!, \$input: CartSetCustomerInput!) {
  cartSetCustomer(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartSetUser = `mutation cartSetUser(\$id: String!, \$input: CartSetUserInput!) {
  cartSetUser(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartStart = `mutation cartStart(
  \$input: CartStartInput
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartStart(input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdate = `mutation cartUpdate(
  \$id: String!
  \$input: CartUpdateInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdate(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdateAddress = `mutation cartUpdateAddress(
  \$id: String! 
  \$input: CartUpdateAddressInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdateAddress(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdateItem = `mutation cartUpdateItem(
  \$id: String!
  \$itemId: String!
  \$input: CartUpdateItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdateItem(id: \$id, itemId: \$itemId, input: \$input) {
    ...CartFields
  }
}`;

export const categoryAddProductsClusters = `mutation categoryAddProductsClusters(\$id: Int!, \$input: CategoryAddProductsClustersInput!) {
  categoryAddProductsClusters(id: \$id, input: \$input) {
    ...CategoryAddProductsClustersResponseFields
  }
}`;

export const categoryCreate = `mutation categoryCreate(\$input: CreateCategoryInput!) {
  categoryCreate(input: \$input) {
    ...CategoryFields
  }
}`;

export const categoryCsvImport = `mutation categoryCsvImport(\$input: CategoryCsvInput!) {
  categoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const categoryDelete = `mutation categoryDelete(\$categoryId: Float!) {
  categoryDelete(categoryId: \$categoryId)
}
`;

export const categoryRemoveProductsClusters = `mutation categoryRemoveProductsClusters(\$id: Int!, \$input: CategoryRemoveProductsClustersInput!) {
  categoryRemoveProductsClusters(id: \$id, input: \$input) {
    ...CategoryRemoveProductsClustersResponseFields
  }
}`;

export const categoryUpdate = `mutation categoryUpdate(\$categoryId: Float!, \$input: UpdateCategoryInput!) {
  categoryUpdate(categoryId: \$categoryId, input: \$input) {
    ...CategoryFields
  }
}`;

export const channelCreate = `mutation channelCreate(\$input: ChannelCreateInput!) {
  channelCreate(input: \$input) {
    ...ChannelFields
  }
}
`;

export const channelDelete = `mutation channelDelete(\$id: Int!) {
  channelDelete(id: \$id)
}
`;

export const channelUpdate = `mutation channelUpdate(\$id: Int!, \$input: ChannelUpdateInput!) {
  channelUpdate(id: \$id, input: \$input) {
    ...ChannelFields
  }
}
`;

export const claimsReset = `mutation claimsReset(\$uid: String!, \$email: String!) {
  claimsReset(uid: \$uid, email: \$email)
}
`;

export const claimsResetAll = `mutation claimsResetAll {
  claimsResetAll {
    ...ClaimsResetAllResponseFields
  }
}
`;

export const clusterAssignProducts = `mutation clusterAssignProducts(\$clusterId: Int!, \$input: ClusterAssignProductsInput!) {
  clusterAssignProducts(clusterId: \$clusterId, input: \$input) {
    ...ClusterAssignProductsResponseFields
  }
}`;

export const clusterBulkMove = `mutation clusterBulkMove(\$input: ClusterBulkMoveInput!) {
  clusterBulkMove(input: \$input) {
    ...ClusterBulkMoveResponseFields
  }
}
`;

export const clusterConfigAddSetting = `mutation clusterConfigAddSetting(\$clusterConfigId: Int!, \$input: ClusterConfigSettingInput!) {
  clusterConfigAddSetting(clusterConfigId: \$clusterConfigId, input: \$input) {
    ...ClusterConfigSettingResponseFields
  }
}`;

export const clusterConfigCreate = `mutation clusterConfigCreate(\$input: ClusterConfigCreateInput!) {
  clusterConfigCreate(input: \$input) {
    ...ClusterConfigResponseFields
  }
}`;

export const clusterConfigDelete = `mutation clusterConfigDelete(\$id: Int!) {
  clusterConfigDelete(id: \$id)
}
`;

export const clusterConfigRemoveSetting = `mutation clusterConfigRemoveSetting(\$clusterConfigId: Int!, \$settingId: Int!) {
  clusterConfigRemoveSetting(clusterConfigId: \$clusterConfigId, settingId: \$settingId)
}
`;

export const clusterConfigUpdateSetting = `mutation clusterConfigUpdateSetting(\$clusterConfigId: Int!, \$settingId: Int!, \$input: ClusterConfigSettingUpdateInput!) {
  clusterConfigUpdateSetting(clusterConfigId: \$clusterConfigId, settingId: \$settingId, input: \$input) {
    ...UpdateClusterConfigSettingResponseFields
  }
}`;

export const clusterCreate = `mutation clusterCreate(\$input: ClusterCreateInput!) {
  clusterCreate(input: \$input) {
    ...ClusterFields
  }
}`;

export const clusterCsvImport = `mutation clusterCsvImport(\$input: ClusterCsvInput!) {
  clusterCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const clusterDelete = `mutation clusterDelete(\$id: Int!) {
  clusterDelete(id: \$id)
}
`;

export const clusterOptionCreate = `mutation clusterOptionCreate(\$clusterId: Int!, \$input: ClusterOptionCreateInput!) {
  clusterOptionCreate(clusterId: \$clusterId, input: \$input) {
    ...ClusterOptionFields
  }
}`;

export const clusterOptionDelete = `mutation clusterOptionDelete(\$clusterId: Int!, \$optionId: Int!) {
  clusterOptionDelete(clusterId: \$clusterId, optionId: \$optionId)
}
`;

export const clusterOptionUpdate = `mutation clusterOptionUpdate(\$clusterId: Int!, \$optionId: Int!, \$input: ClusterOptionUpdateInput!) {
  clusterOptionUpdate(clusterId: \$clusterId, optionId: \$optionId, input: \$input) {
    ...ClusterOptionFields
  }
}`;

export const clusterProductCreate = `mutation clusterProductCreate(\$id: Int!, \$input: CreateProductInput!) {
  clusterProductCreate(id: \$id, input: \$input) {
    ...ProductFields
  }
}`;

export const clusterProductDelete = `mutation clusterProductDelete(\$id: Int!, \$productId: Int!) {
  clusterProductDelete(id: \$id, productId: \$productId)
}
`;

export const clusterProductUpdate = `mutation clusterProductUpdate(\$id: Int!, \$productId: Int!, \$input: UpdateProductInput!) {
  clusterProductUpdate(id: \$id, productId: \$productId, input: \$input) {
    ...ProductFields
  }
}`;

export const clusterUnassignProducts = `mutation clusterUnassignProducts(\$clusterId: Int!, \$input: ClusterUnassignProductsInput!) {
  clusterUnassignProducts(clusterId: \$clusterId, input: \$input) {
    ...ClusterUnassignProductsResponseFields
  }
}`;

export const clusterUpdate = `mutation clusterUpdate(\$id: Int!, \$input: ClusterUpdateInput!) {
  clusterUpdate(id: \$id, input: \$input) {
    ...ClusterFields
  }
}`;

export const companyAddressCreate = `mutation companyAddressCreate(\$input: CompanyAddressCreateInput!) {
  companyAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;

export const companyAddressDelete = `mutation companyAddressDelete(\$input: CompanyAddressDeleteInput!) {
  companyAddressDelete(input: \$input)
}`;

export const companyAddressUpdate = `mutation companyAddressUpdate(\$input: CompanyAddressUpdateInput!) {
  companyAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;

export const companyCreate = `mutation companyCreate(\$input: CreateCompanyInput!) {
  companyCreate(input: \$input) {
    ...CompanyFields
  }
}`;

export const companyCsvImport = `mutation companyCsvImport(\$input: CompanyCsvInput!) {
  companyCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const companyDelete = `mutation companyDelete(\$id: Int!) {
  companyDelete(id: \$id)
}
`;

export const companySearchCleanupOrphanedIndices = `mutation companySearchCleanupOrphanedIndices(\$input: CompanySearchReindexInput!) {
  companySearchCleanupOrphanedIndices(input: \$input)
}
`;

export const companySearchFixAliasWriteIndex = `mutation companySearchFixAliasWriteIndex(\$input: CompanySearchReindexInput!) {
  companySearchFixAliasWriteIndex(input: \$input)
}
`;

export const companySearchIndexUpdateMapping = `mutation companySearchIndexUpdateMapping(\$input: CompanySearchIndexUpdateMappingInput!) {
  companySearchIndexUpdateMapping(input: \$input)
}
`;

export const companySearchReindex = `mutation companySearchReindex(\$input: CompanySearchReindexInput!) {
  companySearchReindex(input: \$input)
}
`;

export const companyUpdate = `mutation companyUpdate(\$id: Int!, \$input: UpdateCompanyInput!) {
  companyUpdate(id: \$id, input: \$input) {
    ...CompanyFields
  }
}`;

export const contactAddToCompanies = `mutation contactAddToCompanies(\$id: Int!, \$input: ContactAddToCompaniesInput!) {
  contactAddToCompanies(id: \$id, input: \$input) {
    ...ContactAddToCompaniesResponseFields
  }
}`;

export const contactCreate = `mutation contactCreate(\$input: CreateContactInput!) {
  contactCreate(input: \$input) {
    ...ContactFields
  }
}`;

export const contactCreateAccount = `mutation contactCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
  contactCreateAccount(id: \$id, input: \$input) {
    ...RegisterContactResponseFields
  }
}`;

export const contactCsvImport = `mutation contactCsvImport(\$input: ContactCsvInput!) {
  contactCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const contactDelete = `mutation contactDelete(\$id: Int!) {
  contactDelete(id: \$id)
}
`;

export const contactDeleteAccount = `mutation contactDeleteAccount(\$id: Int!) {
  contactDeleteAccount(id: \$id)
}
`;

export const contactRegister = `mutation contactRegister(\$input: RegisterContactInput!) {
  contactRegister(input: \$input) {
    ...RegisterContactResponseFields
  }
}`;

export const contactRemoveFromCompanies = `mutation contactRemoveFromCompanies(\$id: Int!, \$input: ContactRemoveFromCompaniesInput!) {
  contactRemoveFromCompanies(id: \$id, input: \$input) {
    ...ContactRemoveFromCompaniesResponseFields
  }
}`;

export const contactUpdate = `mutation contactUpdate(\$id: Int!, \$input: UpdateContactInput!) {
  contactUpdate(id: \$id, input: \$input) {
    ...ContactFields
  }
}`;

export const costPriceCreate = `mutation costPriceCreate(\$input: CostPriceCreateInput!) {
  costPriceCreate(input: \$input) {
    ...CostPriceFields
  }
}`;

export const costPriceDelete = `mutation costPriceDelete(\$id: String!) {
  costPriceDelete(id: \$id)
}
`;

export const costPricesBulk = `mutation costPricesBulk(\$input: [CostPriceCreateInput!]!) {
  costPricesBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;

export const costPricesDelete = `mutation costPricesDelete(\$priceId: String!) {
  costPricesDelete(priceId: \$priceId)
}
`;

export const costPriceUpdate = `mutation costPriceUpdate(\$id: String!, \$input: CostPriceUpdateInput!) {
  costPriceUpdate(id: \$id, input: \$input) {
    ...CostPriceFields
  }
}`;

export const crossupsellCreate = `mutation crossupsellCreate(\$input: CrossupsellCreateInput!) {
  crossupsellCreate(input: \$input) {
    ...CrossupsellFields
  }
}`;

export const crossupsellDelete = `mutation crossupsellDelete(\$id: String!) {
  crossupsellDelete(id: \$id)
}
`;

export const crossupsellUpdate = `mutation crossupsellUpdate(\$id: String!, \$input: CrossupsellUpdateInput!) {
  crossupsellUpdate(id: \$id, input: \$input) {
    ...CrossupsellFields
  }
}`;

export const customerAddressCreate = `mutation customerAddressCreate(\$input: CustomerAddressCreateInput!) {
  customerAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;

export const customerAddressDelete = `mutation customerAddressDelete(\$input: CustomerAddressDeleteInput!) {
  customerAddressDelete(input: \$input)
}`;

export const customerAddressUpdate = `mutation customerAddressUpdate(\$input: CustomerAddressUpdateInput!) {
  customerAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;

export const customerCreate = `mutation customerCreate(\$input: CustomerInput!) {
  customerCreate(input: \$input) {
    ...CustomerFields
  }
}`;

export const customerCreateAccount = `mutation customerCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
  customerCreateAccount(id: \$id, input: \$input) {
    ...RegisterCustomerResponseFields
  }
}`;

export const customerCsvImport = `mutation customerCsvImport(\$input: CustomerCsvInput!) {
  customerCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const customerDelete = `mutation customerDelete(\$id: Int!) {
  customerDelete(id: \$id)
}
`;

export const customerDeleteAccount = `mutation customerDeleteAccount(\$id: Int!) {
  customerDeleteAccount(id: \$id)
}
`;

export const customerRegister = `mutation customerRegister(\$input: RegisterCustomerInput!) {
  customerRegister(input: \$input) {
    ...RegisterCustomerResponseFields
  }
}`;

export const customerUpdate = `mutation customerUpdate(\$id: Int!, \$input: UpdateCustomerInput!) {
  customerUpdate(id: \$id, input: \$input) {
    ...CustomerFields
  }
}`;

export const discountCreate = `mutation discountCreate(\$input: DiscountCreateInput!) {
  discountCreate(input: \$input) {
    ...DiscountFields
  }
}`;

export const discountCsvImport = `mutation discountCsvImport(\$input: DiscountCsvInput!) {
  discountCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const discountDelete = `mutation discountDelete(\$id: String!) {
  discountDelete(id: \$id)
}
`;

export const discountsDeleteByPricesheetId = `mutation discountsDeleteByPricesheetId(\$pricesheetId: String!) {
  discountsDeleteByPricesheetId(pricesheetId: \$pricesheetId)
}
`;

export const discountUpdate = `mutation discountUpdate(\$id: String!, \$input: DiscountUpdateInput!) {
  discountUpdate(id: \$id, input: \$input) {
    ...DiscountFields
  }
}`;

export const documentTemplateCreate = `mutation documentTemplateCreate(\$input: DocumentTemplateCreateInput!) {
  documentTemplateCreate(input: \$input) {
    ...DocumentTemplateFields
  }
}`;

export const documentTemplateRenderToPDF = `mutation documentTemplateRenderToPDF(\$id: String!, \$input: TemplateRenderInput!) {
  documentTemplateRenderToPDF(id: \$id, input: \$input) {
    ...Base64FileFields
  }
}`;

export const documentTemplateUpdate = `mutation documentTemplateUpdate(\$id: String!, \$input: DocumentTemplateUpdateInput!) {
  documentTemplateUpdate(id: \$id, input: \$input) {
    ...DocumentTemplateFields
  }
}`;

export const emailTemplateAddAttachment = `mutation emailTemplateAddAttachment(\$id: String!, \$documentTemplateId: String!) {
  emailTemplateAddAttachment(id: \$id, documentTemplateId: \$documentTemplateId) {
    ...EmailTemplateFields
  }
}`;

export const emailTemplateCreate = `mutation emailTemplateCreate(\$input: EmailTemplateCreateInput!) {
  emailTemplateCreate(input: \$input) {
    ...EmailTemplateFields
  }
}`;

export const emailTemplateRemoveAttachment = `mutation emailTemplateRemoveAttachment(\$id: String!, \$documentTemplateId: String!) {
  emailTemplateRemoveAttachment(id: \$id, documentTemplateId: \$documentTemplateId) {
    ...EmailTemplateFields
  }
}`;

export const emailTemplateRenderAndSend = `mutation emailTemplateRenderAndSend(\$id: String!, \$input: TemplateRenderInput!) {
  emailTemplateRenderAndSend(id: \$id, input: \$input)
}
`;

export const emailTemplateUpdate = `mutation emailTemplateUpdate(\$id: String!, \$input: EmailTemplateUpdateInput!) {
  emailTemplateUpdate(id: \$id, input: \$input) {
    ...EmailTemplateFields
  }
}`;

export const eventActionConfigDelete = `mutation eventActionConfigDelete(\$id: String!) {
  eventActionConfigDelete(id: \$id)
}
`;

export const eventToEmailConfigCreate = `mutation eventToEmailConfigCreate(\$input: EventToEmailConfigCreateInput!) {
  eventToEmailConfigCreate(input: \$input) {
    ...EventToEmailConfigFields
  }
}`;

export const eventToEmailConfigUpdate = `mutation eventToEmailConfigUpdate(\$id: String!, \$input: EventToEmailConfigUpdateInput!) {
  eventToEmailConfigUpdate(id: \$id, input: \$input) {
    ...EventToEmailConfigFields
  }
}`;

export const eventToWebHookConfigCreate = `mutation eventToWebHookConfigCreate(\$input: EventToWebHookConfigCreateInput!) {
  eventToWebHookConfigCreate(input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;

export const eventToWebHookConfigUpdate = `mutation eventToWebHookConfigUpdate(\$id: String!, \$input: EventToWebHookConfigUpdateInput!) {
  eventToWebHookConfigUpdate(id: \$id, input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;

export const exchangeRefreshToken = `mutation exchangeRefreshToken(\$input: ExchangeRefreshTokenInput!) {
  exchangeRefreshToken(input: \$input) {
    ...RefreshTokenResponseFields
  }
}`;

export const favoriteListAddItems = `mutation favoriteListAddItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListAddItems(id: \$id, input: \$input) {
    ...FavoriteListFields
  }
}`;

export const favoriteListClearItems = `mutation favoriteListClearItems(\$id: String!, \$products: Boolean, \$clusters: Boolean) {
  favoriteListClearItems(id: \$id, products: \$products, clusters: \$clusters) {
    ...FavoriteListFields
  }
}`;

export const favoriteListCreate = `mutation favoriteListCreate(\$input: FavoriteListsCreateInput!) {
  favoriteListCreate(input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;

export const favoriteListDelete = `mutation favoriteListDelete(\$id: String!) {
  favoriteListDelete(id: \$id)
}`;

export const favoriteListRemoveItems = `mutation favoriteListRemoveItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListRemoveItems(id: \$id, input: \$input) {
    ...FavoriteListFields
  }
}`;

export const favoriteListUpdate = `mutation favoriteListUpdate(\$id: String!, \$input: FavoriteListsUpdateInput!) {
  favoriteListUpdate(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;

export const incentiveRuleCreate = `mutation incentiveRuleCreate(\$input: BusinessRuleCreateInput!) {
  incentiveRuleCreate(input: \$input) {
    ...BusinessRuleFields
  }
}`;

export const incentiveRuleSetAction = `mutation incentiveRuleSetAction(\$input: IncentiveRuleSetActionInput!) {
  incentiveRuleSetAction(input: \$input) {
    ...BusinessRuleFields
  }
}`;

export const incentiveRuleSetOrderItemConditions = `mutation incentiveRuleSetOrderItemConditions(\$input: IncentiveRuleOrderItemSetCellInput!) {
  incentiveRuleSetOrderItemConditions(input: \$input) {
    ...BusinessRuleFields
  }
}`;

export const inventoryCreate = `mutation inventoryCreate(\$input: CreateInventoryInput!) {
  inventoryCreate(input: \$input) {
    ...InventoryResponseFields
  }
}`;

export const inventoryCsvImport = `mutation inventoryCsvImport(\$input: InventoryCsvInput!) {
  inventoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const inventoryDelete = `mutation inventoryDelete(\$id: Int!) {
  inventoryDelete(id: \$id) {
    ...InventoryDeleteResponseFields
  }
}`;

export const inventoryUpdate = `mutation inventoryUpdate(\$id: Int!, \$input: UpdateInventoryInput!) {
  inventoryUpdate(id: \$id, input: \$input) {
    ...InventoryResponseFields
  }
}`;

export const login = `mutation login(\$input: LoginInput!) {
  login(input: \$input) {
    ...LoginFields
  }
}`;

export const logout = `mutation logout {
  logout {
    ...LogoutFields
  }
}`;

export const machineCreate = `mutation machineCreate(\$input: CreateSparePartsMachineInput!) {
  machineCreate(input: \$input) {
    ...SparePartsMachineFields
  }
}`;

export const machineDelete = `mutation machineDelete(\$id: String!) {
  machineDelete(id: \$id)
}
`;

export const machineUpsert = `mutation machineUpsert(\$input: UpsertSparePartsMachineInput!) {
  machineUpsert(input: \$input) {
    ...SparePartsMachineFields
  }
}`;

export const magicTokenCreate = `mutation magicTokenCreate(\$input: MagicTokenCreateInput!) {
  magicTokenCreate(input: \$input) {
    ...MagicTokenFields
  }
}`;

export const magicTokenDelete = `mutation magicTokenDelete(\$id: String!) {
  magicTokenDelete(id: \$id)
}
`;

export const magicTokenLogin = `mutation magicTokenLogin(\$id: String!) {
  magicTokenLogin(id: \$id) {
    ...LoginFields
  }
}`;

export const magicTokenUpdate = `mutation magicTokenUpdate(\$id: String!, \$input: MagicTokenUpdateInput!) {
  magicTokenUpdate(id: \$id, input: \$input) {
    ...MagicTokenFields
  }
}`;

export const mediaAttachmentCreate = `mutation mediaAttachmentCreate(\$input: MediaAttachmentInput!) {
  mediaAttachmentCreate(input: \$input) {
    ...MediaAttachmentFields
  }
}`;

export const mediaAttachmentDelete = `mutation mediaAttachmentDelete(\$id: String!) {
  mediaAttachmentDelete(id: \$id) {
    ...DeleteMediaAttachmentResponseFields
  }
}`;

export const mediaAttachmentUpdate = `mutation mediaAttachmentUpdate(\$id: String!, \$input: UpdateMediaAttachmentInput!) {
  mediaAttachmentUpdate(id: \$id, input: \$input) {
    ...MediaAttachmentFields
  }
}`;

export const mediaDocumentCreate = `mutation mediaDocumentCreate(\$input: MediaDocumentInput!) {
  mediaDocumentCreate(input: \$input) {
    ...MediaDocumentFields
  }
}`;

export const mediaDocumentCsvImport = `mutation mediaDocumentCsvImport(\$input: DocumentCsvInput!) {
  mediaDocumentCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const mediaDocumentDelete = `mutation mediaDocumentDelete(\$mediaId: String!) {
  mediaDocumentDelete(mediaId: \$mediaId) {
    ...DeleteMediaDocumentResponseFields
  }
}`;

export const mediaDocumentUpdate = `mutation mediaDocumentUpdate(\$input: UpdateMediaDocumentInput!) {
  mediaDocumentUpdate(input: \$input) {
    ...MediaDocumentFields
  }
}`;

export const mediaImageCreate = `mutation mediaImageCreate(\$input: MediaImageInput!) {
  mediaImageCreate(input: \$input) {
    ...MediaImageFields
  }
}`;

export const mediaImageCsvImport = `mutation mediaImageCsvImport(\$input: ImageCsvInput!) {
  mediaImageCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const mediaImageDelete = `mutation mediaImageDelete(\$mediaId: String!) {
  mediaImageDelete(mediaId: \$mediaId) {
    ...DeleteMediaImageResponseFields
  }
}`;

export const mediaImageUpdate = `mutation mediaImageUpdate(\$input: UpdateMediaImageInput!) {
  mediaImageUpdate(input: \$input) {
    ...MediaImageFields
  }
}`;

export const mediaVideoCreate = `mutation mediaVideoCreate(\$input: MediaVideoInput!) {
  mediaVideoCreate(input: \$input) {
    ...MediaVideoFields
  }
}`;

export const mediaVideoCsvImport = `mutation mediaVideoCsvImport(\$input: VideoCsvInput!) {
  mediaVideoCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const mediaVideoDelete = `mutation mediaVideoDelete(\$mediaId: String!) {
  mediaVideoDelete(mediaId: \$mediaId) {
    ...DeleteMediaVideoResponseFields
  }
}`;

export const mediaVideoUpdate = `mutation mediaVideoUpdate(\$input: UpdateMediaVideoInput!) {
  mediaVideoUpdate(input: \$input) {
    ...MediaVideoFields
  }
}`;

export const orderAddressUpdate = `mutation orderAddressUpdate(\$id: Int!, \$orderId: Int!, \$input: OrderAddressUpdateInput!) {
  orderAddressUpdate(id: \$id, orderId: \$orderId, input: \$input) {
    ...OrderAddressFields
  }
}`;

export const orderCreate = `mutation orderCreate(\$order: OrderCreateInput!) {
  orderCreate(order: \$order) {
    ...OrderFields
  }
}`;

export const orderDelete = `mutation orderDelete(\$orderId: Int!) {
  orderDelete(orderId: \$orderId)
}
`;

export const orderItemCreate = `mutation orderItemCreate(\$orderId: Int!, \$orderItem: OrderItemCreateInput!) {
  orderItemCreate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;

export const orderItemDelete = `mutation orderItemDelete(\$orderId: Int!, \$orderItemId: Int!) {
  orderItemDelete(orderId: \$orderId, orderItemId: \$orderItemId)
}
`;

export const orderItemUpdate = `mutation orderItemUpdate(\$orderId: Int!, \$orderItem: OrderItemUpdateInput!) {
  orderItemUpdate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;

export const orderlistAddItems = `mutation orderlistAddItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistAddItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistAssignCompanies = `mutation orderlistAssignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistAssignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistAssignUsers = `mutation orderlistAssignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistAssignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistCreate = `mutation orderlistCreate(\$input: OrderlistCreateInput!) {
  orderlistCreate(input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistDelete = `mutation orderlistDelete(\$id: Int!) {
  orderlistDelete(id: \$id)
}
`;

export const orderlistRemoveItems = `mutation orderlistRemoveItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistRemoveItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUnassignCompanies = `mutation orderlistUnassignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistUnassignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUnassignUsers = `mutation orderlistUnassignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistUnassignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUpdate = `mutation orderlistUpdate(\$id: Int!, \$input: OrderlistUpdateInput!) {
  orderlistUpdate(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderRevisionRestore = `mutation orderRevisionRestore(\$orderId: Int!, \$revisionNumber: Int!) {
  orderRevisionRestore(orderId: \$orderId, revisionNumber: \$revisionNumber) {
    ...OrderFields
  }
}
`;

export const orderRevisionsInvalidate = `mutation orderRevisionsInvalidate(\$input: OrderRevisionsInvalidateInput!) {
  orderRevisionsInvalidate(input: \$input)
}
`;

export const orderSendConfirmationEmail = `mutation orderSendConfirmationEmail(\$orderId: Int!, \$attachments: [Base64FileInput!]) {
  orderSendConfirmationEmail(orderId: \$orderId, attachments: \$attachments) {
    ...SendOrderConfirmResponseTypeFields
  }
}`;

export const orderSetStatus = `mutation orderSetStatus(\$input: OrderSetStatusInput!) {
  orderSetStatus(input: \$input) {
    id
  }
}`;

export const orderStatusCreate = `mutation orderStatusCreate(\$input: CreateOrderStatusInput!) {
  orderStatusCreate(input: \$input) {
    ...OrderStatusFields
  }
}`;

export const orderStatusDelete = `mutation orderStatusDelete(\$id: Int!) {
  orderStatusDelete(id: \$id)
}
`;

export const orderStatusSetAddOrderStatuses = `mutation orderStatusSetAddOrderStatuses(\$id: Int!, \$input: AddOrderStatusesToOrderStatusSetInput!) {
  orderStatusSetAddOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusSetCreate = `mutation orderStatusSetCreate(\$input: CreateOrderStatusSetInput!) {
  orderStatusSetCreate(input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusSetDelete = `mutation orderStatusSetDelete(\$id: Int!) {
  orderStatusSetDelete(id: \$id)
}
`;

export const orderStatusSetRemoveOrderStatuses = `mutation orderStatusSetRemoveOrderStatuses(\$id: Int!, \$input: RemoveOrderStatusesFromOrderStatusSetInput!) {
  orderStatusSetRemoveOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusSetUpdate = `mutation orderStatusSetUpdate(\$id: Int!, \$input: UpdateOrderStatusSetInput!) {
  orderStatusSetUpdate(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusUpdate = `mutation orderStatusUpdate(\$id: Int!, \$input: UpdateOrderStatusInput!) {
  orderStatusUpdate(id: \$id, input: \$input) {
    ...OrderStatusFields
  }
}`;

export const orderUpdate = `mutation orderUpdate(\$orderId: Int!, \$order: OrderUpdateInput!) {
  orderUpdate(orderId: \$orderId, order: \$order) {
    ...OrderFields
  }
}`;

export const orderUpdateAddress = `mutation orderUpdateAddress(\$id: Int!, \$addressId: Int!, \$input: OrderUpdateAddressInput!) {
  orderUpdateAddress(id: \$id, addressId: \$addressId, input: \$input)
}
`;

export const passwordResetLink = `mutation passwordResetLink(\$input: PasswordRecoveryLinkInput) {
  passwordResetLink(input: \$input)
}
`;

export const paymentCreate = `mutation paymentCreate(\$input: CreatePaymentInput!) {
  paymentCreate(input: \$input) {
    ...PaymentFields
  }
}`;

export const paymentDelete = `mutation paymentDelete(\$searchBy: SearchByInput!) {
  paymentDelete(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;

export const paymentUpdate = `mutation paymentUpdate(\$searchBy: SearchByInput!, \$input: UpdatePaymentInput!) {
  paymentUpdate(searchBy: \$searchBy, input: \$input) {
    ...PaymentFields
  }
}`;

export const payMethodCreate = `mutation payMethodCreate(\$input: PayMethodCreateInput!) {
  payMethodCreate(input: \$input) {
    ...PayMethodFields
  }
}`;

export const payMethodDelete = `mutation payMethodDelete(\$id: Int!) {
  payMethodDelete(id: \$id)
}
`;

export const payMethodUpdate = `mutation payMethodUpdate(\$id: Int!, \$input: PayMethodUpdateInput!) {
  payMethodUpdate(id: \$id, input: \$input) {
    ...PayMethodFields
  }
}`;

export const priceCreate = `mutation priceCreate(\$input: PriceCreateInput!) {
  priceCreate(input: \$input) {
    id
    productId
  }
}`;

export const priceCsvImport = `mutation priceCsvImport(\$input: PriceCsvInput!) {
  priceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const priceDelete = `mutation priceDelete(\$id: String!) {
  priceDelete(id: \$id)
}
`;

export const pricesheetAssign = `mutation pricesheetAssign(\$id: String!, \$input: PricesheetAssignInput!) {
  pricesheetAssign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const pricesheetCreate = `mutation pricesheetCreate(\$input: PricesheetCreateInput!) {
  pricesheetCreate(input: \$input) {
    ...PricesheetFields
  }
}`;

export const pricesheetCsvImport = `mutation pricesheetCsvImport(\$input: PricesheetCsvInput!) {
  pricesheetCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const pricesheetDelete = `mutation pricesheetDelete(\$id: String!) {
  pricesheetDelete(id: \$id)
}
`;

export const pricesheetUnassign = `mutation pricesheetUnassign(\$id: String!, \$input: PricesheetUnassignInput!) {
  pricesheetUnassign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const pricesheetUpdate = `mutation pricesheetUpdate(\$id: String!, \$input: PricesheetUpdateInput!) {
  pricesheetUpdate(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const priceUpdate = `mutation priceUpdate(\$id: String!, \$input: PriceUpdateInput!) {
  priceUpdate(id: \$id, input: \$input) {
    ...PriceFields
  }
}`;

export const productBulkMove = `mutation productBulkMove(\$input: ProductBulkMoveInput!) {
  productBulkMove(input: \$input) {
    ...ProductBulkMoveResponseFields
  }
}
`;

export const productCreate = `mutation productCreate(\$input: CreateProductInput!) {
  productCreate(input: \$input) {
    productId
  }
}`;

export const productCsvImport = `mutation productCsvImport(\$input: ProductCsvInput!) {
  productCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const productDelete = `mutation productDelete(\$productId: Int!) {
  productDelete(productId: \$productId)
}
`;

export const productUpdate = `mutation productUpdate(\$productId: Int!, \$input: UpdateProductInput!) {
  productUpdate(productId: \$productId, input: \$input) {
    ...ProductFields
  }
}`;

export const publishEmailEvent = `mutation publishEmailEvent(\$input: EmailEventInput!) {
  publishEmailEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;

export const publishEmailSendEvent = `mutation publishEmailSendEvent(\$input: EmailSendEventInput!) {
  publishEmailSendEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;

export const publishPasswordResetEmailEvent = `mutation publishPasswordResetEmailEvent(\$input: PasswordResetLinkEmailInput!) {
  publishPasswordResetEmailEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;

export const purchaseAuthorizationConfigCreate = `mutation purchaseAuthorizationConfigCreate(\$input: PurchaseAuthorizationConfigCreateInput) {
  purchaseAuthorizationConfigCreate(input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;

export const purchaseAuthorizationConfigDelete = `mutation purchaseAuthorizationConfigDelete(\$id: String!) {
  purchaseAuthorizationConfigDelete(id: \$id)
}
`;

export const purchaseAuthorizationConfigUpdate = `mutation purchaseAuthorizationConfigUpdate(\$id: String!, \$input: PurchaseAuthorizationConfigUpdateInput) {
  purchaseAuthorizationConfigUpdate(id: \$id, input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;

export const removeCompanyManager = `mutation removeCompanyManager(\$userId: Int!, \$companyId: Int!) {
  removeCompanyManager(userId: \$userId, companyId: \$companyId)
}
`;

export const removeSurchargesFromProduct = `mutation removeSurchargesFromProduct(\$input: RemoveSurchargesFromProductInput!) {
  removeSurchargesFromProduct(input: \$input) {
    ...ConfirmationResponseFields
  }
}`;

export const roleCreate = `mutation roleCreate(\$input: RoleCreateInput!) {
  roleCreate(input: \$input) {
    ...RoleFields
  }
}`;

export const roleDefinitionCreate = `mutation roleDefinitionCreate(\$input: RoleDefinitionCreateInput!) {
  roleDefinitionCreate(input: \$input) {
    ...RoleDefinitionFields
  }
}`;

export const roleDefinitionDelete = `mutation roleDefinitionDelete(\$id: ID!) {
  roleDefinitionDelete(id: \$id)
}
`;

export const roleDefinitionUpdate = `mutation roleDefinitionUpdate(\$id: ID!, \$input: RoleDefinitionUpdateInput!) {
  roleDefinitionUpdate(id: \$id, input: \$input) {
    ...RoleDefinitionFields
  }
}`;

export const roleDelete = `mutation roleDelete(\$id: ID!) {
  roleDelete(id: \$id)
}
`;

export const roleUpdate = `mutation roleUpdate(\$id: ID!, \$input: RoleUpdateInput!) {
  roleUpdate(id: \$id, input: \$input) {
    ...RoleFields
  }
}`;

export const shipmentCreate = `mutation shipmentCreate(\$input: ShipmentCreateInput!) {
  shipmentCreate(input: \$input) {
    ...ShipmentFields
  }
}`;

export const shipmentDelete = `mutation shipmentDelete(\$id: String!) {
  shipmentDelete(id: \$id)
}
`;

export const shipmentItemCreate = `mutation shipmentItemCreate(\$input: ShipmentItemCreateInput!) {
  shipmentItemCreate(input: \$input) {
    ...ShipmentItemFields
  }
}`;

export const shipmentItemDelete = `mutation shipmentItemDelete(\$id: String!) {
  shipmentItemDelete(id: \$id)
}
`;

export const shipmentItemUpdate = `mutation shipmentItemUpdate(\$id: String!, \$input: ShipmentItemUpdateInput!) {
  shipmentItemUpdate(id: \$id, input: \$input) {
    ...ShipmentItemFields
  }
}`;

export const shipmentUpdate = `mutation shipmentUpdate(\$id: String!, \$input: ShipmentUpdateInput!) {
  shipmentUpdate(id: \$id, input: \$input) {
    ...ShipmentFields
  }
}`;

export const shopInvalidateCache = `mutation shopInvalidateCache {
  shopInvalidateCache
}
`;

export const startSession = `mutation startSession(\$siteId: Int) {
  startSession(siteId: \$siteId) {
    ...LoginFields
  }
}`;

export const surchargeCreate = `mutation surchargeCreate(\$input: CreateSurchargeInput!) {
  surchargeCreate(input: \$input) {
    ...SurchargeFields
  }
}`;

export const surchargeDelete = `mutation surchargeDelete(\$id: String!) {
  surchargeDelete(id: \$id) {
    ...SurchargeFields
  }
}`;

export const surchargeUpdate = `mutation surchargeUpdate(\$id: String!, \$input: UpdateSurchargeInput!) {
  surchargeUpdate(id: \$id, input: \$input) {
    ...SurchargeFields
  }
}`;

export const taxCreate = `mutation taxCreate(\$input: TaxCreateInput!) {
  taxCreate(input: \$input) {
    ...TaxFields
  }
}`;

export const taxDelete = `mutation taxDelete(\$id: String!) {
  taxDelete(id: \$id)
}
`;

export const taxUpdate = `mutation taxUpdate(\$id: String!, \$input: TaxUpdateInput!) {
  taxUpdate(id: \$id, input: \$input) {
    ...TaxFields
  }
}`;

export const templateDelete = `mutation templateDelete(\$id: String!) {
  templateDelete(id: \$id)
}
`;

export const templateRenderToHTML = `mutation templateRenderToHTML(\$id: String!, \$input: TemplateRenderInput!) {
  templateRenderToHTML(id: \$id, input: \$input)
}
`;

export const tenantCreate = `mutation tenantCreate(\$input: TenantCreateInput!) {
  tenantCreate(input: \$input) {
    ...TenantFields
  }
}
`;

export const tenantDelete = `mutation tenantDelete(\$id: String) {
  tenantDelete(id: \$id)
}
`;

export const tenantUpdate = `mutation tenantUpdate(\$input: TenantUpdateInput!, \$id: String) {
  tenantUpdate(input: \$input, id: \$id) {
    ...TenantFields
  }
}
`;

export const tenderAddItems = `mutation tenderAddItems(\$id: String!, \$input: TenderAddItemsInput!) {
  tenderAddItems(id: \$id, input: \$input) {
    ...TenderResponseFields
  }
}`;

export const tenderApplyIncentives = `mutation tenderApplyIncentives(\$id: String!) {
  tenderApplyIncentives(id: \$id) {
    ...TenderFields
  }
}`;

export const tenderDelete = `mutation tenderDelete(\$id: String!) {
  tenderDelete(id: \$id)
}
`;

export const tenderDeleteBonusItem = `mutation tenderDeleteBonusItem(\$id: String!, \$itemId: String!) {
  tenderDeleteBonusItem(id: \$id, itemId: \$itemId) {
    ...TenderFields
  }
}
`;

export const tenderDeleteItem = `mutation tenderDeleteItem(\$id: String!, \$itemId: String!) {
  tenderDeleteItem(id: \$id, itemId: \$itemId) {
    ...TenderFields
  }
}`;

export const tenderProcess = `mutation tenderProcess(\$id: String!) {
  tenderProcess(id: \$id) {
    ...TenderProcessResponseFields
  }
}`;

export const tenderStart = `mutation tenderStart(\$input: TenderStartInput!) {
  tenderStart(input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdate = `mutation tenderUpdate(\$id: String!, \$input: TenderUpdateInput!) {
  tenderUpdate(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdateAddress = `mutation tenderUpdateAddress(\$id: String!, \$input: TenderUpdateAddressInput!) {
  tenderUpdateAddress(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdateDiscount = `mutation tenderUpdateDiscount(\$id: String!, \$input: TenderDiscountInput!) {
  tenderUpdateDiscount(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdateInvoiceUser = `mutation tenderUpdateInvoiceUser(\$id: String!, \$userId: Int!) {
  tenderUpdateInvoiceUser(id: \$id, userId: \$userId) {
    ...TenderFields
  }
}`;

export const tenderUpdateItem = `mutation tenderUpdateItem(\$id: String!, \$itemId: String!, \$input: TenderUpdateItemInput!) {
  tenderUpdateItem(id: \$id, itemId: \$itemId, input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdatePayment = `mutation tenderUpdatePayment(\$id: String!, \$input: TenderPaymentInput!) {
  tenderUpdatePayment(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;

export const tenderUpdatePostage = `mutation tenderUpdatePostage(\$id: String!, \$input: TenderPostageInput!) {
  tenderUpdatePostage(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;

export const ticketCreate = `mutation ticketCreate(\$input: TicketCreateInput!) {
  ticketCreate(input: \$input) {
    ...TicketFields
  }
}
`;

export const ticketDelete = `mutation ticketDelete(\$id: ID!) {
  ticketDelete(id: \$id)
}
`;

export const ticketUpdate = `mutation ticketUpdate(\$id: ID!, \$input: TicketUpdateInput!) {
  ticketUpdate(id: \$id, input: \$input) {
    ...TicketFields
  }
}
`;

export const trackAndTraceCreate = `mutation trackAndTraceCreate(\$input: TrackAndTraceCreateInput!) {
  trackAndTraceCreate(input: \$input) {
    ...TrackAndTraceFields
  }
}`;

export const trackAndTraceDelete = `mutation trackAndTraceDelete(\$id: String!) {
  trackAndTraceDelete(id: \$id)
}
`;

export const trackAndTraceUpdate = `mutation trackAndTraceUpdate(\$id: String!, \$input: TrackAndTraceUpdateInput!) {
  trackAndTraceUpdate(id: \$id, input: \$input) {
    ...TrackAndTraceFields
  }
}`;

export const triggerContactSendWelcomeEmailEvent = `mutation triggerContactSendWelcomeEmailEvent(\$input: TriggerContactSendWelcomeEmailEventInput!) {
  triggerContactSendWelcomeEmailEvent(input: \$input)
}
`;

export const triggerCustomerSendWelcomeEmailEvent = `mutation triggerCustomerSendWelcomeEmailEvent(\$input: TriggerCustomerSendWelcomeEmailEventInput!) {
  triggerCustomerSendWelcomeEmailEvent(input: \$input)
}
`;

export const triggerCustomEvent = `mutation triggerCustomEvent(\$input: TriggerCustomEventInput!) {
  triggerCustomEvent(input: \$input)
}
`;

export const triggerOrderSendConfirm = `mutation triggerOrderSendConfirm(\$input: TriggerOrderSendConfirmEventInput!) {
  triggerOrderSendConfirm(input: \$input)
}
`;

export const triggerPasswordSendInitEmailEvent = `mutation triggerPasswordSendInitEmailEvent(\$input: PasswordRecoveryLinkInput!) {
  triggerPasswordSendInitEmailEvent(input: \$input)
}
`;

export const triggerPasswordSendResetEmailEvent = `mutation triggerPasswordSendResetEmailEvent(\$input: PasswordRecoveryLinkInput!) {
  triggerPasswordSendResetEmailEvent(input: \$input)
}`;

export const triggerQuoteSend = `mutation triggerQuoteSend(\$input: TriggerQuoteSendEventInput!) {
  triggerQuoteSend(input: \$input)
}
`;

export const triggerQuoteSendRequest = `mutation triggerQuoteSendRequest(\$input: TriggerQuoteSendRequestEventInput!) {
  triggerQuoteSendRequest(input: \$input)
}
`;

export const triggerQuoteSendValidation = `mutation triggerQuoteSendValidation(\$input: TriggerQuoteSendValidationEventInput!) {
  triggerQuoteSendValidation(input: \$input)
}
`;

export const valuesetCreate = `mutation valuesetCreate(\$input: ValuesetCreateInput!) {
  valuesetCreate(input: \$input) {
    ...ValuesetFields
  }
}`;

export const valuesetDelete = `mutation valuesetDelete(\$id: Int!) {
  valuesetDelete(id: \$id)
}
`;

export const valuesetItemCreate = `mutation valuesetItemCreate(\$input: ValuesetItemCreateInput!) {
  valuesetItemCreate(input: \$input) {
    ...ValuesetItemFields
  }
}`;

export const valuesetItemDelete = `mutation valuesetItemDelete(\$id: Int!) {
  valuesetItemDelete(id: \$id)
}
`;

export const valuesetItemUpdate = `mutation valuesetItemUpdate(\$id: Int!, \$input: ValuesetItemUpdateInput!) {
  valuesetItemUpdate(id: \$id, input: \$input) {
    ...ValuesetItemFields
  }
}`;

export const valuesetUpdate = `mutation valuesetUpdate(\$id: Int!, \$input: ValuesetUpdateInput!) {
  valuesetUpdate(id: \$id, input: \$input) {
    ...ValuesetFields
  }
}`;

export const verifyToken = `mutation verifyToken(\$input: VerifyTokenInput!) {
  verifyToken(input: \$input) {
    ...VerifyTokenFields
  }
}`;

export const warehouseAddressCreate = `mutation warehouseAddressCreate(\$id: Float!, \$input: CreateWarehouseAddressInput!) {
  warehouseAddressCreate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;

export const warehouseAddressDelete = `mutation warehouseAddressDelete(\$id: Float!, \$input: DeleteWarehouseAddressInput!) {
  warehouseAddressDelete(id: \$id, input: \$input)
}
`;

export const warehouseAddressUpdate = `mutation warehouseAddressUpdate(\$id: Float!, \$input: UpdateWarehouseAddressInput!) {
  warehouseAddressUpdate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;

export const warehouseCreate = `mutation warehouseCreate(\$input: CreateWarehouseInput!) {
  warehouseCreate(input: \$input) {
    ...WarehouseFields
  }
}`;

export const warehouseDelete = `mutation warehouseDelete(\$id: Float!) {
  warehouseDelete(id: \$id) {
    ...WarehouseFields
  }
}`;

export const warehouseUpdate = `mutation warehouseUpdate(\$id: Float!, \$input: UpdateWarehouseInput!) {
  warehouseUpdate(id: \$id, input: \$input) {
    ...WarehouseFields
  }
}`;

export const zoneTaxCodeCreate = `mutation zoneTaxCodeCreate(\$input: ZoneTaxCodeCreateInput!) {
  zoneTaxCodeCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodeDelete = `mutation zoneTaxCodeDelete(\$id: String!) {
  zoneTaxCodeDelete(id: \$id)
}
`;

export const zoneTaxCodesCreate = `mutation zoneTaxCodesCreate(\$input: [ZoneTaxCodeCreateInput!]!) {
  zoneTaxCodesCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodesDelete = `mutation zoneTaxCodesDelete(\$priceId: String!) {
  zoneTaxCodesDelete(priceId: \$priceId)
}
`;

export const zoneTaxCodeUpdate = `mutation zoneTaxCodeUpdate(\$id: String!, \$input: ZoneTaxCodeUpdateInput!) {
  zoneTaxCodeUpdate(id: \$id, input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;


export const mutations = {
  addCompanyManager,
  addSurchargesToProduct,
  adminUserCreate,
  adminUserDelete,
  adminUserTenantCreate,
  adminUserTenantDelete,
  adminUserUpdate,
  attributeCreate,
  attributeCsvImport,
  attributeDelete,
  attributeDescriptionCreate,
  attributeDescriptionCsvImport,
  attributeDescriptionDelete,
  attributeDescriptionDeleteBulk,
  attributeDescriptionUpdate,
  attributeUpdate,
  authenticationCreate,
  authenticationDelete,
  bulkCostPriceCreate,
  bulkCostPriceCsvImport,
  bulkCostPriceDelete,
  bulkCostPricesBulk,
  bulkCostPricesDelete,
  bulkCostPriceUpdate,
  bulkPriceCreate,
  bulkPriceCsvImport,
  bulkPriceDelete,
  bulkPricesCreate,
  bulkPricesDelete,
  bulkPriceUpdate,
  bundleAddItems,
  bundleAddItemsAndReturnBundle,
  bundleCreate,
  bundleDelete,
  bundleRemoveItem,
  bundleRemoveItemAndReturnBundle,
  bundleUpdate,
  businessRuleCreate,
  businessRuleDecisionTableAddColumn,
  businessRuleDecisionTableAddRow,
  businessRuleDecisionTableDeleteColumn,
  businessRuleDecisionTableDeleteRow,
  businessRuleDecisionTableMoveRow,
  businessRuleDecisionTableSetCell,
  businessRuleDecisionTableUpdate,
  businessRuleDelete,
  businessRuleUpdate,
  carrierAssignWarehouse,
  carrierAssignWarehouseAndReturnCarrier,
  carrierCreate,
  carrierDelete,
  carrierUnassignWarehouse,
  carrierUnassignWarehouseAndReturnCarrier,
  carrierUpdate,
  cartAcceptPurchaseAuthorizationRequest,
  cartAddActionCode,
  cartAddBundle,
  cartAddItem,
  cartDelete,
  cartDeleteItem,
  cartInvalidateCache,
  cartItemBulk,
  cartProcess,
  cartRemoveActionCode,
  cartRequestPurchaseAuthorization,
  cartSetContact,
  cartSetCustomer,
  cartSetUser,
  cartStart,
  cartUpdate,
  cartUpdateAddress,
  cartUpdateItem,
  categoryAddProductsClusters,
  categoryCreate,
  categoryCsvImport,
  categoryDelete,
  categoryRemoveProductsClusters,
  categoryUpdate,
  channelCreate,
  channelDelete,
  channelUpdate,
  claimsReset,
  claimsResetAll,
  clusterAssignProducts,
  clusterBulkMove,
  clusterConfigAddSetting,
  clusterConfigCreate,
  clusterConfigDelete,
  clusterConfigRemoveSetting,
  clusterConfigUpdateSetting,
  clusterCreate,
  clusterCsvImport,
  clusterDelete,
  clusterOptionCreate,
  clusterOptionDelete,
  clusterOptionUpdate,
  clusterProductCreate,
  clusterProductDelete,
  clusterProductUpdate,
  clusterUnassignProducts,
  clusterUpdate,
  companyAddressCreate,
  companyAddressDelete,
  companyAddressUpdate,
  companyCreate,
  companyCsvImport,
  companyDelete,
  companySearchCleanupOrphanedIndices,
  companySearchFixAliasWriteIndex,
  companySearchIndexUpdateMapping,
  companySearchReindex,
  companyUpdate,
  contactAddToCompanies,
  contactCreate,
  contactCreateAccount,
  contactCsvImport,
  contactDelete,
  contactDeleteAccount,
  contactRegister,
  contactRemoveFromCompanies,
  contactUpdate,
  costPriceCreate,
  costPriceDelete,
  costPricesBulk,
  costPricesDelete,
  costPriceUpdate,
  crossupsellCreate,
  crossupsellDelete,
  crossupsellUpdate,
  customerAddressCreate,
  customerAddressDelete,
  customerAddressUpdate,
  customerCreate,
  customerCreateAccount,
  customerCsvImport,
  customerDelete,
  customerDeleteAccount,
  customerRegister,
  customerUpdate,
  discountCreate,
  discountCsvImport,
  discountDelete,
  discountsDeleteByPricesheetId,
  discountUpdate,
  documentTemplateCreate,
  documentTemplateRenderToPDF,
  documentTemplateUpdate,
  emailTemplateAddAttachment,
  emailTemplateCreate,
  emailTemplateRemoveAttachment,
  emailTemplateRenderAndSend,
  emailTemplateUpdate,
  eventActionConfigDelete,
  eventToEmailConfigCreate,
  eventToEmailConfigUpdate,
  eventToWebHookConfigCreate,
  eventToWebHookConfigUpdate,
  exchangeRefreshToken,
  favoriteListAddItems,
  favoriteListClearItems,
  favoriteListCreate,
  favoriteListDelete,
  favoriteListRemoveItems,
  favoriteListUpdate,
  incentiveRuleCreate,
  incentiveRuleSetAction,
  incentiveRuleSetOrderItemConditions,
  inventoryCreate,
  inventoryCsvImport,
  inventoryDelete,
  inventoryUpdate,
  login,
  logout,
  machineCreate,
  machineDelete,
  machineUpsert,
  magicTokenCreate,
  magicTokenDelete,
  magicTokenLogin,
  magicTokenUpdate,
  mediaAttachmentCreate,
  mediaAttachmentDelete,
  mediaAttachmentUpdate,
  mediaDocumentCreate,
  mediaDocumentCsvImport,
  mediaDocumentDelete,
  mediaDocumentUpdate,
  mediaImageCreate,
  mediaImageCsvImport,
  mediaImageDelete,
  mediaImageUpdate,
  mediaVideoCreate,
  mediaVideoCsvImport,
  mediaVideoDelete,
  mediaVideoUpdate,
  orderAddressUpdate,
  orderCreate,
  orderDelete,
  orderItemCreate,
  orderItemDelete,
  orderItemUpdate,
  orderlistAddItems,
  orderlistAssignCompanies,
  orderlistAssignUsers,
  orderlistCreate,
  orderlistDelete,
  orderlistRemoveItems,
  orderlistUnassignCompanies,
  orderlistUnassignUsers,
  orderlistUpdate,
  orderRevisionRestore,
  orderRevisionsInvalidate,
  orderSendConfirmationEmail,
  orderSetStatus,
  orderStatusCreate,
  orderStatusDelete,
  orderStatusSetAddOrderStatuses,
  orderStatusSetCreate,
  orderStatusSetDelete,
  orderStatusSetRemoveOrderStatuses,
  orderStatusSetUpdate,
  orderStatusUpdate,
  orderUpdate,
  orderUpdateAddress,
  passwordResetLink,
  paymentCreate,
  paymentDelete,
  paymentUpdate,
  payMethodCreate,
  payMethodDelete,
  payMethodUpdate,
  priceCreate,
  priceCsvImport,
  priceDelete,
  pricesheetAssign,
  pricesheetCreate,
  pricesheetCsvImport,
  pricesheetDelete,
  pricesheetUnassign,
  pricesheetUpdate,
  priceUpdate,
  productBulkMove,
  productCreate,
  productCsvImport,
  productDelete,
  productUpdate,
  publishEmailEvent,
  publishEmailSendEvent,
  publishPasswordResetEmailEvent,
  purchaseAuthorizationConfigCreate,
  purchaseAuthorizationConfigDelete,
  purchaseAuthorizationConfigUpdate,
  removeCompanyManager,
  removeSurchargesFromProduct,
  roleCreate,
  roleDefinitionCreate,
  roleDefinitionDelete,
  roleDefinitionUpdate,
  roleDelete,
  roleUpdate,
  shipmentCreate,
  shipmentDelete,
  shipmentItemCreate,
  shipmentItemDelete,
  shipmentItemUpdate,
  shipmentUpdate,
  shopInvalidateCache,
  startSession,
  surchargeCreate,
  surchargeDelete,
  surchargeUpdate,
  taxCreate,
  taxDelete,
  taxUpdate,
  templateDelete,
  templateRenderToHTML,
  tenantCreate,
  tenantDelete,
  tenantUpdate,
  tenderAddItems,
  tenderApplyIncentives,
  tenderDelete,
  tenderDeleteBonusItem,
  tenderDeleteItem,
  tenderProcess,
  tenderStart,
  tenderUpdate,
  tenderUpdateAddress,
  tenderUpdateDiscount,
  tenderUpdateInvoiceUser,
  tenderUpdateItem,
  tenderUpdatePayment,
  tenderUpdatePostage,
  ticketCreate,
  ticketDelete,
  ticketUpdate,
  trackAndTraceCreate,
  trackAndTraceDelete,
  trackAndTraceUpdate,
  triggerContactSendWelcomeEmailEvent,
  triggerCustomerSendWelcomeEmailEvent,
  triggerCustomEvent,
  triggerOrderSendConfirm,
  triggerPasswordSendInitEmailEvent,
  triggerPasswordSendResetEmailEvent,
  triggerQuoteSend,
  triggerQuoteSendRequest,
  triggerQuoteSendValidation,
  valuesetCreate,
  valuesetDelete,
  valuesetItemCreate,
  valuesetItemDelete,
  valuesetItemUpdate,
  valuesetUpdate,
  verifyToken,
  warehouseAddressCreate,
  warehouseAddressDelete,
  warehouseAddressUpdate,
  warehouseCreate,
  warehouseDelete,
  warehouseUpdate,
  zoneTaxCodeCreate,
  zoneTaxCodeDelete,
  zoneTaxCodesCreate,
  zoneTaxCodesDelete,
  zoneTaxCodeUpdate
};

export default mutations;

