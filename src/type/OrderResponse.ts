import { Order } from './Order';
/**
 Object class for OrderResponse
 */
export class OrderResponse {
  /** List of items of type Order */
  items!: Order[];
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
  constructor(data: Partial<OrderResponse> = {}) {
    Object.assign(this, data);
  }
}