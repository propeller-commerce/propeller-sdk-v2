import { DiscountType } from '../enum/DiscountType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartIncentiveParams
 */
export class CartIncentiveParams {
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
  constructor(data: Partial<CartIncentiveParams> = {}) {
    Object.assign(this, data);
  }

  /** Returns `quantity`. */
  getQuantity(): number | undefined {
    return this.quantity;
  }
  /** Returns `price`. */
  getPrice(): number | undefined {
    return this.price;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `discount`. */
  getDiscount(): number | undefined {
    return this.discount;
  }
  /** Returns `discountType`. */
  getDiscountType(): DiscountType | undefined {
    return this.discountType;
  }
  /** Returns `valuePoints`. */
  getValuePoints(): number | undefined {
    return this.valuePoints;
  }
  /** Returns `repeat`. */
  getRepeat(): YesNo | undefined {
    return this.repeat;
  }
  /** Returns `actionCode`. */
  getActionCode(): string | undefined {
    return this.actionCode;
  }
}