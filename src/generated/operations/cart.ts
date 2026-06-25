/* Auto-generated. Do not edit. */
export const document: string = `fragment CartFields on Cart {
  cartId
  channelId
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
  logo
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

query cart(\$cartId: String!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cart(id: \$cartId) {
    ...CartFields
  }
}`;
