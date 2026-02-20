import { Ticket } from './Ticket';
/**
 Object class for TicketResponse
 */
export class TicketResponse {
  /** List of items of type Ticket */
  private _items: Ticket[];
  /** Total number of items found */
  private _itemsFound: number;
  /** The amount of items to show per page */
  private _offset: number;
  /** The current page */
  private _page: number;
  /** Total amount of pages */
  private _pages: number;
  /** Start position of the current page */
  private _start: number;
  /** End position of the current page */
  private _end: number;
  /**
   Creates a new instance of TicketResponse
   */
  constructor(data: Partial<TicketResponse> = {}) {
    this._items = data.items!;
    this._itemsFound = data.itemsFound!;
    this._offset = data.offset!;
    this._page = data.page!;
    this._pages = data.pages!;
    this._start = data.start!;
    this._end = data.end!;
  }
  get items(): Ticket[] { return this._items; }
  set items(value: Ticket[]) { this._items = value; }
  get itemsFound(): number { return this._itemsFound; }
  set itemsFound(value: number) { this._itemsFound = value; }
  get offset(): number { return this._offset; }
  set offset(value: number) { this._offset = value; }
  get page(): number { return this._page; }
  set page(value: number) { this._page = value; }
  get pages(): number { return this._pages; }
  set pages(value: number) { this._pages = value; }
  get start(): number { return this._start; }
  set start(value: number) { this._start = value; }
  get end(): number { return this._end; }
  set end(value: number) { this._end = value; }
}
