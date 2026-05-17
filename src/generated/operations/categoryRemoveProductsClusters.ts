/* Auto-generated. Do not edit. */
export const document: string = `fragment CategoryRemoveProductsClustersResponseFields on CategoryRemoveProductsClustersResponse {
  category {
    ...CategoryFields
  }
  actions {
    messages
  }
}

fragment CategoryFields on Category {
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

mutation categoryRemoveProductsClusters(\$id: Int!, \$input: CategoryRemoveProductsClustersInput!, \$categoryProductSearchInput: CategoryProductSearchInput, \$language: String, \$filterAvailableAttributeInput: FilterAvailableAttributeInput, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  categoryRemoveProductsClusters(id: \$id, input: \$input) {
    ...CategoryRemoveProductsClustersResponseFields
  }
}`;
