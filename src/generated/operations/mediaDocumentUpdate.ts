/* Auto-generated. Do not edit. */
export const document = `fragment MediaDocumentFields on MediaDocument {
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
  documents {
    language
    originalUrl
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

mutation mediaDocumentUpdate(\$input: UpdateMediaDocumentInput!) {
  mediaDocumentUpdate(input: \$input) {
    ...MediaDocumentFields
  }
}`;
