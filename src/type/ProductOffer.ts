/**
 Object class for ProductOffer
 */
export class ProductOffer {
  /** The id of the offer. */
  private _id: string;
  /** The calculated price for this offer. */
  private _price: number;
  /** validFrom field */
  private _validFrom: string;
  /** validTo field */
  private _validTo: string;
  /** formula field */
  private _formula: string;
  /**
   Creates a new instance of ProductOffer
   */
  constructor(data: Partial<ProductOffer> = {}) {
    this._id = data.id!;
    this._price = data.price!;
    this._validFrom = data.validFrom!;
    this._validTo = data.validTo!;
    this._formula = data.formula!;
  }
  /**
   The id of the offer.
   */
  get id(): string {
    return this._id;
  }
  /**
   The id of the offer.
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   The calculated price for this offer.
   */
  get price(): number {
    return this._price;
  }
  /**
   The calculated price for this offer.
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   validFrom field
   */
  get validFrom(): string {
    return this._validFrom;
  }
  /**
   validFrom field
   */
  set validFrom(value: string) {
    this._validFrom = value;
  }
  /**
   validTo field
   */
  get validTo(): string {
    return this._validTo;
  }
  /**
   validTo field
   */
  set validTo(value: string) {
    this._validTo = value;
  }
  /**
   formula field
   */
  get formula(): string {
    return this._formula;
  }
  /**
   formula field
   */
  set formula(value: string) {
    this._formula = value;
  }
}