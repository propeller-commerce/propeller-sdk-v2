/* Auto-generated. Do not edit. */
export const document: string = `fragment ChannelFields on Channel {
  id
  name
  descriptions {
    ...LocalizedStringFields
  }
  catalogRootId
  anonymousUserId
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
}

fragment LocalizedStringFields on LocalizedString {
  language
  value
}

mutation channelCreate(\$input: ChannelCreateInput!) {
  channelCreate(input: \$input) {
    ...ChannelFields
  }
}`;
