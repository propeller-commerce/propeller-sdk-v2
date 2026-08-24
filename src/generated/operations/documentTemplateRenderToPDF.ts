/* Auto-generated. Do not edit. */
export const document: string = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}

mutation documentTemplateRenderToPDF(\$id: String!, \$input: TemplateRenderInput!) {
  documentTemplateRenderToPDF(id: \$id, input: \$input) {
    ...Base64FileFields
  }
}`;
