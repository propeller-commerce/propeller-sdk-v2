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

mutation favoriteListAddItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListAddItems(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;
