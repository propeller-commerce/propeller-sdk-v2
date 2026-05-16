import { DiscountType } from '../enum/DiscountType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartIncentiveParams
 */
export interface CartIncentiveParams {
  /** Minimum quantity of items to be affected by the incentive */
  quantity?: number;
  /** Incentive price */
  price?: number;
  /** Product identifier */
  productId?: number;
  /** Discount value */
  discount?: number;
  /** Discount type */
  discountType?: DiscountType;
  /** Value points amount */
  valuePoints?: number;
  /** Repeat incentive */
  repeat?: YesNo;
  /** Action code */
  actionCode?: string;
}