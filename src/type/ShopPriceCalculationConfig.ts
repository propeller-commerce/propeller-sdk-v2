/**
 Object class for ShopPriceCalculationConfig
 */
export class ShopPriceCalculationConfig {
  /** isVatIncludedLeading field */
  isVatIncludedLeading!: boolean;
  /** inheritCatalogDiscountOnPriceList field */
  inheritCatalogDiscountOnPriceList!: boolean;
  /** useMultipleCostprices field */
  useMultipleCostprices!: boolean;
  /** calculateDiscountOverBulkPrices field */
  calculateDiscountOverBulkPrices!: boolean;
  constructor(data: Partial<ShopPriceCalculationConfig> = {}) {
    Object.assign(this, data);
  }
}