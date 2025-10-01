import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderPayment
 */
export class TenderPayment {
  /** The costs associated with the selected paymethod on this tender/order. VAT including */
  private _price: number;
  /** The costs associated with the selected paymethod on this tender/order. VAT excluding */
  private _priceNet: number;
  /** If false, shipping costs are automatically calculated */
  private _overruled?: YesNo;
  /** The tax associated with the selected paymethod on this tender/order */
  private _tax: number;
  /** The tax percentage associated with the selected paymethod on this tender/order */
  private _taxPercentage: number;
  /** The selected payment method for this tender/order */
  private _method: string;
  /** Payment status for this tender/order */
  private _status?: string;
  /** Payment status change date for this tender/order */
  private _statusDate?: string;
  /** Accounting ID for this tender/order */
  private _accountingId?: string;
  /**
   Creates a new instance of TenderPayment
   */
  constructor(data: Partial<TenderPayment> = {}) {
    this._price = data.price!;
    this._priceNet = data.priceNet!;
    this._overruled = data.overruled;
    this._tax = data.tax!;
    this._taxPercentage = data.taxPercentage!;
    this._method = data.method!;
    this._status = data.status;
    this._statusDate = data.statusDate;
    this._accountingId = data.accountingId;
  }
  /**
   The costs associated with the selected paymethod on this tender/order. VAT including
   */
  get price(): number {
    return this._price;
  }
  /**
   The costs associated with the selected paymethod on this tender/order. VAT including
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   The costs associated with the selected paymethod on this tender/order. VAT excluding
   */
  get priceNet(): number {
    return this._priceNet;
  }
  /**
   The costs associated with the selected paymethod on this tender/order. VAT excluding
   */
  set priceNet(value: number) {
    this._priceNet = value;
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
   The tax associated with the selected paymethod on this tender/order
   */
  get tax(): number {
    return this._tax;
  }
  /**
   The tax associated with the selected paymethod on this tender/order
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   The tax percentage associated with the selected paymethod on this tender/order
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   The tax percentage associated with the selected paymethod on this tender/order
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   The selected payment method for this tender/order
   */
  get method(): string {
    return this._method;
  }
  /**
   The selected payment method for this tender/order
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   Payment status for this tender/order
   */
  get status(): string | undefined {
    return this._status;
  }
  /**
   Payment status for this tender/order
   */
  set status(value: string | undefined) {
    this._status = value;
  }
  /**
   Payment status change date for this tender/order
   */
  get statusDate(): string | undefined {
    return this._statusDate;
  }
  /**
   Payment status change date for this tender/order
   */
  set statusDate(value: string | undefined) {
    this._statusDate = value;
  }
  /**
   Accounting ID for this tender/order
   */
  get accountingId(): string | undefined {
    return this._accountingId;
  }
  /**
   Accounting ID for this tender/order
   */
  set accountingId(value: string | undefined) {
    this._accountingId = value;
  }
}