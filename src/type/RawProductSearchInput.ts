import { ProductStatus } from '../enum/ProductStatus';
/**
 Input object for RawProductSearchInput
 */
export interface RawProductSearchInput {
  /** Search term for names, descriptions, or SKU */
  term?: string;
  /** Filter by SKUs */
  skus?: string[];
  /** Filter by product statuses */
  statuses?: ProductStatus[];
  /** Filter by manufacturers */
  manufacturers?: string[];
  /** Filter by suppliers */
  suppliers?: string[];
  /** Filter by category ID */
  categoryId?: number;
  /** Filter by cluster IDs */
  clusterIds?: number[];
  /** Filter by specific product IDs */
  productIds?: number[];
  /** Is product hidden? */
  hidden?: boolean;
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged with the logged in user. */
  companyId?: number;
  /** Whether to apply orderlist filtering */
  applyOrderlists?: boolean;
  /** Order list IDs to apply for filtering */
  orderlistIds?: number[];
  /** Page number for pagination */
  page?: number;
  /** Number of items per page */
  offset?: number;
  /** Language for search and sorting */
  language?: string;
}
