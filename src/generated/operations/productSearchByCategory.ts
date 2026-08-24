/* Auto-generated. Do not edit. */
export const document: string = `fragment ProductSearchByCategoryResponseFields on ProductSearchByCategoryResponse {
  results {
    ...CategoryProductSearchResultFields
  }
}

fragment CategoryProductSearchResultFields on CategoryProductSearchResult {
  categoryId
  response {
    ...CategorySearchResponseFields
  }
}

fragment CategorySearchResponseFields on CategorySearchResponse {
  items {
    id
    class
    uuid
    createdAt
    lastModifiedAt
    indexedAt
    isDeleted
    status
    effectivePrice
  }
  itemsFound
  offset
  page
  pages
  minPrice
  maxPrice
  filters {
    ...ProductSearchAttributeFilterFields
  }
}

fragment ProductSearchAttributeFilterFields on ProductSearchAttributeFilter {
  id
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}

query productSearchByCategory(\$input: ProductSearchByCategoryInput!) {
  productSearchByCategory(input: \$input) {
    ...ProductSearchByCategoryResponseFields
  }
}`;
