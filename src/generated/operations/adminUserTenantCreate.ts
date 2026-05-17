/* Auto-generated. Do not edit. */
export const document: string = `fragment AdminUserTenantFields on AdminUserTenant {
  id
  tenant
  name
  default
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  user {
    id
    email
    gender
    firstName
    middleName
    lastName
    language
    phone
    job
    createdAt
    createdBy
    lastModifiedAt
    lastModifiedBy
  }
  tenantInfo {
    ...TenantFields
  }
}

fragment TenantFields on Tenant {
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

mutation adminUserTenantCreate(\$input: CreateTenantDto!) {
  adminUserTenantCreate(input: \$input) {
    ...AdminUserTenantFields
  }
}`;
