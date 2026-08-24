/* Auto-generated. Do not edit. */
export const document: string = `mutation productAddToCategory(\$productId: Int!, \$categoryId: Int!, \$sortOrder: Int, \$makeDefault: Boolean!) {
  productAddToCategory(productId: \$productId, categoryId: \$categoryId, sortOrder: \$sortOrder, makeDefault: \$makeDefault) {
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
