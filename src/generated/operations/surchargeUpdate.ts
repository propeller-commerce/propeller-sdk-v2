/* Auto-generated. Do not edit. */
export const document: string = `fragment SurchargeFields on Surcharge {
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

mutation surchargeUpdate(\$id: String!, \$input: UpdateSurchargeInput!) {
  surchargeUpdate(id: \$id, input: \$input) {
    ...SurchargeFields
  }
}`;
