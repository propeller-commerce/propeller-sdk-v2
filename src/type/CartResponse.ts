import { Cart } from './Cart';
/**
 Object class for CartResponse
 */
export class CartResponse {
  /** List of items of type Cart */
  items!: Cart[];
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
  constructor(data: Partial<CartResponse> = {}) {
    Object.assign(this, data);
  }
}