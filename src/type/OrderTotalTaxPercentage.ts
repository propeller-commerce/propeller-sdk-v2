/**
 Object class for OrderTotalTaxPercentage
 */
export interface OrderTotalTaxPercentage {
  /**
   * The tax percentage
   * @deprecated Rounded to a whole number (8.1 becomes 8). Use `percentageDecimal` for the exact rate.
   */
  percentage: number;
  /** The tax percentage, with decimals (e.g. 8.1) */
  percentageDecimal: number;
  /** The total for the tax percentage */
  total: number;
}