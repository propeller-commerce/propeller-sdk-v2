import { PriceElementType } from '../enum/PriceElementType';
import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { IDiscount } from './IDiscount';
/**
 Object class for ProductPrice
 */
export class ProductPrice {
  /** productId field */
  private _productId: number;
  /** type field */
  private _type: PriceElementType;
  /** discountType field */
  private _discountType: PriceDiscountType;
  /** list field */
  private _list?: number;
  /** cost field */
  private _cost?: number;
  /** net field */
  private _net?: number;
  /** gross field */
  private _gross?: number;
  /** discount field */
  private _discount?: IDiscount;
  /** taxCode field */
  private _taxCode?: Taxcode;
  /** quantity field */
  private _quantity: number;
  /**
   Creates a new instance of ProductPrice
   */
  constructor(data: Partial<ProductPrice> = {}) {
    this._productId = data.productId!;
    this._type = data.type!;
    this._discountType = data.discountType!;
    this._list = data.list;
    this._cost = data.cost;
    this._net = data.net;
    this._gross = data.gross;
    this._discount = data.discount;
    this._taxCode = data.taxCode;
    this._quantity = data.quantity!;
  }
  /**
   productId field
   */
  get productId(): number {
    return this._productId;
  }
  /**
   productId field
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   type field
   */
  get type(): PriceElementType {
    return this._type;
  }
  /**
   type field
   */
  set type(value: PriceElementType) {
    this._type = value;
  }
  /**
   discountType field
   */
  get discountType(): PriceDiscountType {
    return this._discountType;
  }
  /**
   discountType field
   */
  set discountType(value: PriceDiscountType) {
    this._discountType = value;
  }
  /**
   list field
   */
  get list(): number | undefined {
    return this._list;
  }
  /**
   list field
   */
  set list(value: number | undefined) {
    this._list = value;
  }
  /**
   cost field
   */
  get cost(): number | undefined {
    return this._cost;
  }
  /**
   cost field
   */
  set cost(value: number | undefined) {
    this._cost = value;
  }
  /**
   net field
   */
  get net(): number | undefined {
    return this._net;
  }
  /**
   net field
   */
  set net(value: number | undefined) {
    this._net = value;
  }
  /**
   gross field
   */
  get gross(): number | undefined {
    return this._gross;
  }
  /**
   gross field
   */
  set gross(value: number | undefined) {
    this._gross = value;
  }
  /**
   discount field
   */
  get discount(): IDiscount | undefined {
    return this._discount;
  }
  /**
   discount field
   */
  set discount(value: IDiscount | undefined) {
    this._discount = value;
  }
  /**
   taxCode field
   */
  get taxCode(): Taxcode | undefined {
    return this._taxCode;
  }
  /**
   taxCode field
   */
  set taxCode(value: Taxcode | undefined) {
    this._taxCode = value;
  }
  /**
   quantity field
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   quantity field
   */
  set quantity(value: number) {
    this._quantity = value;
  }
}