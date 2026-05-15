import { Discount } from './Discount';
/**
 Object class for DiscountResponse
 */
export class DiscountResponse {
  /** List of items of type Discount */
  items!: Discount[];
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
  constructor(data: Partial<DiscountResponse> = {}) {
    Object.assign(this, data);
  }
}