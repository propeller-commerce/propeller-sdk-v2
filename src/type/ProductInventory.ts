import { Inventory } from './Inventory';
/**
 Object class for ProductInventory
 */
export class ProductInventory {
  /** Inventory product identifier */
  private _productId: number;
  /** Total product quantity */
  private _totalQuantity: number;
  /** Supplier product quantity */
  private _supplierQuantity: number;
  /** Local product quantity */
  private _localQuantity: number;
  /** Inventory estimated next delivery date */
  private _nextDeliveryDate?: string;
  /** Inventory items */
  private _balance?: Inventory[];
  /**
   Creates a new instance of ProductInventory
   */
  constructor(data: Partial<ProductInventory> = {}) {
    this._productId = data.productId!;
    this._totalQuantity = data.totalQuantity!;
    this._supplierQuantity = data.supplierQuantity!;
    this._localQuantity = data.localQuantity!;
    this._nextDeliveryDate = data.nextDeliveryDate;
    this._balance = data.balance;
  }
  /**
   Inventory product identifier
   */
  get productId(): number {
    return this._productId;
  }
  /**
   Inventory product identifier
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   Total product quantity
   */
  get totalQuantity(): number {
    return this._totalQuantity;
  }
  /**
   Total product quantity
   */
  set totalQuantity(value: number) {
    this._totalQuantity = value;
  }
  /**
   Supplier product quantity
   */
  get supplierQuantity(): number {
    return this._supplierQuantity;
  }
  /**
   Supplier product quantity
   */
  set supplierQuantity(value: number) {
    this._supplierQuantity = value;
  }
  /**
   Local product quantity
   */
  get localQuantity(): number {
    return this._localQuantity;
  }
  /**
   Local product quantity
   */
  set localQuantity(value: number) {
    this._localQuantity = value;
  }
  /**
   Inventory estimated next delivery date
   */
  get nextDeliveryDate(): string | undefined {
    return this._nextDeliveryDate;
  }
  /**
   Inventory estimated next delivery date
   */
  set nextDeliveryDate(value: string | undefined) {
    this._nextDeliveryDate = value;
  }
  /**
   Inventory items
   */
  get balance(): Inventory[] | undefined {
    return this._balance;
  }
  /**
   Inventory items
   */
  set balance(value: Inventory[] | undefined) {
    this._balance = value;
  }
}