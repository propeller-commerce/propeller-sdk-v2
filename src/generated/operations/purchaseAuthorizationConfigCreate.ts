/* Auto-generated. Do not edit. */
export const document = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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

mutation purchaseAuthorizationConfigCreate(\$input: PurchaseAuthorizationConfigCreateInput) {
  purchaseAuthorizationConfigCreate(input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;
