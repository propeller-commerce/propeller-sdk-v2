/* Auto-generated. Do not edit. */
export const document: string = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}

query quoteGetPDF(\$quoteId: Int!) {
  quoteGetPDF(orderId: \$quoteId) {
    ...Base64FileFields
  }
}`;
