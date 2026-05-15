import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartPaymentData
 */
export class CartPaymentData {
  /** Selected paymethod for this cart. Defaults to ACCOUNT. */
  method!: string;
  /** Costs associated with the selected paymethod on this cart. Excluding VAT. */
  price?: number;
  /** Costs associated with the selected paymethod on this cart. Including VAT. */
  priceNet?: number;
  /** priceMode field */
  priceMode?: PriceMode;
  /** Tax associated with the selected paymethod on this cart. */
  tax!: number;
  /** Tax percentage associated with the selected paymethod on this cart. */
  taxPercentage?: number;
  /** Payment status */
  status?: string;
  /** Payment status date */
  statusDate?: string;
  constructor(data: Partial<CartPaymentData> = {}) {
    Object.assign(this, data);
  }
}