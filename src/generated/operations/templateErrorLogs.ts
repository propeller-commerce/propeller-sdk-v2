/* Auto-generated. Do not edit. */
export const document: string = `query templateErrorLogs(\$input: TemplateErrorLogSearchInput!) {
  templateErrorLogs(input: \$input) {
    items {
      id
      stackTrace
      createdAt
      eventInstance
      topicName
      errorType
      errorMessage
      templateId
      fieldName
    }
    itemsFound
    page
    offset
    pages
    start
    end
  }
} `;
