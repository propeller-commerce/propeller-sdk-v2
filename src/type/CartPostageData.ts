import { PriceMode } from '../enum/PriceMode';
import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for CartPostageData
 */
export class CartPostageData {
  /** Selected shipping method for this cart. Defaults to DELIVERY. */
  private _method: string;
  /** Tax percentage */
  private _taxPercentage?: number;
  /** Preferred delivery date for this order as requested by the user. */
  private _requestDate?: string;
  /** Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT. */
  private _price?: number;
  /** Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT. */
  private _priceNet?: number;
  /** Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally */
  private _priceMode?: PriceMode;
  /** Selected carrier for this cart. */
  private _carrier?: string;
  /** This order can be shipped in parts when items different delivery dates */
  private _partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  private _pickUpLocationId?: number;
  /** warehouse field */
  private _warehouse?: Warehouse;
  /**
   Creates a new instance of CartPostageData
   */
  constructor(data: Partial<CartPostageData> = {}) {
    this._method = data.method!;
    this._taxPercentage = data.taxPercentage;
    this._requestDate = data.requestDate;
    this._price = data.price;
    this._priceNet = data.priceNet;
    this._priceMode = data.priceMode;
    this._carrier = data.carrier;
    this._partialDeliveryAllowed = data.partialDeliveryAllowed;
    this._pickUpLocationId = data.pickUpLocationId;
    this._warehouse = data.warehouse;
  }
  /**
   Selected shipping method for this cart. Defaults to DELIVERY.
   */
  get method(): string {
    return this._method;
  }
  /**
   Selected shipping method for this cart. Defaults to DELIVERY.
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   Tax percentage
   */
  get taxPercentage(): number | undefined {
    return this._taxPercentage;
  }
  /**
   Tax percentage
   */
  set taxPercentage(value: number | undefined) {
    this._taxPercentage = value;
  }
  /**
   Preferred delivery date for this order as requested by the user.
   */
  get requestDate(): string | undefined {
    return this._requestDate;
  }
  /**
   Preferred delivery date for this order as requested by the user.
   */
  set requestDate(value: string | undefined) {
    this._requestDate = value;
  }
  /**
   Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
   */
  get price(): number | undefined {
    return this._price;
  }
  /**
   Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT.
   */
  set price(value: number | undefined) {
    this._price = value;
  }
  /**
   Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
   */
  get priceNet(): number | undefined {
    return this._priceNet;
  }
  /**
   Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT.
   */
  set priceNet(value: number | undefined) {
    this._priceNet = value;
  }
  /**
   Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
   */
  get priceMode(): PriceMode | undefined {
    return this._priceMode;
  }
  /**
   Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally
   */
  set priceMode(value: PriceMode | undefined) {
    this._priceMode = value;
  }
  /**
   Selected carrier for this cart.
   */
  get carrier(): string | undefined {
    return this._carrier;
  }
  /**
   Selected carrier for this cart.
   */
  set carrier(value: string | undefined) {
    this._carrier = value;
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