/* Auto-generated. Do not edit. */
export const document = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ...LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
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
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
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

query valueset(\$id: Int!) {
  valueset(id: \$id) {
    ...ValuesetFields
  }
}`;
