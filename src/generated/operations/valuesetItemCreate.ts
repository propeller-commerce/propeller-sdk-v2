/* Auto-generated. Do not edit. */
export const document: string = `fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ...LocalizedStringFields
  }
  extra
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation valuesetItemCreate(\$input: ValuesetItemCreateInput!) {
  valuesetItemCreate(input: \$input) {
    ...ValuesetItemFields
  }
}`;
