/* Auto-generated. Do not edit. */
export const document = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}

mutation costPriceUpdate(\$id: String!, \$input: CostPriceUpdateInput!) {
  costPriceUpdate(id: \$id, input: \$input) {
    ...CostPriceFields
  }
}`;
