import { IBaseProduct } from './IBaseProduct';
import { AttributeFilter } from './AttributeFilter';
/**
 Object class for ProductsResponse
 */
export class ProductsResponse {
  /** List of items of type ProductResultUnion */
  private _items: IBaseProduct[];
  /** Total number of items found */
  private _itemsFound: number;
  /** The amount of items to show per page */
  private _offset: number;
  /**  The current page */
  private _page: number;
  /** Total amount of pages */
  private _pages: number;
  /** Start position of the current page */
  private _start: number;
  /** End position of the current page */
  private _end: number;
  /** The lowest price of a product in this productlist */
  private _minPrice: number;
  /** The highest price of a product in this productlist */
  private _maxPrice: number;
  /** filters field */
  private _filters?: AttributeFilter[];
  /**
   Creates a new instance of ProductsResponse
   */
  constructor(data: Partial<ProductsResponse> = {}) {
    this._items = data.items!;
    this._itemsFound = data.itemsFound!;
    this._offset = data.offset!;
    this._page = data.page!;
    this._pages = data.pages!;
    this._start = data.start!;
    this._end = data.end!;
    this._minPrice = data.minPrice!;
    this._maxPrice = data.maxPrice!;
    this._filters = data.filters;
  }
  /**
   List of items of type ProductResultUnion
   */
  get items(): IBaseProduct[] {
    return this._items;
  }
  /**
   List of items of type ProductResultUnion
   */
  set items(value: IBaseProduct[]) {
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
  /**
   The lowest price of a product in this productlist
   */
  get minPrice(): number {
    return this._minPrice;
  }
  /**
   The lowest price of a product in this productlist
   */
  set minPrice(value: number) {
    this._minPrice = value;
  }
  /**
   The highest price of a product in this productlist
   */
  get maxPrice(): number {
    return this._maxPrice;
  }
  /**
   The highest price of a product in this productlist
   */
  set maxPrice(value: number) {
    this._maxPrice = value;
  }
  /**
   filters field
   */
  get filters(): AttributeFilter[] | undefined {
    return this._filters;
  }
  /**
   filters field
   */
  set filters(value: AttributeFilter[] | undefined) {
    this._filters = value;
  }
}