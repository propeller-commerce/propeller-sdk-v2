import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for CartItemIncentive
 */
export class CartItemIncentive {
  /** Cart item incentive name */
  private _name?: string;
  /** Quantity of cart items to be affected by the incentive */
  private _quantity: number;
  /** Cart item incentive price */
  private _price: number;
  /** Cart item incentive code */
  private _code: OrderItemIncentiveCode;
  /**
   Creates a new instance of CartItemIncentive
   */
  constructor(data: Partial<CartItemIncentive> = {}) {
    this._name = data.name;
    this._quantity = data.quantity!;
    this._price = data.price!;
    this._code = data.code!;
  }
  /**
   Cart item incentive name
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Cart item incentive name
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   Quantity of cart items to be affected by the incentive
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   Quantity of cart items to be affected by the incentive
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   Cart item incentive price
   */
  get price(): number {
    return this._price;
  }
  /**
   Cart item incentive price
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   Cart item incentive code
   */
  get code(): OrderItemIncentiveCode {
    return this._code;
  }
  /**
   Cart item incentive code
   */
  set code(value: OrderItemIncentiveCode) {
    this._code = value;
  }
}