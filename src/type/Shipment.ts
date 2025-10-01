import { ShipmentStatus } from '../enum/ShipmentStatus';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
/**
 Object class for Shipment
 */
export class Shipment {
  /** Unique identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Expected delivery date */
  private _expectedDeliveryAt?: string;
  /** Shipment status */
  private _status?: ShipmentStatus;
  /** The ID of the Order the shipment belongs to */
  private _orderId: number;
  /** Shipment items */
  private _items?: ShipmentItem[];
  /** Track and traces */
  private _trackAndTraces?: TrackAndTrace[];
  /**
   Creates a new instance of Shipment
   */
  constructor(data: Partial<Shipment> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._expectedDeliveryAt = data.expectedDeliveryAt;
    this._status = data.status;
    this._orderId = data.orderId!;
    this._items = data.items;
    this._trackAndTraces = data.trackAndTraces;
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
   Expected delivery date
   */
  get expectedDeliveryAt(): string | undefined {
    return this._expectedDeliveryAt;
  }
  /**
   Expected delivery date
   */
  set expectedDeliveryAt(value: string | undefined) {
    this._expectedDeliveryAt = value;
  }
  /**
   Shipment status
   */
  get status(): ShipmentStatus | undefined {
    return this._status;
  }
  /**
   Shipment status
   */
  set status(value: ShipmentStatus | undefined) {
    this._status = value;
  }
  /**
   The ID of the Order the shipment belongs to
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   The ID of the Order the shipment belongs to
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   Shipment items
   */
  get items(): ShipmentItem[] | undefined {
    return this._items;
  }
  /**
   Shipment items
   */
  set items(value: ShipmentItem[] | undefined) {
    this._items = value;
  }
  /**
   Track and traces
   */
  get trackAndTraces(): TrackAndTrace[] | undefined {
    return this._trackAndTraces;
  }
  /**
   Track and traces
   */
  set trackAndTraces(value: TrackAndTrace[] | undefined) {
    this._trackAndTraces = value;
  }
}