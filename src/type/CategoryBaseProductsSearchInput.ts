import { BaseProductSortField } from '../enum/BaseProductSortField';
import { ProductClass } from '../enum/ProductClass';
import { ProductStatus } from '../enum/ProductStatus';
import { SortOrder } from '../enum/SortOrder';
import { YesNo } from '../enum/YesNo';
/**
 Input object for CategoryBaseProductsSearchInput
 */
export interface CategoryBaseProductsSearchInput {
  /** Search term for SKU and localized content */
  term?: string;
  /** Filter by base product types */
  types?: ProductClass[];
  /** Filter by product statuses (applies to PRODUCT type only) */
  statuses?: ProductStatus[];
  /** Filter by manufacturers (applies to PRODUCT type only) */
  manufacturers?: string[];
  /** Filter by suppliers (applies to PRODUCT type only) */
  suppliers?: string[];
  /** Filter base products by hidden status. true = only hidden, false = only non-hidden, null = no filter. */
  hidden?: boolean;
  /** Include products from descendant categories */
  getDescending?: YesNo;
  /** Page number for pagination */
  page?: number;
  /** Number of items per page */
  offset?: number;
  /** Language for localized content */
  language?: string;
  /** Field to sort by */
  sortBy?: BaseProductSortField;
  /** Sort order */
  sortOrder?: SortOrder;
  /** Source system name (must be used with sourceIds) */
  source?: string;
  /** Source IDs to filter by (must be used with source) */
  sourceIds?: string[];
  /** Whether to apply orderlist filtering */
  applyOrderlists?: boolean;
  /** Order list IDs to apply for filtering */
  orderlistIds?: number[];
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged with the logged in user. */
  companyId?: number;
}
