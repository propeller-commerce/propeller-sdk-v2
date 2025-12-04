/**
 * Generated GraphQL fragments bundle
 * This file is auto-generated. Do not edit manually.
 */

export const AddressFields = `fragment AddressFields on Address {
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
}`;

export const AttributeColorValueFields = `fragment AttributeColorValueFields on AttributeColorValue {
  __typename
  id
  type
  colorValue
}`;

export const AttributeDateTimeValueFields = `fragment AttributeDateTimeValueFields on AttributeDateTimeValue {
  __typename
  id
  type
  dateTimeValue
}`;

export const AttributeDecimalRangeFilterFields = `fragment AttributeDecimalRangeFilterFields on AttributeDecimalRangeFilter {
  min
  max
}`;

export const AttributeDecimalValueFields = `fragment AttributeDecimalValueFields on AttributeDecimalValue {
  __typename
  id
  type
  decimalValue
}`;

export const AttributeDescriptionFields = `fragment AttributeDescriptionFields on AttributeDescription {
  id
  name
  descriptions {
    ... LocalizedStringFields
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
  defaultValue {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
}`;

export const AttributeDescriptionResponseFields = `fragment AttributeDescriptionResponseFields on AttributeDescriptionResponse {
  items {
    ... AttributeDescriptionFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const AttributeEnumValueFields = `fragment AttributeEnumValueFields on AttributeEnumValue {
  __typename
  id
  type
  enumValues
}`;

export const AttributeFields = `fragment AttributeFields on Attribute {
  ... on CategoryAttribute { ...CategoryAttributeFields }
  ... on ClusterAttribute { ...ClusterAttributeFields }
  ... on CompanyAttribute { ...CompanyAttributeFields }
  ... on ContactAttribute { ...ContactAttributeFields }
  ... on CustomerAttribute { ...CustomerAttributeFields }
  ... on ProductAttribute { ...ProductAttributeFields }
}`;

export const AttributeFilterFields = `fragment AttributeFilterFields on AttributeFilter {
  id
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
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}`;

export const AttributeIntegerRangeFilterFields = `fragment AttributeIntegerRangeFilterFields on AttributeIntegerRangeFilter {
  min
  max
}`;

export const AttributeIntValueFields = `fragment AttributeIntValueFields on AttributeIntValue {
  __typename
  id
  type
  intValue
}`;

export const AttributeResponseFields = `fragment AttributeResponseFields on AttributeResponse {
  items {
    ... on CategoryAttribute { ...CategoryAttributeFields }
    ... on ClusterAttribute { ...ClusterAttributeFields }
    ... on CompanyAttribute { ...CompanyAttributeFields }
    ... on ContactAttribute { ...ContactAttributeFields }
    ... on CustomerAttribute { ...CustomerAttributeFields }
    ... on ProductAttribute { ...ProductAttributeFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const AttributeResultFields = `fragment AttributeResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute { ...CategoryAttributeFields }
    ... on ClusterAttribute { ...ClusterAttributeFields }
    ... on CompanyAttribute { ...CompanyAttributeFields }
    ... on ContactAttribute { ...ContactAttributeFields }
    ... on CustomerAttribute { ...CustomerAttributeFields }
    ... on ProductAttribute { ...ProductAttributeFields }
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
    defaultValue {
      ... on AttributeColorValue { ...AttributeColorValueFields }
      ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
      ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
      ... on AttributeEnumValue { ...AttributeEnumValueFields }
      ... on AttributeIntValue { ...AttributeIntValueFields }
      ... on AttributeTextValue { ...AttributeTextValueFields }
    }
  }
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
}`;

export const AttributeResultResponseFields = `fragment AttributeResultResponseFields on AttributeResultResponse {
  items {
    ... AttributeResultFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const AttributeTextFilterFields = `fragment AttributeTextFilterFields on AttributeTextFilter {
  value
  count
  countTotal
  countActive
  isSelected
}`;

export const AttributeTextValueFields = `fragment AttributeTextValueFields on AttributeTextValue {
  __typename
  id
  type
  textValues {
    language
    values
  }
}`;

export const Base64FileFields = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}`;

export const BulkCostPriceFields = `fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}`;

export const BulkCostPriceResponseFields = `fragment BulkCostPriceResponseFields on BulkCostPriceResponse {
  items {
    ... BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const BulkPriceFields = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}`;

export const BulkPriceResponseFields = `fragment BulkPriceResponseFields on BulkPriceResponse {
  items {
    ... BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const BundleFields = `fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ... BundlePriceFields
  }
  items {
    ... BundleItemFields
  }
}`;

export const BundleItemFields = `fragment BundleItemFields on BundleItem {
  productId
  price {
    ... BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ... ProductCartFields
  }
}`;

export const BundlePriceFields = `fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}`;

export const BundlesResponseFields = `fragment BundlesResponseFields on BundlesResponse {
  items {
    ... BundleFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const BusinessHoursFields = `fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}`;

export const CarrierFields = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ... LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ... TrackAndTraceFields
  }
  warehouses {
    ... WarehouseFields
  }
}`;

export const CarriersResponseFields = `fragment CarriersResponseFields on CarriersResponse {
  items {
    ... CarrierFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const CartAddressFields = `fragment CartAddressFields on CartAddress {
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
}`;

export const CartBaseItemFields = `fragment CartBaseItemFields on CartBaseItem {
  itemId
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  bundleId
  clusterId
  productId
  taxCode
  incentive {
    name
    quantity
    price
    code
  }
  product {
    ... ProductCartFields
  }
}`;

export const CartCarrierFields = `fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}`;

export const CartFields = `fragment CartFields on Cart {
  cartId
  channelId
  shopId
  contactId
  customerId
  companyId
  notes
  reference
  extra3
  extra4
  orderStatus
  actionCode
  vouchers {
    ... CartVoucherFields
  }
  paymentData {
    ... CartPaymentDataFields
  }
  postageData {
    ... CartPostageDataFields
  }
  total {
    ... CartTotalFields
  }
  items {
    ... CartMainItemFields
  }
  bonusItems {
    ... CartBaseItemFields
  }
  unOrderableItems {
    itemId
    parentItemUUID
    priceMode
    quantity
    price
    notes
    productId
    clusterId
    bundleId
  }
  invoiceAddress {
    ... CartAddressFields
  }
  deliveryAddress {
    ... CartAddressFields
  }
  taxLevels {
    ... CartTaxLevelFields
  }
  payMethods {
    ... CartPaymethodFields
  }
  carriers {
    ... CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ... CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ... CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    ... ContactListFields
  }
  customer {
    ... CustomerListFields
  }
  company {
    ... CompanyListFields
  }
}`;

export const CartIncentiveFields = `fragment CartIncentiveFields on CartIncentive {
  name
  action
}`;

export const CartItemSurchargeFields = `fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  type
  value
  taxCode
  taxPercentage
  quantity
  price
  totalPrice
  priceNet
  totalPriceNet
}`;

export const CartMainItemFields = `fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ... BundleFields
  }
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  clusterId
  taxCode
  deliveryDate
  deliveryDeadline
  discount
  discountPercentage
  surcharges {
    ... CartItemSurchargeFields
  } 
  incentive {
    name
    quantity
    price
    code
  }
  childItems {
    itemId
    parentItemUUID
    notes
    price
    priceNet
    priceMode
    totalPrice
    totalPriceNet
    sum
    sumNet
    totalSum
    totalSumNet
    quantity
    bundleId
    clusterId
    productId
    taxCode
    deliveryDate
    deliveryDeadline
    discount
    discountPercentage
    product {
      ... ProductCartFields
    }
  }
  product {
    ... ProductCartFields
  }
}`;

export const CartPaymentDataFields = `fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}`;

export const CartPaymethodFields = `fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}`;

export const CartPostageDataFields = `fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}`;

export const CartProcessResponseFields = `fragment CartProcessResponseFields on CartProcessResponse {
  cartOrderId
  cart {
    cartId
  }
  order {
    id
    userId
    accountManagerId
    cartId
    channelId
    shopId
    uuid
    externalId
    debtorId
    status
    type
    source
    email
    emailDate
    remarks
    reference
    extra3
    extra4
    currency
    currencyRatio
    language
    date
    createdAt
    statusDate
    postageData {
      ... OrderPostageDataFields
    }
    paymentData {
      ... OrderPaymentDataFields
    }
    total {
      ... OrderTotalsFields
    }
    items {
      ... OrderItemFields
    }
    shipments {
      ... ShipmentFields
    }
    addresses {
      ... AddressFields
    }
    invoiceUserId
    validUntil
    companyId
    lastModifiedAt
    originalOrderId
    exportedAt
    exportStatus
    exportMessage
    orderAddresses {
      ... OrderAddressFields
    }
  }
}`;

export const CartResponseFields = `fragment CartResponseFields on CartResponse {
  items {
    cartId
  }
  itemsFound
}`;

export const CartShippingMethodFields = `fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}`;

export const CartTaxLevelFields = `fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}`;

export const CartTotalFields = `fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}`;

export const CartUnOrderableItemFields = `fragment CartUnOrderableItemFields on CartUnOrderableItem {
  itemId
  parentItemUUID
  priceMode
  quantity
  price
  notes
  productId
  clusterId
  bundleId
}`;

export const CartVoucherFields = `fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}`;

export const CategoryAttributeFields = `fragment CategoryAttributeFields on Attribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
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
    defaultValue {
      ... on AttributeColorValue { ...AttributeColorValueFields }
      ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
      ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
      ... on AttributeEnumValue { ...AttributeEnumValueFields }
      ... on AttributeIntValue { ...AttributeIntValueFields }
      ... on AttributeTextValue { ...AttributeTextValueFields }
    }
  }
}`;

export const CategoryFields = `fragment CategoryFields on Category {
  categoryId
  urlId: categoryId
  ... CategoryMinimalFields
  attributes {
    ... AttributeResultResponseFields
  }
  path
  parent {
    ... CategoryMinimalFields
  }
  metadataTitles {
    ... LocalizedStringFields
  }
  metadataDescriptions {
    ... LocalizedStringFields
  }
  metadataKeywords {
    ... LocalizedStringFields
  }
  metadataCanonicalUrls {
    ... LocalizedStringFields
  }
  hidden
  categoryPath {
    ... CategoryMinimalFields
  }
  products (input: \$categoryProductSearchInput) {
    ... ProductsResponseFields
  }
}`;

export const CategoryMinimalFields = `fragment CategoryMinimalFields on Category {
  categoryId
  name (language: \$language){
    ... LocalizedStringFields
  }
  description (language: \$language){
    ... LocalizedStringFields
  }
  shortDescription (language: \$language){
    ... LocalizedStringFields
  }
  slug (language: \$language){
    ... LocalizedStringFields
  }
}`;

export const CategoryResponseFields = `fragment CategoryResponseFields on CategoryResponse {
  items {
    ... CategoryMinimalFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ClusterAttributeFields = `fragment ClusterAttributeFields on ClusterAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  clusterId
}`;

export const ClusterConfigFields = `fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ... ClusterConfigSettingFields
  }
}`;

export const ClusterConfigResponseFields = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  ... ClusterConfigFields
}`;

