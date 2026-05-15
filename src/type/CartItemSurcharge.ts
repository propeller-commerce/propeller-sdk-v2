import { TaxCode } from '../enum/TaxCode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for CartItemSurcharge
 */
export class CartItemSurcharge {
  /** Localized names */
  names!: LocalizedString[];
  /** Localized descriptions */
  descriptions!: LocalizedString[];
  /** Type */
  type!: string;
  /** Value */
  value!: number;
  /** Tax code */
  taxCode!: TaxCode;
  /** Tax percentage */
  taxPercentage?: number;
  /** Quantity */
  quantity?: number;
  /** Price */
  price?: number;
  /** Total price */
  totalPrice?: number;
  /** Net price */
  priceNet?: number;
  /** Total net price */
  totalPriceNet?: number;
  constructor(data: Partial<CartItemSurcharge> = {}) {
    Object.assign(this, data);
  }

  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `type`. */
  getType(): string {
    return this.type;
  }
  /** Returns `value`. */
  getValue(): number {
    return this.value;
  }
  /** Returns `taxCode`. */
  getTaxCode(): TaxCode {
    return this.taxCode;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number | undefined {
    return this.taxPercentage;
  }
  /** Returns `quantity`. */
  getQuantity(): number | undefined {
    return this.quantity;
  }
  /** Returns `price`. */
  getPrice(): number | undefined {
    return this.price;
  }
  /** Returns `totalPrice`. */
  getTotalPrice(): number | undefined {
    return this.totalPrice;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number | undefined {
    return this.priceNet;
  }
  /** Returns `totalPriceNet`. */
  getTotalPriceNet(): number | undefined {
    return this.totalPriceNet;
  }
}