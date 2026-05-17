/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderFields on Order {
  id
  media {
    ...OrderMediaFields
  }
  userId
  accountManagerId
  cartId
  channelId
  uuid
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

query orderRevisions(\$input: OrderRevisionSearchInput!, \$imageSearchFilters: MediaImageProductSearchInput, \$language: String, \$imageVariantFilters: TransformationsInput!) {
  orderRevisions(input: \$input) {
    items {
      orderId
      revisionNumber
      createdByContactId
      createdByCustomerId
      createdByAdminUserId
      createdByAdminUser {
        id
        firstName
        lastName
        email
      }
      createdAt
      createdFromRevisionNumber
      snapshot {
        ...OrderFields
      }
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
}`;
