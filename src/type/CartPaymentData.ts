import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartPaymentData
 */
export interface CartPaymentData {
  /** Selected paymethod for this cart. Defaults to ACCOUNT. */
  method: string;
  /** Costs associated with the selected paymethod on this cart. Excluding VAT. */
  price?: number;
  /** Costs associated with the selected paymethod on this cart. Including VAT. */
  priceNet?: number;
  /** priceMode field */
  priceMode?: PriceMode;
  /** Tax associated with the selected paymethod on this cart. */
  tax: number;
  /**
   * Tax percentage associated with the selected paymethod on this cart.
   * @deprecated Rounded to a whole number (8.1 becomes 8). Use `taxPercentageDecimal` for the exact rate.
   */
  taxPercentage?: number;
  /** Tax percentage associated with the selected paymethod on this cart, with decimals (e.g. 8.1). */
  taxPercentageDecimal?: number;
  /** Payment status */
  status?: string;
  /** Payment status date */
  statusDate?: string;
}