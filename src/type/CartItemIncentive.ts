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
}