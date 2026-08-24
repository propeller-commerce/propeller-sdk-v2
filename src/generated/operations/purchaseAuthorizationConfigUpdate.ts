/* Auto-generated. Do not edit. */
export const document: string = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
  id
  purchaseRole
  authorizationLimit
  createdAt
  lastModifiedAt
  company {
    companyId
  }
  contact {
    contactId
  }
}

mutation purchaseAuthorizationConfigUpdate(\$id: String!, \$input: PurchaseAuthorizationConfigUpdateInput) {
  purchaseAuthorizationConfigUpdate(id: \$id, input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;
