import { OrderRevision } from './OrderRevision';
/**
 Paginated response containing order revision search results
 * Provides comprehensive pagination metadata along with the filtered list of order revisions for efficient data retrieval and navigation.
 */
export interface OrderRevisionResponse {
  /** List of items of type OrderRevision */
  items: OrderRevision[];
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