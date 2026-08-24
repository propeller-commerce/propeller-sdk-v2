/* Auto-generated. Do not edit. */
export const document: string = `fragment PriceFields on Price {
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

mutation priceUpdate(\$id: String!, \$input: PriceUpdateInput!) {
  priceUpdate(id: \$id, input: \$input) {
    ...PriceFields
  }
}`;
