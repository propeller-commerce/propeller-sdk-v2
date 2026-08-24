/* Auto-generated. Do not edit. */
export const document: string = `mutation productsBulkAddToCategory(\$productIds: [Int!]!, \$categoryId: Int!, \$startingSortOrder: Int!) {
  productsBulkAddToCategory(productIds: \$productIds, categoryId: \$categoryId, startingSortOrder: \$startingSortOrder) {
    uuid
    productId
    categoryId
    isDefault
    sortOrder
    createdAt
    lastModifiedAt
  }
}
`;
