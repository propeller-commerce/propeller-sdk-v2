/* Auto-generated. Do not edit. */
export const document = `fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ...CostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
}

fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}

query price(\$id: String!) {
  price(id: \$id) {
    ...PriceFields
  }
}`;
