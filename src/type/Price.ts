import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { PriceDisplay } from '../enum/PriceDisplay';
import { CostPrice } from './CostPrice';
/**
 Object class for Price
 */
export class Price {
  /** Primary identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Product Id */
  private _productId: number;
  /** The quantity of items that the listed price will purchase. */
  private _per: number;
  /** The default sales price. */
  private _list: number;
  /** costPrices field */
  private _costPrices?: CostPrice[];
  /** The manufacturer's or supplier's recommended retail price (RRP) for the product. */
  private _suggested?: number;
  /** The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies. */
  private _store?: number;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  private _bulkPriceDiscountType: PriceDiscountType;
  /** Default tax code */
  private _defaultTaxCode: Taxcode;
  /** Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'. */
  private _display?: PriceDisplay;
  /** cost field */
  /** @deprecated Deprecated in favor of using costPrices (quantity 1) */
  private _cost?: number;
  /**
   Creates a new instance of Price
   */
  constructor(data: Partial<Price> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._productId = data.productId!;
    this._per = data.per!;
    this._list = data.list!;
    this._costPrices = data.costPrices;
    this._suggested = data.suggested;
    this._store = data.store;
    this._bulkPriceDiscountType = data.bulkPriceDiscountType!;
    this._defaultTaxCode = data.defaultTaxCode!;
    this._display = data.display;
    this._cost = data.cost;
  }
  /**
   Primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Product Id
   */
  get productId(): number {
    return this._productId;
  }
  /**
   Product Id
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   The quantity of items that the listed price will purchase.
   */
  get per(): number {
    return this._per;
  }
  /**
   The quantity of items that the listed price will purchase.
   */
  set per(value: number) {
    this._per = value;
  }
  /**
   The default sales price.
   */
  get list(): number {
    return this._list;
  }
  /**
   The default sales price.
   */
  set list(value: number) {
    this._list = value;
  }
  /**
   costPrices field
   */
  get costPrices(): CostPrice[] | undefined {
    return this._costPrices;
  }
  /**
   costPrices field
   */
  set costPrices(value: CostPrice[] | undefined) {
    this._costPrices = value;
  }
  /**
   The manufacturer's or supplier's recommended retail price (RRP) for the product.
   */
  get suggested(): number | undefined {
    return this._suggested;
  }
  /**
   The manufacturer's or supplier's recommended retail price (RRP) for the product.
   */
  set suggested(value: number | undefined) {
    this._suggested = value;
  }
  /**
   The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
   */
  get store(): number | undefined {
    return this._store;
  }
  /**
   The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
   */
  set store(value: number | undefined) {
    this._store = value;
  }
  /**
   The method used to apply discounts for bulk prices / volume discounts.
   */
  get bulkPriceDiscountType(): PriceDiscountType {
    return this._bulkPriceDiscountType;
  }
  /**
   The method used to apply discounts for bulk prices / volume discounts.
   */
  set bulkPriceDiscountType(value: PriceDiscountType) {
    this._bulkPriceDiscountType = value;
  }
  /**
   Default tax code
   */
  get defaultTaxCode(): Taxcode {
    return this._defaultTaxCode;
  }
  /**
   Default tax code
   */
  set defaultTaxCode(value: Taxcode) {
    this._defaultTaxCode = value;
  }
  /**
   Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
   */
  get display(): PriceDisplay | undefined {
    return this._display;
  }
  /**
   Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
   */
  set display(value: PriceDisplay | undefined) {
    this._display = value;
  }
  /**
   cost field
   */
  get cost(): number | undefined {
    return this._cost;
  }
  /**
   cost field
   */
  set cost(value: number | undefined) {
    this._cost = value;
  }
}