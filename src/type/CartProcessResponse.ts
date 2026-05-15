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

  /** Returns `cartOrderId`. */
  getCartOrderId(): number {
    return this.cartOrderId;
  }
  /** Returns `cart` as a Cart instance (coerced on first access). */
  getCart(): Cart | undefined {
    if (this.cart == null) return undefined;
    if (!(this.cart instanceof Cart)) {
      this.cart = new Cart(this.cart as any);
    }
    return this.cart;
  }
  /** Returns `order` as a Order instance (coerced on first access). */
  getOrder(): Order | undefined {
    if (this.order == null) return undefined;
    if (!(this.order instanceof Order)) {
      this.order = new Order(this.order as any);
    }
    return this.order;
  }
}