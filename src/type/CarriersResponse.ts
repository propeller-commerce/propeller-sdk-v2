import { Carrier } from './Carrier';
/**
 Object class for CarriersResponse
 */
export interface CarriersResponse {
  /** List of items of type Carrier */
  items: Carrier[];
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