/* Auto-generated. Do not edit. */
export const document: string = `fragment FavoriteListsResponseFields on FavoriteListsResponse {
  items {
    ...FavoriteListOnlyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment FavoriteListOnlyFields on FavoriteList {
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

query favoriteLists(\$input: FavoriteListsSearchInput) {
  favoriteLists(input: \$input) {
    ...FavoriteListsResponseFields
  }
}`;
