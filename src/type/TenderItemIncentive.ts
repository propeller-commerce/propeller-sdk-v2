import { OrderItemIncentiveCode } from '../enum/OrderItemIncentiveCode';
/**
 Object class for TenderItemIncentive
 */
export class TenderItemIncentive {
  /** name field */
  name?: string;
  /** quantity field */
  quantity!: number;
  /** price field */
  price!: number;
  /** code field */
  code!: OrderItemIncentiveCode;
  constructor(data: Partial<TenderItemIncentive> = {}) {
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