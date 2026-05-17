/* Auto-generated. Do not edit. */
export const document: string = `fragment ChannelFields on Channel {
  id
  channelId
  name
  descriptions {
    ...LocalizedStringFields
  }
  catalogRootId
  anonymousUserId
  defaultLetterId
  createdAt
  lastModifiedAt
  tenant {
    id
    name
    descriptions {
      ...LocalizedStringFields
    }
    createdAt
    lastModifiedAt
    restrictSalesPricingVisibility
    allowQuoteInvalidation
    quoteDefaultExpiryPeriodDays
  }
  shop {
    ...ShopFields
  }
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

fragment ShopFields on Shop {
  shopId
  name
  purchaseRootId
  userRootId
  enableIncentives
  priceCalculationConfig {
    isVatIncludedLeading
    inheritCatalogDiscountOnPriceList
    useMultipleCostprices
    calculateDiscountOverBulkPrices
  }
  debtorId
  cocNumber
  taxNumber
}

mutation channelUpdate(\$id: Int!, \$input: ChannelUpdateInput!) {
  channelUpdate(id: \$id, input: \$input) {
    ...ChannelFields
  }
}`;
