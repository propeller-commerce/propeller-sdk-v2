/* Auto-generated. Do not edit. */
export const document = `fragment PriceResponseFields on PriceResponse {
  items {
    ...PriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PriceFields on Price {
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

query prices(\$input: PriceSearchInput) {
  prices(input: \$input) {
    ...PriceResponseFields
  }
}`;
