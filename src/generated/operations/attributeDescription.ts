/* Auto-generated. Do not edit. */
export const document: string = `fragment AttributeDescriptionFields on AttributeDescription {
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
