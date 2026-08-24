import { Cart } from './Cart';
import { Order } from './Order';
/**
 Object class for CartProcessResponse
 */
export interface CartProcessResponse {
  /** Cart order unique identifier */
  cartOrderId: number;
  /** Cart object */
  cart: Cart;
  /** order field */
  order: Order;
}