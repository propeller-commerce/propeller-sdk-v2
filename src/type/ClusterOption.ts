import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Object class for ClusterOption
 */
export class ClusterOption {
  /** id field */
  private _id: number;
  /** The classID of the cluster that represents this cluster */
  private _clusterOptionId: number;
  /** Indicates whether an option is required or not */
  private _isRequired?: YesNo;
  /** Indicates whether an option is hidden or not */
  private _hidden?: YesNo;
  /** defaultProduct field */
  private _defaultProduct?: Product;
  /** products field */
  private _products?: Product[];
  /** names field */
  private _names: LocalizedString[];
  /** descriptions field */
  private _descriptions: LocalizedString[];
  /** shortDescriptions field */
  private _shortDescriptions: LocalizedString[];
  /**
   Creates a new instance of ClusterOption
   */
  constructor(data: Partial<ClusterOption> = {}) {
    this._id = data.id!;
    this._clusterOptionId = data.clusterOptionId!;
    this._isRequired = data.isRequired;
    this._hidden = data.hidden;
    this._defaultProduct = data.defaultProduct;
    this._products = data.products;
    this._names = data.names!;
    this._descriptions = data.descriptions!;
    this._shortDescriptions = data.shortDescriptions!;
  }
  /**
   id field
   */
  get id(): number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   The classID of the cluster that represents this cluster
   */
  get clusterOptionId(): number {
    return this._clusterOptionId;
  }
  /**
   The classID of the cluster that represents this cluster
   */
  set clusterOptionId(value: number) {
    this._clusterOptionId = value;
  }
  /**
   Indicates whether an option is required or not
   */
  get isRequired(): YesNo | undefined {
    return this._isRequired;
  }
  /**
   Indicates whether an option is required or not
   */
  set isRequired(value: YesNo | undefined) {
    this._isRequired = value;
  }
  /**
   Indicates whether an option is hidden or not
   */
  get hidden(): YesNo | undefined {
    return this._hidden;
  }
  /**
   Indicates whether an option is hidden or not
   */
  set hidden(value: YesNo | undefined) {
    this._hidden = value;
  }
  /**
   defaultProduct field
   */
  get defaultProduct(): Product | undefined {
    return this._defaultProduct;
  }
  /**
   defaultProduct field
   */
  set defaultProduct(value: Product | undefined) {
    this._defaultProduct = value;
  }
  /**
   products field
   */
  get products(): Product[] | undefined {
    return this._products;
  }
  /**
   products field
   */
  set products(value: Product[] | undefined) {
    this._products = value;
  }
  /**
   names field
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   names field
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   descriptions field
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   descriptions field
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   shortDescriptions field
   */
  get shortDescriptions(): LocalizedString[] {
    return this._shortDescriptions;
  }
  /**
   shortDescriptions field
   */
  set shortDescriptions(value: LocalizedString[]) {
    this._shortDescriptions = value;
  }
}