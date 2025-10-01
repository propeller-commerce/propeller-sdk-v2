/**
 Object class for ShopPriceCalculationConfig
 */
export class ShopPriceCalculationConfig {
  /** isVatIncludedLeading field */
  private _isVatIncludedLeading: boolean;
  /** inheritCatalogDiscountOnPriceList field */
  private _inheritCatalogDiscountOnPriceList: boolean;
  /** useMultipleCostprices field */
  private _useMultipleCostprices: boolean;
  /** calculateDiscountOverBulkPrices field */
  private _calculateDiscountOverBulkPrices: boolean;
  /**
   Creates a new instance of ShopPriceCalculationConfig
   */
  constructor(data: Partial<ShopPriceCalculationConfig> = {}) {
    this._isVatIncludedLeading = data.isVatIncludedLeading!;
    this._inheritCatalogDiscountOnPriceList = data.inheritCatalogDiscountOnPriceList!;
    this._useMultipleCostprices = data.useMultipleCostprices!;
    this._calculateDiscountOverBulkPrices = data.calculateDiscountOverBulkPrices!;
  }
  /**
   isVatIncludedLeading field
   */
  get isVatIncludedLeading(): boolean {
    return this._isVatIncludedLeading;
  }
  /**
   isVatIncludedLeading field
   */
  set isVatIncludedLeading(value: boolean) {
    this._isVatIncludedLeading = value;
  }
  /**
   inheritCatalogDiscountOnPriceList field
   */
  get inheritCatalogDiscountOnPriceList(): boolean {
    return this._inheritCatalogDiscountOnPriceList;
  }
  /**
   inheritCatalogDiscountOnPriceList field
   */
  set inheritCatalogDiscountOnPriceList(value: boolean) {
    this._inheritCatalogDiscountOnPriceList = value;
  }
  /**
   useMultipleCostprices field
   */
  get useMultipleCostprices(): boolean {
    return this._useMultipleCostprices;
  }
  /**
   useMultipleCostprices field
   */
  set useMultipleCostprices(value: boolean) {
    this._useMultipleCostprices = value;
  }
  /**
   calculateDiscountOverBulkPrices field
   */
  get calculateDiscountOverBulkPrices(): boolean {
    return this._calculateDiscountOverBulkPrices;
  }
  /**
   calculateDiscountOverBulkPrices field
   */
  set calculateDiscountOverBulkPrices(value: boolean) {
    this._calculateDiscountOverBulkPrices = value;
  }
}