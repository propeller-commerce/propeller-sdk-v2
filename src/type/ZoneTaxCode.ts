import { Taxcode } from '../enum/Taxcode';
/**
 Object class for ZoneTaxCode
 */
export class ZoneTaxCode {
  /** Primary identifier */
  private _id: string;
  /** Price foreign identifier */
  private _priceId: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Zone code */
  private _zone: string;
  /** Tax code for the specified zone */
  private _taxCode: Taxcode;
  /**
   Creates a new instance of ZoneTaxCode
   */
  constructor(data: Partial<ZoneTaxCode> = {}) {
    this._id = data.id!;
    this._priceId = data.priceId!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._zone = data.zone!;
    this._taxCode = data.taxCode!;
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
   Zone code
   */
  get zone(): string {
    return this._zone;
  }
  /**
   Zone code
   */
  set zone(value: string) {
    this._zone = value;
  }
  /**
   Tax code for the specified zone
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   Tax code for the specified zone
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
}