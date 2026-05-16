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

mutation contactCsvImport(\$input: ContactCsvInput!) {
  contactCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
