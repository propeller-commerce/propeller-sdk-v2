import { Inventory } from './Inventory';
/**
 Object class for ProductInventory
 */
export interface ProductInventory {
  /** Inventory product identifier */
  productId: number;
  /** Total product quantity */
  totalQuantity: number;
  /** Supplier product quantity */
  supplierQuantity: number;
  /** Local product quantity */
  localQuantity: number;
  /** Inventory estimated next delivery date */
  nextDeliveryDate?: string;
  /** Inventory items */
  balance?: Inventory[];
}