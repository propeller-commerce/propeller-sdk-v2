/* Auto-generated. Do not edit. */
export const document = `fragment BulkDeleteResponseFields on BulkDeleteResponse {
  deletedIds
  failedIds
}

mutation attributeDescriptionDeleteBulk(\$ids: [String!]!) {
  attributeDescriptionDeleteBulk(ids: \$ids) {
    ...BulkDeleteResponseFields
  }
}`;
