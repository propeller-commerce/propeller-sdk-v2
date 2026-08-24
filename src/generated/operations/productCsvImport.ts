/* Auto-generated. Do not edit. */
export const document: string = `fragment CsvImportResponseFields on CsvImportResponse {
  importedCount
  errors {
    code
    messages
    record
    rowNumber
  }
}

mutation productCsvImport(\$input: ProductCsvInput!) {
  productCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
