/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderItemFields on OrderItem {
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
