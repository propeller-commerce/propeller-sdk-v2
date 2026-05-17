/* Auto-generated. Do not edit. */
export const document: string = `fragment PaginatedMediaDocumentResponseFields on PaginatedMediaDocumentResponse {
  items {
    ...MediaDocumentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaDocumentFields on MediaDocument {
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

query mediaDocuments(\$search: MediaDocumentSearchInput) {
  mediaDocuments(search: \$search) {
    ...PaginatedMediaDocumentResponseFields
  }
}`;
