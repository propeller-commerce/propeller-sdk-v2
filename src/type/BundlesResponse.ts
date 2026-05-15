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

  /** Returns `items` as Bundle instances (coerced on first access). */
  getItems(): Bundle[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof Bundle ? x : new Bundle(x));
    return this.items;
  }
  /** Returns `itemsFound`. */
  getItemsFound(): number {
    return this.itemsFound;
  }
  /** Returns `offset`. */
  getOffset(): number {
    return this.offset;
  }
  /** Returns `page`. */
  getPage(): number {
    return this.page;
  }
  /** Returns `pages`. */
  getPages(): number {
    return this.pages;
  }
  /** Returns `start`. */
  getStart(): number {
    return this.start;
  }
  /** Returns `end`. */
  getEnd(): number {
    return this.end;
  }
}