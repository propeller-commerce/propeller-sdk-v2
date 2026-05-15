import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for CartItemIncentive
 */
export class CartItemIncentive {
  /** Cart item incentive name */
  name?: string;
  /** Quantity of cart items to be affected by the incentive */
  quantity!: number;
  /** Cart item incentive price */
  price!: number;
  /** Cart item incentive code */
  code!: OrderItemIncentiveCode;
  constructor(data: Partial<CartItemIncentive> = {}) {
    Object.assign(this, data);
  }

  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `code`. */
  getCode(): OrderItemIncentiveCode {
    return this.code;
  }
}