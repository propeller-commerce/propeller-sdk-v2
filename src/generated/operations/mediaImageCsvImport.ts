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

mutation mediaImageCsvImport(\$input: ImageCsvInput!) {
  mediaImageCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
