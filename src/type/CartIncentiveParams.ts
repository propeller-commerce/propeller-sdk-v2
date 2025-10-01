import { DiscountType } from '../enum/DiscountType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartIncentiveParams
 */
export class CartIncentiveParams {
  /** Minimum quantity of items to be affected by the incentive */
  private _quantity?: number;
  /** Incentive price */
  private _price?: number;
  /** Product identifier */
  private _productId?: number;
  /** Discount value */
  private _discount?: number;
  /** Discount type */
  private _discountType?: DiscountType;
  /** Value points amount */
  private _valuePoints?: number;
  /** Repeat incentive */
  private _repeat?: YesNo;
  /** Action code */
  private _actionCode?: string;
  /**
   Creates a new instance of CartIncentiveParams
   */
  constructor(data: Partial<CartIncentiveParams> = {}) {
    this._quantity = data.quantity;
    this._price = data.price;
    this._productId = data.productId;
    this._discount = data.discount;
    this._discountType = data.discountType;
    this._valuePoints = data.valuePoints;
    this._repeat = data.repeat;
    this._actionCode = data.actionCode;
  }
  /**
   Minimum quantity of items to be affected by the incentive
   */
  get quantity(): number | undefined {
    return this._quantity;
  }
  /**
   Minimum quantity of items to be affected by the incentive
   */
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  /**
   Incentive price
   */
  get price(): number | undefined {
    return this._price;
  }
  /**
   Incentive price
   */
  set price(value: number | undefined) {
    this._price = value;
  }
  /**
   Product identifier
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   Product identifier
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   Discount value
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   Discount value
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
  /**
   Discount type
   */
  get discountType(): DiscountType | undefined {
    return this._discountType;
  }
  /**
   Discount type
   */
  set discountType(value: DiscountType | undefined) {
    this._discountType = value;
  }
  /**
   Value points amount
   */
  get valuePoints(): number | undefined {
    return this._valuePoints;
  }
  /**
   Value points amount
   */
  set valuePoints(value: number | undefined) {
    this._valuePoints = value;
  }
  /**
   Repeat incentive
   */
  get repeat(): YesNo | undefined {
    return this._repeat;
  }
  /**
   Repeat incentive
   */
  set repeat(value: YesNo | undefined) {
    this._repeat = value;
  }
  /**
   Action code
   */
  get actionCode(): string | undefined {
    return this._actionCode;
  }
  /**
   Action code
   */
  set actionCode(value: string | undefined) {
    this._actionCode = value;
  }
}