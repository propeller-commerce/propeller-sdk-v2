/* Auto-generated. Do not edit. */
export const document = `fragment OrderlistFields on Orderlist {
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

query orderlist(\$id: Int!) {
  orderlist(id: \$id) {
    ...OrderlistFields
  }
}`;
