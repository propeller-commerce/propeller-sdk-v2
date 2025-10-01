import { Cart } from './Cart';
import { Order } from './Order';
/**
 Object class for CartProcessResponse
 */
export class CartProcessResponse {
  /** Cart order unique identifier */
  private _cartOrderId: number;
  /** Cart object */
  private _cart: Cart;
  /** order field */
  private _order: Order;
  /**
   Creates a new instance of CartProcessResponse
   */
  constructor(data: Partial<CartProcessResponse> = {}) {
    this._cartOrderId = data.cartOrderId!;
    this._cart = data.cart!;
    this._order = data.order!;
  }
  /**
   Cart order unique identifier
   */
  get cartOrderId(): number {
    return this._cartOrderId;
  }
  /**
   Cart order unique identifier
   */
  set cartOrderId(value: number) {
    this._cartOrderId = value;
  }
  /**
   Cart object
   */
  get cart(): Cart {
    return this._cart;
  }
  /**
   Cart object
   */
  set cart(value: Cart) {
    this._cart = value;
  }
  /**
   order field
   */
  get order(): Order {
    return this._order;
  }
  /**
   order field
   */
  set order(value: Order) {
    this._order = value;
  }
}