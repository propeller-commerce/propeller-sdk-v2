/* Auto-generated. Do not edit. */
export const document = `fragment RoleDefinitionFields on RoleDefinition {
  id
  name
  descriptions {
    ...LocalizedStringFields
  }
  defaultAccess
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query roleDefinition(\$id: ID!) {
  roleDefinition(id: \$id) {
    ...RoleDefinitionFields
  }
}`;
