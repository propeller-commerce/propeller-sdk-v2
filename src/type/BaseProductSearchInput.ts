import { BaseProductSortField } from '../enum/BaseProductSortField';
import { ProductClass } from '../enum/ProductClass';
import { ProductStatus } from '../enum/ProductStatus';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for BaseProductSearchInput
 */
export interface BaseProductSearchInput {
  /** Search term for SKU and localized content */
  term?: string;
  /** Filter by product types */
  types?: ProductClass[];
  /** Filter by category ID */
  categoryId?: number;
  /** Filter by category UUID */
  categoryUuid?: string;
  /** Include items from descendant categories (requires categoryId or categoryUuid) */
  getDescendants?: boolean;
  /** Filter by specific product IDs */
  productIds?: number[];
  /** Filter by specific cluster IDs */
  clusterIds?: number[];
  /** Filter by cluster configuration ID */
  clusterConfigId?: number;
  /** Filter by product statuses (PRODUCT type only) */
  statuses?: ProductStatus[];
  /** Filter by manufacturers (PRODUCT type only) */
  manufacturers?: string[];
  /** Filter by suppliers (PRODUCT type only) */
  suppliers?: string[];
  /** Language for localized content */
  language?: string;
  /** Sort field */
  sortBy?: BaseProductSortField;
  /** Sort order */
  sortOrder?: SortOrder;
  /** Page number */
  page?: number;
  /** Items per page */
  offset?: number;
  /** Source system name (required when sourceIds provided) */
  source?: string;
  /** Source IDs from the specified source system */
  sourceIds?: string[];
  /** Order list IDs to apply for filtering */
  orderlistIds?: number[];
  /** Whether to apply orderlist filtering */
  applyOrderlists?: boolean;
  /** Is product hidden? */
  hidden?: boolean;
  /** Filter by creation date from (ISO string) */
  dateCreatedFrom?: string;
  /** Filter by creation date to (ISO string) */
  dateCreatedTo?: string;
  /** Filter by modification date from (ISO string) */
  dateModifiedFrom?: string;
  /** Filter by modification date to (ISO string) */
  dateModifiedTo?: string;
  /** Filter by specific SKUs */
  skus?: string[];
  /** Filter by specific slugs (requires language parameter) */
  slugs?: string[];
  /** Filter by specific product/cluster IDs */
  ids?: number[];
  /** Filter by specific product/cluster UUIDs */
  uuids?: string[];
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged with the logged in user. */
  companyId?: number;
}
