/* Auto-generated. Do not edit. */
export const document: string = `fragment TaxesResponseFields on TaxesResponse {
  items {
    ...TaxFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment TaxFields on Tax {
  id
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

query taxes(\$input: TaxSearchInput) {
  taxes(input: \$input) {
    ...TaxesResponseFields
  }
}`;
