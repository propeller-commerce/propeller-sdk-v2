/**
 * Generated GraphQL queries bundle
 * This file is auto-generated. Do not edit manually.
 */

export const addressesByCompanyId = `query addressesByCompanyId(\$companyId: Float!, \$type: AddressType) {
  addressesByCompanyId(companyId: \$companyId, type: \$type) {
    ...AddressFields
  }
}`;

export const addressesByCustomerId = `query addressesByCustomerId(\$customerId: Float!, \$type: AddressType) {
  addressesByCustomerId(customerId: \$customerId, type: \$type) {
    ...AddressFields
  }
}`;

export const addressesByOrderId = `query addressesByOrderId(\$orderId: Int!, \$type: AddressType) {
  addressesByOrderId(orderId: \$orderId, type: \$type) {
    ...AddressFields
  }
}`;

export const addressesByUserId = `query addressesByUserId(\$userId: Float!, \$type: AddressType) {
  addressesByUserId(userId: \$userId, type: \$type) {
    ...AddressFields
  }
}`;

export const adminUser = `query adminUser(\$email: String!) {
  adminUser(email: \$email) {
    ...AdminUserFields
  }
}`;

export const adminUsers = `query adminUsers(\$input: AdminUsersSearchInput) {
  adminUsers(input: \$input) {
    ...UserResponseFields
  }
}`;

export const adminUserTenant = `query adminUserTenant(\$id: Int!) {
  adminUserTenant(id: \$id) {
    ...AdminUserTenantFields
  }
}`;

export const adminUserViewer = `query adminUserViewer {
  adminUserViewer {
    ...AdminUserFields
  }
}`;

export const attribute = `query attribute(
  \$id: String!
) {
  attribute(id: \$id) {
    ...AttributeFields
  }
}`;

export const attributeDescription = `query attributeDescription(\$id: String!) {
  attributeDescription(id: \$id) {
    ...AttributeDescriptionFields
  }
}`;

export const attributeDescriptions = `query attributeDescriptions(\$input: AttributeDescriptionSearchInput!) {
  attributeDescriptions(input: \$input) {
    ...AttributeDescriptionResponseFields
  }
}`;

