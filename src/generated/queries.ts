/**
 * Generated GraphQL queries bundle
 * This file is auto-generated. Do not edit manually.
 */

export const addressesByCompanyId = `fragment AddressFields on Address {
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

query addressesByCompanyId(\$companyId: Float!, \$type: AddressType) {
  addressesByCompanyId(companyId: \$companyId, type: \$type) {
    ...AddressFields
  }
}`;

export const addressesByCustomerId = `fragment AddressFields on Address {
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

query addressesByCustomerId(\$customerId: Float!, \$type: AddressType) {
  addressesByCustomerId(customerId: \$customerId, type: \$type) {
    ...AddressFields
  }
}`;

export const addressesByOrderId = `fragment AddressFields on Address {
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

query addressesByOrderId(\$orderId: Int!, \$type: AddressType) {
  addressesByOrderId(orderId: \$orderId, type: \$type) {
    ...AddressFields
  }
}`;

export const adminUser = `query adminUser(\$email: String!) {
  adminUser(email: \$email) {
    ...AdminUserFields
  }
}`;

export const adminUsers = `query adminUsers(\$input: AdminUsersSearchInput) {
  adminUsers(input: \$input) {
    ...UserResponseFields
  }
}`;

export const adminUserTenant = `query adminUserTenant(\$id: Int!) {
  adminUserTenant(id: \$id) {
    ...AdminUserTenantFields
  }
}`;

export const adminUserViewer = `query adminUserViewer {
  adminUserViewer {
    ...AdminUserFields
  }
}`;

export const attribute = `fragment AttributeFields on Attribute {
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

query attribute(\$id: String!) {
  attribute(id: \$id) {
    ...AttributeFields
  }
}`;

export const attributeDescription = `fragment AttributeDescriptionFields on AttributeDescription {
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

query attributeDescription(\$id: String!) {
  attributeDescription(id: \$id) {
    ...AttributeDescriptionFields
  }
}`;

export const attributeDescriptions = `fragment AttributeDescriptionResponseFields on AttributeDescriptionResponse {
  items {
    ...AttributeDescriptionFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
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

query attributeDescriptions(\$input: AttributeDescriptionSearchInput!) {
  attributeDescriptions(input: \$input) {
    ...AttributeDescriptionResponseFields
  }
}`;

