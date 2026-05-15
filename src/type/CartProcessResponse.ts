import { Cart } from './Cart';
import { Order } from './Order';
/**
 Object class for CartProcessResponse
 */
export class CartProcessResponse {
  /** Cart order unique identifier */
  cartOrderId!: number;
  /** Cart object */
  cart!: Cart;
  /** order field */
  order!: Order;
  constructor(data: Partial<CartProcessResponse> = {}) {
    Object.assign(this, data);
  }
}