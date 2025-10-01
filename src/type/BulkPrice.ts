/**
 Object class for BulkPrice
 */
export class BulkPrice {
  /** Primary identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
  private _value: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  private _quantityFrom: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  private _validFrom?: string;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  private _validTo?: string;
  /** Price foreign identifier */
  private _priceId: string;
  /**
   Creates a new instance of BulkPrice
   */
  constructor(data: Partial<BulkPrice> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._value = data.value!;
    this._quantityFrom = data.quantityFrom!;
    this._validFrom = data.validFrom;
    this._validTo = data.validTo;
    this._priceId = data.priceId!;
  }
  /**
   Primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
   */
  get value(): number {
    return this._value;
  }
  /**
   Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type.
   */
  set value(value: number) {
    this._value = value;
  }
  /**
   Indicates the minimum quantity threshold needed to qualify for the bulk price.
   */
  get quantityFrom(): number {
    return this._quantityFrom;
  }
  /**
   Indicates the minimum quantity threshold needed to qualify for the bulk price.
   */
  set quantityFrom(value: number) {
    this._quantityFrom = value;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  get validFrom(): string | undefined {
    return this._validFrom;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  set validFrom(value: string | undefined) {
    this._validFrom = value;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  get validTo(): string | undefined {
    return this._validTo;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  set validTo(value: string | undefined) {
    this._validTo = value;
  }
  /**
   Price foreign identifier
   */
  get priceId(): string {
    return this._priceId;
  }
  /**
   Price foreign identifier
   */
  set priceId(value: string) {
    this._priceId = value;
  }
}