/**
 Object class for CartTaxLevel
 */
export class CartTaxLevel {
  /** Tax level's percentage */
  taxPercentage!: number;
  /** Total tax added for to the cart for the tax level's tax code */
  price!: number;
  /** Total discount for the tax level's code */
  discount?: number;
  constructor(data: Partial<CartTaxLevel> = {}) {
    Object.assign(this, data);
  }

  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `discount`. */
  getDiscount(): number | undefined {
    return this.discount;
  }
}