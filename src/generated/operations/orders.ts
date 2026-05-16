/* Auto-generated. Do not edit. */
export const document = `fragment OrderResponseFields on OrderResponse {
  items {
    ...OrderDataFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment OrderDataFields on Order {
  id
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
  total {
    ...OrderTotalsFields
  }
  invoiceUserId
  validUntil
  companyId
  sources {
    ...SourceFields
  }
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

fragment SourceFields on Source {
  id
  name
}

query orders(\$input: OrderSearchArguments) {
  orders(input: \$input) {
    ...OrderResponseFields
  }
}`;
