/**
 Object class for CostPrice
 */
export class CostPrice {
  /** Primary identifier */
  private _id: string;
  /** Price foreign identifier */
  private _priceId: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Indicates the minimum quantity threshold needed to qualify for the cost price. */
  private _quantityFrom: number;
  /** The cost associated to acquire the product. */
  private _value: number;
  /**
   Creates a new instance of CostPrice
   */
  constructor(data: Partial<CostPrice> = {}) {
    this._id = data.id!;
    this._priceId = data.priceId!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._quantityFrom = data.quantityFrom!;
    this._value = data.value!;
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
   Indicates the minimum quantity threshold needed to qualify for the cost price.
   */
  get quantityFrom(): number {
    return this._quantityFrom;
  }
  /**
   Indicates the minimum quantity threshold needed to qualify for the cost price.
   */
  set quantityFrom(value: number) {
    this._quantityFrom = value;
  }
  /**
   The cost associated to acquire the product.
   */
  get value(): number {
    return this._value;
  }
  /**
   The cost associated to acquire the product.
   */
  set value(value: number) {
    this._value = value;
  }
}