/* Auto-generated. Do not edit. */
export const document: string = `fragment RoleResponseFields on RoleResponse {
  items {
    ...RoleFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment RoleFields on Role {
  id
  roleDefinition {
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
  roleDefinitionId
  userId
  access
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query roles(\$input: RoleSearchInput!) {
  roles(input: \$input) {
    ...RoleResponseFields
  }
}`;
