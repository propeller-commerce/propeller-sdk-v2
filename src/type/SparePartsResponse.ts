import { SparePart } from './SparePart';
import { AttributeFilter } from './AttributeFilter';
/**
 Object class for SparePartsResponse
 */
export class SparePartsResponse {
  /** List of items of type SpareParts */
  items!: SparePart[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /**  The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  /** The lowest price of a product in this productlist */
  minPrice!: number;
  /** The highest price of a product in this productlist */
  maxPrice!: number;
  /** filters field */
  filters?: AttributeFilter[];
  constructor(data: Partial<SparePartsResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as SparePart instances (coerced on first access). */
  getItems(): SparePart[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof SparePart ? x : new SparePart(x));
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
  /** Returns `minPrice`. */
  getMinPrice(): number {
    return this.minPrice;
  }
  /** Returns `maxPrice`. */
  getMaxPrice(): number {
    return this.maxPrice;
  }
  /** Returns `filters` as AttributeFilter instances (coerced on first access). */
  getFilters(): AttributeFilter[] | undefined {
    if (!this.filters) return undefined;
    this.filters = this.filters.map((x: any) => x instanceof AttributeFilter ? x : new AttributeFilter(x));
    return this.filters;
  }
}