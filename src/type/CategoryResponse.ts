import { Category } from './Category';
/**
 Object class for CategoryResponse
 */
export class CategoryResponse {
  /** List of items of type Category */
  items!: Category[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<CategoryResponse> = {}) {
    Object.assign(this, data);
  }
}