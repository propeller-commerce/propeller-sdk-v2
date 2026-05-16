/* Auto-generated. Do not edit. */
export const document = `fragment TenantFields on Tenant {
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
}

query tenant {
  tenant {
    ...TenantFields
  }
}`;
