/**
 Object class for OrderTotalTaxPercentage
 */
export class OrderTotalTaxPercentage {
  /** The tax percentage */
  private _percentage: number;
  /** The total for the tax percentage */
  private _total: number;
  /**
   Creates a new instance of OrderTotalTaxPercentage
   */
  constructor(data: Partial<OrderTotalTaxPercentage> = {}) {
    this._percentage = data.percentage!;
    this._total = data.total!;
  }
  /**
   The tax percentage
   */
  get percentage(): number {
    return this._percentage;
  }
  /**
   The tax percentage
   */
  set percentage(value: number) {
    this._percentage = value;
  }
  /**
   The total for the tax percentage
   */
  get total(): number {
    return this._total;
  }
  /**
   The total for the tax percentage
   */
  set total(value: number) {
    this._total = value;
  }
}