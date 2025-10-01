import { PriceDiscountType } from '../enum/PriceDiscountType';
/**
 Input object for DiscountCreateInput
 */
export interface DiscountCreateInput {
  /** Pricesheet id */
  pricesheetId: string;
  /** Product id */
  productId?: number;
  /** Category id */
  categoryId?: number;
  /** Pricegroup */
  priceGroup?: string;
  /** Discount value */
  value: number;
  /** Discount type One of: [costpriceplus, listpricemin, netprice] */
  discountType: PriceDiscountType;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validFrom?: string;
  /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
  validTo?: string;
}