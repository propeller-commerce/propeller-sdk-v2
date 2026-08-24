/* Auto-generated. Do not edit. */
export const document: string = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

mutation zoneTaxCodesCreate(\$input: [ZoneTaxCodeCreateInput!]!) {
  zoneTaxCodesCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;
