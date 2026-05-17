/* Auto-generated. Do not edit. */
export const document: string = `fragment CompanySearchResponseFields on CompanySearchResponse {
  items {
    id
    name
    taxNumber
    cocNumber
    notes
    debtorId
    email
    phone
    createdAt
    lastModifiedAt
    deletedAt
    addresses {
      ...CompanyAddressSearchFields
    }
    contacts {
      ...CompanyContactSearchFields
    }
    attributes {
      ...CompanyAttributeSearchFields
    }
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CompanyAddressSearchFields on CompanyAddressSearch {
  id
  firstName
  lastName
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  code
  notes
  name
  isDefault
  type
  active
  createdAt
  lastModifiedAt
}

fragment CompanyContactSearchFields on CompanyContactSearch {
  id
  firstName
  lastName
  middleName
  phone
  mobile
  gender
  email
  iban
  bankAccount
  bic
  notes
  debtorId
  primaryCompanyId
  dateOfBirth
  createdAt
  lastModifiedAt
  attributes {
    ...CompanyAttributeSearchFields
  }
}

fragment CompanyAttributeSearchFields on CompanyAttributeSearch {
  id
  value {
    id
    type
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    name
  }
}

query companySearch(\$input: CompanySearchInput) {
  companySearch(input: \$input) {
    ...CompanySearchResponseFields
  }
}`;
