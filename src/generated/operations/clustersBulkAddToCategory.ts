/* Auto-generated. Do not edit. */
export const document: string = `mutation clustersBulkAddToCategory(\$clusterIds: [Int!]!, \$categoryId: Int!, \$startingSortOrder: Int!) {
  clustersBulkAddToCategory(clusterIds: \$clusterIds, categoryId: \$categoryId, startingSortOrder: \$startingSortOrder) {
    uuid
    baseProductUuid
    categoryUuid
    categoryId
    isDefault
    sortOrder
    createdAt
    lastModifiedAt
  }
}
`;
