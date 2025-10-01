import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Object class for TenderItemSurcharge
 */
export class TenderItemSurcharge {
  /** names field */
  private _names: LocalizedString[];
  /** taxCode field */
  private _taxCode: Taxcode;
  /** taxPercentage field */
  private _taxPercentage: number;
  /** quantity field */
  private _quantity: number;
  /** price field */
  private _price: number;
  /** totalPrice field */
  private _totalPrice: number;
  /** priceNet field */
  private _priceNet: number;
  /** totalPriceNet field */
  private _totalPriceNet: number;
  /**
   Creates a new instance of TenderItemSurcharge
   */
  constructor(data: Partial<TenderItemSurcharge> = {}) {
    this._names = data.names!;
    this._taxCode = data.taxCode!;
    this._taxPercentage = data.taxPercentage!;
    this._quantity = data.quantity!;
    this._price = data.price!;
    this._totalPrice = data.totalPrice!;
    this._priceNet = data.priceNet!;
    this._totalPriceNet = data.totalPriceNet!;
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
   taxCode field
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   taxCode field
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   taxPercentage field
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   taxPercentage field
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
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
  /**
   price field
   */
  get price(): number {
    return this._price;
  }
  /**
   price field
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   totalPrice field
   */
  get totalPrice(): number {
    return this._totalPrice;
  }
  /**
   totalPrice field
   */
  set totalPrice(value: number) {
    this._totalPrice = value;
  }
  /**
   priceNet field
   */
  get priceNet(): number {
    return this._priceNet;
  }
  /**
   priceNet field
   */
  set priceNet(value: number) {
    this._priceNet = value;
  }
  /**
   totalPriceNet field
   */
  get totalPriceNet(): number {
    return this._totalPriceNet;
  }
  /**
   totalPriceNet field
   */
  set totalPriceNet(value: number) {
    this._totalPriceNet = value;
  }
}