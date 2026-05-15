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

  /** Returns `method`. */
  getMethod(): string {
    return this.method;
  }
  /** Returns `price`. */
  getPrice(): number | undefined {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number | undefined {
    return this.priceNet;
  }
  /** Returns `priceMode`. */
  getPriceMode(): PriceMode | undefined {
    return this.priceMode;
  }
  /** Returns `tax`. */
  getTax(): number {
    return this.tax;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number | undefined {
    return this.taxPercentage;
  }
  /** Returns `status`. */
  getStatus(): string | undefined {
    return this.status;
  }
  /** Returns `statusDate`. */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }
}