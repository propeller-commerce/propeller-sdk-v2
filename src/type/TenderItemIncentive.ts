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
}