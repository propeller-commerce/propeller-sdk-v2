/* Auto-generated. Do not edit. */
export const document = `fragment DocumentTemplateFields on DocumentTemplate {
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

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation documentTemplateUpdate(\$id: String!, \$input: DocumentTemplateUpdateInput!) {
  documentTemplateUpdate(id: \$id, input: \$input) {
    ...DocumentTemplateFields
  }
}`;
