import { IBaseProductSearch } from './IBaseProductSearch';
import { ProductSearchAttributeFilter } from './ProductSearchAttributeFilter';
/**
 Object class for CategorySearchResponse
 */
export interface CategorySearchResponse {
  /** List of items matching the search */
  items: IBaseProductSearch[];
  /** Total number of items found in this category */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** The lowest price of a product in this category */
  minPrice?: number;
  /** The highest price of a product in this category */
  maxPrice?: number;
  /** Faceted filters for this category */
  filters?: ProductSearchAttributeFilter[];
}
