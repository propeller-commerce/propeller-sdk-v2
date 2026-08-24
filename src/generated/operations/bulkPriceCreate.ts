/* Auto-generated. Do not edit. */
export const document: string = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkPriceCreate(\$input: BulkPriceCreateInput!) {
  bulkPriceCreate(input: \$input) {
    ...BulkPriceFields
  }
}`;
