/* Auto-generated. Do not edit. */
export const document = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkPriceUpdate(\$id: String!, \$input: BulkPriceUpdateInput!) {
  bulkPriceUpdate(id: \$id, input: \$input) {
    ...BulkPriceFields
  }
}`;
