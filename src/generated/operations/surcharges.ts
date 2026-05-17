/* Auto-generated. Do not edit. */
export const document: string = `fragment SurchargesResponseFields on SurchargesResponse {
  items {
    ...SurchargeFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment SurchargeFields on Surcharge {
  id
  name {
    ...LocalizedStringFields
  }
  description {
    ...LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

query surcharges(\$input: SurchargeSearchInput) {
  surcharges(input: \$input) {
    ...SurchargesResponseFields
  }
}`;
