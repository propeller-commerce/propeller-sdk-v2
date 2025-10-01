import { OrderItem } from './OrderItem';
/**
 Object class for ShipmentItem
 */
export class ShipmentItem {
  /** Unique identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Shipment item name */
  private _name?: string;
  /** Product SKU */
  private _sku?: string;
  /** Shipment item quantity */
  private _quantity?: number;
  /** Shipment unique identifier */
  private _shipmentId: string;
  /** Order item id */
  private _orderItemId?: number;
  /** orderItem field */
  private _orderItem: OrderItem;
  /**
   Creates a new instance of ShipmentItem
   */
  constructor(data: Partial<ShipmentItem> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._name = data.name;
    this._sku = data.sku;
    this._quantity = data.quantity;
    this._shipmentId = data.shipmentId!;
    this._orderItemId = data.orderItemId;
    this._orderItem = data.orderItem!;
  }
  /**
   Unique identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Unique identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Shipment item name
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Shipment item name
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   Product SKU
   */
  get sku(): string | undefined {
    return this._sku;
  }
  /**
   Product SKU
   */
  set sku(value: string | undefined) {
    this._sku = value;
  }
  /**
   Shipment item quantity
   */
  get quantity(): number | undefined {
    return this._quantity;
  }
  /**
   Shipment item quantity
   */
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  /**
   Shipment unique identifier
   */
  get shipmentId(): string {
    return this._shipmentId;
  }
  /**
   Shipment unique identifier
   */
  set shipmentId(value: string) {
    this._shipmentId = value;
  }
  /**
   Order item id
   */
  get orderItemId(): number | undefined {
    return this._orderItemId;
  }
  /**
   Order item id
   */
  set orderItemId(value: number | undefined) {
    this._orderItemId = value;
  }
  /**
   orderItem field
   */
  get orderItem(): OrderItem {
    return this._orderItem;
  }
  /**
   orderItem field
   */
  set orderItem(value: OrderItem) {
    this._orderItem = value;
  }
}