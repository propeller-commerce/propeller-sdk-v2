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

mutation valuesetItemUpdate(\$id: Int!, \$input: ValuesetItemUpdateInput!) {
  valuesetItemUpdate(id: \$id, input: \$input) {
    ...ValuesetItemFields
  }
}`;
