import { OrderDiscountType } from '../enum/OrderDiscountType';
import { OrderTotalTaxPercentage } from './OrderTotalTaxPercentage';
/**
 Object class for OrderTotals
 */
export class OrderTotals {
  /** The orderId of this Order */
  private _orderId: number;
  /** The total of this Order excluding tax */
  private _gross: number;
  /** The total of this Order including tax */
  private _net: number;
  /** The total amount of tax for this Order */
  private _tax: number;
  /** The type of global discount */
  private _discountType: OrderDiscountType;
  /** The discount value, can be absolute or a percentage depending on the discountType */
  private _discountValue: number;
  /** The totals per tax percentage */
  private _taxPercentages: OrderTotalTaxPercentage[];
  /**
   Creates a new instance of OrderTotals
   */
  constructor(data: Partial<OrderTotals> = {}) {
    this._orderId = data.orderId!;
    this._gross = data.gross!;
    this._net = data.net!;
    this._tax = data.tax!;
    this._discountType = data.discountType!;
    this._discountValue = data.discountValue!;
    this._taxPercentages = data.taxPercentages!;
  }
  /**
   The orderId of this Order
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   The orderId of this Order
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   The total of this Order excluding tax
   */
  get gross(): number {
    return this._gross;
  }
  /**
   The total of this Order excluding tax
   */
  set gross(value: number) {
    this._gross = value;
  }
  /**
   The total of this Order including tax
   */
  get net(): number {
    return this._net;
  }
  /**
   The total of this Order including tax
   */
  set net(value: number) {
    this._net = value;
  }
  /**
   The total amount of tax for this Order
   */
  get tax(): number {
    return this._tax;
  }
  /**
   The total amount of tax for this Order
   */
  set tax(value: number) {
    this._tax = value;
  }
  /**
   The type of global discount
   */
  get discountType(): OrderDiscountType {
    return this._discountType;
  }
  /**
   The type of global discount
   */
  set discountType(value: OrderDiscountType) {
    this._discountType = value;
  }
  /**
   The discount value, can be absolute or a percentage depending on the discountType
   */
  get discountValue(): number {
    return this._discountValue;
  }
  /**
   The discount value, can be absolute or a percentage depending on the discountType
   */
  set discountValue(value: number) {
    this._discountValue = value;
  }
  /**
   The totals per tax percentage
   */
  get taxPercentages(): OrderTotalTaxPercentage[] {
    return this._taxPercentages;
  }
  /**
   The totals per tax percentage
   */
  set taxPercentages(value: OrderTotalTaxPercentage[]) {
    this._taxPercentages = value;
  }
}