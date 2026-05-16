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

mutation priceCsvImport(\$input: PriceCsvInput!) {
  priceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
