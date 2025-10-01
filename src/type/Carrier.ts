import { CarrierType } from '../enum/CarrierType';
import { LocalizedString } from './LocalizedString';
import { TrackAndTrace } from './TrackAndTrace';
import { Warehouse } from './Warehouse';
/**
 Object class for Carrier
 */
export class Carrier {
  /** Carrier primary identifier */
  private _id: number;
  /** Carrier name */
  private _name: string;
  /** Carrier type */
  private _type: CarrierType;
  /** Carrier description per language */
  private _descriptions?: LocalizedString[];
  /** shippingCost field */
  /** @deprecated Deprecated in favor Propeller's business rule builder, where logic can be set up for carriers and more complex use cases */
  private _shippingCost: number;
  /** Track and Trace redirect URL */
  private _trackAndTraceURL?: string;
  /** Logo url */
  private _logo?: string;
  /** Carrier creation date */
  private _createdAt: string;
  /** Carrier last modified date */
  private _lastModifiedAt: string;
  /** The userId of the user that created the carrier */
  private _createdBy?: number;
  /** The userId of the user that last modified the carrier */
  private _lastModifiedBy?: number;
  /** Get all track and traces for a carrier */
  private _trackAndTraces: TrackAndTrace[];
  /** warehouses field */
  private _warehouses?: Warehouse[];
  /**
   Creates a new instance of Carrier
   */
  constructor(data: Partial<Carrier> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._type = data.type!;
    this._descriptions = data.descriptions;
    this._shippingCost = data.shippingCost!;
    this._trackAndTraceURL = data.trackAndTraceURL;
    this._logo = data.logo;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._trackAndTraces = data.trackAndTraces!;
    this._warehouses = data.warehouses;
  }
  /**
   Carrier primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Carrier primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Carrier name
   */
  get name(): string {
    return this._name;
  }
  /**
   Carrier name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Carrier type
   */
  get type(): CarrierType {
    return this._type;
  }
  /**
   Carrier type
   */
  set type(value: CarrierType) {
    this._type = value;
  }
  /**
   Carrier description per language
   */
  get descriptions(): LocalizedString[] | undefined {
    return this._descriptions;
  }
  /**
   Carrier description per language
   */
  set descriptions(value: LocalizedString[] | undefined) {
    this._descriptions = value;
  }
  /**
   shippingCost field
   */
  get shippingCost(): number {
    return this._shippingCost;
  }
  /**
   shippingCost field
   */
  set shippingCost(value: number) {
    this._shippingCost = value;
  }
  /**
   Track and Trace redirect URL
   */
  get trackAndTraceURL(): string | undefined {
    return this._trackAndTraceURL;
  }
  /**
   Track and Trace redirect URL
   */
  set trackAndTraceURL(value: string | undefined) {
    this._trackAndTraceURL = value;
  }
  /**
   Logo url
   */
  get logo(): string | undefined {
    return this._logo;
  }
  /**
   Logo url
   */
  set logo(value: string | undefined) {
    this._logo = value;
  }
  /**
   Carrier creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Carrier creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Carrier last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Carrier last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   The userId of the user that created the carrier
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   The userId of the user that created the carrier
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   The userId of the user that last modified the carrier
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   The userId of the user that last modified the carrier
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   Get all track and traces for a carrier
   */
  get trackAndTraces(): TrackAndTrace[] {
    return this._trackAndTraces;
  }
  /**
   Get all track and traces for a carrier
   */
  set trackAndTraces(value: TrackAndTrace[]) {
    this._trackAndTraces = value;
  }
  /**
   warehouses field
   */
  get warehouses(): Warehouse[] | undefined {
    return this._warehouses;
  }
  /**
   warehouses field
   */
  set warehouses(value: Warehouse[] | undefined) {
    this._warehouses = value;
  }
}