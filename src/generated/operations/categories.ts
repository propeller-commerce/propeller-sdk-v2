/* Auto-generated. Do not edit. */
export const document: string = `fragment CategoryResponseFields on CategoryResponse {
  items {
    ...CategoryMinimalFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CategoryMinimalFields on Category {
  categoryId
  uuid
  sortOrder
  createdAt
  lastModifiedAt
  hidden
  names(language: \$language) {
    ...LocalizedStringFields
  }
  descriptions(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescriptions(language: \$language) {
    ...LocalizedStringFields
  }
  slugs(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query categories(\$filter: CategorySearchInput, \$language: String) {
  categories(filter: \$filter) {
    ...CategoryResponseFields
  }
}`;