export const attributeResultByCategoryId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByCategoryId(\$categoryId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCategoryId(categoryId: \$categoryId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByClusterId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByClusterId(\$clusterId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByClusterId(clusterId: \$clusterId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByCompanyId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByCompanyId(\$companyId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCompanyId(companyId: \$companyId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByContactId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByContactId(\$contactId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByContactId(contactId: \$contactId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByCustomerId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByCustomerId(\$customerId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCustomerId(customerId: \$customerId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributeResultByProductId = `fragment AttributeResultResponseFields on AttributeResultResponse {
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

query attributeResultByProductId(\$productId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByProductId(productId: \$productId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;

export const attributes = `fragment AttributeResponseFields on AttributeResponse {
  items {
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
  itemsFound
  offset
  page
  pages
  start
  end
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

query attributes(\$input: AttributeSearchInput!) {
  attributes(input: \$input) {
    ...AttributeResponseFields
  }
}`;

export const attributesByProductId = `fragment AttributeResponseFields on AttributeResponse {
  items {
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
  itemsFound
  offset
  page
  pages
  start
  end
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

query attributesByProductId(\$productId: Int!, \$input: AttributeSearchInput!) {
  attributesByProductId(productId: \$productId, input: \$input) {
    ...AttributeResponseFields
  }
}`;

export const authentication = `fragment GCIPUserFields on GCIPUser {
  uid
  email
  emailVerified
  displayName
  photoUrl
  phoneNumber
  disabled
  isAnonymous
  metadata {
    lastSignInTime
    creationTime
    lastRefreshTime
  }
  tokensValidAfterTime
  tenantId
  providerData {
    uid
    providerId
    displayName
    photoUrl
    federatedId
    email
    rawId
    screenName
    phoneNumber
  }
  passwordHash
  passwordSalt
  authDomain
  lastLoginAt
  createdAt
  accessToken
  refreshToken
  expirationTime
  multiFactor {
    enrolledFactors {
      factorId
      phoneNumber
    }
  }
}

query authentication(\$email: String!) {
  authentication(email: \$email) {
    ...GCIPUserFields
  }
}`;

export const bulkCostPrices = `fragment BulkCostPriceResponseFields on BulkCostPriceResponse {
  items {
    ...BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query bulkCostPrices(\$input: BulkCostPriceSearchInput) {
  bulkCostPrices(input: \$input) {
    ...BulkCostPriceResponseFields
  }
}`;

export const bulkPrices = `fragment BulkPriceResponseFields on BulkPriceResponse {
  items {
    ...BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query bulkPrices(\$input: BulkPriceSearchInput) {
  bulkPrices(input: \$input) {
    ...BulkPriceResponseFields
  }
}`;

export const bundle = `fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query bundle(\$id: String!, \$taxZone: String) {
  bundle(id: \$id, taxZone: \$taxZone) {
    ...BundleFields
  }
}`;

export const bundles = `fragment BundlesResponseFields on BundlesResponse {
  items {
    ...BundleFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query bundles(\$input: BundleSearchInput, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  bundles(input: \$input) {
    ...BundlesResponseFields
  }
}`;

export const businessRule = `query businessRule(\$id: ID!) {
  businessRule(id: \$id) {
    ...BusinessRuleFields
  }
}`;

export const businessRuleDecisionTable = `query businessRuleDecisionTable(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTable(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;

export const businessRuleFieldDefinitions = `query businessRuleFieldDefinitions(\$name: String!) {
  businessRuleFieldDefinitions(name: \$name) {
    ...BusinessRuleFieldDefinitionGroupFields
  }
}`;

export const businessRuleJDM = `query businessRuleJDM(
  \$id: ID!
  \$language: String
) {
  businessRuleJDM(id: \$id, language: \$language)
}`;

export const businessRules = `query businessRules(\$filter: BusinessRuleSearchInput) {
  businessRules(filter: \$filter) {
    ...BusinessRuleResponseFields
  }
}`;

export const carrier = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

query carrier(\$id: Int!) {
  carrier(id: \$id) {
    ...CarrierFields
  }
}`;

export const carriers = `fragment CarriersResponseFields on CarriersResponse {
  items {
    ...CarrierFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ...TrackAndTraceFields
  }
  warehouses {
    ...WarehouseFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

query carriers(\$input: CarriersSearchInput) {
  carriers(input: \$input) {
    ...CarriersResponseFields
  }
}`;

export const cart = `fragment CartFields on Cart {
  cartId
  channelId
  contactId
  customerId
  companyId
  notes
  reference
  extra3
  extra4
  orderStatus
  actionCode
  vouchers {
    ...CartVoucherFields
  }
  paymentData {
    ...CartPaymentDataFields
  }
  postageData {
    ...CartPostageDataFields
  }
  total {
    ...CartTotalFields
  }
  items {
    ...CartMainItemFields
  }
  bonusItems {
    ...CartBaseItemFields
  }
  unOrderableItems {
    itemId
    parentItemUUID
    priceMode
    quantity
    price
    notes
    productId
    clusterId
    bundleId
  }
  invoiceAddress {
    ...CartAddressFields
  }
  deliveryAddress {
    ...CartAddressFields
  }
  taxLevels {
    ...CartTaxLevelFields
  }
  payMethods {
    ...CartPaymethodFields
  }
  carriers {
    ...CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ...CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ...CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    contactId
    debtorId
    gender
    firstName
    middleName
    lastName
    phone
    mobile
    email
    login
  }
}

fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}

fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}

fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ...BundleFields
  }
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  clusterId
  taxCode
  deliveryDate
  deliveryDeadline
  discount
  discountPercentage
  surcharges {
    ...CartItemSurchargeFields
  }
  incentive {
    name
    quantity
    price
    code
  }
  childItems {
    itemId
    parentItemUUID
    notes
    price
    priceNet
    priceMode
    totalPrice
    totalPriceNet
    sum
    sumNet
    totalSum
    totalSumNet
    quantity
    bundleId
    clusterId
    productId
    taxCode
    deliveryDate
    deliveryDeadline
    discount
    discountPercentage
    product {
      ...ProductCartFields
    }
  }
  product {
    ...ProductCartFields
  }
}

fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxPercentage
  quantity
  price
  totalPrice
  priceNet
  totalPriceNet
}

fragment CartBaseItemFields on CartBaseItem {
  itemId
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  bundleId
  clusterId
  productId
  taxCode
  incentive {
    name
    quantity
    price
    code
  }
  product {
    ...ProductCartFields
  }
}

fragment CartAddressFields on CartAddress {
  company
  gender
  firstName
  middleName
  lastName
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  code
  email
  mobile
  phone
  icp
  notes
}

fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}

fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}

fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}

fragment CartIncentiveFields on CartIncentive {
  name
  action
}

fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}

query cart(\$cartId: String!, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cart(id: \$cartId) {
    ...CartFields
  }
}`;

export const carts = `fragment CartResponseFields on CartResponse {
  items {
    cartId
    channelId
    contactId
    customerId
    companyId
    notes
    reference
    extra3
    extra4
    orderStatus
    actionCode
    total {
      ...CartTotalFields
    }
    items {
      itemId
      price
      priceNet
      priceMode
      totalPrice
      totalPriceNet
      sum
      sumNet
      totalSum
      totalSumNet
      quantity
    }
    bonusItems {
      itemId
      price
      priceNet
      priceMode
      totalPrice
      totalPriceNet
      sum
      sumNet
      totalSum
      totalSumNet
      quantity
    }
    invoiceAddress {
      ...CartAddressFields
    }
    deliveryAddress {
      ...CartAddressFields
    }
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
    language
    purchaseAuthorizationRequired
    status
    contact {
      contactId
      gender
      firstName
      middleName
      lastName
      phone
      mobile
      email
      login
    }
  }
  itemsFound
}

fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}

fragment CartAddressFields on CartAddress {
  company
  gender
  firstName
  middleName
  lastName
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  code
  email
  mobile
  phone
  icp
  notes
}

query carts(\$input: CartSearchInput!) {
  carts(input: \$input) {
    ...CartResponseFields
  }
}`;

export const categories = `fragment CategoryResponseFields on CategoryResponse {
  items {
    ...CategoryMinimalFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CategoryMinimalFields on Category {
  categoryId
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query categories(\$filter: CategorySearchInput, \$userId: Int) {
  categories(filter: \$filter, userId: \$userId) {
    ...CategoryResponseFields
  }
}`;

export const category = `fragment CategoryFields on Category {
  categoryId
  urlId: categoryId
  ...CategoryMinimalFields
  attributes {
    ...AttributeResultCategoryResponseFields
  }
  path
  parent {
    ...CategoryMinimalFields
  }
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataKeywords {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
  hidden
  categoryPath {
    ...CategoryMinimalFields
  }
  products(input: \$categoryProductSearchInput) {
    ...ProductsResponseFields
  }
}

fragment CategoryMinimalFields on Category {
  categoryId
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultCategoryResponseFields on AttributeResultResponse {
  items {
    ...AttributeCategoryResultFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeCategoryResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute {
      ...CategoryAttributeFields
    }
    ... on ClusterAttribute {
      ...ClusterAttributeFields
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
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
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

fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters(input: \$filterAvailableAttributeInput) {
    ...AttributeFilterFields
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

fragment AttributeFilterFields on AttributeFilter {
  id
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
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}

query category(\$categoryId: Float, \$slug: String, \$userId: Int, \$hidden: YesNo, \$language: String, \$priceCalculateProductInput: PriceCalculateProductInput, \$categoryProductSearchInput: CategoryProductSearchInput, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!, \$filterAvailableAttributeInput: FilterAvailableAttributeInput) {
  category(categoryId: \$categoryId, slug: \$slug, userId: \$userId, hidden: \$hidden) {
    ...CategoryFields
  }
}`;

export const channel = `query channel(\$channelId: Int!) {
  channel(channelId: \$channelId) {
    ...ChannelFields
  }
}`;

export const channels = `query channels {
  channels {
    ...ChannelFields
  }
}`;

export const cluster = `fragment ClusterFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  attributes {
    ...AttributeResultProductResponseFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  products {
    ...ProductFields
  }
  createdAt
  lastModifiedAt
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductFields
  }
  config {
    ...ClusterConfigFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultProductResponseFields on AttributeResultResponse {
  items {
    ...AttributeResultProductFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeResultProductFields on AttributeResult {
  attribute {
    __typename
    ... on ClusterAttribute {
      ...ClusterAttributeFields
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

fragment CategoryMinimalFields on Category {
  categoryId
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment ProductFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  attributes(input: \$attributeResultSearchInput) {
    ...AttributeResultProductResponseFields
  }
  bundles {
    ...BundleFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductPriceFields
  }
  priceData {
    display
  }
  bulkPrices(input: \$userBulkPriceProductInput) {
    ...ProductPriceFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  barCode
  turnoverGroup
  taxonomy
  priceGroup
  orderable
  returnable
  physical
  hasBundle
  isBundleLeader
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  economicOrderQuantity
  orderableFrom
  orderableTo
  releaseDate
  createdAt
  lastModifiedAt
  containerClass
  surcharges {
    ...SurchargeFields
  }
}

fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductMediaFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos(search: \$mediaVideoSearchInput) {
    items {
      ...MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents(search: \$mediaDocumentSearchInput) {
    items {
      ...MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment SurchargeFields on Surcharge {
  id
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

query cluster(\$clusterId: Int, \$slug: String, \$language: String, \$applyOrderlists: Boolean, \$orderlistIds: [Int!], \$priceCalculateProductInput: PriceCalculateProductInput, \$userBulkPriceProductInput: UserBulkPriceProductInput, \$attributeResultSearchInput: AttributeResultSearchInput, \$imageSearchFilters: MediaImageProductSearchInput, \$mediaVideoSearchInput: MediaVideoProductSearchInput, \$mediaDocumentSearchInput: MediaDocumentProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  cluster(
    clusterId: \$clusterId
    slug: \$slug
    language: \$language
    applyOrderlists: \$applyOrderlists
    orderlistIds: \$orderlistIds
  ) {
    ...ClusterFields
  }
}`;

export const clusterConfig = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  ...ClusterConfigFields
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

query clusterConfig(\$clusterConfigId: Int!) {
  clusterConfig(clusterConfigId: \$clusterConfigId) {
    ...ClusterConfigResponseFields
  }
}`;

export const clusterConfigs = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  ...ClusterConfigFields
}

fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ...ClusterConfigSettingFields
  }
}

fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}

query clusterConfigs {
  clusterConfigs {
    ...ClusterConfigResponseFields
  }
}`;

export const companies = `fragment CompaniesResponseFields on CompaniesResponse {
  items {
    ...CompanyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
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
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
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

fragment ContactListFields on Contact {
  contactId
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

query companies(\$input: CompanySearchArguments, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$contactSearchArguments: ContactSearchArguments) {
  companies(input: \$input) {
    ...CompaniesResponseFields
  }
}`;

export const company = `fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
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
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
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

fragment ContactListFields on Contact {
  contactId
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

query company(\$id: Int!, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$contactSearchArguments: ContactSearchArguments) {
  company(id: \$id) {
    ...CompanyFields
  }
}`;

export const companySearch = `query companySearch(\$input: CompanySearchInput) {
  companySearch(input: \$input) {
    ...CompanySearchResponseFields
  }
}`;

export const computedOrderlists = `fragment ComputedOrderlistsResponseFields on ComputedOrderlistsResponse {
  positiveOrderlistsProductIds
  negativeOrderListsProductIds
  positiveOrderListsClusterIds
  negativeOrderListsClusterIds
  positiveOrderlistsCount
  negativeOrderlistsCount
}

query computedOrderlists(\$input: ComputedOrderlistsInput!) {
  computedOrderlists(input: \$input) {
    ...ComputedOrderlistsResponseFields
  }
}`;

export const contact = `fragment ContactFields on Contact {
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

query contact(\$id: Int!) {
  contact(id: \$id) {
    ...ContactFields
  }
}`;

export const contacts = `fragment ContactsResponseFields on ContactsResponse {
  items {
    ...ContactFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ContactFields on Contact {
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

query contacts(\$input: ContactSearchArguments) {
  contacts(input: \$input) {
    ...ContactsResponseFields
  }
}`;

export const costPrices = `fragment CostPriceResponseFields on CostPriceResponse {
  items {
    id
    priceId
    createdAt
    lastModifiedAt
    quantityFrom
    value
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

query costPrices(\$input: CostPriceSearchInput) {
  costPrices(input: \$input) {
    ...CostPriceResponseFields
  }
}`;

export const crossupsell = `fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  productFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

query crossupsell(\$id: String!) {
  crossupsell(id: \$id) {
    ...CrossupsellFields
  }
}`;

export const crossupsells = `fragment CrossupsellsResponseFields on CrossupsellsResponse {
  items {
    ...CrossupsellFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  productFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterTo {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  clusterFrom {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

query crossupsells(\$input: CrossupsellSearchInput, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!, \$priceCalculateProductInput: PriceCalculateProductInput!) {
  crossupsells(input: \$input) {
    ...CrossupsellsResponseFields
  }
}`;

export const customer = `fragment CustomerFields on Customer {
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

query customer(\$id: Int!) {
  customer(id: \$id) {
    ...CustomerFields
  }
}`;

export const customers = `fragment CustomersResponseFields on CustomersResponse {
  items {
    ...CustomerFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
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

query customers(\$input: CustomerSearchArguments) {
  customers(input: \$input) {
    ...CustomersResponseFields
  }
}`;

export const discount = `fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

query discount(\$id: String!) {
  discount(id: \$id) {
    ...DiscountFields
  }
}`;

export const discounts = `query discounts(\$input: DiscountSearchInput) {
  discounts(input: \$input) {
    ...DiscountResponseFields
  }
}`;

export const eventActionConfig = `fragment IBaseTemplateFields on IBaseTemplate {
  ... on DocumentTemplate {
    ...DocumentTemplateFields
  }
  ... on EmailTemplate {
    ...EmailTemplateFields
  }
}

fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames {
    ...LocalizedStringFields
  }
  isDefaultOrderPdf
  isDefaultQuotePdf
}

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query eventActionConfig(\$id: String!) {
  eventActionConfig(id: \$id) {
    ...IBaseTemplateFields
  }
}`;

export const eventActionConfigs = `query eventActionConfigs(\$input: EventActionConfigSearchInput!) {
  eventActionConfigs(input: \$input) {
    ...EventActionConfigResponseFields
  }
}`;

export const favoriteList = `fragment FavoriteListFields on FavoriteList {
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
        ...ClusterGridFields
      }
      ... on Product {
        ...ProductGridFields
      }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
  clusters {
    items {
      ...ClusterGridFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

query favoriteList(\$id: String!, \$language: String, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  favoriteList(id: \$id) {
    ...FavoriteListFields
  }
}`;

export const favoriteLists = `fragment FavoriteListsResponseFields on FavoriteListsResponse {
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

query favoriteLists(\$input: FavoriteListsSearchInput) {
  favoriteLists(input: \$input) {
    ...FavoriteListsResponseFields
  }
}`;

export const inventory = `fragment InventoryResponseFields on InventoryResponse {
  id
  productId
  quantity
  costPrice
  supplier
  supplierCode
  sku
  warehouseId
  location
  nextDeliveryDate
  notes
  warehouse {
    ...WarehouseFields
  }
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

query inventory(\$id: Int!) {
  inventory(id: \$id) {
    ...InventoryResponseFields
  }
}`;

export const machine = `fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ...SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ...SparePartFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ...AttributeFilterFields
    }
  }
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  slug {
    ...LocalizedStringFields
  }
  machines {
    id
    media {
      ...SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ...SparePartFields
      }
      itemsFound
      offset
      page
      pages
      start
      end
      minPrice
      maxPrice
      filters {
        ...AttributeFilterFields
      }
    }
    name {
      ...LocalizedStringFields
    }
    description {
      ...LocalizedStringFields
    }
    slug {
      ...LocalizedStringFields
    }
  }
}

fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ...LocalizedStringFields
  }
  product {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

fragment AttributeFilterFields on AttributeFilter {
  id
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
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}

query machine(\$id: String, \$slug: String, \$language: String, \$source: String, \$sourceId: String) {
  machine(
    id: \$id
    slug: \$slug
    language: \$language
    source: \$source
    sourceId: \$sourceId
  ) {
    ...SparePartsMachineFields
  }
}`;

export const machines = `fragment SparePartsMachineResponseFields on SparePartsMachineResponse {
  items {
    ...SparePartsMachineFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ...SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ...SparePartFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ...AttributeFilterFields
    }
  }
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  slug {
    ...LocalizedStringFields
  }
  machines {
    id
    media {
      ...SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ...SparePartFields
      }
      itemsFound
      offset
      page
      pages
      start
      end
      minPrice
      maxPrice
      filters {
        ...AttributeFilterFields
      }
    }
    name {
      ...LocalizedStringFields
    }
    description {
      ...LocalizedStringFields
    }
    slug {
      ...LocalizedStringFields
    }
  }
}

fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ...LocalizedStringFields
  }
  product {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

fragment AttributeFilterFields on AttributeFilter {
  id
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
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}

query machines(\$input: SearchSparePartsMachineInput) {
  machines(input: \$input) {
    ...SparePartsMachineResponseFields
  }
}`;

export const magicToken = `fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}

query magicToken(\$id: String!) {
  magicToken(id: \$id) {
    ...MagicTokenFields
  }
}`;

export const magicTokens = `fragment MagicTokenResponseFields on MagicTokenResponse {
  items {
    ...MagicTokenFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}

query magicTokens(\$input: MagicTokenSearchInput) {
  magicTokens(input: \$input) {
    ...MagicTokenResponseFields
  }
}`;

export const media = `fragment MediaFields on Media {
  image {
    ...MediaImageFields
  }
  images {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  video {
    ...MediaVideoFields
  }
  videos {
    items {
      ...MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  document {
    ...MediaDocumentFields
  }
  documents {
    items {
      ...MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  attachment {
    ...MediaAttachmentFields
  }
  attachments {
    items {
      ...MediaAttachmentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment MediaAttachmentFields on MediaAttachment {
  id
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}

query media {
  media {
    ...MediaFields
  }
}`;

export const mediaDocument = `fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaDocument(\$mediaId: String!) {
  mediaDocument(mediaId: \$mediaId) {
    ...MediaDocumentFields
  }
}`;

export const mediaDocuments = `fragment PaginatedMediaDocumentResponseFields on PaginatedMediaDocumentResponse {
  items {
    ...MediaDocumentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaDocuments(\$search: MediaDocumentSearchInput) {
  mediaDocuments(search: \$search) {
    ...PaginatedMediaDocumentResponseFields
  }
}`;

export const mediaImage = `fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaImage(\$mediaId: String!) {
  mediaImage(mediaId: \$mediaId) {
    ...MediaImageFields
  }
}`;

export const mediaImages = `fragment PaginatedMediaImageResponseFields on PaginatedMediaImageResponse {
  items {
    ...MediaImageFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaImages(\$search: MediaImageProductSearchInput) {
  mediaImages(search: \$search) {
    ...PaginatedMediaImageResponseFields
  }
}`;

export const mediaVideo = `fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaVideo(\$mediaId: String!) {
  mediaVideo(mediaId: \$mediaId) {
    ...MediaVideoFields
  }
}`;

export const mediaVideos = `fragment PaginatedMediaVideoResponseFields on PaginatedMediaVideoResponse {
  items {
    ...MediaVideoFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

query mediaVideos(\$search: MediaVideoSearchInput) {
  mediaVideos(search: \$search) {
    ...PaginatedMediaVideoResponseFields
  }
}`;

export const order = `fragment OrderFields on Order {
  id
  media {
    ...OrderMediaFields
  }
  userId
  accountManagerId
  cartId
  channelId
  uuid
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  createdAt
  statusDate
  postageData {
    ...OrderPostageDataFields
  }
  paymentData {
    ...OrderPaymentDataFields
  }
  total {
    ...OrderTotalsFields
  }
  items {
    ...OrderItemFields
  }
  shipments {
    ...ShipmentFields
  }
  addresses {
    ...AddressFields
  }
  sources {
    ...SourceFields
  }
  invoiceUserId
  validUntil
  companyId
  lastModifiedAt
  originalOrderId
  exportedAt
  exportStatus
  exportMessage
  orderAddresses {
    ...OrderAddressFields
  }
}

fragment OrderMediaFields on OrderMedia {
  attachments {
    items {
      id
      sparePartsMachineId
      alt {
        language
        value
      }
      description {
        language
        value
      }
      tags {
        language
        values
      }
      type
      createdAt
      lastModifiedAt
      priority
      attachments {
        language
        originalUrl
        mimeType
      }
      orderId
      companyId
      customerId
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment OrderPostageDataFields on OrderPostageData {
  method
  taxPercentage
  requestDate
  gross
  net
  tax
  partialDeliveryAllowed
  pickUpLocationId
  carrier
  overruled
  warehouse {
    ...WarehouseFields
  }
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}

fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}

fragment OrderItemFields on OrderItem {
  id
  orderId
  uuid
  class
  productId
  parentOrderItemId
  quantity
  sku
  notes
  name
  supplier
  supplierCode
  manufacturer
  manufacturerCode
  eanCode
  originalPrice
  price
  priceTotal
  priceNet
  priceTotalNet
  customerPrice
  costPrice
  discount
  tax
  taxPercentage
  taxCode
  isBonus
  minimumQuantity
  unit
  package
  packageUnit
  packageUnitQuantity
  purchaseUnit
  purchaseMinimumQuantity
  requestDate
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
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

fragment SourceFields on Source {
  id
  name
}

fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
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
  code
  notes
  type
  icp
  url
  name
}

query order(\$orderId: Int, \$orderUUID: String, \$language: String, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  order(orderId: \$orderId, orderUUID: \$orderUUID) {
    ...OrderFields
  }
}`;

export const orderAddress = `fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
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
  code
  notes
  type
  icp
  url
  name
}

query orderAddress(\$id: Int!, \$orderId: Int!) {
  orderAddress(id: \$id, orderId: \$orderId) {
    ...OrderAddressFields
  }
}`;

export const orderAddresses = `fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
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
  code
  notes
  type
  icp
  url
  name
}

query orderAddresses(\$orderId: Int!, \$type: AddressType) {
  orderAddresses(orderId: \$orderId, type: \$type) {
    ...OrderAddressFields
  }
}`;

export const orderGetPDF = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}

query orderGetPDF(\$orderId: Int!) {
  orderGetPDF(orderId: \$orderId) {
    ...Base64FileFields
  }
}`;

export const orderlist = `fragment OrderlistFields on Orderlist {
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

query orderlist(\$id: Int!) {
  orderlist(id: \$id) {
    ...OrderlistFields
  }
}`;

export const orderlists = `fragment OrderlistsResponseFields on OrderlistsResponse {
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

query orderlists(\$input: OrderlistSearchInput) {
  orderlists(input: \$input) {
    ...OrderlistsResponseFields
  }
}`;

export const orderRevision = `query orderRevision(\$orderId: Int!, \$revisionNumber: Int!) {
  orderRevision(orderId: \$orderId, revisionNumber: \$revisionNumber) {
    orderId
    revisionNumber
    createdByContactId
    createdByCustomerId
    createdByAdminUserId
    createdByAdminUser {
      userId
      firstName
      lastName
      email
    }
    createdAt
    createdFromRevisionNumber
    snapshot
    createdByContact {
      contactId
      firstName
      lastName
      email
    }
    createdByCustomer {
      customerId
      firstName
      lastName
      email
    }
  }
} `;

export const orderRevisions = `query orderRevisions(\$input: OrderRevisionSearchInput!) {
  orderRevisions(input: \$input) {
    items {
      orderId
      revisionNumber
      createdByContactId
      createdByCustomerId
      createdByAdminUserId
      createdByAdminUser {
        userId
        firstName
        lastName
        email
      }
      createdAt
      createdFromRevisionNumber
      snapshot
      createdByContact {
        contactId
        firstName
        lastName
        email
      }
      createdByCustomer {
        customerId
        firstName
        lastName
        email
      }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
} `;

export const orders = `fragment OrderResponseFields on OrderResponse {
  items {
    ...OrderDataFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment OrderDataFields on Order {
  id
  userId
  accountManagerId
  cartId
  channelId
  uuid
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  createdAt
  statusDate
  total {
    ...OrderTotalsFields
  }
  invoiceUserId
  validUntil
  companyId
  sources {
    ...SourceFields
  }
  items {
    quantity
    class
    productId
    sku
    isBonus
    name
    supplier
    supplierCode
    manufacturer
    manufacturerCode
    eanCode
  }
}

fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}

fragment SourceFields on Source {
  id
  name
}

query orders(\$input: OrderSearchArguments) {
  orders(input: \$input) {
    ...OrderResponseFields
  }
}`;

export const orderStatus = `query orderStatus(\$input: OrderStatusSearchByInput!) {
  orderStatus(input: \$input) {
    ...OrderStatusFields
  }
}`;

export const orderStatuses = `query orderStatuses(\$input: OrderStatusesSearchInput) {
  orderStatuses(input: \$input) {
    ...OrderStatusesResponseFields
  }
}`;

export const orderStatusSet = `query orderStatusSet(\$input: OrderStatusSetSearchByInput!) {
  orderStatusSet(input: \$input) {
    ...OrderStatusSetFields
  }
}`;

export const orderStatusSets = `query orderStatusSets(\$input: OrderStatusSetsSearchInput) {
  orderStatusSets(input: \$input) {
    ...OrderStatusSetsResponseFields
  }
}`;

export const payment = `fragment PaymentFields on Payment {
  id
  userId
  anonymousId
  paymentId
  orderId
  amount
  currency
  method
  status
  transactions {
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
  id
  transactionId
  paymentId
  orderId
  amount
  currency
  description
  timestamp
  type
  provider
  status
}

query payment(\$searchBy: SearchByInput!) {
  payment(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;

export const payments = `fragment PaymentsResponseFields on PaymentsResponse {
  items {
    ...PaymentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PaymentFields on Payment {
  id
  userId
  anonymousId
  paymentId
  orderId
  amount
  currency
  method
  status
  transactions {
    ...TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

fragment TransactionFields on Transaction {
  id
  transactionId
  paymentId
  orderId
  amount
  currency
  description
  timestamp
  type
  provider
  status
}

query payments(\$input: PaymentsSearchInput) {
  payments(input: \$input) {
    ...PaymentsResponseFields
  }
}`;

export const payMethod = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query payMethod(\$id: Int!) {
  payMethod(id: \$id) {
    ...PayMethodFields
  }
}`;

export const payMethods = `fragment PayMethodsResponseFields on PayMethodsResponse {
  items {
    ...PayMethodFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query payMethods(\$input: PayMethodSearchInput) {
  payMethods(input: \$input) {
    ...PayMethodsResponseFields
  }
}`;

export const price = `fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ...BulkCostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query price(\$id: String!) {
  price(id: \$id) {
    ...PriceFields
  }
}`;

export const priceCalculate = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

query priceCalculate(\$input: PriceCalculateInput!) {
  priceCalculate(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const priceDefault = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

query priceDefault(\$input: PriceCalculateDefaultInput!) {
  priceDefault(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const priceExplain = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

query priceExplain(\$input: PriceCalculateInput!) {
  priceExplain(input: \$input) {
    ...ProductPriceFields
  }
}`;

export const prices = `fragment PriceResponseFields on PriceResponse {
  items {
    ...PriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ...BulkCostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

query prices(\$input: PriceSearchInput) {
  prices(input: \$input) {
    ...PriceResponseFields
  }
}`;

export const pricesheet = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ContactFields on Contact {
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

fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
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
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
}

fragment ContactListFields on Contact {
  contactId
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

query pricesheet(\$id: String!) {
  pricesheet(id: \$id) {
    ...PricesheetFields
  }
}`;

export const pricesheets = `fragment PricesheetResponseFields on PricesheetResponse {
  items {
    ...PricesheetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ContactFields on Contact {
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

fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
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
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
}

fragment ContactListFields on Contact {
  contactId
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

query pricesheets(\$input: PricesheetSearchInput) {
  pricesheets(input: \$input) {
    ...PricesheetResponseFields
  }
}`;

export const pricesheetsEffective = `fragment PricesheetResponseFields on PricesheetResponse {
  items {
    ...PricesheetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  priority
  readonly
  contactsPaginated {
    items {
      ...ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customersPaginated {
    items {
      ...CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companiesPaginated {
    items {
      ...CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ContactFields on Contact {
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

fragment CompanyFields on Company {
  companyId
  addresses {
    ...AddressFields
  }
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
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts(input: \$contactSearchArguments) {
    items {
      ...ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact {
      ...ContactListFields
    }
  }
}

fragment ContactListFields on Contact {
  contactId
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

query pricesheetsEffective(\$input: PricesheetsEffectiveInput!) {
  pricesheetsEffective(input: \$input) {
    ...PricesheetResponseFields
  }
}`;

export const product = `fragment ProductFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  attributes(input: \$attributeResultSearchInput) {
    ...AttributeResultProductResponseFields
  }
  bundles {
    ...BundleFields
  }
  category {
    ...CategoryMinimalFields
  }
  categoryPath {
    ...CategoryMinimalFields
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductPriceFields
  }
  priceData {
    display
  }
  bulkPrices(input: \$userBulkPriceProductInput) {
    ...ProductPriceFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  barCode
  turnoverGroup
  taxonomy
  priceGroup
  orderable
  returnable
  physical
  hasBundle
  isBundleLeader
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  economicOrderQuantity
  orderableFrom
  orderableTo
  releaseDate
  createdAt
  lastModifiedAt
  containerClass
  surcharges {
    ...SurchargeFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment AttributeResultProductResponseFields on AttributeResultResponse {
  items {
    ...AttributeResultProductFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment AttributeResultProductFields on AttributeResult {
  attribute {
    __typename
    ... on ClusterAttribute {
      ...ClusterAttributeFields
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

fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ...BundlePriceFields
  }
  items {
    ...BundleItemFields
  }
}

fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}

fragment BundleItemFields on BundleItem {
  productId
  price {
    ...BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ...ProductCartFields
  }
}

fragment ProductCartFields on Product {
  ...IBaseProductCartFields
  productId
  clusterId
  cluster {
    clusterId
    slugs {
      ...LocalizedStringFields
    }
  }
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}

fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment CategoryMinimalFields on Category {
  categoryId
  name(language: \$language) {
    ...LocalizedStringFields
  }
  description(language: \$language) {
    ...LocalizedStringFields
  }
  shortDescription(language: \$language) {
    ...LocalizedStringFields
  }
  slug(language: \$language) {
    ...LocalizedStringFields
  }
}

fragment ProductMediaFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos(search: \$mediaVideoSearchInput) {
    items {
      ...MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents(search: \$mediaDocumentSearchInput) {
    items {
      ...MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}

fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}

fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice {
      ...BulkCostPriceFields
    }
    ... on BulkPrice {
      ...BulkPriceFields
    }
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment SurchargeFields on Surcharge {
  id
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}

query product(\$productId: Int, \$slug: String, \$sku: String, \$language: String, \$applyOrderlists: Boolean, \$orderlistIds: [Int!], \$priceCalculateProductInput: PriceCalculateProductInput, \$userBulkPriceProductInput: UserBulkPriceProductInput, \$attributeResultSearchInput: AttributeResultSearchInput, \$imageSearchFilters: MediaImageProductSearchInput, \$mediaVideoSearchInput: MediaVideoProductSearchInput, \$mediaDocumentSearchInput: MediaDocumentProductSearchInput, \$imageVariantFilters: TransformationsInput!) {
  product(
    productId: \$productId
    slug: \$slug
    sku: \$sku
    language: \$language
    applyOrderlists: \$applyOrderlists
    orderlistIds: \$orderlistIds
  ) {
    ...ProductFields
  }
}`;

export const products = `fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster {
      ...ClusterGridFields
    }
    ... on Product {
      ...ProductGridFields
    }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters(input: \$filterAvailableAttributeInput) {
    ...AttributeFilterFields
  }
}

fragment ClusterGridFields on Cluster {
  ...IBaseProductFields
  clusterId
  categoryId
  products {
    ...ProductGridFields
  }
  options {
    ...ClusterOptionFields
  }
  defaultProduct {
    ...ProductGridFields
  }
}

fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ...LocalizedStringFields
  }
  metadataDescriptions {
    ...LocalizedStringFields
  }
  metadataCanonicalUrls {
    ...LocalizedStringFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ProductGridFields on Product {
  ...IBaseProductFields
  productId
  categoryId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  packageDescriptions {
    language
    value
  }
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}

fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}

fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ...MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  tags {
    ...LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

fragment ProductGridPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on Discount {
      ...DiscountFields
    }
  }
  taxCode
  quantity
}

fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}

fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ...ProductClusterOptionsFields
  }
  names {
    ...LocalizedStringFields
  }
  descriptions {
    ...LocalizedStringFields
  }
  shortDescriptions {
    ...LocalizedStringFields
  }
}

fragment ProductClusterOptionsFields on Product {
  language
  class
  hidden
  names {
    ...LocalizedStringFields
  }
  slugs {
    ...LocalizedStringFields
  }
  sku
  productId
  inventory {
    ...ProductInventoryFields
  }
  media {
    ...ProductMediaImagesOnlyFields
  }
  price(input: \$priceCalculateProductInput) {
    ...ProductGridPriceFields
  }
  priceData {
    display
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
}

fragment AttributeFilterFields on AttributeFilter {
  id
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
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}

query products(\$input: ProductSearchInput, \$language: String, \$priceCalculateProductInput: PriceCalculateProductInput, \$imageSearchFilters: MediaImageProductSearchInput, \$imageVariantFilters: TransformationsInput!, \$filterAvailableAttributeInput: FilterAvailableAttributeInput) {
  products(input: \$input) {
    ...ProductsResponseFields
  }
}`;

export const productSurcharges = `fragment SurchargeProductResponseFields on SurchargeProductResponse {
  items {
    ...SurchargeProduct
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

query productSurcharges(\$productId: Int!, \$input: SurchargeSearchInput) {
  productSurcharges(productId: \$productId, input: \$input) {
    ...SurchargeProductResponseFields
  }
}`;

export const purchaseAuthorizationConfig = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
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

query purchaseAuthorizationConfig(\$id: String!) {
  purchaseAuthorizationConfig(id: \$id) {
    ...PurchaseAuthorizationConfigFields
  }
}`;

export const purchaseAuthorizationConfigs = `fragment PurchaseAuthorizationConfigResponseFields on PurchaseAuthorizationConfigResponse {
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

export const quoteGetPDF = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}

query quoteGetPDF(\$quoteId: Int!) {
  quoteGetPDF(orderId: \$quoteId) {
    ...Base64FileFields
  }
}`;

export const role = `query role(\$id: ID!) {
  role(id: \$id) {
    ...RoleFields
  }
}`;

export const roleDefinition = `query roleDefinition(\$id: ID!) {
  roleDefinition(id: \$id) {
    ...RoleDefinitionFields
  }
}`;

export const roleDefinitions = `query roleDefinitions(\$input: RoleDefinitionSearchInput) {
  roleDefinitions(input: \$input) {
    ...RoleDefinitionResponseFields
  }
}`;

export const roles = `query roles(\$input: RoleSearchInput!) {
  roles(input: \$input) {
    ...RoleResponseFields
  }
}`;

export const shipment = `fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

query shipment(\$id: String!) {
  shipment(id: \$id) {
    ...ShipmentFields
  }
}`;

export const shipmentItem = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

query shipmentItem(\$id: String!) {
  shipmentItem(id: \$id) {
    ...ShipmentItemFields
  }
}`;

export const shipmentItems = `fragment ShipmentItemResponseFields on ShipmentItemResponse {
  items {
    ...ShipmentItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

query shipmentItems(\$input: ShipmentItemSearchInput) {
  shipmentItems(input: \$input) {
    ...ShipmentItemResponseFields
  }
}`;

export const shipments = `fragment ShipmentResponseFields on ShipmentResponse {
  items {
    ...ShipmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ...ShipmentItemFields
  }
  trackAndTraces {
    ...TrackAndTraceFields
  }
}

fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

query shipments(\$input: ShipmentSearchInput) {
  shipments(input: \$input) {
    ...ShipmentResponseFields
  }
}`;

export const shop = `query shop(\$shopId: Int!) {
  shop(shopId: \$shopId) {
    ...ShopFields
  }
}`;

export const shops = `query shops {
  shops {
    ...ShopFields
  }
}`;

export const surcharge = `fragment SurchargeFields on Surcharge {
  id
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query surcharge(\$id: String!) {
  surcharge(id: \$id) {
    ...SurchargeFields
  }
}`;

export const surcharges = `fragment SurchargesResponseFields on SurchargesResponse {
  items {
    ...SurchargeProductResponse
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

query surcharges(\$input: SurchargeSearchInput) {
  surcharges(input: \$input) {
    ...SurchargesResponseFields
  }
}`;

export const tax = `fragment TaxFields on Tax {
  id
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

query tax(\$id: String, \$code: TaxCode, \$zone: String) {
  tax(id: \$id, code: \$code, zone: \$zone) {
    ...TaxFields
  }
}`;

export const taxes = `fragment TaxesResponseFields on TaxesResponse {
  items {
    ...TaxFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment TaxFields on Tax {
  id
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

query taxes(\$input: TaxSearchInput) {
  taxes(input: \$input) {
    ...TaxesResponseFields
  }
}`;

export const template = `fragment IBaseTemplateFields on IBaseTemplate {
  ... on DocumentTemplate {
    ...DocumentTemplateFields
  }
  ... on EmailTemplate {
    ...EmailTemplateFields
  }
}

fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames {
    ...LocalizedStringFields
  }
  isDefaultOrderPdf
  isDefaultQuotePdf
}

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query template(\$id: String!) {
  template(id: \$id) {
    ...IBaseTemplateFields
  }
}`;

export const templateErrorLog = `query templateErrorLog(\$id: String!) {
  templateErrorLog(id: \$id) {
    id
    stackTrace
    createdAt
    eventInstance
    topicName
    errorType
    errorMessage
    templateId
    fieldName
  }
} `;

export const templateErrorLogs = `query templateErrorLogs(\$input: TemplateErrorLogSearchInput!) {
  templateErrorLogs(input: \$input) {
    items {
      id
      stackTrace
      createdAt
      eventInstance
      topicName
      errorType
      errorMessage
      templateId
      fieldName
    }
    itemsFound
    page
    offset
    pages
    start
    end
  }
} `;

export const templateErrorLogStats = `query templateErrorLogStats {
  templateErrorLogStats {
    totalCount
    renderErrorCount
    customQueryErrorCount
    oldestEntry
    newestEntry
  }
} `;

export const templates = `query templates(\$input: TemplateSearchInput!) {
  templates(input: \$input) {
    ...TemplateResponseFields
  }
}`;

export const tenant = `fragment TenantFields on Tenant {
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

export const tender = `query tender(\$tenderId: String, \$orderId: Int) {
  tender(tenderId: \$tenderId, orderId: \$orderId) {
    ...TenderFields
  }
}`;

export const ticket = `fragment TicketFields on Ticket {
  id
  titles {
    language
    value
  }
  descriptions {
    language
    value
  }
  buttonLabels {
    language
    value
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
  createdAt
  lastModifiedAt
  pickedUpAt
  completedAt
  lastModifiedByAdminUserId
  createdByAdminUserId
}

query ticket(\$id: ID!) {
  ticket(id: \$id) {
    ...TicketFields
  }
}`;

export const tickets = `fragment TicketResponseFields on TicketResponse {
  items {
    ...TicketFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment TicketFields on Ticket {
  id
  titles {
    language
    value
  }
  descriptions {
    language
    value
  }
  buttonLabels {
    language
    value
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
  createdAt
  lastModifiedAt
  pickedUpAt
  completedAt
  lastModifiedByAdminUserId
  createdByAdminUserId
}

query tickets(\$input: TicketSearchInput) {
  tickets(input: \$input) {
    ...TicketResponseFields
  }
}`;

export const trackAndTrace = `fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

query trackAndTrace(\$id: String!) {
  trackAndTrace(id: \$id) {
    ...TrackAndTraceFields
  }
}`;

export const trackAndTraces = `fragment TrackAndTraceResponseFields on TrackAndTraceResponse {
  items {
    ...TrackAndTraceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  carrier {
    id
    name
    type
    trackAndTraceURL
    logo
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
  }
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}

query trackAndTraces(\$input: TrackAndTraceSearchInput) {
  trackAndTraces(input: \$input) {
    ...TrackAndTraceResponseFields
  }
}`;

export const user = `fragment ContactFields on Contact {
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

query user(\$id: Int, \$login: String) {
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

export const valueset = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ...ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

query valueset(\$id: Int!) {
  valueset(id: \$id) {
    ...ValuesetFields
  }
}`;

export const valuesetItems = `fragment ValuesetItemResponseFields on ValuesetItemResponse {
  items {
    ValuesetItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

query valuesetItems(\$input: ValuesetItemSearchInput) {
  valuesetItems(input: \$input) {
    ...ValuesetItemResponseFields
  }
}`;

export const valuesets = `fragment ValuesetResponseFields on ValuesetResponse {
  items {
    ...ValuesetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ...ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

query valuesets(\$input: ValuesetSearchInput) {
  valuesets(input: \$input) {
    ...ValuesetResponseFields
  }
}`;

export const viewer = `fragment ContactFields on Contact {
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

query viewer(\$contactAttributesInput: AttributeResultSearchInput, \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput, \$companyAttributesInput: AttributeResultSearchInput, \$customerAttributesInput: AttributeResultSearchInput, \$contactCompaniesSearchInput: ContactCompaniesSearchInput) {
  viewer {
    __typename
    ... on Contact {
      ...ContactFields
    }
    ... on Customer {
      ...CustomerFields
    }
  }
}`;

export const warehouse = `fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

query warehouse(\$id: Int!) {
  warehouse(id: \$id) {
    ...WarehouseFields
  }
}`;

export const warehouses = `fragment WarehousesResponseFields on WarehousesResponse {
  items {
    ...WarehouseFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ...WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  businessHours {
    ...BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}

fragment WarehouseAddressFields on WarehouseAddress {
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
  icp
  url
  name
}

fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}

query warehouses(\$input: WarehousesSearchInput) {
  warehouses(input: \$input) {
    ...WarehousesResponseFields
  }
}`;

export const zoneTaxCode = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

query zoneTaxCode(\$id: String!) {
  zoneTaxCode(id: \$id) {
    ...ZoneTaxCodeFields
  }
}`;

export const zoneTaxCodes = `fragment ZoneTaxCodeResponseFields on ZoneTaxCodeResponse {
  items {
    ...ZoneTaxCodeFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

query zoneTaxCodes(\$input: ZoneTaxCodeSearchInput) {
  zoneTaxCodes(input: \$input) {
    ...ZoneTaxCodeResponseFields
  }
}`;


export const queries = {
  addressesByCompanyId,
  addressesByCustomerId,
  addressesByOrderId,
  adminUser,
  adminUsers,
  adminUserTenant,
  adminUserViewer,
  attribute,
  attributeDescription,
  attributeDescriptions,
  attributeResultByCategoryId,
  attributeResultByClusterId,
  attributeResultByCompanyId,
  attributeResultByContactId,
  attributeResultByCustomerId,
  attributeResultByProductId,
  attributes,
  attributesByProductId,
  authentication,
  bulkCostPrices,
  bulkPrices,
  bundle,
  bundles,
  businessRule,
  businessRuleDecisionTable,
  businessRuleFieldDefinitions,
  businessRuleJDM,
  businessRules,
  carrier,
  carriers,
  cart,
  carts,
  categories,
  category,
  channel,
  channels,
  cluster,
  clusterConfig,
  clusterConfigs,
  companies,
  company,
  companySearch,
  computedOrderlists,
  contact,
  contacts,
  costPrices,
  crossupsell,
  crossupsells,
  customer,
  customers,
  discount,
  discounts,
  eventActionConfig,
  eventActionConfigs,
  favoriteList,
  favoriteLists,
  inventory,
  machine,
  machines,
  magicToken,
  magicTokens,
  media,
  mediaDocument,
  mediaDocuments,
  mediaImage,
  mediaImages,
  mediaVideo,
  mediaVideos,
  order,
  orderAddress,
  orderAddresses,
  orderGetPDF,
  orderlist,
  orderlists,
  orderRevision,
  orderRevisions,
  orders,
  orderStatus,
  orderStatuses,
  orderStatusSet,
  orderStatusSets,
  payment,
  payments,
  payMethod,
  payMethods,
  price,
  priceCalculate,
  priceDefault,
  priceExplain,
  prices,
  pricesheet,
  pricesheets,
  pricesheetsEffective,
  product,
  products,
  productSurcharges,
  purchaseAuthorizationConfig,
  purchaseAuthorizationConfigs,
  quoteGetPDF,
  role,
  roleDefinition,
  roleDefinitions,
  roles,
  shipment,
  shipmentItem,
  shipmentItems,
  shipments,
  shop,
  shops,
  surcharge,
  surcharges,
  tax,
  taxes,
  template,
  templateErrorLog,
  templateErrorLogs,
  templateErrorLogStats,
  templates,
  tenant,
  tender,
  ticket,
  tickets,
  trackAndTrace,
  trackAndTraces,
  user,
  valueset,
  valuesetItems,
  valuesets,
  viewer,
  warehouse,
  warehouses,
  zoneTaxCode,
  zoneTaxCodes
};

export default queries;

