import { BulkCostPrice } from './BulkCostPrice';
/**
 Object class for BulkCostPriceResponse
 */
export class BulkCostPriceResponse {
  /** List of items of type BulkCostPrice */
  items!: BulkCostPrice[];
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
  constructor(data: Partial<BulkCostPriceResponse> = {}) {
    Object.assign(this, data);
  }
}