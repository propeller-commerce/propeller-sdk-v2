import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for CartItemSurcharge
 */
export class CartItemSurcharge {
  /** Localized names */
  private _names: LocalizedString[];
  /** Localized descriptions */
  private _descriptions: LocalizedString[];
  /** Type */
  private _type: string;
  /** Value */
  private _value: number;
  /** Tax code */
  private _taxCode: Taxcode;
  /** Tax percentage */
  private _taxPercentage?: number;
  /** Quantity */
  private _quantity?: number;
  /** Price */
  private _price?: number;
  /** Total price */
  private _totalPrice?: number;
  /** Net price */
  private _priceNet?: number;
  /** Total net price */
  private _totalPriceNet?: number;
  /**
   Creates a new instance of CartItemSurcharge
   */
  constructor(data: Partial<CartItemSurcharge> = {}) {
    this._names = data.names!;
    this._descriptions = data.descriptions!;
    this._type = data.type!;
    this._value = data.value!;
    this._taxCode = data.taxCode!;
    this._taxPercentage = data.taxPercentage;
    this._quantity = data.quantity;
    this._price = data.price;
    this._totalPrice = data.totalPrice;
    this._priceNet = data.priceNet;
    this._totalPriceNet = data.totalPriceNet;
  }
  /**
   Localized names
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   Localized names
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   Localized descriptions
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   Localized descriptions
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   Type
   */
  get type(): string {
    return this._type;
  }
  /**
   Type
   */
  set type(value: string) {
    this._type = value;
  }
  /**
   Value
   */
  get value(): number {
    return this._value;
  }
  /**
   Value
   */
  set value(value: number) {
    this._value = value;
  }
  /**
   Tax code
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   Tax code
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   Tax percentage
   */
  get taxPercentage(): number | undefined {
    return this._taxPercentage;
  }
  /**
   Tax percentage
   */
  set taxPercentage(value: number | undefined) {
    this._taxPercentage = value;
  }
  /**
   Quantity
   */
  get quantity(): number | undefined {
    return this._quantity;
  }
  /**
   Quantity
   */
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  /**
   Price
   */
  get price(): number | undefined {
    return this._price;
  }
  /**
   Price
   */
  set price(value: number | undefined) {
    this._price = value;
  }
  /**
   Total price
   */
  get totalPrice(): number | undefined {
    return this._totalPrice;
  }
  /**
   Total price
   */
  set totalPrice(value: number | undefined) {
    this._totalPrice = value;
  }
  /**
   Net price
   */
  get priceNet(): number | undefined {
    return this._priceNet;
  }
  /**
   Net price
   */
  set priceNet(value: number | undefined) {
    this._priceNet = value;
  }
  /**
   Total net price
   */
  get totalPriceNet(): number | undefined {
    return this._totalPriceNet;
  }
  /**
   Total net price
   */
  set totalPriceNet(value: number | undefined) {
    this._totalPriceNet = value;
  }
}