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
}