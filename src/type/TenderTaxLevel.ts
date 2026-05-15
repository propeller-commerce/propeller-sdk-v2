/**
 Object class for TenderTaxLevel
 */
export class TenderTaxLevel {
  /** percentage field */
  percentage!: number;
  /** total field */
  total!: number;
  /** tax field */
  tax?: number;
  /** discount field */
  discount?: number;
  constructor(data: Partial<TenderTaxLevel> = {}) {
    Object.assign(this, data);
  }

  /** Returns `percentage`. */
  getPercentage(): number {
    return this.percentage;
  }
  /** Returns `total`. */
  getTotal(): number {
    return this.total;
  }
  /** Returns `tax`. */
  getTax(): number | undefined {
    return this.tax;
  }
  /** Returns `discount`. */
  getDiscount(): number | undefined {
    return this.discount;
  }
}