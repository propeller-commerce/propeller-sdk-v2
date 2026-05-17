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

mutation discountCsvImport(\$input: DiscountCsvInput!) {
  discountCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
