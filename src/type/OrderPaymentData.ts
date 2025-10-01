import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderPaymentData
 */
export class OrderPaymentData {
  /** The transaction cost including tax */
  private _net: number;
  /** The transaction cost excluding tax */
  private _gross: number;
  /** The tax on the transaction costs */
  private _tax: number;
  /** The transaction costs tax percentage */
  private _taxPercentage: number;
  /** The paymethod for this Order */
  private _method: string;
  /** The transaction status */
  private _status?: string;
  /** Last time the transaction status was changed */
  private _statusDate?: string;
  /** The accountingId that belongs to this order */
  private _accountingId?: string;
  /** Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  private _overruled?: YesNo;
  /**
   Creates a new instance of OrderPaymentData
   */
  constructor(data: Partial<OrderPaymentData> = {}) {
    this._net = data.net!;
    this._gross = data.gross!;
    this._tax = data.tax!;
    this._taxPercentage = data.taxPercentage!;
    this._method = data.method!;
    this._status = data.status;
    this._statusDate = data.statusDate;
    this._accountingId = data.accountingId;
    this._overruled = data.overruled;
  }
  /**
   The transaction cost including tax
   */
  get net(): number {
    return this._net;
  }
  /**
   The transaction cost including tax
   */
  set net(value: number) {
    this._net = value;
  }
  /**
   The transaction cost excluding tax
   */
  get gross(): number {
    return this._gross;
  }
  /**
   The transaction cost excluding tax
   */
  set gross(value: number) {
    this._gross = value;
  }
  /**
   The tax on the transaction costs
   */
  get tax(): number {
    return this._tax;
  }
  /**
   The tax on the transaction costs
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   The transaction costs tax percentage
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   The transaction costs tax percentage
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   The paymethod for this Order
   */
  get method(): string {
    return this._method;
  }
  /**
   The paymethod for this Order
   */
  set method(value: string) {
    this._method = value;
  }
  /**
   The transaction status
   */
  get status(): string | undefined {
    return this._status;
  }
  /**
   The transaction status
   */
  set status(value: string | undefined) {
    this._status = value;
  }
  /**
   Last time the transaction status was changed
   */
  get statusDate(): string | undefined {
    return this._statusDate;
  }
  /**
   Last time the transaction status was changed
   */
  set statusDate(value: string | undefined) {
    this._statusDate = value;
  }
  /**
   The accountingId that belongs to this order
   */
  get accountingId(): string | undefined {
    return this._accountingId;
  }
  /**
   The accountingId that belongs to this order
   */
  set accountingId(value: string | undefined) {
    this._accountingId = value;
  }
  /**
   Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
   */
  get overruled(): YesNo | undefined {
    return this._overruled;
  }
  /**
   Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation
   */
  set overruled(value: YesNo | undefined) {
    this._overruled = value;
  }
}