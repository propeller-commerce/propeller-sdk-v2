/* Auto-generated. Do not edit. */
export const document = `fragment FavoriteListOnlyFields on FavoriteList {
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

mutation favoriteListUpdate(\$id: String!, \$input: FavoriteListsUpdateInput!) {
  favoriteListUpdate(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;
