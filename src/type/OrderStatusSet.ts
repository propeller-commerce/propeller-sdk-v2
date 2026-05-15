import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusSet
 */
export class OrderStatusSet {
  /** The primary order status set identifier */
  id!: number;
  /** The order status set name */
  name!: string;
  /** The order status set description */
  description?: string;
  /** The order statuses in this set */
  orderStatuses?: OrderStatus[];
  constructor(data: Partial<OrderStatusSet> = {}) {
    Object.assign(this, data);
  }
}