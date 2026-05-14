import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusSet
 */
export interface OrderStatusSet {
  /** The primary order status set identifier */
  id: number;
  /** The order status set name */
  name: string;
  /** The order status set description */
  description?: string;
  /** The order statuses in this set */
  orderStatuses?: OrderStatus[];
}