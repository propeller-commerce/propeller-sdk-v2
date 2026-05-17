/* Auto-generated. Do not edit. */
export const document: string = `fragment ContactFields on Contact {
  contactId
  attributes(input: \$contactAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ...FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
  company {
    ...CompanyDataFields
  }
  companies(input: \$contactCompaniesSearchInput) {
    items {
      ...CompanyDataFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  purchaseAuthorizationConfigs(input: \$contactPAConfigInput) {
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
}

fragment AttributeResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute {
      ...CategoryAttributeFields
    }
    ... on ClusterAttribute {
      ...ClusterAttributeFields
    }
    ... on CompanyAttribute {
      ...CompanyAttributeFields
    }
    ... on ContactAttribute {
      ...ContactAttributeFields
    }
    ... on CustomerAttribute {
      ...CustomerAttributeFields
    }
    ... on ProductAttribute {
      ...ProductAttributeFields
    }
  }
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
}

fragment CategoryAttributeFields on Attribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
  }
}

fragment AttributeColorValueFields on AttributeColorValue {
  __typename
  id
  type
  colorValue
}

fragment AttributeDateTimeValueFields on AttributeDateTimeValue {
  __typename
  id
  type
  dateTimeValue
}

fragment AttributeDecimalValueFields on AttributeDecimalValue {
  __typename
  id
  type
  decimalValue
}

fragment AttributeEnumValueFields on AttributeEnumValue {
  __typename
  id
  type
  enumValues
}

fragment AttributeIntValueFields on AttributeIntValue {
  __typename
  id
  type
  intValue
}

fragment AttributeTextValueFields on AttributeTextValue {
  __typename
  id
  type
  textValues {
    language
    values
  }
}

fragment ClusterAttributeFields on ClusterAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  clusterId
}

fragment AttributeDescriptionFields on AttributeDescription {
  id
  name
  descriptions {
    language
    value
  }
  units {
    language
    value
  }
  attributeClass
  type
  valuesetId
  group
  isSearchable
  isPublic
  isSystem
  isHidden
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
}

fragment CompanyAttributeFields on CompanyAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  companyId
}

fragment ContactAttributeFields on ContactAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  contactId
}

fragment CustomerAttributeFields on CustomerAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  customerId
}

fragment ProductAttributeFields on ProductAttribute {
  id
  value {
    ... on AttributeColorValue {
      ...AttributeColorValueFields
    }
    ... on AttributeDateTimeValue {
      ...AttributeDateTimeValueFields
    }
    ... on AttributeDecimalValue {
      ...AttributeDecimalValueFields
    }
    ... on AttributeEnumValue {
      ...AttributeEnumValueFields
    }
    ... on AttributeIntValue {
      ...AttributeIntValueFields
    }
    ... on AttributeTextValue {
      ...AttributeTextValueFields
    }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ...AttributeDescriptionFields
  }
  productId
}

fragment FavoriteListOnlyFields on FavoriteList {
  id
  name
  companyId
  contactId
  customerId
  isDefault
  slug
  createdAt
  updatedAt
  products {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
  clusters {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
}

fragment CompanyDataFields on Company {
  companyId
  attributes(input: \$companyAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  addresses {
    ...AddressFields
  }
  orderlists {
    items {
      ...OrderlistFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}

fragment AddressFields on Address {
  id
  firstName
  middleName
  lastName
  gender
  company
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
  fax
  code
  notes
  isDefault
  type
  icp
  url
  active
  name
}

fragment OrderlistFields on Orderlist {
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

fragment CustomerFields on Customer {
  customerId
  addresses {
    ...AddressFields
  }
  attributes(input: \$customerAttributesInput) {
    items {
      ...AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ...FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
}

query user(\$id: Int, \$login: String, \$contactAttributesInput: AttributeResultSearchInput, \$contactCompaniesSearchInput: ContactCompaniesSearchInput, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$customerAttributesInput: AttributeResultSearchInput) {
  user(id: \$id, login: \$login) {
    __typename
    ... on Contact {
      ...ContactFields
    }
    ... on Customer {
      ...CustomerFields
    }
  }
}`;
