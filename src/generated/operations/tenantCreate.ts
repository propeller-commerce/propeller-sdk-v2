/* Auto-generated. Do not edit. */
export const document: string = `fragment TenantFields on Tenant {
  id
  name
  descriptions {
    language
    value
  }
  createdAt
  lastModifiedAt
  restrictSalesPricingVisibility
  allowQuoteInvalidation
  quoteDefaultExpiryPeriodDays
  defaultAppLanguage
  defaultDataLanguage
}

mutation tenantCreate(\$input: TenantCreateInput!) {
  tenantCreate(input: \$input) {
    ...TenantFields
  }
}`;
