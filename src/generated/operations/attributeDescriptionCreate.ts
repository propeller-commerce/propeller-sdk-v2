/* Auto-generated. Do not edit. */
export const document = `fragment AttributeDescriptionFields on AttributeDescription {
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

mutation attributeDescriptionCreate(\$input: AttributeDescriptionCreateInput!) {
  attributeDescriptionCreate(input: \$input) {
    ...AttributeDescriptionFields
  }
}`;
