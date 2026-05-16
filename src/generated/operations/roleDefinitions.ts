/* Auto-generated. Do not edit. */
export const document = `fragment RoleDefinitionResponseFields on RoleDefinitionResponse {
  items {
    ...RoleDefinitionFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment RoleDefinitionFields on RoleDefinition {
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

query roleDefinitions(\$input: RoleDefinitionSearchInput) {
  roleDefinitions(input: \$input) {
    ...RoleDefinitionResponseFields
  }
}`;
