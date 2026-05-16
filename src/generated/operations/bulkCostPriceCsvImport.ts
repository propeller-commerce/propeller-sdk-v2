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

mutation bulkCostPriceCsvImport(\$input: BulkCostPriceCsvInput!) {
  bulkCostPriceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
