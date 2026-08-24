/* Auto-generated. Do not edit. */
export const document: string = `fragment ZoneTaxCodeResponseFields on ZoneTaxCodeResponse {
  items {
    ...ZoneTaxCodeFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

query zoneTaxCodes(\$input: ZoneTaxCodeSearchInput) {
  zoneTaxCodes(input: \$input) {
    ...ZoneTaxCodeResponseFields
  }
}`;