export const attributeResultByCategoryId = `query attributeResultByCategoryId(\$categoryId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCategoryId(categoryId: \$categoryId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByClusterId = `query attributeResultByClusterId(\$clusterId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByClusterId(clusterId: \$clusterId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByCompanyId = `query attributeResultByCompanyId(\$companyId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCompanyId(companyId: \$companyId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByContactId = `query attributeResultByContactId(\$contactId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByContactId(contactId: \$contactId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByCustomerId = `query attributeResultByCustomerId(\$customerId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCustomerId(customerId: \$customerId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByProductId = `query attributeResultByProductId(\$productId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByProductId(productId: \$productId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributes = `query attributes(\$input: AttributeSearchInput!) {
  attributes(input: \$input) {
    ...AttributeResponseFields
  }
}`;

export const attributesByProductId = `query attributesByProductId(\$productId: Int!, \$input: AttributeSearchInput!) {
  attributesByProductId(productId: \$productId, input: \$input) {
    ...AttributeResponseFields
  }
}`;

export const authentication = `query authentication(\$email: String!) {
  authentication(email: \$email) {
    ...GCIPUserFields
  }
}`;

export const bulkCostPrices = `query bulkCostPrices(\$input: BulkCostPriceSearchInput) {
  bulkCostPrices(input: \$input) {
    ...BulkCostPriceResponseFields
  }
}`;

export const bulkPrices = `query bulkPrices(\$input: BulkPriceSearchInput) {
  bulkPrices(input: \$input) {
    ...BulkPriceResponseFields
  }
}`;

export const bundle = `query bundle(\$id: String!, \$taxZone: String) {
  bundle(id: \$id, taxZone: \$taxZone) {
    ...BundleFields
  }
}`;

export const bundles = `query bundles(\$input: BundleSearchInput) {
  bundles(input: \$input) {
    ...BundlesResponseFields
  }
}`;

export const businessRule = `query businessRule(\$id: ID!) {
  businessRule(id: \$id) {
    ...BusinessRuleFields
  }
}`;

export const businessRuleDecisionTable = `query businessRuleDecisionTable(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTable(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleFieldDefinitions = `query businessRuleFieldDefinitions(\$name: String!) {
  businessRuleFieldDefinitions(name: \$name) {
    ...BusinessRuleFieldDefinitionGroupFields
  }
}`;

export const businessRuleJDM = `query businessRuleJDM(
  \$id: ID!
  \$language: String
) {
  businessRuleJDM(id: \$id, language: \$language)
}`;

export const businessRules = `query businessRules(\$filter: BusinessRuleSearchInput) {
  businessRules(filter: \$filter) {
    ...BusinessRuleResponseFields
  }
}`;

export const carrier = `query carrier(\$id: Int!) {
  carrier(id: \$id) {
    ...CarrierFields
  }
}`;

export const carriers = `query carriers(\$input: CarriersSearchInput) {
  carriers(input: \$input) {
    ...CarriersResponseFields
  }
}`;

export const cart = `query cart(
  \$cartId: String!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  cart(id: \$cartId) {
    ...CartFields
  }
}`;

export const carts = `query carts(\$input: CartSearchInput!) {
  carts(input: \$input) {
    ...CartResponseFields
  }
}`;

export const categories = `query categories(\$filter: CategorySearchInput, \$userId: Int) {
  categories(filter: \$filter, userId: \$userId) {
    ...CategoryResponseFields
  }
}`;

export const category = `query category(
  \$categoryId: Float
  \$slug: String
  \$userId: Int
  \$hidden: YesNo
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$categoryProductSearchInput: CategoryProductSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
  \$filterAvailableAttributeInput: FilterAvailableAttributeInput
) {
  category(categoryId: \$categoryId, slug: \$slug, userId: \$userId, hidden: \$hidden) {
    ...CategoryFields
  }
}`;

export const channel = `query channel(\$channelId: Int!) {
  channel(channelId: \$channelId) {
    ...ChannelFields
  }
}`;

export const channels = `query channels {
  channels {
    ...ChannelFields
  }
}`;

export const cluster = `query cluster(
  \$clusterId: Int 
  \$slug: String
  \$language: String 
  \$applyOrderlists: Boolean 
  \$orderlistIds: [Int!]
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$userBulkPriceProductInput: UserBulkPriceProductInput
  \$attributeResultSearchInput: AttributeResultSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$mediaVideoSearchInput: MediaVideoProductSearchInput
  \$mediaDocumentSearchInput: MediaDocumentProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cluster(clusterId: \$clusterId, slug: \$slug, language: \$language, applyOrderlists: \$applyOrderlists, orderlistIds: \$orderlistIds) {
    ...ClusterFields
  }
}`;

export const clusterConfig = `query clusterConfig(\$clusterConfigId: Int!) {
  clusterConfig(clusterConfigId: \$clusterConfigId) {
    ...ClusterConfigResponseFields
  }
}`;

export const clusterConfigs = `query clusterConfigs {
  clusterConfigs {
    ...ClusterConfigResponseFields
  }
}`;

export const clusterGetConfig = `query clusterGetConfig(\$clusterId: Int) {
  cluster(clusterId: \$clusterId) {
    config {
      ... ClusterConfigFields
    }
  }
}`;

export const companies = `query companies(\$input: CompanySearchArguments) {
  companies(input: \$input) {
    ...CompaniesResponseFields
  }
}`;

export const company = `query company(\$id: Int!) {
  company(id: \$id) {
    ...CompanyFields
  }
}`;

export const companySearch = `query companySearch(\$input: CompanySearchInput) {
  companySearch(input: \$input) {
    ...CompanySearchResponseFields
  }
}`;

export const contact = `query contact(\$id: Int!) {
  contact(id: \$id) {
    ...ContactFields
  }
}`;

export const contacts = `query contacts(\$input: ContactSearchArguments) {
  contacts(input: \$input) {
    ...ContactsResponseFields
  }
}`;

export const costPrices = `query costPrices(\$input: CostPriceSearchInput) {
  costPrices(input: \$input) {
    ...CostPriceResponseFields
  }
}`;

export const crossupsell = `query crossupsell(\$id: String!) {
  crossupsell(id: \$id) {
    ...CrossupsellFields
  }
}`;

export const crossupsells = `query crossupsells(\$input: CrossupsellSearchInput) {
  crossupsells(input: \$input) {
    ...CrossupsellsResponseFields
  }
}`;

export const customer = `query customer(\$id: Int!) {
  customer(id: \$id) {
    ...CustomerFields
  }
}`;

export const customers = `query customers(\$input: CustomerSearchArguments) {
  customers(input: \$input) {
    ...CustomersResponseFields
  }
}`;

export const discount = `query discount(\$id: String!) {
  discount(id: \$id) {
    ...DiscountFields
  }
}`;

export const discounts = `query discounts(\$input: DiscountSearchInput) {
  discounts(input: \$input) {
    ...DiscountResponseFields
  }
}`;

export const eventActionConfigs = `query eventActionConfigs(\$input: EventActionConfigSearchInput!) {
  eventActionConfigs(input: \$input) {
    ...EventActionConfigResponseFields
  }
}`;

export const externalAddress = `query externalAddress(\$id: Float!) {
  externalAddress(id: \$id) {
    ...ExternalAddressFields
  }
}`;

export const favoriteList = `query favoriteList(
  \$id: String!
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  favoriteList(id: \$id) {
    ...FavoriteListFields
  }
}`;

export const favoriteLists = `query favoriteLists(\$input: FavoriteListsSearchInput) {
  favoriteLists(input: \$input) {
    ...FavoriteListsResponseFields
  }
}`;

export const inventory = `query inventory(\$id: Int!) {
  inventory(id: \$id) {
    ...InventoryResponseFields
  }
}`;

export const machine = `query machine(\$id: String, \$slug: String, \$language: String, \$source: String, \$sourceId: String) {
  machine(id: \$id, slug: \$slug, language: \$language, source: \$source, sourceId: \$sourceId) {
    ...SparePartsMachineFields
  }
}`;

export const machines = `query machines(\$input: SearchSparePartsMachineInput) {
  machines(input: \$input) {
    ...SparePartsMachineResponseFields
  }
}`;

export const magicToken = `query magicToken(\$id: String!) {
  magicToken(id: \$id) {
    ...MagicTokenFields
  }
}`;

export const magicTokens = `query magicTokens(\$input: MagicTokenSearchInput) {
  magicTokens(input: \$input) {
    ...MagicTokenResponseFields
  }
}`;

export const media = `query media {
  media {
    ...MediaFields
  }
}`;

export const mediaDocument = `query mediaDocument(\$mediaId: String!) {
  mediaDocument(mediaId: \$mediaId) {
    ...MediaDocumentFields
  }
}`;

export const mediaDocuments = `query mediaDocuments(\$search: MediaDocumentSearchInput) {
  mediaDocuments(search: \$search) {
    ...PaginatedMediaDocumentResponseFields
  }
}`;

export const mediaImage = `query mediaImage(\$mediaId: String!) {
  mediaImage(mediaId: \$mediaId) {
    ...MediaImageFields
  }
}`;

export const mediaImages = `query mediaImages(\$search: MediaImageProductSearchInput) {
  mediaImages(search: \$search) {
    ...PaginatedMediaImageResponseFields
  }
}`;

export const mediaVideo = `query mediaVideo(\$mediaId: String!) {
  mediaVideo(mediaId: \$mediaId) {
    ...MediaVideoFields
  }
}`;

export const mediaVideos = `query mediaVideos(\$search: MediaVideoSearchInput) {
  mediaVideos(search: \$search) {
    ...PaginatedMediaVideoResponseFields
  }
}`;

export const order = `query order(
  \$orderId: Int
  \$orderUUID: String
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  order(orderId: \$orderId, orderUUID: \$orderUUID) {
    ...OrderFields
  }
}`;

export const orderAddress = `query orderAddress(\$id: Int!, \$orderId: Int!) {
  orderAddress(id: \$id, orderId: \$orderId) {
    ...OrderAddressFields
  }
}`;

export const orderAddresses = `query orderAddresses(\$orderId: Int!, \$type: AddressType) {
  orderAddresses(orderId: \$orderId, type: \$type) {
    ...OrderAddressFields
  }
}`;

export const orderGetPDF = `query orderGetPDF(\$orderId: Int!) {
  orderGetPDF(orderId: \$orderId) {
    ...Base64FileFields
  }
}`;

export const orderlist = `query orderlist(\$id: Int!) {
  orderlist(id: \$id) {
    ...OrderlistFields
  }
}`;

export const orderlists = `query orderlists(\$input: OrderlistSearchInput) {
  orderlists(input: \$input) {
    ...OrderlistsResponseFields
  }
}`;

export const orderRevision = `query orderRevision(\$orderId: Int!, \$revisionNumber: Int!) {
  orderRevision(orderId: \$orderId, revisionNumber: \$revisionNumber) {
    orderId
    revisionNumber
    createdByContactId
    createdByCustomerId
    createdByAdminUserId
    createdByAdminUser {
      userId
      firstName
      lastName
      email
    }
    createdAt
    createdFromRevisionNumber
    snapshot
    createdByContact {
      contactId
      firstName
      lastName
      email
    }
    createdByCustomer {
      customerId
      firstName
      lastName
      email
    }
  }
} `;

export const orderRevisions = `query orderRevisions(\$input: OrderRevisionSearchInput!) {
  orderRevisions(input: \$input) {
    items {
      orderId
      revisionNumber
      createdByContactId
      createdByCustomerId
      createdByAdminUserId
      createdByAdminUser {
        userId
        firstName
        lastName
        email
      }
      createdAt
      createdFromRevisionNumber
      snapshot
      createdByContact {
        contactId
        firstName
        lastName
        email
      }
      createdByCustomer {
        customerId
        firstName
        lastName
        email
      }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
} `;

export const orders = `query orders(\$input: OrderSearchArguments) {
  orders(input: \$input) {
    ...OrderResponseFields
  }
}`;

export const orderStatus = `query orderStatus(\$input: OrderStatusSearchByInput!) {
  orderStatus(input: \$input) {
    ...OrderStatusFields
  }
}`;

export const orderStatuses = `query orderStatuses(\$input: OrderStatusesSearchInput) {
  orderStatuses(input: \$input) {
    ...OrderStatusesResponseFields
  }
}`;

export const orderStatusSet = `query orderStatusSet(\$input: OrderStatusSetSearchByInput!) {
  orderStatusSet(input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusSets = `query orderStatusSets(\$input: OrderStatusSetsSearchInput) {
  orderStatusSets(input: \$input) {
    ...OrderStatusSetsResponseFields
  }
}`;

export const payment = `query payment(\$searchBy: SearchByInput!) {
  payment(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;

export const payments = `query payments(\$input: PaymentsSearchInput) {
  payments(input: \$input) {
    ...PaymentsResponseFields
  }
}`;

export const payMethod = `query payMethod(\$id: Int!) {
  payMethod(id: \$id) {
    ...PayMethodFields
  }
}`;

export const payMethods = `query payMethods(\$input: PayMethodSearchInput) {
  payMethods(input: \$input) {
    ...PayMethodsResponseFields
  }
}`;

export const price = `query price(\$id: String!) {
  price(id: \$id) {
    ...PriceFields
  }
}`;

export const priceCalculate = `query priceCalculate(\$input: PriceCalculateInput!) {
  priceCalculate(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const priceDefault = `query priceDefault(\$input: PriceCalculateDefaultInput!) {
  priceDefault(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const priceExplain = `query priceExplain(\$input: PriceCalculateInput!) {
  priceExplain(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const prices = `query prices(\$input: PriceSearchInput) {
  prices(input: \$input) {
    ...PriceResponseFields
  }
}`;

export const pricesheet = `query pricesheet(\$id: String!) {
  pricesheet(id: \$id) {
    ...PricesheetFields
  }
}`;

export const pricesheets = `query pricesheets(\$input: PricesheetSearchInput) {
  pricesheets(input: \$input) {
    ...PricesheetResponseFields
  }
}`;

export const product = `query product(
  \$productId: Int
  \$slug: String
  \$sku: String
  \$language: String
  \$applyOrderlists: Boolean
  \$orderlistIds: [Int!]
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$userBulkPriceProductInput: UserBulkPriceProductInput
  \$attributeResultSearchInput: AttributeResultSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$mediaVideoSearchInput: MediaVideoProductSearchInput
  \$mediaDocumentSearchInput: MediaDocumentProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  product(productId: \$productId, slug: \$slug, sku: \$sku, language: \$language, applyOrderlists: \$applyOrderlists, orderlistIds: \$orderlistIds) {
    ...ProductFields
  }
}`;

export const products = `query products(
  \$input: ProductSearchInput
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
  \$filterAvailableAttributeInput: FilterAvailableAttributeInput
) {
  products(input: \$input) {
    ...ProductsResponseFields
  }
}`;

export const productSurcharges = `query productSurcharges(\$productId: Int!, \$input: SurchargeSearchInput) {
  productSurcharges(productId: \$productId, input: \$input) {
    ...SurchargeProductResponseFields
  }
}`;

export const purchaseAuthorizationConfig = `query purchaseAuthorizationConfig(\$id: String!) {
  purchaseAuthorizationConfig(id: \$id) {
    ...PurchaseAuthorizationConfigFields
  }
}`;

export const purchaseAuthorizationConfigs = `query purchaseAuthorizationConfigs(\$input: PurchaseAuthorizationConfigSearchInput) {
  purchaseAuthorizationConfigs(input: \$input) {
    ...PurchaseAuthorizationConfigResponseFields
  }
}`;

export const quoteGetPDF = `query quoteGetPDF(\$orderId: Int!) {
  quoteGetPDF(orderId: \$orderId) {
    ...Base64FileFields
  }
}`;

export const role = `query role(\$id: ID!) {
  role(id: \$id) {
    ...RoleFields
  }
}`;

export const roleDefinition = `query roleDefinition(\$id: ID!) {
  roleDefinition(id: \$id) {
    ...RoleDefinitionFields
  }
}`;

export const roleDefinitions = `query roleDefinitions(\$input: RoleDefinitionSearchInput) {
  roleDefinitions(input: \$input) {
    ...RoleDefinitionResponseFields
  }
}`;

export const roles = `query roles(\$input: RoleSearchInput!) {
  roles(input: \$input) {
    ...RoleResponseFields
  }
}`;

export const shipment = `query shipment(\$id: String!) {
  shipment(id: \$id) {
    ...ShipmentFields
  }
}`;

export const shipmentItem = `query shipmentItem(\$id: String!) {
  shipmentItem(id: \$id) {
    ...ShipmentItemFields
  }
}`;

export const shipmentItems = `query shipmentItems(\$input: ShipmentItemSearchInput) {
  shipmentItems(input: \$input) {
    ...ShipmentItemResponseFields
  }
}`;

export const shipments = `query shipments(\$input: ShipmentSearchInput) {
  shipments(input: \$input) {
    ...ShipmentResponseFields
  }
}`;

export const shop = `query shop(\$shopId: Int!) {
  shop(shopId: \$shopId) {
    ...ShopFields
  }
}`;

export const shops = `query shops {
  shops {
    ...ShopFields
  }
}`;

export const site = `query site(\$siteId: Int!) {
  site(siteId: \$siteId) {
    ...SiteFields
  }
}`;

export const surcharge = `query surcharge(\$id: String!) {
  surcharge(id: \$id) {
    ...SurchargeFields
  }
}`;

export const surcharges = `query surcharges(\$input: SurchargeSearchInput) {
  surcharges(input: \$input) {
    ...SurchargesResponseFields
  }
}`;

export const tax = `query tax(\$id: String, \$code: Taxcode, \$zone: String, \$shopId: Int) {
  tax(id: \$id, code: \$code, zone: \$zone, shopId: \$shopId) {
    ...TaxFields
  }
}`;

export const taxes = `query taxes(\$input: TaxSearchInput) {
  taxes(input: \$input) {
    ...TaxesResponseFields
  }
}`;

export const template = `query template(
  \$id: String!
) {
  template(id: \$id) {
    ...IBaseTemplateFields
  }
}`;

export const templateErrorLog = `query templateErrorLog(\$id: String!) {
  templateErrorLog(id: \$id) {
    id
    stackTrace
    createdAt
    eventInstance
    topicName
    errorType
    errorMessage
    templateId
    fieldName
  }
} `;

export const templateErrorLogs = `query templateErrorLogs(\$input: TemplateErrorLogSearchInput!) {
  templateErrorLogs(input: \$input) {
    items {
      id
      stackTrace
      createdAt
      eventInstance
      topicName
      errorType
      errorMessage
      templateId
      fieldName
    }
    itemsFound
    page
    offset
    pages
    start
    end
  }
} `;

export const templateErrorLogStats = `query templateErrorLogStats {
  templateErrorLogStats {
    totalCount
    renderErrorCount
    customQueryErrorCount
    oldestEntry
    newestEntry
  }
} `;

export const templates = `query templates(\$input: TemplateSearchInput!) {
  templates(input: \$input) {
    ...TemplateResponseFields
  }
}`;

export const tender = `query tender(\$tenderId: String, \$orderId: Int) {
  tender(tenderId: \$tenderId, orderId: \$orderId) {
    ...TenderFields
  }
}`;

export const trackAndTrace = `query trackAndTrace(\$id: String!) {
  trackAndTrace(id: \$id) {
    ...TrackAndTraceFields
  }
}`;

export const trackAndTraces = `query trackAndTraces(\$input: TrackAndTraceSearchInput) {
  trackAndTraces(input: \$input) {
    ...TrackAndTraceResponseFields
  }
}`;

export const user = `query user(\$input: UserSearchInput!) {
  user(input: \$input) {
    __typename
    ... on Contact {
        ... ContactFields
    }
    ... on Customer {
        ... CustomerFields
    }
  }
}
`;

export const usergroup = `query usergroup(\$id: Int!) {
  usergroup(id: \$id) {
    ...UsergroupFields
  }
}`;

export const usergroups = `query usergroups(\$input: UsergroupSearchArguments!) {
  usergroups(input: \$input) {
    ...UsergroupsResponseFields
  }
}`;

export const valueset = `query valueset(\$id: Int!) {
  valueset(id: \$id) {
    ...ValuesetFields
  }
}`;

export const valuesetItems = `query valuesetItems(\$input: ValuesetItemSearchInput) {
  valuesetItems(input: \$input) {
    ...ValuesetItemResponseFields
  }
}`;

export const valuesets = `query valuesets(\$input: ValuesetSearchInput) {
  valuesets(input: \$input) {
    ...ValuesetResponseFields
  }
}`;

export const viewer = `query viewer(
  \$contactAttributesInput: AttributeResultSearchInput
  \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  \$companyAttributesInput: AttributeResultSearchInput
  \$customerAttributesInput: AttributeResultSearchInput
) {
  viewer {
    __typename
    ... on Contact {
        ... ContactFields
    }
    ... on Customer {
        ... CustomerFields
    }
  }
}
`;

export const warehouse = `query warehouse(\$id: Int!) {
  warehouse(id: \$id) {
    ...WarehouseFields
  }
}`;

export const warehouses = `query warehouses(\$input: WarehousesSearchInput) {
  warehouses(input: \$input) {
    ...WarehousesResponseFields
  }
}`;

export const zoneTaxCode = `query zoneTaxCode(\$id: String!) {
  zoneTaxCode(id: \$id) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodes = `query zoneTaxCodes(\$input: ZoneTaxCodeSearchInput) {
  zoneTaxCodes(input: \$input) {
    ...ZoneTaxCodeResponseFields
  }
}`;


export const queries = {
  addressesByCompanyId,
  addressesByCustomerId,
  addressesByOrderId,
  addressesByUserId,
  adminUser,
  adminUsers,
  adminUserTenant,
  adminUserViewer,
  attribute,
  attributeDescription,
  attributeDescriptions,
  attributeResultByCategoryId,
  attributeResultByClusterId,
  attributeResultByCompanyId,
  attributeResultByContactId,
  attributeResultByCustomerId,
  attributeResultByProductId,
  attributes,
  attributesByProductId,
  authentication,
  bulkCostPrices,
  bulkPrices,
  bundle,
  bundles,
  businessRule,
  businessRuleDecisionTable,
  businessRuleFieldDefinitions,
  businessRuleJDM,
  businessRules,
  carrier,
  carriers,
  cart,
  carts,
  categories,
  category,
  channel,
  channels,
  cluster,
  clusterConfig,
  clusterConfigs,
  clusterGetConfig,
  companies,
  company,
  companySearch,
  contact,
  contacts,
  costPrices,
  crossupsell,
  crossupsells,
  customer,
  customers,
  discount,
  discounts,
  eventActionConfigs,
  externalAddress,
  favoriteList,
  favoriteLists,
  inventory,
  machine,
  machines,
  magicToken,
  magicTokens,
  media,
  mediaDocument,
  mediaDocuments,
  mediaImage,
  mediaImages,
  mediaVideo,
  mediaVideos,
  order,
  orderAddress,
  orderAddresses,
  orderGetPDF,
  orderlist,
  orderlists,
  orderRevision,
  orderRevisions,
  orders,
  orderStatus,
  orderStatuses,
  orderStatusSet,
  orderStatusSets,
  payment,
  payments,
  payMethod,
  payMethods,
  price,
  priceCalculate,
  priceDefault,
  priceExplain,
  prices,
  pricesheet,
  pricesheets,
  product,
  products,
  productSurcharges,
  purchaseAuthorizationConfig,
  purchaseAuthorizationConfigs,
  quoteGetPDF,
  role,
  roleDefinition,
  roleDefinitions,
  roles,
  shipment,
  shipmentItem,
  shipmentItems,
  shipments,
  shop,
  shops,
  site,
  surcharge,
  surcharges,
  tax,
  taxes,
  template,
  templateErrorLog,
  templateErrorLogs,
  templateErrorLogStats,
  templates,
  tender,
  trackAndTrace,
  trackAndTraces,
  user,
  usergroup,
  usergroups,
  valueset,
  valuesetItems,
  valuesets,
  viewer,
  warehouse,
  warehouses,
  zoneTaxCode,
  zoneTaxCodes
};

export default queries;

