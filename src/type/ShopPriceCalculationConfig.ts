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

  /** Returns `isVatIncludedLeading`. */
  getIsVatIncludedLeading(): boolean {
    return this.isVatIncludedLeading;
  }
  /** Returns `inheritCatalogDiscountOnPriceList`. */
  getInheritCatalogDiscountOnPriceList(): boolean {
    return this.inheritCatalogDiscountOnPriceList;
  }
  /** Returns `useMultipleCostprices`. */
  getUseMultipleCostprices(): boolean {
    return this.useMultipleCostprices;
  }
  /** Returns `calculateDiscountOverBulkPrices`. */
  getCalculateDiscountOverBulkPrices(): boolean {
    return this.calculateDiscountOverBulkPrices;
  }
}