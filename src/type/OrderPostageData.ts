import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for OrderPostageData
 */
export class OrderPostageData {
  /** The chosen shipping method */
  private _method: string;
  /** The shipping costs tax percentage */
  private _taxPercentage: number;
  /** The preferred delivery date for the Order */
  private _requestDate?: string;
  /** The shipping costs excluding tax */
  private _gross: number;
  /** The shipping costs including tax */
  private _net: number;
  /** The tax on the shipping costs */
  private _tax: number;
  /** Is partial delivery allowed for this Order */
  private _partialDeliveryAllowed?: YesNo;
  /** ID of the pick up location when the Order's shipping method is PICKUP */
  private _pickUpLocationId?: number;
  /** The selected carrier for this Order */
  private _carrier?: string;
  /** Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  private _overruled?: YesNo;
  /** warehouse field */
  private _warehouse?: Warehouse;
  /**
   Creates a new instance of OrderPostageData
   */
  constructor(data: Partial<OrderPostageData> = {}) {
    this._method = data.method!;
    this._taxPercentage = data.taxPercentage!;
    this._requestDate = data.requestDate;
    this._gross = data.gross!;
    this._net = data.net!;
    this._tax = data.tax!;
    this._partialDeliveryAllowed = data.partialDeliveryAllowed;
    this._pickUpLocationId = data.pickUpLocationId;
    this._carrier = data.carrier;
    this._overruled = data.overruled;
    this._warehouse = data.warehouse;
  }
  /**
   The chosen shipping method
   */
  get method(): string {
    return this._method;
  }
  /**
   The chosen shipping method
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   The shipping costs tax percentage
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   The shipping costs tax percentage
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   The preferred delivery date for the Order
   */
  get requestDate(): string | undefined {
    return this._requestDate;
  }
  /**
   The preferred delivery date for the Order
   */
  set requestDate(value: string | undefined) {
    this._requestDate = value;
  }
  /**
   The shipping costs excluding tax
   */
  get gross(): number {
    return this._gross;
  }
  /**
   The shipping costs excluding tax
   */
  set gross(value: number) {
    this._gross = value;
  }
  /**
   The shipping costs including tax
   */
  get net(): number {
    return this._net;
  }
  /**
   The shipping costs including tax
   */
  set net(value: number) {
    this._net = value;
  }
  /**
   The tax on the shipping costs
   */
  get tax(): number {
    return this._tax;
  }
  /**
   The tax on the shipping costs
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   Is partial delivery allowed for this Order
   */
  get partialDeliveryAllowed(): YesNo | undefined {
    return this._partialDeliveryAllowed;
  }
  /**
   Is partial delivery allowed for this Order
   */
  set partialDeliveryAllowed(value: YesNo | undefined) {
    this._partialDeliveryAllowed = value;
  }
  /**
   ID of the pick up location when the Order's shipping method is PICKUP
   */
  get pickUpLocationId(): number | undefined {
    return this._pickUpLocationId;
  }
  /**
   ID of the pick up location when the Order's shipping method is PICKUP
   */
  set pickUpLocationId(value: number | undefined) {
    this._pickUpLocationId = value;
  }
  /**
   The selected carrier for this Order
   */
  get carrier(): string | undefined {
    return this._carrier;
  }
  /**
   The selected carrier for this Order
   */
  set carrier(value: string | undefined) {
    this._carrier = value;
  }
  /**
   Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
   */
  get overruled(): YesNo | undefined {
    return this._overruled;
  }
  /**
   Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
   */
  set overruled(value: YesNo | undefined) {
    this._overruled = value;
  }
  /**
   warehouse field
   */
  get warehouse(): Warehouse | undefined {
    return this._warehouse;
  }
  /**
   warehouse field
   */
  set warehouse(value: Warehouse | undefined) {
    this._warehouse = value;
  }
}