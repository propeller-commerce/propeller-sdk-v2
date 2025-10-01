import { LocalizedString } from './LocalizedString';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for SparePart
 */
export class SparePart {
  /** Spare Part identifier */
  private _id: string | number;
  /** Spare Part SKU */
  private _sku: string;
  /** Spare Part quantity */
  private _quantity: number;
  /** Spare Part name */
  private _name?: LocalizedString[];
  /** product field */
  private _product?: IBaseProduct;
  /**
   Creates a new instance of SparePart
   */
  constructor(data: Partial<SparePart> = {}) {
    this._id = data.id!;
    this._sku = data.sku!;
    this._quantity = data.quantity!;
    this._name = data.name;
    this._product = data.product;
  }
  /**
   Spare Part identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Spare Part identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Spare Part SKU
   */
  get sku(): string {
    return this._sku;
  }
  /**
   Spare Part SKU
   */
  set sku(value: string) {
    this._sku = value;
  }
  /**
   Spare Part quantity
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   Spare Part quantity
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   Spare Part name
   */
  get name(): LocalizedString[] | undefined {
    return this._name;
  }
  /**
   Spare Part name
   */
  set name(value: LocalizedString[] | undefined) {
    this._name = value;
  }
  /**
   product field
   */
  get product(): IBaseProduct | undefined {
    return this._product;
  }
  /**
   product field
   */
  set product(value: IBaseProduct | undefined) {
    this._product = value;
  }
}