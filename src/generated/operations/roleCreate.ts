/* Auto-generated. Do not edit. */
export const document: string = `fragment RoleFields on Role {
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

mutation roleCreate(\$input: RoleCreateInput!) {
  roleCreate(input: \$input) {
    ...RoleFields
  }
}`;
