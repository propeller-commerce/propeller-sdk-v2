import { OrderStatusSet } from './OrderStatusSet';
/**
 Object class for OrderStatusSetsResponse
 */
export interface OrderStatusSetsResponse {
  /** List of items of type OrderStatusSet */
  items: OrderStatusSet[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
}