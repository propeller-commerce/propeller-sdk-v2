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

export const attributeCreate = `fragment AttributeFields on Attribute {
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

mutation attributeCreate(\$input: AttributeCreateInput!) {
  attributeCreate(input: \$input) {
    ...AttributeFields
  }
}`;

export const attributeCsvImport = `mutation attributeCsvImport(\$input: AttributeCsvInput!) {
  attributeCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const attributeDelete = `mutation attributeDelete(\$id: String!) {
  attributeDelete(id: \$id)
}
`;

export const attributeDescriptionCreate = `fragment AttributeDescriptionFields on AttributeDescription {
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

mutation attributeDescriptionCreate(\$input: AttributeDescriptionCreateInput!) {
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

export const attributeDescriptionDeleteBulk = `fragment BulkDeleteResponseFields on BulkDeleteResponse {
  deletedIds
  failedIds
}

mutation attributeDescriptionDeleteBulk(\$ids: [String!]!) {
  attributeDescriptionDeleteBulk(ids: \$ids) {
    ...BulkDeleteResponseFields
  }
}`;

export const attributeDescriptionUpdate = `fragment AttributeDescriptionFields on AttributeDescription {
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

mutation attributeDescriptionUpdate(\$id: String!, \$input: AttributeDescriptionUpdateInput!) {
  attributeDescriptionUpdate(id: \$id, input: \$input) {
    ...AttributeDescriptionFields
  }
}`;

export const attributeUpdate = `fragment AttributeFields on Attribute {
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

mutation attributeUpdate(\$id: String!, \$input: AttributeUpdateInput!) {
  attributeUpdate(id: \$id, input: \$input) {
    ...AttributeFields
  }
}`;

export const authenticationCreate = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ...GCIPUserFields
  }
}

fragment GCIPUserFields on GCIPUser {
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
}

