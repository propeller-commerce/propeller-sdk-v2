import { TaxCode } from '../enum/TaxCode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for TenderItemSurcharge
 */
export interface TenderItemSurcharge {
  /** names field */
  names: LocalizedString[];
  /** taxCode field */
  taxCode: TaxCode;
  /** taxPercentage field */
  taxPercentage: number;
  /** quantity field */
  quantity: number;
  /** price field */
  price: number;
  /** totalPrice field */
  totalPrice: number;
  /** priceNet field */
  priceNet: number;
  /** totalPriceNet field */
  totalPriceNet: number;
}