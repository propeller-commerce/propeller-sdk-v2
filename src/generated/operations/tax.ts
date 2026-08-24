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

query tax(\$id: String, \$code: Taxcode, \$zone: String) {
  tax(id: \$id, code: \$code, zone: \$zone) {
    ...TaxFields
  }
}`;
