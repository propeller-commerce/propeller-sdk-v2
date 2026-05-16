/* Auto-generated. Do not edit. */
export const document = `fragment BulkCostPriceResponseFields on BulkCostPriceResponse {
  items {
    ...BulkCostPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query bulkCostPrices(\$input: BulkCostPriceSearchInput) {
  bulkCostPrices(input: \$input) {
    ...BulkCostPriceResponseFields
  }
}`;
