import { Taxcode } from '../enum/Taxcode';
/**
 Object class for Tax
 */
export class Tax {
  /** Tax primary identifier */
  private _id: string;
  /** Shop identifier for the tax to apply to */
  private _shopId: number;
  /** Tax code */
  private _code?: Taxcode;
  /** Tax zone */
  private _zone: string;
  /** Tax percentage  */
  private _percentage?: number;
  /** Tax export code */
  private _exportCode?: string;
  /** Tax initial creation timestamp */
  private _createdAt: string;
  /** Reference to the user that created the tax initially */
  private _createdBy?: number;
  /** Tax last update timestamp */
  private _lastModifiedAt: string;
  /** Reference to the user that last modified the tax */
  private _lastModifiedBy?: number;
  /**
   Creates a new instance of Tax
   */
  constructor(data: Partial<Tax> = {}) {
    this._id = data.id!;
    this._shopId = data.shopId!;
    this._code = data.code;
    this._zone = data.zone!;
    this._percentage = data.percentage;
    this._exportCode = data.exportCode;
    this._createdAt = data.createdAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._lastModifiedBy = data.lastModifiedBy;
  }
  /**
   Tax primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Tax primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Shop identifier for the tax to apply to
   */
  get shopId(): number {
    return this._shopId;
  }
  /**
   Shop identifier for the tax to apply to
   */
  set shopId(value: number) {
    this._shopId = value;
  }
  /**
   Tax code
   */
  get code(): Taxcode | undefined {
    return this._code;
  }
  /**
   Tax code
   */
  set code(value: Taxcode | undefined) {
    this._code = value;
  }
  /**
   Tax zone
   */
  get zone(): string {
    return this._zone;
  }
  /**
   Tax zone
   */
  set zone(value: string) {
    this._zone = value;
  }
  /**
   Tax percentage
   */
  get percentage(): number | undefined {
    return this._percentage;
  }
  /**
   Tax percentage
   */
  set percentage(value: number | undefined) {
    this._percentage = value;
  }
  /**
   Tax export code
   */
  get exportCode(): string | undefined {
    return this._exportCode;
  }
  /**
   Tax export code
   */
  set exportCode(value: string | undefined) {
    this._exportCode = value;
  }
  /**
   Tax initial creation timestamp
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Tax initial creation timestamp
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Reference to the user that created the tax initially
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   Reference to the user that created the tax initially
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   Tax last update timestamp
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Tax last update timestamp
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Reference to the user that last modified the tax
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   Reference to the user that last modified the tax
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
}