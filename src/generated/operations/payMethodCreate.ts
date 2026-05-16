/* Auto-generated. Do not edit. */
export const document = `fragment PayMethodFields on PayMethod {
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

mutation payMethodCreate(\$input: PayMethodCreateInput!) {
  payMethodCreate(input: \$input) {
    ...PayMethodFields
  }
}`;
