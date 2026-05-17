/* Auto-generated. Do not edit. */
export const document: string = `fragment TenderFields on Tender {
  status
  orderStatus {
    ...OrderStatusFields
  }
  orderId
  revisions {
    itemsFound
    offset
    page
    pages
    start
    end
  }
  tenderId
  ownerId
  type
  siteId
  channelId
  shopId
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  userId
  contactId
  customerId
  companyId
  invoiceUserId
  firstName
  middleName
  lastName
  email
  debtorId
  invoiceAddress {
    company
    gender
    firstName
    middleName
    lastName
    street
    number
    numberExtension
    postalCode
    city
    region
    country
    code
    email
    mobile
    phone
    icp
    notes
  }
  deliveryAddress {
    company
    gender
    firstName
    middleName
    lastName
    street
    number
    numberExtension
    postalCode
    city
    region
    country
    code
    email
    mobile
    phone
    icp
    notes
  }
  itemCount
  items {
    id
    productId
    product {
      ...ProductFields
    }
    uuid
    orderItemId
    name
    sku
    quantity
    supplier
    supplierCode
    price
    priceNet
    totalPrice
    totalPriceNet
    taxCode
    taxPercentage
    customerDiscountPercentage
    discountPercentage
    totalDiscountPercentage
    marginAmount
    marginPercentage
    saleMarginAmount
    saleMarginPercentage
    attributedSaleDiscount
    attributedSaleMargin
    originalPrice
    costPrice
    customerPrice
    valuePoints
    expectedDeliveryDate
    externalOrderitemId
    notes
    priority
    sum
    sumNet
    totalSum
    totalSumNet
    discountPercentageSum
    totalDiscountPercentageSum
    saleMarginAmountSum
    saleMarginPercentageSum
    attributedSaleDiscountSum
    attributedSaleMarginSum
  }
  bonusItems {
    id
    productId
    product {
      ...ProductFields
    }
    uuid
    orderItemId
    name
    sku
    quantity
    supplier
    supplierCode
    price
    priceNet
    totalPrice
    totalPriceNet
    taxCode
    taxPercentage
    customerDiscountPercentage
    discountPercentage
    totalDiscountPercentage
    marginAmount
    marginPercentage
    saleMarginAmount
    saleMarginPercentage
    attributedSaleDiscount
    attributedSaleMargin
    originalPrice
    costPrice
    customerPrice
    valuePoints
    expectedDeliveryDate
    externalOrderitemId
    notes
    priority
    sum
    sumNet
    totalSum
    totalSumNet
    discountPercentageSum
    totalDiscountPercentageSum
    saleMarginAmountSum
    saleMarginPercentageSum
    attributedSaleDiscountSum
    attributedSaleMarginSum
  }
  paymentData {
    price
    priceNet
    overruled
    tax
    taxPercentage
    method
    status
    statusDate
    accountingId
  }
  postageData {
    method
    taxPercentage
    requestDate
    carrier
    price
    priceNet
    tax
    overruled
    partialDeliveryAllowed
    pickUpLocationId
    warehouse {
      ...WarehouseFields
    }
  }
  total {
    subTotalGross
    subTotalNet
    discount
    discountPercentage
    discountType
    discountOverruled
    totalNet
    totalGross
    discountNet
    discountGross
    totalTax
  }
  taxLevels {
    percentage
    total
    tax
    discount
  }
  carriers {
    id
    price
    name
    description
    logo
    amount
    deliveryDeadline
  }
  payMethods {
    id
    code
    externalCode
    type
    description
    amount
    allowed
  }
  source
  valuePoints
  incentivesApplied
  creditPoints
  actionCode
  reference
  remarks
  language
  currency
  currencyRatio
  externalId
  extra3
  extra4
  isEditable
  validUntil
  public
  revisionNumber
  publicVersionNumber
  invalid
  invalidationReason
  createdByAdminUserId
  createdByContactId
  createdByCustomerId
  createdFromRevisionNumber
  user {
    userId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
    iban
    bankAccount
    bic
    notes
    primaryLanguage
    expires
    externalId
    dateOfBirth
    mailingList
    isLoggedIn
    createdAt
    lastModifiedAt
  }
  contact {
    ...ContactFields
  }
  customer {
    ...CustomerFields
  }
  company {
    ...CompanyFields
  }
}

fragment OrderStatusFields on OrderStatus {
  id
  name
  code
  type
  orderType
  description
  priority
  isDefault
  isPublic
  isEditable
  isDeletable
  isExportable
  isConfirmable
  isArchivable
  createdAt
  lastModifiedAt
  statusSet {
    id
    name
    description
  }
  nextStatuses {
    itemsFound
    offset
    page
    pages
    start
    end
  }
  previousStatuses {
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment ProductFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  attributes(input: \$attributeResultSearchInput) {
    ...AttributeResultProductResponseFields
  }
  bundles {
    ...BundleFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductPriceFields
  }
  priceData {
    display
  }
  bulkPrices(input: \$userBulkPriceProductInput) {
    ...ProductPriceFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  barCode
  turnoverGroup
  taxonomy
  priceGroup
  orderable
  returnable
  physical
  hasBundle
  isBundleLeader
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  economicOrderQuantity
  orderableFrom
  orderableTo
  releaseDate
  createdAt
  lastModifiedAt
  containerClass
  surcharges {
    ...SurchargeFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultProductResponseFields on AttributeResultResponse {
  items {
    ...AttributeResultProductFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeResultProductFields on AttributeResult {
  attribute {
    __typename
    ... on ClusterAttribute {
      ...ClusterAttributeFields
    }
    ... on ProductAttribute {
      ...ProductAttributeFields
    }
  }
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
}

fragment ClusterAttributeFields on ClusterAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  clusterId
}

fragment AttributeColorValueFields on AttributeColorValue {
  __typename
  id
  type
  colorValue
}

fragment AttributeDateTimeValueFields on AttributeDateTimeValue {
  __typename
  id
  type
  dateTimeValue
}

fragment AttributeDecimalValueFields on AttributeDecimalValue {
  __typename
  id
  type
  decimalValue
}

fragment AttributeEnumValueFields on AttributeEnumValue {
  __typename
  id
  type
  enumValues
}

fragment AttributeIntValueFields on AttributeIntValue {
  __typename
  id
  type
  intValue
}

fragment AttributeTextValueFields on AttributeTextValue {
  __typename
  id
  type
  textValues {
    language
    values
  }
}

fragment AttributeDescriptionFields on AttributeDescription {
  id
  name
  descriptions {
    language
    value
  }
  units {
    language
    value
  }
  attributeClass
  type
  valuesetId
  group
  isSearchable
  isPublic
  isSystem
  isHidden
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
}

fragment ProductAttributeFields on ProductAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  productId
}

fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment CategoryMinimalFields on Category {
  categoryId
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment ProductMediaFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos(search: \$mediaVideoSearchInput) {
    items {
      ...MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents(search: \$mediaDocumentSearchInput) {
    items {
      ...MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment SurchargeFields on Surcharge {
  id
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

fragment ContactFields on Contact {
  contactId
  attributes(input: \$contactAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ...FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
  company {
    ...CompanyDataFields
  }
  companies(input: \$contactCompaniesSearchInput) {
    items {
      ...CompanyDataFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  purchaseAuthorizationConfigs(input: \$contactPAConfigInput) {
    items {
      ...PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment AttributeResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute {
      ...CategoryAttributeFields
    }
    ... on ClusterAttribute {
      ...ClusterAttributeFields
    }
    ... on CompanyAttribute {
      ...CompanyAttributeFields
    }
    ... on ContactAttribute {
      ...ContactAttributeFields
    }
    ... on CustomerAttribute {
      ...CustomerAttributeFields
    }
    ... on ProductAttribute {
      ...ProductAttributeFields
    }
  }
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
}

fragment CategoryAttributeFields on Attribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
  }
}

fragment CompanyAttributeFields on CompanyAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  companyId
}

fragment ContactAttributeFields on ContactAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  contactId
}

fragment CustomerAttributeFields on CustomerAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  customerId
}

fragment FavoriteListOnlyFields on FavoriteList {
  id
  name
  companyId
  contactId
  customerId
  isDefault
  slug
  createdAt
  updatedAt
  products {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
  clusters {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
}

fragment CompanyDataFields on Company {
  companyId
  attributes(input: \$companyAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  addresses {
    ...AddressFields
  }
  orderlists {
    items {
      ...OrderlistFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}

fragment AddressFields on Address {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  isDefault
  type
  icp
  url
  active
  name
}

fragment OrderlistFields on Orderlist {
  id
  createdAt
  lastModifiedAt
  descriptions {
    language
    value
  }
  extras {
    language
    value
  }
  code
  validFrom
  validTo
  type
  partnerEntity
  active
}

fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
  id
  purchaseRole
  authorizationLimit
  createdAt
  lastModifiedAt
  company {
    companyId
  }
  contact {
    contactId
  }
}

fragment CustomerFields on Customer {
  customerId
  addresses {
    ...AddressFields
  }
  attributes(input: \$customerAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ...FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
}

fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
  attributes(input: \$companyAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
}

fragment ContactListFields on Contact {
  contactId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
  purchaseAuthorizationConfigs(input: \$contactPAConfigInput) {
    items {
      ...PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

mutation tenderUpdateAddress(\$id: String!, \$input: TenderUpdateAddressInput!, \$attributeResultSearchInput: AttributeResultSearchInput, \$priceCalculateProductInput: PriceCalculateProductInput, \$userBulkPriceProductInput: UserBulkPriceProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$language: String, \$imageVariantFilters: TransformationsInput!, \$mediaVideoSearchInput: MediaVideoProductSearchInput, \$mediaDocumentSearchInput: MediaDocumentProductSearchInput, \$contactAttributesInput: AttributeResultSearchInput, \$contactCompaniesSearchInput: ContactCompaniesSearchInput, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$customerAttributesInput: AttributeResultSearchInput, \$contactSearchArguments: ContactSearchArguments) {
  tenderUpdateAddress(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
