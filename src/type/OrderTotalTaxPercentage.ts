/**
 Object class for OrderTotalTaxPercentage
 */
export class OrderTotalTaxPercentage {
  /** The tax percentage */
  percentage!: number;
  /** The total for the tax percentage */
  total!: number;
  constructor(data: Partial<OrderTotalTaxPercentage> = {}) {
    Object.assign(this, data);
  }
}