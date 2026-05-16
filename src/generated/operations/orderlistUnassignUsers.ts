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

mutation orderlistUnassignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistUnassignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
