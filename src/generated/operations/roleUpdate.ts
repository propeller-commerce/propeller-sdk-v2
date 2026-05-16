/* Auto-generated. Do not edit. */
export const document = `fragment RoleFields on Role {
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

mutation roleUpdate(\$id: ID!, \$input: RoleUpdateInput!) {
  roleUpdate(id: \$id, input: \$input) {
    ...RoleFields
  }
}`;
