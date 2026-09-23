/* Auto-generated. Do not edit. */
export const document: string = `fragment SparePartsMachineFields on SparePartsMachine {
  ...SparePartsMachineMinimalFields
  sparePartProducts(input: \$sparePartsMachineProductSearchInput) {
    ...SparePartsResponseFields
  }
  machines {
    ...SparePartsMachineMinimalFields
  }
}

fragment SparePartsMachineMinimalFields on SparePartsMachine {
  id
  media {
    ...SparePartsMachineMediaImagesOnlyFields
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

fragment SparePartsResponseFields on SparePartsResponse {
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
  filters(input: \$filterAvailableAttributeInput) {
    ...AttributeFilterFields
  }
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
  uuid
  type
  categoryIds
  createdAt
  lastModifiedAt
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
  attributes(input: \$attributeResultSearchInput) {
    items {
      ...AttributeResultGridFields
    }
  }
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
    per
    list
    costPrices {
      quantityFrom
      value
      validFrom
      validTo
    }
    suggested
    store
    bulkPriceDiscountType
    defaultTaxCode
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

fragment AttributeResultGridFields on AttributeResult {
  attributeDescription {
    name
  }
  value {
    __typename
    ... on AttributeTextValue {
      textValues {
        language
        values
      }
    }
    ... on AttributeEnumValue {
      enumValues
    }
    ... on AttributeIntValue {
      intValue
    }
    ... on AttributeDecimalValue {
      decimalValue
    }
  }
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

mutation machineUpsert(\$input: UpsertSparePartsMachineInput!, \$language: String, \$sparePartsMachineProductSearchInput: SparePartsMachineProductSearchInput, \$filterAvailableAttributeInput: FilterAvailableAttributeInput, \$imageVariantFilters: TransformationsInput!, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$attributeResultSearchInput: AttributeResultSearchInput) {
  machineUpsert(input: \$input) {
    ...SparePartsMachineFields
  }
}`;
