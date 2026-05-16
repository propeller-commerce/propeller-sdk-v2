/* Auto-generated. Do not edit. */
export const document = `fragment ValuesetItemResponseFields on ValuesetItemResponse {
  items {
    ...ValuesetItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment ValuesetItemFields on ValuesetItem {
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

query valuesetItems(\$input: ValuesetItemSearchInput) {
  valuesetItems(input: \$input) {
    ...ValuesetItemResponseFields
  }
}`;
