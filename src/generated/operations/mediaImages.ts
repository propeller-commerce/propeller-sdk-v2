/* Auto-generated. Do not edit. */
export const document: string = `fragment PaginatedMediaImageResponseFields on PaginatedMediaImageResponse {
  items {
    ...MediaImageFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt(language: \$language) {
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
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
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

query mediaImages(\$search: MediaImageSearchInput, \$language: String, \$imageVariantFilters: TransformationsInput!) {
  mediaImages(search: \$search) {
    ...PaginatedMediaImageResponseFields
  }
}`;
