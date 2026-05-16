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

mutation customerCsvImport(\$input: CustomerCsvInput!) {
  customerCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
