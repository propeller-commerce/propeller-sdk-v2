/* Auto-generated. Do not edit. */
export const document = `fragment ShopFields on Shop {
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

query shop(\$shopId: Int!) {
  shop(shopId: \$shopId) {
    ...ShopFields
  }
}`;
