/* Auto-generated. Do not edit. */
export const document: string = `fragment OrderlistFields on Orderlist {
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

mutation orderlistUpdate(\$id: Int!, \$input: OrderlistUpdateInput!) {
  orderlistUpdate(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
