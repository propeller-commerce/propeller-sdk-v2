/**
 Object class for CartTotal
 */
export class CartTotal {
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Excluding  VAT */
  private _subTotal: number;
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Including  VAT */
  private _subTotalNet: number;
  /** Discount percentage that is applied to the order total through one or multiple incentives. */
  private _discountPercentage: number;
  /** Total payable amount for this cart. Including VAT */
  private _totalNet: number;
  /** Total payable amount for this cart. Excluding VAT */
  private _totalGross: number;
  /** Discount that is applied to the order total through one or multiple incentives. Including VAT. */
  private _discountNet: number;
  /** Discount that is applied to the order total through one or multiple incentives. Excluding VAT. */
  private _discount: number;
  /**
   Creates a new instance of CartTotal
   */
  constructor(data: Partial<CartTotal> = {}) {
    this._subTotal = data.subTotal!;
    this._subTotalNet = data.subTotalNet!;
    this._discountPercentage = data.discountPercentage!;
    this._totalNet = data.totalNet!;
    this._totalGross = data.totalGross!;
    this._discountNet = data.discountNet!;
    this._discount = data.discount!;
  }
  /**
   Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Excluding  VAT
   */
  get subTotal(): number {
    return this._subTotal;
  }
  /**
   Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Excluding  VAT
   */
  set subTotal(value: number) {
    this._subTotal = value;
  }
  /**
   Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Including  VAT
   */
  get subTotalNet(): number {
    return this._subTotalNet;
  }
  /**
   Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Including  VAT
   */
  set subTotalNet(value: number) {
    this._subTotalNet = value;
  }
  /**
   Discount percentage that is applied to the order total through one or multiple incentives.
   */
  get discountPercentage(): number {
    return this._discountPercentage;
  }
  /**
   Discount percentage that is applied to the order total through one or multiple incentives.
   */
  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }
  /**
   Total payable amount for this cart. Including VAT
   */
  get totalNet(): number {
    return this._totalNet;
  }
  /**
   Total payable amount for this cart. Including VAT
   */
  set totalNet(value: number) {
    this._totalNet = value;
  }
  /**
   Total payable amount for this cart. Excluding VAT
   */
  get totalGross(): number {
    return this._totalGross;
  }
  /**
   Total payable amount for this cart. Excluding VAT
   */
  set totalGross(value: number) {
    this._totalGross = value;
  }
  /**
   Discount that is applied to the order total through one or multiple incentives. Including VAT.
   */
  get discountNet(): number {
    return this._discountNet;
  }
  /**
   Discount that is applied to the order total through one or multiple incentives. Including VAT.
   */
  set discountNet(value: number) {
    this._discountNet = value;
  }
  /**
   Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
   */
  get discount(): number {
    return this._discount;
  }
  /**
   Discount that is applied to the order total through one or multiple incentives. Excluding VAT.
   */
  set discount(value: number) {
    this._discount = value;
  }
}