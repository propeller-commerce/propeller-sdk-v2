import { IBaseProductSearch } from './IBaseProductSearch';
import { ProductSearchAttributeFilter } from './ProductSearchAttributeFilter';
/**
 Object class for ProductSearchResponse
 */
export interface ProductSearchResponse {
  /** List of items of type ProductResultUnion */
  items: IBaseProductSearch[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
  /** The lowest price of a product in this productlist */
  minPrice?: number;
  /** The highest price of a product in this productlist */
  maxPrice?: number;
  /** filters field */
  filters?: ProductSearchAttributeFilter[];
}
