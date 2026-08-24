/* Auto-generated. Do not edit. */
export const document: string = `fragment CartResponseFields on CartResponse {
  items {
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
    total {
      ...CartTotalFields
    }
    items {
      itemId
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
    }
    bonusItems {
      itemId
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
    }
    invoiceAddress {
      ...CartAddressFields
    }
    deliveryAddress {
      ...CartAddressFields
    }
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
    language
    purchaseAuthorizationRequired
    status
    contact {
      contactId
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
  itemsFound
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

query carts(\$input: CartSearchInput!) {
  carts(input: \$input) {
    ...CartResponseFields
  }
}`;
