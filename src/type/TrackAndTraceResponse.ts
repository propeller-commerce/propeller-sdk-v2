import { TrackAndTrace } from './TrackAndTrace';
/**
 Object class for TrackAndTraceResponse
 */
export class TrackAndTraceResponse {
  /** List of items of type TrackAndTrace */
  items!: TrackAndTrace[];
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
  constructor(data: Partial<TrackAndTraceResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `items` as TrackAndTrace instances (coerced on first access). */
  getItems(): TrackAndTrace[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof TrackAndTrace ? x : new TrackAndTrace(x));
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