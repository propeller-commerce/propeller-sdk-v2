/**
 Object class for TenderTaxLevel
 */
export class TenderTaxLevel {
  /** percentage field */
  private _percentage: number;
  /** total field */
  private _total: number;
  /** tax field */
  private _tax?: number;
  /** discount field */
  private _discount?: number;
  /**
   Creates a new instance of TenderTaxLevel
   */
  constructor(data: Partial<TenderTaxLevel> = {}) {
    this._percentage = data.percentage!;
    this._total = data.total!;
    this._tax = data.tax;
    this._discount = data.discount;
  }
  /**
   percentage field
   */
  get percentage(): number {
    return this._percentage;
  }
  /**
   percentage field
   */
  set percentage(value: number) {
    this._percentage = value;
  }
  /**
   total field
   */
  get total(): number {
    return this._total;
  }
  /**
   total field
   */
  set total(value: number) {
    this._total = value;
  }
  /**
   tax field
   */
  get tax(): number | undefined {
    return this._tax;
  }
  /**
   tax field
   */
  set tax(value: number | undefined) {
    this._tax = value;
  }
  /**
   discount field
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   discount field
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
}