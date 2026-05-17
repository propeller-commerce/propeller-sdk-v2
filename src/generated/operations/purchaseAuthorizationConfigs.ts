/* Auto-generated. Do not edit. */
export const document: string = `fragment PurchaseAuthorizationConfigResponseFields on PurchaseAuthorizationConfigResponse {
  items {
    ...PurchaseAuthorizationConfigFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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

query purchaseAuthorizationConfigs(\$input: PurchaseAuthorizationConfigSearchInput) {
  purchaseAuthorizationConfigs(input: \$input) {
    ...PurchaseAuthorizationConfigResponseFields
  }
}`;
