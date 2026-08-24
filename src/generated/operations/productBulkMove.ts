/* Auto-generated. Do not edit. */
export const document: string = `fragment ProductBulkMoveResponseFields on ProductBulkMoveResponse {
  movedCount
  errors {
    ...ProductBulkMoveErrorFields
  }
}

fragment ProductBulkMoveErrorFields on ProductBulkMoveError {
  code
  messages
  record
  rowNumber
}

mutation productBulkMove(\$input: ProductBulkMoveInput!) {
  productBulkMove(input: \$input) {
    ...ProductBulkMoveResponseFields
  }
}`;
