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

mutation orderlistAssignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistAssignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
