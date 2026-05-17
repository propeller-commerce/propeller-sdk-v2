/* Auto-generated. Do not edit. */
export const document: string = `fragment PayMethodsResponseFields on PayMethodsResponse {
  items {
    ...PayMethodFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query payMethods(\$input: PayMethodSearchInput) {
  payMethods(input: \$input) {
    ...PayMethodsResponseFields
  }
}`;
