/* Auto-generated. Do not edit. */
export const document: string = `fragment AttributeDescriptionResponseFields on AttributeDescriptionResponse {
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
