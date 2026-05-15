import { OrderStatusSet } from './OrderStatusSet';
/**
 Object class for OrderStatusSetsResponse
 */
export class OrderStatusSetsResponse {
  /** List of items of type OrderStatusSet */
  items!: OrderStatusSet[];
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
  constructor(data: Partial<OrderStatusSetsResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as OrderStatusSet instances (coerced on first access). */
  getItems(): OrderStatusSet[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof OrderStatusSet ? x : new OrderStatusSet(x));
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