export const ClusterConfigSettingFields = `fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}`;

export const ClusterFields = `fragment ClusterFields on Cluster {
  ... IBaseProductFields
  clusterId
  categoryId
  attributes {
    ... AttributeResultResponseFields
  }
  categories {
    ... CategoryResponseFields
  }
  category {
    ... CategoryMinimalFields
  }
  categoryPath {
    ... CategoryMinimalFields
  }
  crossupsellsFrom {
    ... CrossupsellsResponseFields
  }
  crossupsellsTo {
    ... CrossupsellsResponseFields
  }
  favoriteLists {
    ... FavoriteListsResponseFields
  }
  products {
    ... ProductFields
  }
  createdAt
  lastModifiedAt
  options {
    ... ClusterOptionFields
  }
  defaultProduct {
    ... ProductFields
  }
  config {
    ... ClusterConfigFields
  }
}`;

export const ClusterGridFields = `fragment ClusterGridFields on Cluster {
  ... IBaseProductFields
  clusterId
  categoryId
  products {
    ... ProductGridFields
  }
  createdAt
  lastModifiedAt
  options {
    ... ClusterOptionFields
  }
  defaultProduct {
    ... ProductGridFields
  }
}`;

export const ClusterOptionFields = `fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ... ProductGridFields
  }
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
}`;

