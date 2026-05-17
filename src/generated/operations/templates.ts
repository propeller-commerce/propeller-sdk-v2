/* Auto-generated. Do not edit. */
export const document: string = `fragment TemplateResponseFields on TemplateResponse {
  items {
    ...IBaseTemplateFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment IBaseTemplateFields on IBaseTemplate {
  ... on DocumentTemplate {
    ...DocumentTemplateFields
  }
  ... on EmailTemplate {
    ...EmailTemplateFields
  }
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

fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment EmailTemplateFields on EmailTemplate {
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

query templates(\$input: TemplateSearchInput!) {
  templates(input: \$input) {
    ...TemplateResponseFields
  }
}`;
