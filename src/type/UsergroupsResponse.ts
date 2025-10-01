import { Usergroup } from './Usergroup';
/**
 Object class for UsergroupsResponse
 */
export class UsergroupsResponse {
  /** List of items of type Usergroup */
  private _items: Usergroup[];
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
   Creates a new instance of UsergroupsResponse
   */
  constructor(data: Partial<UsergroupsResponse> = {}) {
    this._items = data.items!;
    this._itemsFound = data.itemsFound!;
    this._offset = data.offset!;
    this._page = data.page!;
    this._pages = data.pages!;
    this._start = data.start!;
    this._end = data.end!;
  }
  /**
   List of items of type Usergroup
   */
  get items(): Usergroup[] {
    return this._items;
  }
  /**
   List of items of type Usergroup
   */
  set items(value: Usergroup[]) {
    this._items = value;
  }
  /**
   Total number of items found
   */
  get itemsFound(): number {
    return this._itemsFound;
  }
  /**
   Total number of items found
   */
  set itemsFound(value: number) {
    this._itemsFound = value;
  }
  /**
   The amount of items to show per page
   */
  get offset(): number {
    return this._offset;
  }
  /**
   The amount of items to show per page
   */
  set offset(value: number) {
    this._offset = value;
  }
  /**
   The current page
   */
  get page(): number {
    return this._page;
  }
  /**
   The current page
   */
  set page(value: number) {
    this._page = value;
  }
  /**
   Total amount of pages
   */
  get pages(): number {
    return this._pages;
  }
  /**
   Total amount of pages
   */
  set pages(value: number) {
    this._pages = value;
  }
  /**
   Start position of the current page
   */
  get start(): number {
    return this._start;
  }
  /**
   Start position of the current page
   */
  set start(value: number) {
    this._start = value;
  }
  /**
   End position of the current page
   */
  get end(): number {
    return this._end;
  }
  /**
   End position of the current page
   */
  set end(value: number) {
    this._end = value;
  }
}