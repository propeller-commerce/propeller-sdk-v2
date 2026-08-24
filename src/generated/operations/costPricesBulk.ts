/* Auto-generated. Do not edit. */
export const document: string = `fragment BulkResponseDataFields on BulkResponseData {
  created
  updated
  total
}

mutation costPricesBulk(\$input: [CostPriceCreateInput!]!) {
  costPricesBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
