import { PayMethod } from './PayMethod';
/**
 Object class for PayMethodsResponse
 */
export class PayMethodsResponse {
  /** List of items of type PayMethod */
  items!: PayMethod[];
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
  constructor(data: Partial<PayMethodsResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as PayMethod instances (coerced on first access). */
  getItems(): PayMethod[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof PayMethod ? x : new PayMethod(x));
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