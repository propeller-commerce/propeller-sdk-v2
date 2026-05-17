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
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query categories(\$filter: CategorySearchInput, \$userId: Int, \$language: String) {
  categories(filter: \$filter, userId: \$userId) {
    ...CategoryResponseFields
  }
}`;
