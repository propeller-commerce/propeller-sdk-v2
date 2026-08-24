import { BaseProduct } from './BaseProduct';
/**
 Object class for BaseProductsResponse
 */
export interface BaseProductsResponse {
  /** Array of base products for current page */
  items: BaseProduct[];
  /** Total number of items found */
  itemsFound: number;
  /** Number of items to skip */
  offset?: number;
  /** Current page number (1-based) */
  page?: number;
  /** Total number of pages */
  pages?: number;
  /** Starting index for current page */
  start: number;
  /** Ending index for current page */
  end: number;
}
