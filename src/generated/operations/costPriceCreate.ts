/* Auto-generated. Do not edit. */
export const document: string = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}

mutation costPriceCreate(\$input: CostPriceCreateInput!) {
  costPriceCreate(input: \$input) {
    ...CostPriceFields
  }
}`;
