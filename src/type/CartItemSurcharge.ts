import { TaxCode } from '../enum/TaxCode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for CartItemSurcharge
 */
export interface CartItemSurcharge {
  /** Localized names */
  names: LocalizedString[];
  /** Localized descriptions */
  descriptions: LocalizedString[];
  /** Type */
  type: string;
  /** Value */
  value: number;
  /** Tax code */
  taxCode: TaxCode;
  /**
   * Tax percentage
   * @deprecated Rounded to a whole number (8.1 becomes 8). Use `taxPercentageDecimal` for the exact rate.
   */
  taxPercentage?: number;
  /** Tax percentage, with decimals (e.g. 8.1) */
  taxPercentageDecimal?: number;
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
}