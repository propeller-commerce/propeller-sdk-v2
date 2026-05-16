/* Auto-generated. Do not edit. */
export const document = `fragment SurchargeFields on Surcharge {
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

mutation surchargeDelete(\$id: String!) {
  surchargeDelete(id: \$id) {
    ...SurchargeFields
  }
}`;
