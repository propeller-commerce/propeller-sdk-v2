/* Auto-generated. Do not edit. */
export const document: string = `fragment RoleDefinitionFields on RoleDefinition {
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

mutation roleDefinitionUpdate(\$id: ID!, \$input: RoleDefinitionUpdateInput!) {
  roleDefinitionUpdate(id: \$id, input: \$input) {
    ...RoleDefinitionFields
  }
}`;
