/**
 Object class for CartShippingMethod
 */
export class CartShippingMethod {
  /** Shipping method name */
  name!: string;
  /** Shipping method code */
  code!: string;
  constructor(data: Partial<CartShippingMethod> = {}) {
    Object.assign(this, data);
  }
}