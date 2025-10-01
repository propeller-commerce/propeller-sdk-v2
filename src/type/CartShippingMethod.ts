/**
 Object class for CartShippingMethod
 */
export class CartShippingMethod {
  /** Shipping method name */
  private _name: string;
  /** Shipping method code */
  private _code: string;
  /**
   Creates a new instance of CartShippingMethod
   */
  constructor(data: Partial<CartShippingMethod> = {}) {
    this._name = data.name!;
    this._code = data.code!;
  }
  /**
   Shipping method name
   */
  get name(): string {
    return this._name;
  }
  /**
   Shipping method name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Shipping method code
   */
  get code(): string {
    return this._code;
  }
  /**
   Shipping method code
   */
  set code(value: string) {
    this._code = value;
  }
}