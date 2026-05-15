import { Carrier } from './Carrier';
/**
 Object class for TrackAndTrace
 */
export class TrackAndTrace {
  /** Carrier id */
  carrierId?: number;
  /** Get carrier for track and trace */
  carrier?: Carrier;
  /** Unique identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Code */
  code!: string;
  /** Shipment unique identifier */
  shipmentId!: string;
  constructor(data: Partial<TrackAndTrace> = {}) {
    Object.assign(this, data);
  }

  /** Returns `carrierId`. */
  getCarrierId(): number | undefined {
    return this.carrierId;
  }
  /** Returns `carrier` as a Carrier instance (coerced on first access). */
  getCarrier(): Carrier | undefined {
    if (this.carrier == null) return undefined;
    if (!(this.carrier instanceof Carrier)) {
      this.carrier = new Carrier(this.carrier as any);
    }
    return this.carrier;
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
  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns `shipmentId`. */
  getShipmentId(): string {
    return this.shipmentId;
  }
}