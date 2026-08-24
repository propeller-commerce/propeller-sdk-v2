/* Auto-generated. Do not edit. */
export const document: string = `fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

mutation bulkCostPriceUpdate(\$id: String!, \$input: BulkCostPriceUpdateInput!) {
  bulkCostPriceUpdate(id: \$id, input: \$input) {
    ...BulkCostPriceFields
  }
}`;
