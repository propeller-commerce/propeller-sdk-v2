/* Auto-generated. Do not edit. */
export const document = `fragment TaxFields on Tax {
  id
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}

mutation taxUpdate(\$id: String!, \$input: TaxUpdateInput!) {
  taxUpdate(id: \$id, input: \$input) {
    ...TaxFields
  }
}`;
