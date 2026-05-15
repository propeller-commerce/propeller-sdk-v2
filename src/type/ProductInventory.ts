import { Inventory } from './Inventory';
/**
 Object class for ProductInventory
 */
export class ProductInventory {
  /** Inventory product identifier */
  productId!: number;
  /** Total product quantity */
  totalQuantity!: number;
  /** Supplier product quantity */
  supplierQuantity!: number;
  /** Local product quantity */
  localQuantity!: number;
  /** Inventory estimated next delivery date */
  nextDeliveryDate?: string;
  /** Inventory items */
  balance?: Inventory[];
  constructor(data: Partial<ProductInventory> = {}) {
    Object.assign(this, data);
  }

  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `totalQuantity`. */
  getTotalQuantity(): number {
    return this.totalQuantity;
  }
  /** Returns `supplierQuantity`. */
  getSupplierQuantity(): number {
    return this.supplierQuantity;
  }
  /** Returns `localQuantity`. */
  getLocalQuantity(): number {
    return this.localQuantity;
  }
  /** Returns `nextDeliveryDate`. */
  getNextDeliveryDate(): string | undefined {
    return this.nextDeliveryDate;
  }
  /** Returns `balance` as Inventory instances (coerced on first access). */
  getBalance(): Inventory[] | undefined {
    if (!this.balance) return undefined;
    this.balance = this.balance.map((x: any) => x instanceof Inventory ? x : new Inventory(x));
    return this.balance;
  }
}