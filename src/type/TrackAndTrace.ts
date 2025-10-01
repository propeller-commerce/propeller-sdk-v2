import { Carrier } from './Carrier';
/**
 Object class for TrackAndTrace
 */
export class TrackAndTrace {
  /** Carrier id */
  private _carrierId?: number;
  /** Get carrier for track and trace */
  private _carrier?: Carrier;
  /** Unique identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Code */
  private _code: string;
  /** Shipment unique identifier */
  private _shipmentId: string;
  /**
   Creates a new instance of TrackAndTrace
   */
  constructor(data: Partial<TrackAndTrace> = {}) {
    this._carrierId = data.carrierId;
    this._carrier = data.carrier;
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._code = data.code!;
    this._shipmentId = data.shipmentId!;
  }
  /**
   Carrier id
   */
  get carrierId(): number | undefined {
    return this._carrierId;
  }
  /**
   Carrier id
   */
  set carrierId(value: number | undefined) {
    this._carrierId = value;
  }
  /**
   Get carrier for track and trace
   */
  get carrier(): Carrier | undefined {
    return this._carrier;
  }
  /**
   Get carrier for track and trace
   */
  set carrier(value: Carrier | undefined) {
    this._carrier = value;
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
   Code
   */
  get code(): string {
    return this._code;
  }
  /**
   Code
   */
  set code(value: string) {
    this._code = value;
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
}