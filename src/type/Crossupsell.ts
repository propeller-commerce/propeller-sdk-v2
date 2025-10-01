import { CrossupsellType } from '../enum/CrossupsellType';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for Crossupsell
 */
export class Crossupsell {
  /** Primary identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Cross/Upsell type */
  private _type: CrossupsellType;
  /** Cross/Up Sell subtype */
  private _subType?: string;
  /** productTo field */
  private _productTo?: IBaseProduct;
  /** productFrom field */
  private _productFrom?: IBaseProduct;
  /** clusterTo field */
  private _clusterTo?: IBaseProduct;
  /** clusterFrom field */
  private _clusterFrom?: IBaseProduct;
  /**
   Creates a new instance of Crossupsell
   */
  constructor(data: Partial<Crossupsell> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._type = data.type!;
    this._subType = data.subType;
    this._productTo = data.productTo;
    this._productFrom = data.productFrom;
    this._clusterTo = data.clusterTo;
    this._clusterFrom = data.clusterFrom;
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
   Cross/Upsell type
   */
  get type(): CrossupsellType {
    return this._type;
  }
  /**
   Cross/Upsell type
   */
  set type(value: CrossupsellType) {
    this._type = value;
  }
  /**
   Cross/Up Sell subtype
   */
  get subType(): string | undefined {
    return this._subType;
  }
  /**
   Cross/Up Sell subtype
   */
  set subType(value: string | undefined) {
    this._subType = value;
  }
  /**
   productTo field
   */
  get productTo(): IBaseProduct | undefined {
    return this._productTo;
  }
  /**
   productTo field
   */
  set productTo(value: IBaseProduct | undefined) {
    this._productTo = value;
  }
  /**
   productFrom field
   */
  get productFrom(): IBaseProduct | undefined {
    return this._productFrom;
  }
  /**
   productFrom field
   */
  set productFrom(value: IBaseProduct | undefined) {
    this._productFrom = value;
  }
  /**
   clusterTo field
   */
  get clusterTo(): IBaseProduct | undefined {
    return this._clusterTo;
  }
  /**
   clusterTo field
   */
  set clusterTo(value: IBaseProduct | undefined) {
    this._clusterTo = value;
  }
  /**
   clusterFrom field
   */
  get clusterFrom(): IBaseProduct | undefined {
    return this._clusterFrom;
  }
  /**
   clusterFrom field
   */
  set clusterFrom(value: IBaseProduct | undefined) {
    this._clusterFrom = value;
  }
}