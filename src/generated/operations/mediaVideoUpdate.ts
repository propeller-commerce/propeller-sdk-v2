/* Auto-generated. Do not edit. */
export const document: string = `fragment MediaVideoFields on MediaVideo {
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

mutation mediaVideoUpdate(\$input: UpdateMediaVideoInput!) {
  mediaVideoUpdate(input: \$input) {
    ...MediaVideoFields
  }
}`;
