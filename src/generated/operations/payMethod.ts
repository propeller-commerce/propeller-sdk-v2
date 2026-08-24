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

query payMethod(\$id: Int!) {
  payMethod(id: \$id) {
    ...PayMethodFields
  }
}`;
