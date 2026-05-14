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
}