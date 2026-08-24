/**
 Object class for CartTaxLevel
 */
export interface CartTaxLevel {
  /** Tax level's percentage */
  taxPercentage: number;
  /** Total tax added for to the cart for the tax level's tax code */
  price: number;
  /** Total discount for the tax level's code */
  discount?: number;
}