import { YesNo } from '../enum/YesNo';
import { BundlePrice } from './BundlePrice';
import { Product } from './Product';
/**
 Object class for BundleItem
 */
export class BundleItem {
  /** The bundles primary product identifier */
  private _productId: number;
  /** Bundle price */
  private _price?: BundlePrice;
  /** Indicates whether the product is leader for this bundle. */
  private _isLeader?: YesNo;
  /** Bundle creation date */
  private _createdAt?: string;
  /** Bundle creator */
  private _createdBy?: number;
  /** Last modified date */
  private _lastModifiedAt?: string;
  /** Last modified by */
  private _lastModifiedBy?: number;
  /** product field */
  private _product: Product;
  /**
   Creates a new instance of BundleItem
   */
  constructor(data: Partial<BundleItem> = {}) {
    this._productId = data.productId!;
    this._price = data.price;
    this._isLeader = data.isLeader;
    this._createdAt = data.createdAt;
    this._createdBy = data.createdBy;
    this._lastModifiedAt = data.lastModifiedAt;
    this._lastModifiedBy = data.lastModifiedBy;
    this._product = data.product!;
  }
  /**
   The bundles primary product identifier
   */
  get productId(): number {
    return this._productId;
  }
  /**
   The bundles primary product identifier
   */
  set productId(value: number) {
    this._productId = value;
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
   Indicates whether the product is leader for this bundle.
   */
  get isLeader(): YesNo | undefined {
    return this._isLeader;
  }
  /**
   Indicates whether the product is leader for this bundle.
   */
  set isLeader(value: YesNo | undefined) {
    this._isLeader = value;
  }
  /**
   Bundle creation date
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   Bundle creation date
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
  /**
   product field
   */
  get product(): Product {
    return this._product;
  }
  /**
   product field
   */
  set product(value: Product) {
    this._product = value;
  }
}