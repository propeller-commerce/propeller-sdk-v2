/**
 Input object for ClusterSearchInput
 */
export interface ClusterSearchInput {
  /** Search term for names, descriptions, or SKU */
  term?: string;
  /** Filter by SKUs */
  skus?: string[];
  /** Filter by slugs (requires language parameter) */
  slugs?: string[];
  /** Filter by category ID */
  categoryId?: number;
  /** Filter by specific cluster IDs */
  clusterIds?: number[];
  /** Filter by cluster configuration ID */
  clusterConfigId?: number;
  /** Is cluster hidden? */
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
