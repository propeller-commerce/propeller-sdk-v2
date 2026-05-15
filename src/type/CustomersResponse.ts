import { Customer } from './Customer';
/**
 Object class for CustomersResponse
 */
export class CustomersResponse {
  /** List of items of type Customer */
  items!: Customer[];
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
  constructor(data: Partial<CustomersResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as Customer instances (coerced on first access). */
  getItems(): Customer[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof Customer ? x : new Customer(x));
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