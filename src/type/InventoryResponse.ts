import { Warehouse } from './Warehouse';
/**
 Object class for InventoryResponse
 */
export class InventoryResponse {
  /** Inventory primary identifier */
  id!: string | number;
  /** Inventory product identifier */
  productId!: number;
  /** Inventory quantity */
  quantity!: number;
  /** Inventory cost price */
  costPrice!: number;
  /** Inventory supplier */
  supplier!: string;
  /** Inventory supplier code */
  supplierCode!: string;
  /** Inventory sku */
  sku!: string;
  /** Inventory last modified date */
  dateModified?: string;
  /** Inventory warehouse identifier */
  warehouseId!: number;
  /** Inventory location */
  location!: string;
  /** Inventory estimated next delivery date */
  nextDeliveryDate!: string;
  /** Inventory note */
  notes!: string;
  /** Error messages */
  messages!: string[];
  /** Total */
  total!: number;
  /** warehouse field */
  warehouse?: Warehouse;
  constructor(data: Partial<InventoryResponse> = {}) {
    Object.assign(this, data);
  }
}