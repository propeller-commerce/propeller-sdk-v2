/* Auto-generated. Do not edit. */
export const document: string = `fragment FavoriteListOnlyFields on FavoriteList {
  id
  name
  companyId
  contactId
  customerId
  isDefault
  slug
  createdAt
  updatedAt
  products {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
  clusters {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
}

mutation favoriteListClearItems(\$id: String!, \$products: Boolean, \$clusters: Boolean) {
  favoriteListClearItems(id: \$id, products: \$products, clusters: \$clusters) {
    ...FavoriteListOnlyFields
  }
}`;
