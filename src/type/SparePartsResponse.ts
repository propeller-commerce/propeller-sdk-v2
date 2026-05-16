import { SparePart } from './SparePart';
import { AttributeFilter } from './AttributeFilter';
/**
 Object class for SparePartsResponse
 */
export interface SparePartsResponse {
  /** List of items of type SpareParts */
  items: SparePart[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /**  The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
  /** The lowest price of a product in this productlist */
  minPrice: number;
  /** The highest price of a product in this productlist */
  maxPrice: number;
  /** filters field */
  filters?: AttributeFilter[];
}