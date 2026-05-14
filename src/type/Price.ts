import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { PriceDisplay } from '../enum/PriceDisplay';
import { CostPrice } from './CostPrice';
/**
 Object class for Price
 */
export class Price {
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Product Id */
  productId!: number;
  /** The quantity of items that the listed price will purchase. */
  per!: number;
  /** The default sales price. */
  list!: number;
  /** costPrices field */
  costPrices?: CostPrice[];
  /** The manufacturer's or supplier's recommended retail price (RRP) for the product. */
  suggested?: number;
  /** The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies. */
  store?: number;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  bulkPriceDiscountType!: PriceDiscountType;
  /** Default tax code */
  defaultTaxCode!: Taxcode;
  /** Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'. */
  display?: PriceDisplay;
  /** cost field */
  /** @deprecated Deprecated in favor of using costPrices (quantity 1) */
  cost?: number;
  constructor(data: Partial<Price> = {}) {
    Object.assign(this, data);
  }
}