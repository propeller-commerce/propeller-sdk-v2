import { DateSearchInput } from './DateSearchInput';
import { ProductClass } from '../enum/ProductClass';
import { ProductSearchFacetInput } from './ProductSearchFacetInput';
import { ProductSearchFieldsInput } from './ProductSearchFieldsInput';
import { ProductSearchPriceFilterInput } from './ProductSearchPriceFilterInput';
import { ProductSearchRangeFilterInput } from './ProductSearchRangeFilterInput';
import { ProductSearchSortInput } from './ProductSearchSortInput';
import { ProductSearchTextFilterInput } from './ProductSearchTextFilterInput';
import { ProductStatus } from '../enum/ProductStatus';
import { YesNo } from '../enum/YesNo';
import { ProductSearchInventoryFilterInput } from './ProductSearchInventoryFilterInput';
/**
 Input object for ProductSearchByCategoryInput
 */
export interface ProductSearchByCategoryInput {
  /** List of category IDs to search. Each category will be searched separately. */
  categoryIds: number[];
  /** Include descendants of each category in the search */
  getDescendants?: boolean;
  /** Product search term */
  term?: string;
  /** List of product manufacturers */
  manufacturers?: string[];
  /** List of product supplier codes */
  supplierCodes?: string[];
  /** List of product suppliers */
  suppliers?: string[];
  /** List of product manufacturer codes */
  manufacturerCodes?: string[];
  /** List of product EAN codes */
  EANCodes?: string[];
  /** List of product SKUS */
  skus?: string[];
  /** List of unique product identifiers */
  ids?: number[];
  /** List of productIds to search for */
  productIds?: number[];
  /** List of clusterIds to search for */
  clusterIds?: number[];
  /** Product class */
  class?: ProductClass;
  /** List of product tags */
  tags?: string[];
  /** Specify through which language to search in, has no effect on other returned fields (eg. names,slugs) */
  language: string;
  /** Pagination page number [default=1] */
  page: number;
  /** Pagination offset number [default=12][max: 500]

    NOTE: If offset > 500 is supplied it will be capped to 500 */
  offset: number;
  /** List of text filters */
  textFilters?: ProductSearchTextFilterInput[];
  /** List of range filters */
  rangeFilters?: ProductSearchRangeFilterInput[];
  /** Product price filter */
  price?: ProductSearchPriceFilterInput;
  /** List of priceSheetIds (UUIDs) ordered by priority. The first priceSheetId has highest priority. Used to determine customer-specific pricing for sorting, filtering, and aggregation. When not provided, the default price is used. */
  priceSheetIds?: string[];
  /** List of product status filters */
  statuses: ProductStatus[];
  /** Is product hidden? */
  hidden?: boolean;
  /** List of product sort filters */
  sortInputs?: ProductSearchSortInput[];
  /** List of product search fields */
  searchFields?: ProductSearchFieldsInput[];
  /** Is product in a bundle */
  hasBundle?: YesNo;
  /** Is product a bundle leader */
  isBundleLeader?: YesNo;
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged  with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged  with the logged in user. */
  companyId?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** List of attribute IDs to include in faceted aggregations */
  facets?: ProductSearchFacetInput[];
  /** Apply orderlist filtering to search results */
  applyOrderlists?: boolean;
  /** Order list IDs to apply for filtering */
  orderlistIds?: number[];
  /** Server-side stock filter. Operators are inclusive: `greaterThan: N` is
      stock >= N and `lessThan: N` is stock <= N. Never-stocked products count
      as 0. Filtering is applied upstream, so `itemsFound` / `pages` reflect
      the filtered set. */
  inventory?: ProductSearchInventoryFilterInput;
}
