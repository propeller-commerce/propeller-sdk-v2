/**
 Object class for CartTaxLevel
 */
export interface CartTaxLevel {
  /**
   * Tax level's percentage
   * @deprecated Rounded to a whole number (8.1 becomes 8). Use `taxPercentageDecimal` for the exact rate.
   */
  taxPercentage: number;
  /** Tax level's percentage, with decimals (e.g. 8.1) */
  taxPercentageDecimal: number;
  /** Total tax added for to the cart for the tax level's tax code */
  price: number;
  /** Total discount for the tax level's code */
  discount?: number;
}