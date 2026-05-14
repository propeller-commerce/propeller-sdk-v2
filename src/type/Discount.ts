import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Category } from './Category';
import { Pricesheet } from './Pricesheet';
import { Product } from './Product';
/**
 Object class for Discount
 */
export class Discount {
  /** Category Id */
  categoryId?: number;
  /** category field */
  category?: Category;
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Discount value, either percentage or fixed amount */
  value!: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom!: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validFrom?: string;
  /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
  validTo?: string;
  /** pricesheet foreign identifier */
  pricesheetId!: string;
  /** Product Id */
  productId?: number;
  /** Price group */
  priceGroup?: string;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  discountType!: PriceDiscountType;
  /** AUTH: Role=[pricing.OWNER] */
  pricesheet?: Pricesheet;
  /** product field */
  product?: Product;
  constructor(data: Partial<Discount> = {}) {
    Object.assign(this, data);
  }
}