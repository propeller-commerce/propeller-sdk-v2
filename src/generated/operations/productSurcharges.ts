/* Auto-generated. Do not edit. */
export const document = `fragment SurchargeProductResponseFields on SurchargeProductResponse {
  items {
    ...SurchargeProductFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}

fragment SurchargeProductFields on SurchargeProduct {
  surchargeId
  productId
  surcharge {
    ...SurchargeFields
  }
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

query productSurcharges(\$productId: Int!, \$input: SurchargeSearchInput) {
  productSurcharges(productId: \$productId, input: \$input) {
    ...SurchargeProductResponseFields
  }
}`;
