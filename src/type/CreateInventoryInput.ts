import { InventoryType } from '../enum/InventoryType';
/**
 Input object for CreateInventoryInput
 */
export interface CreateInventoryInput {
  /** Inventory type to create */
  type: InventoryType;
  /** Inventory product identifier */
  productId: number;
  /** Inventory quantity */
  quantity: number;
  /** Inventory location */
  location?: string;
  /** Inventory warehouse identifier */
  warehouseId?: number;
  /** Inventory notes */
  notes?: string;
  /** Inventory estimated next delivery date in ISO8601 format */
  nextDeliveryDate?: string;
  /** Inventory cost price */
  costPrice?: number;
  /** Inventory supplier. Defaults:
      - 'INTERN' for local inventory type
      - '[inherited from product supplier]' for supplier inventory type */
  supplier?: string;
}