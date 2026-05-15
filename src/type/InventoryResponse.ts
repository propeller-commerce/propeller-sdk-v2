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
  /** @deprecated Use lastModifiedAt instead */
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
  /** @deprecated No longer used */
  messages!: string[];
  /** Total */
  /** @deprecated No longer used */
  total!: number;
  /** warehouse field */
  warehouse?: Warehouse;
  constructor(data: Partial<InventoryResponse> = {}) {
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
  /** Returns `dateModified`. */
  getDateModified(): string | undefined {
    return this.dateModified;
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
  /** Returns `messages`. */
  getMessages(): string[] {
    return this.messages;
  }
  /** Returns `total`. */
  getTotal(): number {
    return this.total;
  }
  /** Returns `warehouse` as a Warehouse instance (coerced on first access). */
  getWarehouse(): Warehouse | undefined {
    if (this.warehouse == null) return undefined;
    if (!(this.warehouse instanceof Warehouse)) {
      this.warehouse = new Warehouse(this.warehouse as any);
    }
    return this.warehouse;
  }
}