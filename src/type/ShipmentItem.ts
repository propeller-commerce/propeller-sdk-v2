import { OrderItem } from './OrderItem';
/**
 Object class for ShipmentItem
 */
export class ShipmentItem {
  /** Unique identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Shipment item name */
  name?: string;
  /** Product SKU */
  sku?: string;
  /** Shipment item quantity */
  quantity?: number;
  /** Shipment unique identifier */
  shipmentId!: string;
  /** Order item id */
  orderItemId?: number;
  /** orderItem field */
  orderItem!: OrderItem;
  constructor(data: Partial<ShipmentItem> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
  /** Returns `sku`. */
  getSku(): string | undefined {
    return this.sku;
  }
  /** Returns `quantity`. */
  getQuantity(): number | undefined {
    return this.quantity;
  }
  /** Returns `shipmentId`. */
  getShipmentId(): string {
    return this.shipmentId;
  }
  /** Returns `orderItemId`. */
  getOrderItemId(): number | undefined {
    return this.orderItemId;
  }
  /** Returns `orderItem` as a OrderItem instance (coerced on first access). */
  getOrderItem(): OrderItem | undefined {
    if (this.orderItem == null) return undefined;
    if (!(this.orderItem instanceof OrderItem)) {
      this.orderItem = new OrderItem(this.orderItem as any);
    }
    return this.orderItem;
  }
}