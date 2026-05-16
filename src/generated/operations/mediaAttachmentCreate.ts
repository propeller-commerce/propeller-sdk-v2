/* Auto-generated. Do not edit. */
export const document = `fragment MediaAttachmentFields on MediaAttachment {
  id
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
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}

mutation mediaAttachmentCreate(\$input: MediaAttachmentInput!) {
  mediaAttachmentCreate(input: \$input) {
    ...MediaAttachmentFields
  }
}`;
