import { ShipmentStatus } from '../enum/ShipmentStatus';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
/**
 Object class for Shipment
 */
export class Shipment {
  /** Unique identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Expected delivery date */
  expectedDeliveryAt?: string;
  /** Shipment status */
  status?: ShipmentStatus;
  /** The ID of the Order the shipment belongs to */
  orderId!: number;
  /** Shipment items */
  items?: ShipmentItem[];
  /** Track and traces */
  trackAndTraces?: TrackAndTrace[];
  constructor(data: Partial<Shipment> = {}) {
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
  /** Returns `expectedDeliveryAt`. */
  getExpectedDeliveryAt(): string | undefined {
    return this.expectedDeliveryAt;
  }
  /** Returns `status`. */
  getStatus(): ShipmentStatus | undefined {
    return this.status;
  }
  /** Returns `orderId`. */
  getOrderId(): number {
    return this.orderId;
  }
  /** Returns `items` as ShipmentItem instances (coerced on first access). */
  getItems(): ShipmentItem[] | undefined {
    if (!this.items) return undefined;
    this.items = this.items.map((x: any) => x instanceof ShipmentItem ? x : new ShipmentItem(x));
    return this.items;
  }
  /** Returns `trackAndTraces` as TrackAndTrace instances (coerced on first access). */
  getTrackAndTraces(): TrackAndTrace[] | undefined {
    if (!this.trackAndTraces) return undefined;
    this.trackAndTraces = this.trackAndTraces.map((x: any) => x instanceof TrackAndTrace ? x : new TrackAndTrace(x));
    return this.trackAndTraces;
  }
}