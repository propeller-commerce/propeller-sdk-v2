/* Auto-generated. Do not edit. */
export const document: string = `mutation clusterAddToCategory(\$clusterId: Int!, \$categoryId: Int!, \$sortOrder: Int, \$makeDefault: Boolean!) {
  clusterAddToCategory(clusterId: \$clusterId, categoryId: \$categoryId, sortOrder: \$sortOrder, makeDefault: \$makeDefault) {
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
