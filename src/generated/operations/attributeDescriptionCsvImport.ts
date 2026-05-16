/* Auto-generated. Do not edit. */
export const document = `fragment CsvImportResponseFields on CsvImportResponse {
  importedCount
  errors {
    code
    messages
    record
    rowNumber
  }
}

mutation attributeDescriptionCsvImport(\$input: AttributeDescriptionCsvInput!) {
  attributeDescriptionCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
