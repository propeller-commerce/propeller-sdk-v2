/* Auto-generated. Do not edit. */
export const document = `fragment EmailTemplateFields on EmailTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  subjects {
    ...LocalizedStringFields
  }
  from {
    email
    names {
      ...LocalizedStringFields
    }
  }
  tos {
    email
    name
    contactId
    customerId
    adminUserId
  }
  ccs {
    email
    name
    contactId
    customerId
    adminUserId
  }
  bccs {
    email
    name
    contactId
    customerId
    adminUserId
  }
  attachments {
    ...DocumentTemplateFields
  }
}

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents {
    ...LocalizedTemplateContentFields
  }
  names {
    ...LocalizedStringFields
  }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames {
    ...LocalizedStringFields
  }
  isDefaultOrderPdf
  isDefaultQuotePdf
}

mutation emailTemplateRemoveAttachment(\$id: String!, \$documentTemplateId: String!) {
  emailTemplateRemoveAttachment(id: \$id, documentTemplateId: \$documentTemplateId) {
    ...EmailTemplateFields
  }
}`;
