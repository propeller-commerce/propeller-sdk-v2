import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { PriceDisplay } from '../enum/PriceDisplay';
/**
 Input object for PriceCreateInput
 */
export interface PriceCreateInput {
  /** Product id */
  productId: number;
  /** The quantity of items that the listed price will purchase. */
  per?: number;
  /** The default sales price. */
  list: number;
  /** The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies. */
  store?: number;
  /** The manufacturer's or supplier's recommended retail price (RRP) for the product. */
  suggested?: number;
  /** The cost associated to acquire the product. */
  cost?: number;
  /** The method used to apply discounts for bulk prices / volume discounts. One of: [costpriceplus, listpricemin, netprice] */
  bulkDiscountType?: PriceDiscountType;
  /** Default tax code of this product. One of: [H, L, N] */
  defaultTaxCode: Taxcode;
  /** Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'. */
  display: PriceDisplay;
}