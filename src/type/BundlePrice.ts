/**
 Object class for BundlePrice
 */
export class BundlePrice {
  /** Net price of the bundle after discounts applied */
  private _net?: number;
  /** Gross price of the bundle after discounts applied */
  private _gross?: number;
  /** Original net price of the bundle before discounts applied */
  private _originalNet?: number;
  /** Original gross price of the bundle before discounts applied */
  private _originalGross?: number;
  /**
   Creates a new instance of BundlePrice
   */
  constructor(data: Partial<BundlePrice> = {}) {
    this._net = data.net;
    this._gross = data.gross;
    this._originalNet = data.originalNet;
    this._originalGross = data.originalGross;
  }
  /**
   Net price of the bundle after discounts applied
   */
  get net(): number | undefined {
    return this._net;
  }
  /**
   Net price of the bundle after discounts applied
   */
  set net(value: number | undefined) {
    this._net = value;
  }
  /**
   Gross price of the bundle after discounts applied
   */
  get gross(): number | undefined {
    return this._gross;
  }
  /**
   Gross price of the bundle after discounts applied
   */
  set gross(value: number | undefined) {
    this._gross = value;
  }
  /**
   Original net price of the bundle before discounts applied
   */
  get originalNet(): number | undefined {
    return this._originalNet;
  }
  /**
   Original net price of the bundle before discounts applied
   */
  set originalNet(value: number | undefined) {
    this._originalNet = value;
  }
  /**
   Original gross price of the bundle before discounts applied
   */
  get originalGross(): number | undefined {
    return this._originalGross;
  }
  /**
   Original gross price of the bundle before discounts applied
   */
  set originalGross(value: number | undefined) {
    this._originalGross = value;
  }
}