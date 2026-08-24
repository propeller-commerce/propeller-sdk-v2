/* Auto-generated. Do not edit. */
export const document: string = `fragment BulkResponseDataFields on BulkResponseData {
  created
  updated
  total
}

mutation cartItemBulk(\$input: CartItemsBulkUpsertInput!) {
  cartItemBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
