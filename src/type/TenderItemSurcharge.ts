import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for TenderItemSurcharge
 */
export class TenderItemSurcharge {
  /** names field */
  names!: LocalizedString[];
  /** taxCode field */
  taxCode!: Taxcode;
  /** taxPercentage field */
  taxPercentage!: number;
  /** quantity field */
  quantity!: number;
  /** price field */
  price!: number;
  /** totalPrice field */
  totalPrice!: number;
  /** priceNet field */
  priceNet!: number;
  /** totalPriceNet field */
  totalPriceNet!: number;
  constructor(data: Partial<TenderItemSurcharge> = {}) {
    Object.assign(this, data);
  }

  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `taxCode`. */
  getTaxCode(): Taxcode {
    return this.taxCode;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `totalPrice`. */
  getTotalPrice(): number {
    return this.totalPrice;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number {
    return this.priceNet;
  }
  /** Returns `totalPriceNet`. */
  getTotalPriceNet(): number {
    return this.totalPriceNet;
  }
}