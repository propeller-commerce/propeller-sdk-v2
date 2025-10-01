import { LocalizedString } from './LocalizedString';
/**
 Object class for PayMethod
 */
export class PayMethod {
  /** Primary identifier */
  private _id: number;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Name per language */
  private _names: LocalizedString[];
  /** External code */
  private _externalCode: string;
  /** Logo url */
  private _logo?: string;
  /**
   Creates a new instance of PayMethod
   */
  constructor(data: Partial<PayMethod> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._names = data.names!;
    this._externalCode = data.externalCode!;
    this._logo = data.logo;
  }
  /**
   Primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Primary identifier
   */
  set id(value: number) {
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
   Name per language
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   Name per language
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   External code
   */
  get externalCode(): string {
    return this._externalCode;
  }
  /**
   External code
   */
  set externalCode(value: string) {
    this._externalCode = value;
  }
  /**
   Logo url
   */
  get logo(): string | undefined {
    return this._logo;
  }
  /**
   Logo url
   */
  set logo(value: string | undefined) {
    this._logo = value;
  }
}