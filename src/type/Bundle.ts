import { BundleCondition } from '../enum/BundleCondition';
import { BundlePrice } from './BundlePrice';
import { BundleItem } from './BundleItem';
/**
 Object class for Bundle
 */
export class Bundle {
  /** Bundle primary identifier */
  private _id: string;
  /** Bundle name */
  private _name?: string;
  /** Bundle description */
  private _description?: string;
  /** Bundle discount amount */
  private _discount?: number;
  /** Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL). */
  private _condition?: BundleCondition;
  /** Bundle price */
  private _price?: BundlePrice;
  /** Items in the bundle. */
  private _items?: BundleItem[];
  /** Bundle creation date [default: now] */
  private _createdAt?: string;
  /** Bundle creator */
  private _createdBy?: number;
  /** Last modified date */
  private _lastModifiedAt?: string;
  /** Last modified by */
  private _lastModifiedBy?: number;
  /**
   Creates a new instance of Bundle
   */
  constructor(data: Partial<Bundle> = {}) {
    this._id = data.id!;
    this._name = data.name;
    this._description = data.description;
    this._discount = data.discount;
    this._condition = data.condition;
    this._price = data.price;
    this._items = data.items;
    this._createdAt = data.createdAt;
    this._createdBy = data.createdBy;
    this._lastModifiedAt = data.lastModifiedAt;
    this._lastModifiedBy = data.lastModifiedBy;
  }
  /**
   Bundle primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Bundle primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Bundle name
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Bundle name
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   Bundle description
   */
  get description(): string | undefined {
    return this._description;
  }
  /**
   Bundle description
   */
  set description(value: string | undefined) {
    this._description = value;
  }
  /**
   Bundle discount amount
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   Bundle discount amount
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
  /**
   Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
   */
  get condition(): BundleCondition | undefined {
    return this._condition;
  }
  /**
   Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL).
   */
  set condition(value: BundleCondition | undefined) {
    this._condition = value;
  }
  /**
   Bundle price
   */
  get price(): BundlePrice | undefined {
    return this._price;
  }
  /**
   Bundle price
   */
  set price(value: BundlePrice | undefined) {
    this._price = value;
  }
  /**
   Items in the bundle.
   */
  get items(): BundleItem[] | undefined {
    return this._items;
  }
  /**
   Items in the bundle.
   */
  set items(value: BundleItem[] | undefined) {
    this._items = value;
  }
  /**
   Bundle creation date [default: now]
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   Bundle creation date [default: now]
   */
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }
  /**
   Bundle creator
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   Bundle creator
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string | undefined {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string | undefined) {
    this._lastModifiedAt = value;
  }
  /**
   Last modified by
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   Last modified by
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
}