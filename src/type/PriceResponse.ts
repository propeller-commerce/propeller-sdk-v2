import { Price } from './Price';
/**
 Object class for PriceResponse
 */
export class PriceResponse {
  /** List of items of type Price */
  items!: Price[];
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
  constructor(data: Partial<PriceResponse> = {}) {
    Object.assign(this, data);
  }
}