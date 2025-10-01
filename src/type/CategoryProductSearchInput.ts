import { ProductClass } from '../enum/ProductClass';
import { ProductStatus } from '../enum/ProductStatus';
import { YesNo } from '../enum/YesNo';
import { ProductTextFilterInput } from './ProductTextFilterInput';
import { ProductRangeFilterInput } from './ProductRangeFilterInput';
import { ProductPriceFilterInput } from './ProductPriceFilterInput';
import { ProductSortInput } from './ProductSortInput';
import { SearchFieldsInput } from './SearchFieldsInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for CategoryProductSearchInput
 */
export interface CategoryProductSearchInput {
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
  /** List of text filters  */
  textFilters?: ProductTextFilterInput[];
  /** List of range filters */
  rangeFilters?: ProductRangeFilterInput[];
  /** Product price filter */
  price?: ProductPriceFilterInput;
  /** List of product status filters */
  statuses: ProductStatus[];
  /** Is product hidden? */
  hidden?: boolean;
  /** List of product sort filters */
  sortInputs?: ProductSortInput[];
  /** List of product search fields */
  searchFields?: SearchFieldsInput[];
  /** Is product in a bundle */
  hasBundle?: YesNo;
  /** Is product a bundle leader */
  isBundleLeader?: YesNo;
  /** Product container slug(s) */
  containerSlugs?: string[];
  /** Product path slug(s) */
  containerPathSlugs?: string[];
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged  with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged  with the logged in user. */
  companyId?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Get all descending products (true) or only the direct child products of this category (false) */
  getDescendants?: boolean;
  /** List of product SKUs */
  skus?: string[];
}