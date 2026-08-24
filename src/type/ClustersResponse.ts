import { Cluster } from './Cluster';
/**
 Object class for ClustersResponse
 */
export interface ClustersResponse {
  /** Array of clusters for current page */
  items: Cluster[];
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
