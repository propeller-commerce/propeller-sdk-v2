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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `costPrice`. */
  getCostPrice(): number {
    return this.costPrice;
  }
  /** Returns `supplier`. */
  getSupplier(): string {
    return this.supplier;
  }
  /** Returns `supplierCode`. */
  getSupplierCode(): string {
    return this.supplierCode;
  }
  /** Returns `sku`. */
  getSku(): string {
    return this.sku;
  }
  /** Returns `warehouseId`. */
  getWarehouseId(): number {
    return this.warehouseId;
  }
  /** Returns `location`. */
  getLocation(): string {
    return this.location;
  }
  /** Returns `nextDeliveryDate`. */
  getNextDeliveryDate(): string {
    return this.nextDeliveryDate;
  }
  /** Returns `notes`. */
  getNotes(): string {
    return this.notes;
  }
}