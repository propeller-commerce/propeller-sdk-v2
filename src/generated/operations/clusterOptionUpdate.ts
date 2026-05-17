/* Auto-generated. Do not edit. */
export const document: string = `fragment ClusterOptionFields on ClusterOption {
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

mutation clusterOptionUpdate(\$clusterId: Int!, \$optionId: Int!, \$input: ClusterOptionUpdateInput!, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$language: String, \$imageVariantFilters: TransformationsInput!) {
  clusterOptionUpdate(clusterId: \$clusterId, optionId: \$optionId, input: \$input) {
    ...ClusterOptionFields
  }
}`;
