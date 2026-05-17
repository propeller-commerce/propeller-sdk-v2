/* Auto-generated. Do not edit. */
export const document: string = `fragment TaxFields on Tax {
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

mutation taxCreate(\$input: TaxCreateInput!) {
  taxCreate(input: \$input) {
    ...TaxFields
  }
}`;
