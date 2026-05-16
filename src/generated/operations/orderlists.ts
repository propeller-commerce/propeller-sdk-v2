/* Auto-generated. Do not edit. */
export const document = `fragment OrderlistsResponseFields on OrderlistsResponse {
  items {
    ...OrderlistFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment OrderlistFields on Orderlist {
  id
  createdAt
  lastModifiedAt
  descriptions {
    language
    value
  }
  extras {
    language
    value
  }
  code
  validFrom
  validTo
  type
  partnerEntity
  active
}

query orderlists(\$input: OrderlistSearchInput) {
  orderlists(input: \$input) {
    ...OrderlistsResponseFields
  }
}`;
