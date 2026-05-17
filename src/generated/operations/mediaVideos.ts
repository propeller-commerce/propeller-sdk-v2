/* Auto-generated. Do not edit. */
export const document: string = `fragment PaginatedMediaVideoResponseFields on PaginatedMediaVideoResponse {
  items {
    ...MediaVideoFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaVideoFields on MediaVideo {
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

query mediaVideos(\$search: MediaVideoSearchInput) {
  mediaVideos(search: \$search) {
    ...PaginatedMediaVideoResponseFields
  }
}`;
