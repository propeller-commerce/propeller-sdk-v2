import { PriceElementType } from '../enum/PriceElementType';
import { PriceDiscountType } from '../enum/PriceDiscountType';
import { TaxCode } from '../enum/TaxCode';
import { IDiscount } from './IDiscount';
/**
 Object class for ProductPrice
 */
export interface ProductPrice {
  /** productId field */
  productId: number;
  /** type field */
  type: PriceElementType;
  /** discountType field */
  discountType: PriceDiscountType;
  /** list field */
  list?: number;
  /** cost field */
  cost?: number;
  /** net field */
  net?: number;
  /** gross field */
  gross?: number;
  /** discount field */
  discount?: IDiscount;
  /** taxCode field */
  taxCode?: TaxCode;
  /** quantity field */
  quantity: number;
}