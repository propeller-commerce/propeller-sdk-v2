import { Pricesheet } from './Pricesheet';
/**
 Object class for PricesheetResponse
 */
export class PricesheetResponse {
  /** List of items of type Pricesheet */
  items!: Pricesheet[];
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
  constructor(data: Partial<PricesheetResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as Pricesheet instances (coerced on first access). */
  getItems(): Pricesheet[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof Pricesheet ? x : new Pricesheet(x));
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