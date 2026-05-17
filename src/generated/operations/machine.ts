/* Auto-generated. Do not edit. */
export const document: string = `fragment SparePartsMachineFields on SparePartsMachine {
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

query machine(\$id: String, \$slug: String, \$language: String, \$source: String, \$sourceId: String, \$imageVariantFilters: TransformationsInput!, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput) {
  machine(
    id: \$id
    slug: \$slug
    language: \$language
    source: \$source
    sourceId: \$sourceId
  ) {
    ...SparePartsMachineFields
  }
}`;
