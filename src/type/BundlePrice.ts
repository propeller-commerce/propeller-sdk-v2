/**
 Object class for BundlePrice
 */
export interface BundlePrice {
  /** Net price of the bundle after discounts applied */
  net?: number;
  /** Gross price of the bundle after discounts applied */
  gross?: number;
  /** Original net price of the bundle before discounts applied */
  originalNet?: number;
  /** Original gross price of the bundle before discounts applied */
  originalGross?: number;
}