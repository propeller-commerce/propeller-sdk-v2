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

mutation inventoryCsvImport(\$input: InventoryCsvInput!) {
  inventoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
