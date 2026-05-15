import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusesResponse
 */
export class OrderStatusesResponse {
  /** List of items of type OrderStatus */
  items!: OrderStatus[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<OrderStatusesResponse> = {}) {
    Object.assign(this, data);
  }
}