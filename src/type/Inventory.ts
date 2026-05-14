/**
 Object class for Inventory
 */
export class Inventory {
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
  constructor(data: Partial<Inventory> = {}) {
    Object.assign(this, data);
  }
}