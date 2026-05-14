import { Bundle } from './Bundle';
/**
 Object class for BundlesResponse
 */
export class BundlesResponse {
  /** List of items of type Bundle */
  items!: Bundle[];
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
  constructor(data: Partial<BundlesResponse> = {}) {
    Object.assign(this, data);
  }
}