export const CompaniesResponseFields = `fragment CompaniesResponseFields on CompaniesResponse {
  items {
    ... CompanyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const CompanyAddressSearchFields = `fragment CompanyAddressSearchFields on CompanyAddressSearch {
  id
  firstName
  lastName
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
  code
  notes
  name
  isDefault
  type
  active
  createdAt
  lastModifiedAt
}`;

export const CompanyAttributeDescriptionSearchFields = `fragment CompanyAttributeDescriptionSearchFields on CompanyAttributeDescriptionSearch {
  id
  name
}`;

export const CompanyAttributeFields = `fragment CompanyAttributeFields on CompanyAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  companyId
}`;

export const CompanyAttributeSearchFields = `fragment CompanyAttributeSearchFields on CompanyAttributeSearch {
  id
  value {
    id
    type
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    name
  }
}`;

export const CompanyAttributeValueSearchFields = `fragment CompanyAttributeValueSearchFields on CompanyAttributeValueSearch {
  id
  type
}`;

export const CompanyContactSearchFields = `fragment CompanyContactSearchFields on CompanyContactSearch {
  ... ContactFields
}`;

export const CompanyDataFields = `fragment CompanyDataFields on Company {
  companyId
  attributes (input: \$companyAttributesInput) {
    items {
      ... AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  addresses {
    ... AddressFields
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}`;

export const CompanyFields = `fragment CompanyFields on Company {
  companyId
  addresses {
    ... AddressFields
  }
  attributes {
    items {
      ... AttributeResultFields
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
  contacts {
    items {
      ... ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact { ...ContactListFields }
  }
}`;

export const CompanyListFields = `fragment CompanyListFields on Company {
  companyId
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}`;

export const ContactAttributeFields = `fragment ContactAttributeFields on ContactAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  contactId
}`;

export const ContactFields = `fragment ContactFields on Contact {
  contactId
  attributes (input: \$contactAttributesInput) {
    items {
      ... AttributeResultFields
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
      ... FavoriteListOnlyFields
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
  parentCompanyId
  company {
    ... CompanyDataFields
  }
  companies {
    items {
      ... CompanyDataFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  purchaseAuthorizationConfigs (input: \$contactPAConfigInput) {
    items {
      ... PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const ContactListFields = `fragment ContactListFields on Contact {
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
  purchaseAuthorizationConfigs {
    items {
      ... PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const ContactsResponseFields = `fragment ContactsResponseFields on ContactsResponse {
  items {
    ... ContactFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ContactViewerFields = `fragment ContactViewerFields on Contact {
  contactId
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
  parentCompanyId
} `;

export const CostPriceFields = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}`;

export const CostPriceResponseFields = `fragment CostPriceResponseFields on CostPriceResponse {
  items {
    id
    priceId
    createdAt
    lastModifiedAt
    quantityFrom
    value
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const CrossupsellFields = `fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  productFrom {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  clusterTo {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  clusterFrom {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
}`;

export const CrossupsellsResponseFields = `fragment CrossupsellsResponseFields on CrossupsellsResponse {
  items {
    ... CrossupsellFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const CustomerAttributeFields = `fragment CustomerAttributeFields on CustomerAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  customerId
}`;

export const CustomerFields = `fragment CustomerFields on Customer {
  customerId
  addresses {
    ... AddressFields
  }
  attributes (input: \$customerAttributesInput) {
    items {
      ... AttributeResultFields
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
      ... FavoriteListOnlyFields
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
  parentUsergroupId
}`;

export const CustomerListFields = `fragment CustomerListFields on Customer {
  customerId
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
  parentUsergroupId
}`;

export const CustomersResponseFields = `fragment CustomersResponseFields on CustomersResponse {
  items {
    ... CustomerFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const CustomerViewerFields = `fragment CustomerViewerFields on Customer {
  customerId
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
  parentUsergroupId
} `;

export const DiscountFields = `fragment DiscountFields on Discount {
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
}`;

export const DocumentTemplateFields = `fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents { ...LocalizedTemplateContentFields }
  names { ...LocalizedStringFields }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames { ...LocalizedStringFields }
  isDefaultOrderPdf
  isDefaultQuotePdf
}`;

export const ExternalAddressFields = `fragment ExternalAddressFields on ExternalAddress {
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
}`;

export const FavoriteListFields = `fragment FavoriteListFields on FavoriteList {
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
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
  clusters {
    items {
      ... ClusterGridFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
}`;

export const FavoriteListOnlyFields = `fragment FavoriteListOnlyFields on FavoriteList {
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
      ... on Cluster { clusterId }
      ... on Product { productId }
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
}`;

export const FavoriteListsResponseFields = `fragment FavoriteListsResponseFields on FavoriteListsResponse {
  items {
    ... FavoriteListOnlyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const GCIPProviderDataFields = `fragment GCIPProviderDataFields on GCIPProviderData {
  uid
  providerId
  displayName
  photoUrl
  federatedId
  email
  rawId
  screenName
  phoneNumber
}`;

export const GCIPUserFields = `fragment GCIPUserFields on GCIPUser {
  uid
  email
  emailVerified
  displayName
  photoUrl
  phoneNumber
  disabled
  isAnonymous
  metadata {
    lastSignInTime
    creationTime
    lastRefreshTime
  }
  tokensValidAfterTime
  tenantId
  providerData {
    uid
    providerId
    displayName
    photoUrl
    federatedId
    email
    rawId
    screenName
    phoneNumber
  }
  passwordHash
  passwordSalt
  authDomain
  lastLoginAt
  createdAt
  accessToken
  refreshToken
  expirationTime
  multiFactor {
    enrolledFactors {
      factorId
      phoneNumber
    }
  }
}`;

export const IBaseProductCartFields = `fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
  slugs {
    ... LocalizedStringFields
  }
  sku
}
`;

export const IBaseProductFields = `fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
  slugs {
    ... LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ... LocalizedStringFields
  }
  metadataDescriptions {
    ... LocalizedStringFields
  }
  metadataCanonicalUrls {
    ... LocalizedStringFields
  }
}
`;

export const IBaseTemplateFields = `fragment IBaseTemplateFields on IBaseTemplate {
  ... on DocumentTemplate { ...DocumentTemplateFields }
  ... on EmailTemplate { ...EmailTemplateFields }
}`;

export const ImageVariantFields = `fragment ImageVariantFields on ImageVariant {
  name
  language
  url
  mimeType
}`;

export const InventoryDeleteResponseFields = `fragment InventoryDeleteResponseFields on InventoryDeleteResponse {
  messages
}`;

export const InventoryFields = `fragment InventoryFields on Inventory {
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
}`;

export const InventoryResponseFields = `fragment InventoryResponseFields on InventoryResponse {
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
  messages
  total
  warehouse {
    ... WarehouseFields
  }
}`;

export const LocalizedAttachmentFields = `fragment LocalizedAttachmentFields on LocalizedAttachment {
  language
  originalUrl
  mimeType
}`;

export const LocalizedDocumentFields = `fragment LocalizedDocumentFields on LocalizedDocument {
  language
  originalUrl
  mimeType
}`;

export const LocalizedImageFields = `fragment LocalizedImageFields on LocalizedImage {
  language
  originalUrl
  mimeType
}`;

export const LocalizedStringArrayFields = `fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}`;

export const LocalizedStringFields = `fragment LocalizedStringFields on LocalizedString {
  language
  value
}`;

export const LocalizedTemplateContentFields = `fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}`;

export const LocalizedVideoFields = `fragment LocalizedVideoFields on LocalizedVideo {
  language
  uri
  mimeType
}`;

export const LoginFields = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ... GCIPUserFields
  }
}`;

export const LogoutFields = `fragment LogoutFields on Logout {
  todo
}`;

export const MagicTokenFields = `fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}`;

export const MagicTokenResponseFields = `fragment MagicTokenResponseFields on MagicTokenResponse {
  items {
    ... MagicTokenFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const MediaAttachmentFields = `fragment MediaAttachmentFields on MediaAttachment {
  id
  sparePartsMachineId
  alt {
    ... LocalizedStringArray
  }
  description {
    ... LocalizedStringArray
  }
  tags {
    ... LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}`;

export const MediaDocumentFields = `fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
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
}`;

export const MediaFields = `fragment MediaFields on Media {
  image {
    ... MediaImageFields
  }
  images {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  video {
    ... MediaVideoFields
  }
  videos {
    items {
      ... MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  document {
    ... MediaDocumentFields
  }
  documents {
    items {
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  attachment {
    ... MediaAttachmentFields
  }
  attachments {
    items {
      ... MediaAttachmentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const MediaImageFields = `fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt (language: \$language) {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
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
}`;

export const MediaVideoFields = `fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
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
}`;

export const OrderAddressFields = `fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
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
  code
  notes
  type
  icp
  url
  name
}`;

export const OrderDataFields = `fragment OrderDataFields on Order {
  id
  userId
  accountManagerId
  cartId
  channelId
  shopId
  uuid
  externalId
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  createdAt
  statusDate
  total {
    ... OrderTotalsFields
  }
  invoiceUserId
  validUntil
  companyId
  items {
    quantity
    class
    productId
    sku
    isBonus
    name
    supplier
    supplierCode
    manufacturer
    manufacturerCode
    eanCode
  }
}`;

export const OrderFields = `fragment OrderFields on Order {
  id
  media {
    ... OrderMediaFields
  }
  userId
  accountManagerId
  cartId
  channelId
  shopId
  uuid
  externalId
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  date
  createdAt
  statusDate
  postageData {
    ... OrderPostageDataFields
  }
  paymentData {
    ... OrderPaymentDataFields
  }
  total {
    ... OrderTotalsFields
  }
  items {
    ... OrderItemFields
  }
  shipments {
    ... ShipmentFields
  }
  addresses {
    ... AddressFields
  }
  sources {
    ... SourceFields
  }
  invoiceUserId
  validUntil
  companyId
  lastModifiedAt
  originalOrderId
  exportedAt
  exportStatus
  exportMessage
  orderAddresses {
    ... OrderAddressFields
  }
}`;

export const OrderItemFields = `fragment OrderItemFields on OrderItem {
  id
  orderId
  uuid
  class
  productId
  parentOrderItemId
  quantity
  sku
  notes
  name
  supplier
  supplierCode
  manufacturer
  manufacturerCode
  eanCode
  originalPrice
  price
  priceTotal
  priceNet
  priceTotalNet
  customerPrice
  costPrice
  discount
  tax
  taxPercentage
  taxCode
  isBonus
  minimumQuantity
  unit
  package
  packageUnit
  packageUnitQuantity
  purchaseUnit
  purchaseMinimumQuantity
  requestDate
  product {
    ... ProductCartFields
  }
}`;

export const OrderlistFields = `fragment OrderlistFields on Orderlist {
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
  products {
    items {
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  clusters {
    items {
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  users {
    ... on Contact { ...ContactFields }
    ... on Customer { ...CustomerFields }
  }
  usersPaginated {
    items {
      ... on Contact { ...ContactFields }
      ... on Customer { ...CustomerFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ... CompanyDataFields
  }
}`;

export const OrderlistsResponseFields = `fragment OrderlistsResponseFields on OrderlistsResponse {
  items {
    ... OrderlistFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const OrderMediaFields = `fragment OrderMediaFields on OrderMedia {
  attachments {
    items {
      id
      sparePartsMachineId
      alt {
        language
        value
      }
      description {
        language
        value
      }
      tags {
        language
        values
      }
      type
      createdAt
      lastModifiedAt
      priority
      attachments {
        language
        originalUrl
        mimeType
      }
      orderId
      companyId
      customerId
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const OrderPaymentDataFields = `fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}`;

export const OrderPostageDataFields = `fragment OrderPostageDataFields on OrderPostageData {
  method
  taxPercentage
  requestDate
  gross
  net
  tax
  partialDeliveryAllowed
  pickUpLocationId
  carrier
  overruled
  warehouse {
  ... WarehouseFields
  }
}`;

export const OrderResponseFields = `fragment OrderResponseFields on OrderResponse {
  items {
    ... OrderDataFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const OrderTotalsFields = `fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}`;

export const OrderTotalTaxPercentageFields = `fragment OrderTotalTaxPercentageFields on OrderTotalTaxPercentage {
  percentage
  total
}`;

export const PaginatedMediaAttachmentResponseFields = `fragment PaginatedMediaAttachmentResponseFields on PaginatedMediaAttachmentResponse {
  items {
    ... MediaAttachmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PaginatedMediaDocumentResponseFields = `fragment PaginatedMediaDocumentResponseFields on PaginatedMediaDocumentResponse {
  items {
    ... MediaDocumentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PaginatedMediaImageResponseFields = `fragment PaginatedMediaImageResponseFields on PaginatedMediaImageResponse {
  items {
    ... MediaImageFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PaginatedMediaVideoResponseFields = `fragment PaginatedMediaVideoResponseFields on PaginatedMediaVideoResponse {
  items {
    ... MediaVideoFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PaymentFields = `fragment PaymentFields on Payment {
  id
  userId
  anonymousId
  paymentId
  orderId
  amount
  currency
  method
  status
  transactions {
    ... TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}`;

export const PaymentsResponseFields = `fragment PaymentsResponseFields on PaymentsResponse {
  items {
    ... PaymentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PayMethodFields = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ... LocalizedStringFields
  }
  externalCode
  logo
}`;

export const PayMethodsResponseFields = `fragment PayMethodsResponseFields on PayMethodsResponse {
  items {
    ... PayMethodFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PriceFields = `fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ... BulkCostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
  cost
}`;

export const PriceResponseFields = `fragment PriceResponseFields on PriceResponse {
  items {
    ... PriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const PricesheetFields = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  priority
  readonly
  usergroups
  contacts {
    ... ContactFields
  }
  contactsPaginated {
    items {
      ... ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ... CustomerFields
  }
  customersPaginated {
    items {
      ... CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ... CompanyFields
  }
  companiesPaginated {
    items {
      ... CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const PricesheetResponseFields = `fragment PricesheetResponseFields on PricesheetResponse {
  items {
    ... PricesheetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ProductAttributeFields = `fragment ProductAttributeFields on ProductAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  productId
}`;

export const ProductCartFields = `fragment ProductCartFields on Product {
  ... IBaseProductCartFields
  productId
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaImagesOnlyFields
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
}`;

export const ProductFields = `fragment ProductFields on Product {
  ... IBaseProductFields
  productId
  categoryId
  attributes (input: \$attributeResultSearchInput) {
    ... AttributeResultResponseFields
  }
  bundles {
    ... BundleFields
  }
  category {
    ... CategoryMinimalFields
  }
  categoryPath {
    ... CategoryMinimalFields
  }
  favoriteLists {
    items {
      ... FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaFields
  }
  price (input: \$priceCalculateProductInput) {
    ... ProductPriceFields
  }
  priceData {
    display
  }
  bulkPrices (input: \$userBulkPriceProductInput) {
    ... ProductPriceFields
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
    ... SurchargeFields
  }
}`;

export const ProductGridFields = `fragment ProductGridFields on Product {
  ... IBaseProductFields
  productId
  categoryId
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaImagesOnlyFields
  }
  price (input: \$priceCalculateProductInput) {
    ... ProductPriceFields
  }
  priceData {
    display
  }
  shortName
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}`;

export const ProductInventoryFields = `fragment ProductInventoryFields on ProductInventory {
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
}`;

export const ProductMediaFields = `fragment ProductMediaFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ... MediaImageFields
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
      ... MediaVideoFields
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
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const ProductMediaImagesOnlyFields = `fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const ProductOfferFields = `fragment ProductOfferFields on ProductOffer {
  price
  validFrom
  validTo
}`;

export const ProductPriceFields = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice { ...BulkCostPriceFields }
    ... on BulkPrice { ...BulkPriceFields }
    ... on Discount { ...DiscountFields }
  }
  taxCode
  quantity
}`;

export const ProductsResponseFields = `fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster { ... ClusterGridFields }
    ... on Product { ... ProductGridFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters (input: \$filterAvailableAttributeInput) {
    ... AttributeFilterFields
  }
}`;

export const PurchaseAuthorizationConfigFields = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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
}`;

export const PurchaseAuthorizationConfigResponseFields = `fragment PurchaseAuthorizationConfigResponseFields on PurchaseAuthorizationConfigResponse {
  items {
    ... PurchaseAuthorizationConfigFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const RefreshTokenResponseFields = `fragment RefreshTokenResponseFields on RefreshTokenResponse {
  access_token
  refresh_token
  expires_in
  token_type
  user_id
}`;

export const RegisterContactResponseFields = `fragment RegisterContactResponseFields on RegisterContactResponse {
  contact {
    ... on Contact { ...ContactFields }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
}`;

export const RegisterCustomerResponseFields = `fragment RegisterCustomerResponseFields on RegisterCustomerResponse {
  customer {
    ... on Customer { ...CustomerFields }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
}`;

export const SendOrderConfirmResponseTypeFields = `fragment SendOrderConfirmResponseTypeFields on SendOrderConfirmResponseType {
  messageId
  success
}`;

export const ShipmentFields = `fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ... ShipmentItemFields
  }
  trackAndTraces {
    ... TrackAndTraceFields
  }
}`;

export const ShipmentItemFields = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
  orderItem {
    ... OrderItemFields
  }
}`;

export const ShipmentItemResponseFields = `fragment ShipmentItemResponseFields on ShipmentItemResponse {
  items {
    ... ShipmentItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ShipmentResponseFields = `fragment ShipmentResponseFields on ShipmentResponse {
  items {
    ... ShipmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const SourceFields = `fragment SourceFields on Source {
  id
  name
}`;

export const SparePartFields = `fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ... LocalizedStringFields
  }
  product {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
}`;

export const SparePartsMachineFields = `fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ... SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ... SparePartFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  name {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  slug {
    ... LocalizedStringFields
  }
  machines {
    id
    media {
      ... SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ... SparePartFields
      }
      itemsFound
      offset
      page
      pages
      start
      end
      minPrice
      maxPrice
      filters {
        ... AttributeFilterFields
      }
    }
    name {
      ... LocalizedStringFields
    }
    description {
      ... LocalizedStringFields
    }
    slug {
      ... LocalizedStringFields
    }
  }
}`;

export const SparePartsMachineMediaFields = `fragment SparePartsMachineMediaFields on SparePartsMachineMedia {
  images (search: \$machineimageSearchFilters) {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos (search: \$machineMediaVideoSearchInput) {
    items {
      ... MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents (search: \$machineMediaDocumentSearchInput) {
    items {
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  attachments (search: \$machineMediaAttachmentSearchInput) {
    items {
      ... MediaAttachmentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const SparePartsMachineMediaImagesOnlyFields = `fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const SparePartsMachineResponseFields = `fragment SparePartsMachineResponseFields on SparePartsMachineResponse {
  items {
    ... SparePartsMachineFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const SparePartsResponseFields = `fragment SparePartsResponseFields on SparePartsResponse {
  items {
    ... SparePartFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters {
    ... AttributeFilterFields
  }
}`;

export const SurchargeFields = `fragment SurchargeFields on Surcharge {
  id
  name {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}`;

export const SurchargeProductFields = `fragment SurchargeProductFields on SurchargeProduct {
  surchargeId
  productId
  surcharge {
    ... SurchargeFields
  }
}`;

export const SurchargeProductResponseFields = `fragment SurchargeProductResponseFields on SurchargeProductResponse {
  items {
    ... SurchargeProduct
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const SurchargesResponseFields = `fragment SurchargesResponseFields on SurchargesResponse {
  items {
    ... SurchargeProductResponse
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const TaxesResponseFields = `fragment TaxesResponseFields on TaxesResponse {
  items {
    ... TaxFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const TaxFields = `fragment TaxFields on Tax {
  id
  shopId
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}`;

export const TrackAndTraceFields = `fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}`;

export const TrackAndTraceResponseFields = `fragment TrackAndTraceResponseFields on TrackAndTraceResponse {
  items {
    ... TrackAndTraceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const TransactionFields = `fragment TransactionFields on Transaction {
  id
  transactionId
  paymentId
  orderId
  amount
  currency
  description
  timestamp
  type
  provider
  status
}`;

export const UsersResponseFields = `fragment UsersResponseFields on UsersResponse {
  items {
    ... on Contact { ...ContactFields }
    ... on Customer { ...CustomerFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ValuesetFields = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ... LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ... ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;

export const ValuesetItemFields = `fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ... LocalizedStringFields
  }
  extra
}`;

export const ValuesetItemResponseFields = `fragment ValuesetItemResponseFields on ValuesetItemResponse {
  items {
    ValuesetItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ValuesetResponseFields = `fragment ValuesetResponseFields on ValuesetResponse {
  items {
    ... ValuesetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const VerifyTokenFields = `fragment VerifyTokenFields on VerifyToken {
  uid
  name
  claims
  iss
  aud
  auth_time
  user_id
  sub
  iat
  exp
  email
  email_verified
  firebase {
    identities
    sign_in_provider
    sign_in_second_factor
    second_factor_identifier
    tenant
  }
}`;

export const WarehouseAddressFields = `fragment WarehouseAddressFields on WarehouseAddress {
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
}`;

export const WarehouseFields = `fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ... WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  shopId
  businessHours {
    ... BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}`;

export const WarehousesResponseFields = `fragment WarehousesResponseFields on WarehousesResponse {
  items {
    ... WarehouseFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;

export const ZoneTaxCodeFields = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}`;

export const ZoneTaxCodeResponseFields = `fragment ZoneTaxCodeResponseFields on ZoneTaxCodeResponse {
  items {
    ... ZoneTaxCodeFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;


export const fragments = {
  AddressFields,
  AttributeColorValueFields,
  AttributeDateTimeValueFields,
  AttributeDecimalRangeFilterFields,
  AttributeDecimalValueFields,
  AttributeDescriptionFields,
  AttributeDescriptionResponseFields,
  AttributeEnumValueFields,
  AttributeFields,
  AttributeFilterFields,
  AttributeIntegerRangeFilterFields,
  AttributeIntValueFields,
  AttributeResponseFields,
  AttributeResultFields,
  AttributeResultResponseFields,
  AttributeTextFilterFields,
  AttributeTextValueFields,
  Base64FileFields,
  BulkCostPriceFields,
  BulkCostPriceResponseFields,
  BulkPriceFields,
  BulkPriceResponseFields,
  BundleFields,
  BundleItemFields,
  BundlePriceFields,
  BundlesResponseFields,
  BusinessHoursFields,
  CarrierFields,
  CarriersResponseFields,
  CartAddressFields,
  CartBaseItemFields,
  CartCarrierFields,
  CartFields,
  CartIncentiveFields,
  CartItemSurchargeFields,
  CartMainItemFields,
  CartPaymentDataFields,
  CartPaymethodFields,
  CartPostageDataFields,
  CartProcessResponseFields,
  CartResponseFields,
  CartShippingMethodFields,
  CartTaxLevelFields,
  CartTotalFields,
  CartUnOrderableItemFields,
  CartVoucherFields,
  CategoryAttributeFields,
  CategoryFields,
  CategoryMinimalFields,
  CategoryResponseFields,
  ClusterAttributeFields,
  ClusterConfigFields,
  ClusterConfigResponseFields,
  ClusterConfigSettingFields,
  ClusterFields,
  ClusterGridFields,
  ClusterOptionFields,
  CompaniesResponseFields,
  CompanyAddressSearchFields,
  CompanyAttributeDescriptionSearchFields,
  CompanyAttributeFields,
  CompanyAttributeSearchFields,
  CompanyAttributeValueSearchFields,
  CompanyContactSearchFields,
  CompanyDataFields,
  CompanyFields,
  CompanyListFields,
  ContactAttributeFields,
  ContactFields,
  ContactListFields,
  ContactsResponseFields,
  ContactViewerFields,
  CostPriceFields,
  CostPriceResponseFields,
  CrossupsellFields,
  CrossupsellsResponseFields,
  CustomerAttributeFields,
  CustomerFields,
  CustomerListFields,
  CustomersResponseFields,
  CustomerViewerFields,
  DiscountFields,
  DocumentTemplateFields,
  ExternalAddressFields,
  FavoriteListFields,
  FavoriteListOnlyFields,
  FavoriteListsResponseFields,
  GCIPProviderDataFields,
  GCIPUserFields,
  IBaseProductCartFields,
  IBaseProductFields,
  IBaseTemplateFields,
  ImageVariantFields,
  InventoryDeleteResponseFields,
  InventoryFields,
  InventoryResponseFields,
  LocalizedAttachmentFields,
  LocalizedDocumentFields,
  LocalizedImageFields,
  LocalizedStringArrayFields,
  LocalizedStringFields,
  LocalizedTemplateContentFields,
  LocalizedVideoFields,
  LoginFields,
  LogoutFields,
  MagicTokenFields,
  MagicTokenResponseFields,
  MediaAttachmentFields,
  MediaDocumentFields,
  MediaFields,
  MediaImageFields,
  MediaVideoFields,
  OrderAddressFields,
  OrderDataFields,
  OrderFields,
  OrderItemFields,
  OrderlistFields,
  OrderlistsResponseFields,
  OrderMediaFields,
  OrderPaymentDataFields,
  OrderPostageDataFields,
  OrderResponseFields,
  OrderTotalsFields,
  OrderTotalTaxPercentageFields,
  PaginatedMediaAttachmentResponseFields,
  PaginatedMediaDocumentResponseFields,
  PaginatedMediaImageResponseFields,
  PaginatedMediaVideoResponseFields,
  PaymentFields,
  PaymentsResponseFields,
  PayMethodFields,
  PayMethodsResponseFields,
  PriceFields,
  PriceResponseFields,
  PricesheetFields,
  PricesheetResponseFields,
  ProductAttributeFields,
  ProductCartFields,
  ProductFields,
  ProductGridFields,
  ProductInventoryFields,
  ProductMediaFields,
  ProductMediaImagesOnlyFields,
  ProductOfferFields,
  ProductPriceFields,
  ProductsResponseFields,
  PurchaseAuthorizationConfigFields,
  PurchaseAuthorizationConfigResponseFields,
  RefreshTokenResponseFields,
  RegisterContactResponseFields,
  RegisterCustomerResponseFields,
  SendOrderConfirmResponseTypeFields,
  ShipmentFields,
  ShipmentItemFields,
  ShipmentItemResponseFields,
  ShipmentResponseFields,
  SourceFields,
  SparePartFields,
  SparePartsMachineFields,
  SparePartsMachineMediaFields,
  SparePartsMachineMediaImagesOnlyFields,
  SparePartsMachineResponseFields,
  SparePartsResponseFields,
  SurchargeFields,
  SurchargeProductFields,
  SurchargeProductResponseFields,
  SurchargesResponseFields,
  TaxesResponseFields,
  TaxFields,
  TrackAndTraceFields,
  TrackAndTraceResponseFields,
  TransactionFields,
  UsersResponseFields,
  ValuesetFields,
  ValuesetItemFields,
  ValuesetItemResponseFields,
  ValuesetResponseFields,
  VerifyTokenFields,
  WarehouseAddressFields,
  WarehouseFields,
  WarehousesResponseFields,
  ZoneTaxCodeFields,
  ZoneTaxCodeResponseFields
};

export default fragments;

