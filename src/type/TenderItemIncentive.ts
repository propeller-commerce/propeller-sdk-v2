import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for TenderItemIncentive
 */
export class TenderItemIncentive {
  /** name field */
  private _name?: string;
  /** quantity field */
  private _quantity: number;
  /** price field */
  private _price: number;
  /** code field */
  private _code: OrderItemIncentiveCode;
  /**
   Creates a new instance of TenderItemIncentive
   */
  constructor(data: Partial<TenderItemIncentive> = {}) {
    this._name = data.name;
    this._quantity = data.quantity!;
    this._price = data.price!;
    this._code = data.code!;
  }
  /**
   name field
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   quantity field
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   quantity field
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   price field
   */
  get price(): number {
    return this._price;
  }
  /**
   price field
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   code field
   */
  get code(): OrderItemIncentiveCode {
    return this._code;
  }
  /**
   code field
   */
  set code(value: OrderItemIncentiveCode) {
    this._code = value;
  }
}