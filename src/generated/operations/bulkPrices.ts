/* Auto-generated. Do not edit. */
export const document = `fragment BulkPriceResponseFields on BulkPriceResponse {
  items {
    ...BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query bulkPrices(\$input: BulkPriceSearchInput) {
  bulkPrices(input: \$input) {
    ...BulkPriceResponseFields
  }
}`;
