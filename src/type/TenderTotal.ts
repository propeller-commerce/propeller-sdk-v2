import { OrderDiscountType } from '../enum/OrderDiscountType';
/**
 Object class for TenderTotal
 */
export class TenderTotal {
  /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding */
  private _subTotalGross: number;
  /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including */
  private _subTotalNet: number;
  /** Discount value that is applied to the tender/order total through one or multiple incentives */
  private _discount?: number;
  /** Discount percentage that is applied to the tender/order total through one or multiple incentives */
  private _discountPercentage?: number;
  /** Discount type */
  private _discountType?: OrderDiscountType;
  /** The total payable amount for this tender/order. VAT including */
  private _totalNet: number;
  /** The total payable amount for this tender/order. VAT excluding */
  private _totalGross: number;
  /** Discount that is applied to the tender/order total through one or multiple incentives. VAT including */
  private _discountNet: number;
  /** Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding */
  private _discountGross: number;
  /** Total amount of tax that applies to this tender/order */
  private _totalTax: number;
  /**
   Creates a new instance of TenderTotal
   */
  constructor(data: Partial<TenderTotal> = {}) {
    this._subTotalGross = data.subTotalGross!;
    this._subTotalNet = data.subTotalNet!;
    this._discount = data.discount;
    this._discountPercentage = data.discountPercentage;
    this._discountType = data.discountType;
    this._totalNet = data.totalNet!;
    this._totalGross = data.totalGross!;
    this._discountNet = data.discountNet!;
    this._discountGross = data.discountGross!;
    this._totalTax = data.totalTax!;
  }
  /**
   The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
   */
  get subTotalGross(): number {
    return this._subTotalGross;
  }
  /**
   The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding
   */
  set subTotalGross(value: number) {
    this._subTotalGross = value;
  }
  /**
   The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
   */
  get subTotalNet(): number {
    return this._subTotalNet;
  }
  /**
   The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including
   */
  set subTotalNet(value: number) {
    this._subTotalNet = value;
  }
  /**
   Discount value that is applied to the tender/order total through one or multiple incentives
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   Discount value that is applied to the tender/order total through one or multiple incentives
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
  /**
   Discount percentage that is applied to the tender/order total through one or multiple incentives
   */
  get discountPercentage(): number | undefined {
    return this._discountPercentage;
  }
  /**
   Discount percentage that is applied to the tender/order total through one or multiple incentives
   */
  set discountPercentage(value: number | undefined) {
    this._discountPercentage = value;
  }
  /**
   Discount type
   */
  get discountType(): OrderDiscountType | undefined {
    return this._discountType;
  }
  /**
   Discount type
   */
  set discountType(value: OrderDiscountType | undefined) {
    this._discountType = value;
  }
  /**
   The total payable amount for this tender/order. VAT including
   */
  get totalNet(): number {
    return this._totalNet;
  }
  /**
   The total payable amount for this tender/order. VAT including
   */
  set totalNet(value: number) {
    this._totalNet = value;
  }
  /**
   The total payable amount for this tender/order. VAT excluding
   */
  get totalGross(): number {
    return this._totalGross;
  }
  /**
   The total payable amount for this tender/order. VAT excluding
   */
  set totalGross(value: number) {
    this._totalGross = value;
  }
  /**
   Discount that is applied to the tender/order total through one or multiple incentives. VAT including
   */
  get discountNet(): number {
    return this._discountNet;
  }
  /**
   Discount that is applied to the tender/order total through one or multiple incentives. VAT including
   */
  set discountNet(value: number) {
    this._discountNet = value;
  }
  /**
   Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
   */
  get discountGross(): number {
    return this._discountGross;
  }
  /**
   Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding
   */
  set discountGross(value: number) {
    this._discountGross = value;
  }
  /**
   Total amount of tax that applies to this tender/order
   */
  get totalTax(): number {
    return this._totalTax;
  }
  /**
   Total amount of tax that applies to this tender/order
   */
  set totalTax(value: number) {
    this._totalTax = value;
  }
}