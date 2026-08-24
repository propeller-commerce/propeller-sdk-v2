/* Auto-generated. Do not edit. */
export const document: string = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ...LocalizedStringFields
  }
  externalCode
  logo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation payMethodUpdate(\$id: Int!, \$input: PayMethodUpdateInput!) {
  payMethodUpdate(id: \$id, input: \$input) {
    ...PayMethodFields
  }
}`;
