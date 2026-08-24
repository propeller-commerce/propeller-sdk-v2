import { ClusterOption } from './ClusterOption';
/**
 Object class for ClusterOptionsResponse
 */
export interface ClusterOptionsResponse {
  /** Items returned by the query for the current page. */
  items: ClusterOption[];
  /** Total number of items found */
  itemsFound: number;
  /** Number of items to skip */
  offset?: number;
  /** Current page number (1-based) */
  page?: number;
  /** Total number of pages */
  pages: number;
  /** Starting index for current page */
  start: number;
  /** Ending index for current page */
  end: number;
}
