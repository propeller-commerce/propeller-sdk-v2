import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartPaymentData
 */
export class CartPaymentData {
  /** Selected paymethod for this cart. Defaults to ACCOUNT. */
  private _method: string;
  /** Costs associated with the selected paymethod on this cart. Excluding VAT. */
  private _price?: number;
  /** Costs associated with the selected paymethod on this cart. Including VAT. */
  private _priceNet?: number;
  /** priceMode field */
  private _priceMode?: PriceMode;
  /** Tax associated with the selected paymethod on this cart. */
  private _tax: number;
  /** Tax percentage associated with the selected paymethod on this cart. */
  private _taxPercentage?: number;
  /** Payment status */
  private _status?: string;
  /** Payment status date */
  private _statusDate?: string;
  /**
   Creates a new instance of CartPaymentData
   */
  constructor(data: Partial<CartPaymentData> = {}) {
    this._method = data.method!;
    this._price = data.price;
    this._priceNet = data.priceNet;
    this._priceMode = data.priceMode;
    this._tax = data.tax!;
    this._taxPercentage = data.taxPercentage;
    this._status = data.status;
    this._statusDate = data.statusDate;
  }
  /**
   Selected paymethod for this cart. Defaults to ACCOUNT.
   */
  get method(): string {
    return this._method;
  }
  /**
   Selected paymethod for this cart. Defaults to ACCOUNT.
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   Costs associated with the selected paymethod on this cart. Excluding VAT.
   */
  get price(): number | undefined {
    return this._price;
  }
  /**
   Costs associated with the selected paymethod on this cart. Excluding VAT.
   */
  set price(value: number | undefined) {
    this._price = value;
  }
  /**
   Costs associated with the selected paymethod on this cart. Including VAT.
   */
  get priceNet(): number | undefined {
    return this._priceNet;
  }
  /**
   Costs associated with the selected paymethod on this cart. Including VAT.
   */
  set priceNet(value: number | undefined) {
    this._priceNet = value;
  }
  /**
   priceMode field
   */
  get priceMode(): PriceMode | undefined {
    return this._priceMode;
  }
  /**
   priceMode field
   */
  set priceMode(value: PriceMode | undefined) {
    this._priceMode = value;
  }
  /**
   Tax associated with the selected paymethod on this cart.
   */
  get tax(): number {
    return this._tax;
  }
  /**
   Tax associated with the selected paymethod on this cart.
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   Tax percentage associated with the selected paymethod on this cart.
   */
  get taxPercentage(): number | undefined {
    return this._taxPercentage;
  }
  /**
   Tax percentage associated with the selected paymethod on this cart.
   */
  set taxPercentage(value: number | undefined) {
    this._taxPercentage = value;
  }
  /**
   Payment status
   */
  get status(): string | undefined {
    return this._status;
  }
  /**
   Payment status
   */
  set status(value: string | undefined) {
    this._status = value;
  }
  /**
   Payment status date
   */
  get statusDate(): string | undefined {
    return this._statusDate;
  }
  /**
   Payment status date
   */
  set statusDate(value: string | undefined) {
    this._statusDate = value;
  }
}