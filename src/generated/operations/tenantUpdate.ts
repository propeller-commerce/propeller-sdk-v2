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
}

mutation tenantUpdate(\$input: TenantUpdateInput!, \$id: String) {
  tenantUpdate(input: \$input, id: \$id) {
    ...TenantFields
  }
}`;
