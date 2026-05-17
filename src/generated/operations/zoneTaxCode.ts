/* Auto-generated. Do not edit. */
export const document: string = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}

query zoneTaxCode(\$id: String!) {
  zoneTaxCode(id: \$id) {
    ...ZoneTaxCodeFields
  }
}`;
