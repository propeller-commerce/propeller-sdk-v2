import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for TenderPostage
 */
export class TenderPostage {
  /** The selected shipping method for this tender/order */
  private _method: string;
  /** Postage tax percentage */
  private _taxPercentage: number;
  /** The preferred delivery date for this order as requested by the user */
  private _requestDate?: string;
  /** The selected carrier for this tender/order */
  private _carrier?: string;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding */
  private _price: number;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including */
  private _priceNet: number;
  /** The VAT associated with the selected shipping method and business rules that apply to this tender/order. */
  private _tax: number;
  /** If false, shipping costs are automatically calculated */
  private _overruled?: YesNo;
  /** This order can be shipped in parts when items different delivery dates */
  private _partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  private _pickUpLocationId?: number;
  /** warehouse field */
  private _warehouse?: Warehouse;
  /**
   Creates a new instance of TenderPostage
   */
  constructor(data: Partial<TenderPostage> = {}) {
    this._method = data.method!;
    this._taxPercentage = data.taxPercentage!;
    this._requestDate = data.requestDate;
    this._carrier = data.carrier;
    this._price = data.price!;
    this._priceNet = data.priceNet!;
    this._tax = data.tax!;
    this._overruled = data.overruled;
    this._partialDeliveryAllowed = data.partialDeliveryAllowed;
    this._pickUpLocationId = data.pickUpLocationId;
    this._warehouse = data.warehouse;
  }
  /**
   The selected shipping method for this tender/order
   */
  get method(): string {
    return this._method;
  }
  /**
   The selected shipping method for this tender/order
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   Postage tax percentage
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   Postage tax percentage
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   The preferred delivery date for this order as requested by the user
   */
  get requestDate(): string | undefined {
    return this._requestDate;
  }
  /**
   The preferred delivery date for this order as requested by the user
   */
  set requestDate(value: string | undefined) {
    this._requestDate = value;
  }
  /**
   The selected carrier for this tender/order
   */
  get carrier(): string | undefined {
    return this._carrier;
  }
  /**
   The selected carrier for this tender/order
   */
  set carrier(value: string | undefined) {
    this._carrier = value;
  }
  /**
   The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
   */
  get price(): number {
    return this._price;
  }
  /**
   The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
   */
  get priceNet(): number {
    return this._priceNet;
  }
  /**
   The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including
   */
  set priceNet(value: number) {
    this._priceNet = value;
  }
  /**
   The VAT associated with the selected shipping method and business rules that apply to this tender/order.
   */
  get tax(): number {
    return this._tax;
  }
  /**
   The VAT associated with the selected shipping method and business rules that apply to this tender/order.
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   If false, shipping costs are automatically calculated
   */
  get overruled(): YesNo | undefined {
    return this._overruled;
  }
  /**
   If false, shipping costs are automatically calculated
   */
  set overruled(value: YesNo | undefined) {
    this._overruled = value;
  }
  /**
   This order can be shipped in parts when items different delivery dates
   */
  get partialDeliveryAllowed(): YesNo | undefined {
    return this._partialDeliveryAllowed;
  }
  /**
   This order can be shipped in parts when items different delivery dates
   */
  set partialDeliveryAllowed(value: YesNo | undefined) {
    this._partialDeliveryAllowed = value;
  }
  /**
   Pick up location ID
   */
  get pickUpLocationId(): number | undefined {
    return this._pickUpLocationId;
  }
  /**
   Pick up location ID
   */
  set pickUpLocationId(value: number | undefined) {
    this._pickUpLocationId = value;
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