mutation authenticationCreate(\$input: CreateAuthenticationInput!) {
  authenticationCreate(input: \$input) {
    ...LoginFields
  }
}`;

export const authenticationDelete = `mutation authenticationDelete(\$uid: String!) {
  authenticationDelete(uid: \$uid)
}
`;

export const bulkCostPriceCreate = `fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkCostPriceCreate(\$input: BulkCostPriceCreateInput!) {
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

export const bulkCostPriceUpdate = `fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkCostPriceUpdate(\$id: String!, \$input: BulkCostPriceUpdateInput!) {
  bulkCostPriceUpdate(id: \$id, input: \$input) {
    ...BulkCostPriceFields
  }
}`;

export const bulkPriceCreate = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkPriceCreate(\$input: BulkPriceCreateInput!) {
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

export const bulkPriceUpdate = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkPriceUpdate(\$id: String!, \$input: BulkPriceUpdateInput!) {
  bulkPriceUpdate(id: \$id, input: \$input) {
    ...BulkPriceFields
  }
}`;

export const bundleAddItems = `fragment BundleItemFields on BundleItem {
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

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation bundleAddItems(\$id: String!, \$input: BundleAddItemsInput!) {
  bundleAddItems(id: \$id, input: \$input) {
    ...BundleItemFields
  }
}`;

export const bundleAddItemsAndReturnBundle = `fragment BundleFields on Bundle {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation bundleAddItemsAndReturnBundle(\$id: String!, \$input: BundleAddItemsInput!) {
  bundleAddItemsAndReturnBundle(id: \$id, input: \$input) {
    ...BundleFields
  }
}`;

export const bundleCreate = `fragment BundleFields on Bundle {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation bundleCreate(\$input: BundleCreateInput!) {
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

export const bundleRemoveItemAndReturnBundle = `fragment BundleFields on Bundle {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation bundleRemoveItemAndReturnBundle(\$id: String!, \$productId: Int!, \$taxZone: String) {
  bundleRemoveItemAndReturnBundle(
    id: \$id
    productId: \$productId
    taxZone: \$taxZone
  ) {
    ...BundleFields
  }
}`;

export const bundleUpdate = `fragment BundleFields on Bundle {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation bundleUpdate(\$id: String!, \$input: BundleUpdateInput!) {
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

export const carrierAssignWarehouseAndReturnCarrier = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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
  shopId
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

mutation carrierAssignWarehouseAndReturnCarrier(\$id: Int!, \$warehouseId: Int!) {
  carrierAssignWarehouseAndReturnCarrier(id: \$id, warehouseId: \$warehouseId) {
    ...CarrierFields
  }
}`;

export const carrierCreate = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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
  shopId
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

mutation carrierCreate(\$input: CarrierCreateInput!) {
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

export const carrierUnassignWarehouseAndReturnCarrier = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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
  shopId
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

mutation carrierUnassignWarehouseAndReturnCarrier(\$id: Int!, \$warehouseId: Int!) {
  carrierUnassignWarehouseAndReturnCarrier(id: \$id, warehouseId: \$warehouseId) {
    ...CarrierFields
  }
}`;

export const carrierUpdate = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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
  shopId
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

mutation carrierUpdate(\$id: Int!, \$input: CarrierUpdateInput!) {
  carrierUpdate(id: \$id, input: \$input) {
    ...CarrierFields
  }
}`;

export const cartAcceptPurchaseAuthorizationRequest = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartAcceptPurchaseAuthorizationRequest(\$id: String!, \$input: CartAcceptPurchaseAuthorizationRequestInput, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartAcceptPurchaseAuthorizationRequest(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddActionCode = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartAddActionCode(\$id: String!, \$input: CartActionCodeInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartAddActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddBundle = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartAddBundle(\$id: String!, \$input: CartAddBundleInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartAddBundle(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartAddItem = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartAddItem(\$id: String!, \$input: CartAddItemInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartAddItem(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartDelete = `mutation cartDelete(\$id: String!) {
  cartDelete(id: \$id)
}`;

export const cartDeleteItem = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartDeleteItem(\$id: String!, \$input: CartDeleteItemInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
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

export const cartRemoveActionCode = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartRemoveActionCode(\$id: String!, \$input: CartActionCodeInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartRemoveActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartRequestPurchaseAuthorization = `mutation cartRequestPurchaseAuthorization(\$id: String!) {
  cartRequestPurchaseAuthorization(id: \$id) {
    cartId
  }
}`;

export const cartSetContact = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartSetContact(\$id: String!, \$input: CartSetContactInput!) {
  cartSetContact(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartSetCustomer = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartSetCustomer(\$id: String!, \$input: CartSetCustomerInput!) {
  cartSetCustomer(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartSetUser = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartSetUser(\$id: String!, \$input: CartSetUserInput!) {
  cartSetUser(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartStart = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartStart(\$input: CartStartInput, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartStart(input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdate = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartUpdate(\$id: String!, \$input: CartUpdateInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartUpdate(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdateAddress = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartUpdateAddress(\$id: String!, \$input: CartUpdateAddressInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartUpdateAddress(id: \$id, input: \$input) {
    ...CartFields
  }
}`;

export const cartUpdateItem = `fragment CartFields on Cart {
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
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
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
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
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
    ...CartItemSurchargeFields
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
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
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
}

fragment CartBaseItemFields on CartBaseItem {
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
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
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

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

mutation cartUpdateItem(\$id: String!, \$itemId: String!, \$input: CartUpdateItemInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cartUpdateItem(id: \$id, itemId: \$itemId, input: \$input) {
    ...CartFields
  }
}`;

export const categoryAddProductsClusters = `mutation categoryAddProductsClusters(\$id: Int!, \$input: CategoryAddProductsClustersInput!) {
  categoryAddProductsClusters(id: \$id, input: \$input) {
    ...CategoryAddProductsClustersResponseFields
  }
}`;

export const categoryCreate = `fragment CategoryFields on Category {
  categoryId
  urlId: categoryId
  ...CategoryMinimalFields
  attributes {
    ...AttributeResultCategoryResponseFields
  }
  path
  parent {
    ...CategoryMinimalFields
  }
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataKeywords {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
  hidden
  categoryPath {
    ...CategoryMinimalFields
  }
  products(input: \$categoryProductSearchInput) {
    ...ProductsResponseFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultCategoryResponseFields on AttributeResultResponse {
  items {
    ...AttributeCategoryResultFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeCategoryResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute {
      ...CategoryAttributeFields
    }
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
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
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

fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters(input: \$filterAvailableAttributeInput) {
    ...AttributeFilterFields
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment AttributeFilterFields on AttributeFilter {
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
}

mutation categoryCreate(\$input: CreateCategoryInput!) {
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

export const categoryUpdate = `fragment CategoryFields on Category {
  categoryId
  urlId: categoryId
  ...CategoryMinimalFields
  attributes {
    ...AttributeResultCategoryResponseFields
  }
  path
  parent {
    ...CategoryMinimalFields
  }
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataKeywords {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
  hidden
  categoryPath {
    ...CategoryMinimalFields
  }
  products(input: \$categoryProductSearchInput) {
    ...ProductsResponseFields
  }
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultCategoryResponseFields on AttributeResultResponse {
  items {
    ...AttributeCategoryResultFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeCategoryResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute {
      ...CategoryAttributeFields
    }
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
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
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

fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters(input: \$filterAvailableAttributeInput) {
    ...AttributeFilterFields
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment AttributeFilterFields on AttributeFilter {
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
}

mutation categoryUpdate(\$categoryId: Float!, \$input: UpdateCategoryInput!) {
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

export const clusterBulkMove = `fragment ClusterBulkMoveResponseFields on ClusterBulkMoveResponse {
  movedCount
  errors {
    ...ClusterBulkMoveErrorFields
  }
}

fragment ClusterBulkMoveErrorFields on ClusterBulkMoveError {
  code
  messages
  record
  rowNumber
}

mutation clusterBulkMove(\$input: ClusterBulkMoveInput!) {
  clusterBulkMove(input: \$input) {
    ...ClusterBulkMoveResponseFields
  }
}`;

export const clusterConfigAddSetting = `mutation clusterConfigAddSetting(\$clusterConfigId: Int!, \$input: ClusterConfigSettingInput!) {
  clusterConfigAddSetting(clusterConfigId: \$clusterConfigId, input: \$input) {
    ...ClusterConfigSettingResponseFields
  }
}`;

export const clusterConfigCreate = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  ...ClusterConfigFields
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

mutation clusterConfigCreate(\$input: ClusterConfigCreateInput!) {
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

export const clusterCreate = `fragment ClusterFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  attributes {
    ...AttributeResultProductResponseFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  products {
    ...ProductFields
  }
  createdAt
  lastModifiedAt
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductFields
  }
  config {
    ...ClusterConfigFields
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

mutation clusterCreate(\$input: ClusterCreateInput!) {
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

export const clusterOptionCreate = `fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

mutation clusterOptionCreate(\$clusterId: Int!, \$input: ClusterOptionCreateInput!) {
  clusterOptionCreate(clusterId: \$clusterId, input: \$input) {
    ...ClusterOptionFields
  }
}`;

export const clusterOptionDelete = `mutation clusterOptionDelete(\$clusterId: Int!, \$optionId: Int!) {
  clusterOptionDelete(clusterId: \$clusterId, optionId: \$optionId)
}
`;

export const clusterOptionUpdate = `fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

mutation clusterOptionUpdate(\$clusterId: Int!, \$optionId: Int!, \$input: ClusterOptionUpdateInput!) {
  clusterOptionUpdate(clusterId: \$clusterId, optionId: \$optionId, input: \$input) {
    ...ClusterOptionFields
  }
}`;

export const clusterProductCreate = `fragment ProductFields on Product {
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

mutation clusterProductCreate(\$id: Int!, \$input: CreateProductInput!) {
  clusterProductCreate(id: \$id, input: \$input) {
    ...ProductFields
  }
}`;

export const clusterProductDelete = `mutation clusterProductDelete(\$id: Int!, \$productId: Int!) {
  clusterProductDelete(id: \$id, productId: \$productId)
}
`;

export const clusterProductUpdate = `fragment ProductFields on Product {
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

mutation clusterProductUpdate(\$id: Int!, \$productId: Int!, \$input: UpdateProductInput!) {
  clusterProductUpdate(id: \$id, productId: \$productId, input: \$input) {
    ...ProductFields
  }
}`;

export const clusterUnassignProducts = `mutation clusterUnassignProducts(\$clusterId: Int!, \$input: ClusterUnassignProductsInput!) {
  clusterUnassignProducts(clusterId: \$clusterId, input: \$input) {
    ...ClusterUnassignProductsResponseFields
  }
}`;

export const clusterUpdate = `fragment ClusterFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  attributes {
    ...AttributeResultProductResponseFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  products {
    ...ProductFields
  }
  createdAt
  lastModifiedAt
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductFields
  }
  config {
    ...ClusterConfigFields
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

mutation clusterUpdate(\$id: Int!, \$input: ClusterUpdateInput!) {
  clusterUpdate(id: \$id, input: \$input) {
    ...ClusterFields
  }
}`;

export const companyAddressCreate = `fragment AddressFields on Address {
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

mutation companyAddressCreate(\$input: CompanyAddressCreateInput!) {
  companyAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;

export const companyAddressDelete = `mutation companyAddressDelete(\$input: CompanyAddressDeleteInput!) {
  companyAddressDelete(input: \$input)
}`;

export const companyAddressUpdate = `fragment AddressFields on Address {
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

mutation companyAddressUpdate(\$input: CompanyAddressUpdateInput!) {
  companyAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;

export const companyCreate = `fragment CompanyFields on Company {
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

mutation companyCreate(\$input: CreateCompanyInput!, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$contactSearchArguments: ContactSearchArguments) {
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

export const companyUpdate = `fragment CompanyFields on Company {
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

mutation companyUpdate(\$id: Int!, \$input: UpdateCompanyInput!, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$contactSearchArguments: ContactSearchArguments) {
  companyUpdate(id: \$id, input: \$input) {
    ...CompanyFields
  }
}`;

export const contactAddToCompanies = `mutation contactAddToCompanies(\$id: Int!, \$input: ContactAddToCompaniesInput!) {
  contactAddToCompanies(id: \$id, input: \$input) {
    ...ContactAddToCompaniesResponseFields
  }
}`;

export const contactCreate = `fragment ContactFields on Contact {
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

mutation contactCreate(\$input: CreateContactInput!) {
  contactCreate(input: \$input) {
    ...ContactFields
  }
}`;

export const contactCreateAccount = `fragment RegisterContactResponseFields on RegisterContactResponse {
  contact {
    ... on Contact {
      ...ContactFields
    }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
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

mutation contactCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
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

export const contactRegister = `fragment RegisterContactResponseFields on RegisterContactResponse {
  contact {
    ... on Contact {
      ...ContactFields
    }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
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

mutation contactRegister(\$contactAttributesInput: AttributeResultSearchInput, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$contactRegisterInput: RegisterContactInput!, \$contactCompaniesSearchInput: ContactCompaniesSearchInput) {
  contactRegister(input: \$contactRegisterInput) {
    ...RegisterContactResponseFields
  }
}`;

export const contactRemoveFromCompanies = `mutation contactRemoveFromCompanies(\$id: Int!, \$input: ContactRemoveFromCompaniesInput!) {
  contactRemoveFromCompanies(id: \$id, input: \$input) {
    ...ContactRemoveFromCompaniesResponseFields
  }
}`;

export const contactUpdate = `fragment ContactFields on Contact {
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

mutation contactUpdate(\$id: Int!, \$input: UpdateContactInput!) {
  contactUpdate(id: \$id, input: \$input) {
    ...ContactFields
  }
}`;

export const costPriceCreate = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}

mutation costPriceCreate(\$input: CostPriceCreateInput!) {
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

export const costPriceUpdate = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}

mutation costPriceUpdate(\$id: String!, \$input: CostPriceUpdateInput!) {
  costPriceUpdate(id: \$id, input: \$input) {
    ...CostPriceFields
  }
}`;

export const crossupsellCreate = `fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  productFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

mutation crossupsellCreate(\$input: CrossupsellCreateInput!) {
  crossupsellCreate(input: \$input) {
    ...CrossupsellFields
  }
}`;

export const crossupsellDelete = `mutation crossupsellDelete(\$id: String!) {
  crossupsellDelete(id: \$id)
}
`;

export const crossupsellUpdate = `fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  productFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

mutation crossupsellUpdate(\$id: String!, \$input: CrossupsellUpdateInput!) {
  crossupsellUpdate(id: \$id, input: \$input) {
    ...CrossupsellFields
  }
}`;

export const customerAddressCreate = `fragment AddressFields on Address {
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

mutation customerAddressCreate(\$input: CustomerAddressCreateInput!) {
  customerAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;

export const customerAddressDelete = `mutation customerAddressDelete(\$input: CustomerAddressDeleteInput!) {
  customerAddressDelete(input: \$input)
}`;

export const customerAddressUpdate = `fragment AddressFields on Address {
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

mutation customerAddressUpdate(\$input: CustomerAddressUpdateInput!) {
  customerAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;

export const customerCreate = `fragment CustomerFields on Customer {
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

mutation customerCreate(\$input: CustomerInput!) {
  customerCreate(input: \$input) {
    ...CustomerFields
  }
}`;

export const customerCreateAccount = `fragment RegisterCustomerResponseFields on RegisterCustomerResponse {
  customer {
    ... on Customer {
      ...CustomerFields
    }
  }
  session {
    accessToken
    refreshToken
    expirationTime
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

mutation customerCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
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

export const customerRegister = `fragment RegisterCustomerResponseFields on RegisterCustomerResponse {
  customer {
    ... on Customer {
      ...CustomerFields
    }
  }
  session {
    accessToken
    refreshToken
    expirationTime
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

mutation customerRegister(\$customerAttributesInput: AttributeResultSearchInput, \$customerRegisterInput: RegisterCustomerInput!) {
  customerRegister(input: \$customerRegisterInput) {
    ...RegisterCustomerResponseFields
  }
}`;

export const customerUpdate = `fragment CustomerFields on Customer {
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

mutation customerUpdate(\$id: Int!, \$input: UpdateCustomerInput!) {
  customerUpdate(id: \$id, input: \$input) {
    ...CustomerFields
  }
}`;

export const discountCreate = `fragment DiscountFields on Discount {
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

mutation discountCreate(\$input: DiscountCreateInput!) {
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

export const discountUpdate = `fragment DiscountFields on Discount {
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

mutation discountUpdate(\$id: String!, \$input: DiscountUpdateInput!) {
  discountUpdate(id: \$id, input: \$input) {
    ...DiscountFields
  }
}`;

export const documentTemplateCreate = `fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames {
    ...LocalizedStringFields
  }
  isDefaultOrderPdf
  isDefaultQuotePdf
}

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation documentTemplateCreate(\$input: DocumentTemplateCreateInput!) {
  documentTemplateCreate(input: \$input) {
    ...DocumentTemplateFields
  }
}`;

export const documentTemplateRenderToPDF = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}

mutation documentTemplateRenderToPDF(\$id: String!, \$input: TemplateRenderInput!) {
  documentTemplateRenderToPDF(id: \$id, input: \$input) {
    ...Base64FileFields
  }
}`;

export const documentTemplateUpdate = `fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames {
    ...LocalizedStringFields
  }
  isDefaultOrderPdf
  isDefaultQuotePdf
}

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation documentTemplateUpdate(\$id: String!, \$input: DocumentTemplateUpdateInput!) {
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

export const exchangeRefreshToken = `fragment RefreshTokenResponseFields on RefreshTokenResponse {
  access_token
  refresh_token
  expires_in
  token_type
  user_id
}

mutation exchangeRefreshToken(\$input: ExchangeRefreshTokenInput!) {
  exchangeRefreshToken(input: \$input) {
    ...RefreshTokenResponseFields
  }
}`;

export const favoriteListAddItems = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListAddItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListAddItems(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;

export const favoriteListClearItems = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListClearItems(\$id: String!, \$products: Boolean, \$clusters: Boolean) {
  favoriteListClearItems(id: \$id, products: \$products, clusters: \$clusters) {
    ...FavoriteListOnlyFields
  }
}`;

export const favoriteListCreate = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListCreate(\$input: FavoriteListsCreateInput!) {
  favoriteListCreate(input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;

export const favoriteListDelete = `mutation favoriteListDelete(\$id: String!) {
  favoriteListDelete(id: \$id)
}`;

export const favoriteListRemoveItems = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListRemoveItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListRemoveItems(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;

export const favoriteListUpdate = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListUpdate(\$id: String!, \$input: FavoriteListsUpdateInput!) {
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

export const inventoryCreate = `fragment InventoryResponseFields on InventoryResponse {
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
    ...WarehouseFields
  }
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
  shopId
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

mutation inventoryCreate(\$input: CreateInventoryInput!) {
  inventoryCreate(input: \$input) {
    ...InventoryResponseFields
  }
}`;

export const inventoryCsvImport = `mutation inventoryCsvImport(\$input: InventoryCsvInput!) {
  inventoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;

export const inventoryDelete = `fragment InventoryDeleteResponseFields on InventoryDeleteResponse {
  messages
}

mutation inventoryDelete(\$id: Int!) {
  inventoryDelete(id: \$id) {
    ...InventoryDeleteResponseFields
  }
}`;

export const inventoryUpdate = `fragment InventoryResponseFields on InventoryResponse {
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
    ...WarehouseFields
  }
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
  shopId
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

mutation inventoryUpdate(\$id: Int!, \$input: UpdateInventoryInput!) {
  inventoryUpdate(id: \$id, input: \$input) {
    ...InventoryResponseFields
  }
}`;

export const login = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ...GCIPUserFields
  }
}

fragment GCIPUserFields on GCIPUser {
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
}

mutation login(\$input: LoginInput!) {
  login(input: \$input) {
    ...LoginFields
  }
}`;

export const logout = `fragment LogoutFields on Logout {
  todo
}

mutation logout {
  logout {
    ...LogoutFields
  }
}`;

export const machineCreate = `fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ...SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ...SparePartFields
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
      ...AttributeFilterFields
    }
  }
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  slug {
    ...LocalizedStringFields
  }
  machines {
    id
    media {
      ...SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ...SparePartFields
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
        ...AttributeFilterFields
      }
    }
    name {
      ...LocalizedStringFields
    }
    description {
      ...LocalizedStringFields
    }
    slug {
      ...LocalizedStringFields
    }
  }
}

fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ...LocalizedStringFields
  }
  product {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment AttributeFilterFields on AttributeFilter {
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
}

mutation machineCreate(\$input: CreateSparePartsMachineInput!) {
  machineCreate(input: \$input) {
    ...SparePartsMachineFields
  }
}`;

export const machineDelete = `mutation machineDelete(\$id: String!) {
  machineDelete(id: \$id)
}
`;

export const machineUpsert = `fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ...SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ...SparePartFields
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
      ...AttributeFilterFields
    }
  }
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  slug {
    ...LocalizedStringFields
  }
  machines {
    id
    media {
      ...SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ...SparePartFields
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
        ...AttributeFilterFields
      }
    }
    name {
      ...LocalizedStringFields
    }
    description {
      ...LocalizedStringFields
    }
    slug {
      ...LocalizedStringFields
    }
  }
}

fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ...LocalizedStringFields
  }
  product {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
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

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
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

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
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

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
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
}

fragment AttributeFilterFields on AttributeFilter {
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
}

mutation machineUpsert(\$input: UpsertSparePartsMachineInput!) {
  machineUpsert(input: \$input) {
    ...SparePartsMachineFields
  }
}`;

export const magicTokenCreate = `fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}

mutation magicTokenCreate(\$input: MagicTokenCreateInput!) {
  magicTokenCreate(input: \$input) {
    ...MagicTokenFields
  }
}`;

export const magicTokenDelete = `mutation magicTokenDelete(\$id: String!) {
  magicTokenDelete(id: \$id)
}
`;

export const magicTokenLogin = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ...GCIPUserFields
  }
}

fragment GCIPUserFields on GCIPUser {
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
}

mutation magicTokenLogin(\$id: String!) {
  magicTokenLogin(id: \$id) {
    ...LoginFields
  }
}`;

export const magicTokenUpdate = `fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}

mutation magicTokenUpdate(\$id: String!, \$input: MagicTokenUpdateInput!) {
  magicTokenUpdate(id: \$id, input: \$input) {
    ...MagicTokenFields
  }
}`;

export const mediaAttachmentCreate = `fragment MediaAttachmentFields on MediaAttachment {
  id
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
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaAttachmentCreate(\$input: MediaAttachmentInput!) {
  mediaAttachmentCreate(input: \$input) {
    ...MediaAttachmentFields
  }
}`;

export const mediaAttachmentDelete = `mutation mediaAttachmentDelete(\$id: String!) {
  mediaAttachmentDelete(id: \$id) {
    ...DeleteMediaAttachmentResponseFields
  }
}`;

export const mediaAttachmentUpdate = `fragment MediaAttachmentFields on MediaAttachment {
  id
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
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaAttachmentUpdate(\$id: String!, \$input: UpdateMediaAttachmentInput!) {
  mediaAttachmentUpdate(id: \$id, input: \$input) {
    ...MediaAttachmentFields
  }
}`;

export const mediaDocumentCreate = `fragment MediaDocumentFields on MediaDocument {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaDocumentCreate(\$input: MediaDocumentInput!) {
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

export const mediaDocumentUpdate = `fragment MediaDocumentFields on MediaDocument {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaDocumentUpdate(\$input: UpdateMediaDocumentInput!) {
  mediaDocumentUpdate(input: \$input) {
    ...MediaDocumentFields
  }
}`;

export const mediaImageCreate = `fragment MediaImageFields on MediaImage {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaImageCreate(\$input: MediaImageInput!) {
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

export const mediaImageUpdate = `fragment MediaImageFields on MediaImage {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaImageUpdate(\$input: UpdateMediaImageInput!) {
  mediaImageUpdate(input: \$input) {
    ...MediaImageFields
  }
}`;

export const mediaVideoCreate = `fragment MediaVideoFields on MediaVideo {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaVideoCreate(\$input: MediaVideoInput!) {
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

export const mediaVideoUpdate = `fragment MediaVideoFields on MediaVideo {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaVideoUpdate(\$input: UpdateMediaVideoInput!) {
  mediaVideoUpdate(input: \$input) {
    ...MediaVideoFields
  }
}`;

export const orderAddressUpdate = `fragment OrderAddressFields on OrderAddress {
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
}

mutation orderAddressUpdate(\$id: Int!, \$orderId: Int!, \$input: OrderAddressUpdateInput!) {
  orderAddressUpdate(id: \$id, orderId: \$orderId, input: \$input) {
    ...OrderAddressFields
  }
}`;

export const orderCreate = `fragment OrderFields on Order {
  id
  media {
    ...OrderMediaFields
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
    ...OrderPostageDataFields
  }
  paymentData {
    ...OrderPaymentDataFields
  }
  total {
    ...OrderTotalsFields
  }
  items {
    ...OrderItemFields
  }
  shipments {
    ...ShipmentFields
  }
  addresses {
    ...AddressFields
  }
  sources {
    ...SourceFields
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
    ...OrderAddressFields
  }
}

fragment OrderMediaFields on OrderMedia {
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
}

fragment OrderPostageDataFields on OrderPostageData {
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
    ...WarehouseFields
  }
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
  shopId
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

fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}

fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}

fragment OrderItemFields on OrderItem {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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

fragment SourceFields on Source {
  id
  name
}

fragment OrderAddressFields on OrderAddress {
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
}

mutation orderCreate(\$order: OrderCreateInput!) {
  orderCreate(order: \$order) {
    ...OrderFields
  }
}`;

export const orderDelete = `mutation orderDelete(\$orderId: Int!) {
  orderDelete(orderId: \$orderId)
}
`;

export const orderItemCreate = `fragment OrderItemFields on OrderItem {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation orderItemCreate(\$orderId: Int!, \$orderItem: OrderItemCreateInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  orderItemCreate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;

export const orderItemDelete = `mutation orderItemDelete(\$orderId: Int!, \$orderItemId: Int!) {
  orderItemDelete(orderId: \$orderId, orderItemId: \$orderItemId)
}
`;

export const orderItemUpdate = `fragment OrderItemFields on OrderItem {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation orderItemUpdate(\$orderId: Int!, \$orderItem: OrderItemUpdateInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  orderItemUpdate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;

export const orderlistAddItems = `fragment OrderlistFields on Orderlist {
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

mutation orderlistAddItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistAddItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistAssignCompanies = `fragment OrderlistFields on Orderlist {
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

mutation orderlistAssignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistAssignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistAssignUsers = `fragment OrderlistFields on Orderlist {
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

mutation orderlistAssignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistAssignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistCreate = `fragment OrderlistFields on Orderlist {
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

mutation orderlistCreate(\$input: OrderlistCreateInput!) {
  orderlistCreate(input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistDelete = `mutation orderlistDelete(\$id: Int!) {
  orderlistDelete(id: \$id)
}
`;

export const orderlistRemoveItems = `fragment OrderlistFields on Orderlist {
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

mutation orderlistRemoveItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistRemoveItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUnassignCompanies = `fragment OrderlistFields on Orderlist {
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

mutation orderlistUnassignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistUnassignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUnassignUsers = `fragment OrderlistFields on Orderlist {
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

mutation orderlistUnassignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistUnassignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderlistUpdate = `fragment OrderlistFields on Orderlist {
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

mutation orderlistUpdate(\$id: Int!, \$input: OrderlistUpdateInput!) {
  orderlistUpdate(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;

export const orderRevisionRestore = `fragment OrderFields on Order {
  id
  media {
    ...OrderMediaFields
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
    ...OrderPostageDataFields
  }
  paymentData {
    ...OrderPaymentDataFields
  }
  total {
    ...OrderTotalsFields
  }
  items {
    ...OrderItemFields
  }
  shipments {
    ...ShipmentFields
  }
  addresses {
    ...AddressFields
  }
  sources {
    ...SourceFields
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
    ...OrderAddressFields
  }
}

fragment OrderMediaFields on OrderMedia {
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
}

fragment OrderPostageDataFields on OrderPostageData {
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
    ...WarehouseFields
  }
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
  shopId
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

fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}

fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}

fragment OrderItemFields on OrderItem {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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

fragment SourceFields on Source {
  id
  name
}

fragment OrderAddressFields on OrderAddress {
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
}

mutation orderRevisionRestore(\$orderId: Int!, \$revisionNumber: Int!) {
  orderRevisionRestore(orderId: \$orderId, revisionNumber: \$revisionNumber) {
    ...OrderFields
  }
}`;

export const orderRevisionsInvalidate = `mutation orderRevisionsInvalidate(\$input: OrderRevisionsInvalidateInput!) {
  orderRevisionsInvalidate(input: \$input)
}
`;

export const orderSendConfirmationEmail = `fragment SendOrderConfirmResponseTypeFields on SendOrderConfirmResponseType {
  messageId
  success
}

mutation orderSendConfirmationEmail(\$orderId: Int!, \$attachments: [Base64FileInput!]) {
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

export const orderUpdate = `fragment OrderFields on Order {
  id
  media {
    ...OrderMediaFields
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
    ...OrderPostageDataFields
  }
  paymentData {
    ...OrderPaymentDataFields
  }
  total {
    ...OrderTotalsFields
  }
  items {
    ...OrderItemFields
  }
  shipments {
    ...ShipmentFields
  }
  addresses {
    ...AddressFields
  }
  sources {
    ...SourceFields
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
    ...OrderAddressFields
  }
}

fragment OrderMediaFields on OrderMedia {
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
}

fragment OrderPostageDataFields on OrderPostageData {
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
    ...WarehouseFields
  }
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
  shopId
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

fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}

fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}

fragment OrderItemFields on OrderItem {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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

fragment SourceFields on Source {
  id
  name
}

fragment OrderAddressFields on OrderAddress {
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
}

mutation orderUpdate(\$orderId: Int!, \$order: OrderUpdateInput!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
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

export const paymentCreate = `fragment PaymentFields on Payment {
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
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
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
}

mutation paymentCreate(\$input: CreatePaymentInput!) {
  paymentCreate(input: \$input) {
    ...PaymentFields
  }
}`;

export const paymentDelete = `fragment PaymentFields on Payment {
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
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
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
}

mutation paymentDelete(\$searchBy: SearchByInput!) {
  paymentDelete(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;

export const paymentUpdate = `fragment PaymentFields on Payment {
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
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
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
}

mutation paymentUpdate(\$searchBy: SearchByInput!, \$input: UpdatePaymentInput!) {
  paymentUpdate(searchBy: \$searchBy, input: \$input) {
    ...PaymentFields
  }
}`;

export const payMethodCreate = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation payMethodCreate(\$input: PayMethodCreateInput!) {
  payMethodCreate(input: \$input) {
    ...PayMethodFields
  }
}`;

export const payMethodDelete = `mutation payMethodDelete(\$id: Int!) {
  payMethodDelete(id: \$id)
}
`;

export const payMethodUpdate = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation payMethodUpdate(\$id: Int!, \$input: PayMethodUpdateInput!) {
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

export const pricesheetAssign = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contacts {
    ...ContactFields
  }
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ...CustomerFields
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ...CompanyFields
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation pricesheetAssign(\$id: String!, \$input: PricesheetAssignInput!) {
  pricesheetAssign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const pricesheetCreate = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contacts {
    ...ContactFields
  }
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ...CustomerFields
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ...CompanyFields
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation pricesheetCreate(\$input: PricesheetCreateInput!) {
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

export const pricesheetUnassign = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contacts {
    ...ContactFields
  }
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ...CustomerFields
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ...CompanyFields
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation pricesheetUnassign(\$id: String!, \$input: PricesheetUnassignInput!) {
  pricesheetUnassign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const pricesheetUpdate = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contacts {
    ...ContactFields
  }
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ...CustomerFields
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ...CompanyFields
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

mutation pricesheetUpdate(\$id: String!, \$input: PricesheetUpdateInput!) {
  pricesheetUpdate(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;

export const priceUpdate = `fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ...BulkCostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
  cost
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

mutation priceUpdate(\$id: String!, \$input: PriceUpdateInput!) {
  priceUpdate(id: \$id, input: \$input) {
    ...PriceFields
  }
}`;

export const productBulkMove = `fragment ProductBulkMoveResponseFields on ProductBulkMoveResponse {
  movedCount
  errors {
    ...ProductBulkMoveErrorFields
  }
}

fragment ProductBulkMoveErrorFields on ProductBulkMoveError {
  code
  messages
  record
  rowNumber
}

mutation productBulkMove(\$input: ProductBulkMoveInput!) {
  productBulkMove(input: \$input) {
    ...ProductBulkMoveResponseFields
  }
}`;

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

export const productUpdate = `fragment ProductFields on Product {
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

mutation productUpdate(\$productId: Int!, \$input: UpdateProductInput!) {
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

export const purchaseAuthorizationConfigCreate = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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

mutation purchaseAuthorizationConfigCreate(\$input: PurchaseAuthorizationConfigCreateInput) {
  purchaseAuthorizationConfigCreate(input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;

export const purchaseAuthorizationConfigDelete = `mutation purchaseAuthorizationConfigDelete(\$id: String!) {
  purchaseAuthorizationConfigDelete(id: \$id)
}
`;

export const purchaseAuthorizationConfigUpdate = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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

mutation purchaseAuthorizationConfigUpdate(\$id: String!, \$input: PurchaseAuthorizationConfigUpdateInput) {
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

export const shipmentCreate = `fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

mutation shipmentCreate(\$input: ShipmentCreateInput!) {
  shipmentCreate(input: \$input) {
    ...ShipmentFields
  }
}`;

export const shipmentDelete = `mutation shipmentDelete(\$id: String!) {
  shipmentDelete(id: \$id)
}
`;

export const shipmentItemCreate = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

mutation shipmentItemCreate(\$input: ShipmentItemCreateInput!) {
  shipmentItemCreate(input: \$input) {
    ...ShipmentItemFields
  }
}`;

export const shipmentItemDelete = `mutation shipmentItemDelete(\$id: String!) {
  shipmentItemDelete(id: \$id)
}
`;

export const shipmentItemUpdate = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

mutation shipmentItemUpdate(\$id: String!, \$input: ShipmentItemUpdateInput!) {
  shipmentItemUpdate(id: \$id, input: \$input) {
    ...ShipmentItemFields
  }
}`;

export const shipmentUpdate = `fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

mutation shipmentUpdate(\$id: String!, \$input: ShipmentUpdateInput!) {
  shipmentUpdate(id: \$id, input: \$input) {
    ...ShipmentFields
  }
}`;

export const shopInvalidateCache = `mutation shopInvalidateCache {
  shopInvalidateCache
}
`;

export const startSession = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ...GCIPUserFields
  }
}

fragment GCIPUserFields on GCIPUser {
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
}

mutation startSession {
  startSession {
    ...LoginFields
  }
}`;

export const surchargeCreate = `fragment SurchargeFields on Surcharge {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation surchargeCreate(\$input: CreateSurchargeInput!) {
  surchargeCreate(input: \$input) {
    ...SurchargeFields
  }
}`;

export const surchargeDelete = `fragment SurchargeFields on Surcharge {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation surchargeDelete(\$id: String!) {
  surchargeDelete(id: \$id) {
    ...SurchargeFields
  }
}`;

export const surchargeUpdate = `fragment SurchargeFields on Surcharge {
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

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation surchargeUpdate(\$id: String!, \$input: UpdateSurchargeInput!) {
  surchargeUpdate(id: \$id, input: \$input) {
    ...SurchargeFields
  }
}`;

export const taxCreate = `fragment TaxFields on Tax {
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
}

mutation taxCreate(\$input: TaxCreateInput!) {
  taxCreate(input: \$input) {
    ...TaxFields
  }
}`;

export const taxDelete = `mutation taxDelete(\$id: String!) {
  taxDelete(id: \$id)
}
`;

export const taxUpdate = `fragment TaxFields on Tax {
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
}

mutation taxUpdate(\$id: String!, \$input: TaxUpdateInput!) {
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

export const tenantCreate = `fragment TenantFields on Tenant {
  id
  name
  descriptions {
    language
    value
  }
  createdAt
  lastModifiedAt
  restrictSalesPricingVisibility
  allowQuoteInvalidation
  quoteDefaultExpiryPeriodDays
}

mutation tenantCreate(\$input: TenantCreateInput!) {
  tenantCreate(input: \$input) {
    ...TenantFields
  }
}`;

export const tenantDelete = `mutation tenantDelete(\$id: String) {
  tenantDelete(id: \$id)
}
`;

export const tenantUpdate = `fragment TenantFields on Tenant {
  id
  name
  descriptions {
    language
    value
  }
  createdAt
  lastModifiedAt
  restrictSalesPricingVisibility
  allowQuoteInvalidation
  quoteDefaultExpiryPeriodDays
}

mutation tenantUpdate(\$input: TenantUpdateInput!, \$id: String) {
  tenantUpdate(input: \$input, id: \$id) {
    ...TenantFields
  }
}`;

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

export const ticketCreate = `fragment TicketFields on Ticket {
  id
  titles {
    language
    value
  }
  descriptions {
    language
    value
  }
  buttonLabels {
    language
    value
  }
  type
  status
  assignedToAdminUserId
  contactId
  customerId
  productId
  clusterId
  orderId
  companyId
  email
  phone
  externalUrl
  createdAt
  lastModifiedAt
  pickedUpAt
  completedAt
  lastModifiedByAdminUserId
  createdByAdminUserId
}

mutation ticketCreate(\$input: TicketCreateInput!) {
  ticketCreate(input: \$input) {
    ...TicketFields
  }
}`;

export const ticketDelete = `mutation ticketDelete(\$id: ID!) {
  ticketDelete(id: \$id)
}
`;

export const ticketUpdate = `fragment TicketFields on Ticket {
  id
  titles {
    language
    value
  }
  descriptions {
    language
    value
  }
  buttonLabels {
    language
    value
  }
  type
  status
  assignedToAdminUserId
  contactId
  customerId
  productId
  clusterId
  orderId
  companyId
  email
  phone
  externalUrl
  createdAt
  lastModifiedAt
  pickedUpAt
  completedAt
  lastModifiedByAdminUserId
  createdByAdminUserId
}

mutation ticketUpdate(\$id: ID!, \$input: TicketUpdateInput!) {
  ticketUpdate(id: \$id, input: \$input) {
    ...TicketFields
  }
}`;

export const trackAndTraceCreate = `fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

mutation trackAndTraceCreate(\$input: TrackAndTraceCreateInput!) {
  trackAndTraceCreate(input: \$input) {
    ...TrackAndTraceFields
  }
}`;

export const trackAndTraceDelete = `mutation trackAndTraceDelete(\$id: String!) {
  trackAndTraceDelete(id: \$id)
}
`;

export const trackAndTraceUpdate = `fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

mutation trackAndTraceUpdate(\$id: String!, \$input: TrackAndTraceUpdateInput!) {
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

export const valuesetCreate = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ...ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

mutation valuesetCreate(\$input: ValuesetCreateInput!) {
  valuesetCreate(input: \$input) {
    ...ValuesetFields
  }
}`;

export const valuesetDelete = `mutation valuesetDelete(\$id: Int!) {
  valuesetDelete(id: \$id)
}
`;

export const valuesetItemCreate = `fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation valuesetItemCreate(\$input: ValuesetItemCreateInput!) {
  valuesetItemCreate(input: \$input) {
    ...ValuesetItemFields
  }
}`;

export const valuesetItemDelete = `mutation valuesetItemDelete(\$id: Int!) {
  valuesetItemDelete(id: \$id)
}
`;

export const valuesetItemUpdate = `fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation valuesetItemUpdate(\$id: Int!, \$input: ValuesetItemUpdateInput!) {
  valuesetItemUpdate(id: \$id, input: \$input) {
    ...ValuesetItemFields
  }
}`;

export const valuesetUpdate = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ...ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

mutation valuesetUpdate(\$id: Int!, \$input: ValuesetUpdateInput!) {
  valuesetUpdate(id: \$id, input: \$input) {
    ...ValuesetFields
  }
}`;

export const verifyToken = `fragment VerifyTokenFields on VerifyToken {
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
}

mutation verifyToken(\$input: VerifyTokenInput!) {
  verifyToken(input: \$input) {
    ...VerifyTokenFields
  }
}`;

export const warehouseAddressCreate = `fragment WarehouseAddressFields on WarehouseAddress {
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

mutation warehouseAddressCreate(\$id: Float!, \$input: CreateWarehouseAddressInput!) {
  warehouseAddressCreate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;

export const warehouseAddressDelete = `mutation warehouseAddressDelete(\$id: Float!, \$input: DeleteWarehouseAddressInput!) {
  warehouseAddressDelete(id: \$id, input: \$input)
}
`;

export const warehouseAddressUpdate = `fragment WarehouseAddressFields on WarehouseAddress {
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

mutation warehouseAddressUpdate(\$id: Float!, \$input: UpdateWarehouseAddressInput!) {
  warehouseAddressUpdate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;

export const warehouseCreate = `fragment WarehouseFields on Warehouse {
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
  shopId
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

mutation warehouseCreate(\$input: CreateWarehouseInput!) {
  warehouseCreate(input: \$input) {
    ...WarehouseFields
  }
}`;

export const warehouseDelete = `fragment WarehouseFields on Warehouse {
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
  shopId
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

mutation warehouseDelete(\$id: Float!) {
  warehouseDelete(id: \$id) {
    ...WarehouseFields
  }
}`;

export const warehouseUpdate = `fragment WarehouseFields on Warehouse {
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
  shopId
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

mutation warehouseUpdate(\$id: Float!, \$input: UpdateWarehouseInput!) {
  warehouseUpdate(id: \$id, input: \$input) {
    ...WarehouseFields
  }
}`;

export const zoneTaxCodeCreate = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

mutation zoneTaxCodeCreate(\$input: ZoneTaxCodeCreateInput!) {
  zoneTaxCodeCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodeDelete = `mutation zoneTaxCodeDelete(\$id: String!) {
  zoneTaxCodeDelete(id: \$id)
}
`;

export const zoneTaxCodesCreate = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

mutation zoneTaxCodesCreate(\$input: [ZoneTaxCodeCreateInput!]!) {
  zoneTaxCodesCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodesDelete = `mutation zoneTaxCodesDelete(\$priceId: String!) {
  zoneTaxCodesDelete(priceId: \$priceId)
}
`;

export const zoneTaxCodeUpdate = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

mutation zoneTaxCodeUpdate(\$id: String!, \$input: ZoneTaxCodeUpdateInput!) {
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

