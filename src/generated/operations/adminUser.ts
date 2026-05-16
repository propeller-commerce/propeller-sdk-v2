/* Auto-generated. Do not edit. */
export const document = `fragment AdminUserFields on AdminUser {
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
  tenants {
    itemsFound
    offset
    page
    pages
    start
    end
  }
  ticketsAssigned {
    id
    titles {
      ...LocalizedStringFields
    }
    descriptions {
      ...LocalizedStringFields
    }
    buttonLabels {
      ...LocalizedStringFields
    }
    type
    status
    assignedToAdminUserId
    contactId
    customerId
    productId
    clusterId
    orderId
    companyId
    email
    phone
    externalUrl
    sources {
      ...SourceFields
    }
    createdAt
    lastModifiedAt
    pickedUpAt
    completedAt
    lastModifiedByAdminUserId
    createdByAdminUserId
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment SourceFields on Source {
  id
  name
}

query adminUser(\$email: String!) {
  adminUser(email: \$email) {
    ...AdminUserFields
  }
}`;
