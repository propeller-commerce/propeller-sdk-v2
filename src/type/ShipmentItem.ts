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
}