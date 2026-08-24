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
}