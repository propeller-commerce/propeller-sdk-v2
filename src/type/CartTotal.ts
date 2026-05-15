/**
 Object class for CartTotal
 */
export class CartTotal {
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Excluding  VAT */
  subTotal!: number;
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Including  VAT */
  subTotalNet!: number;
  /** Discount percentage that is applied to the order total through one or multiple incentives. */
  discountPercentage!: number;
  /** Total payable amount for this cart. Including VAT */
  totalNet!: number;
  /** Total payable amount for this cart. Excluding VAT */
  totalGross!: number;
  /** Discount that is applied to the order total through one or multiple incentives. Including VAT. */
  discountNet!: number;
  /** Discount that is applied to the order total through one or multiple incentives. Excluding VAT. */
  discount!: number;
  constructor(data: Partial<CartTotal> = {}) {
    Object.assign(this, data);
  }

  /** Returns `subTotal`. */
  getSubTotal(): number {
    return this.subTotal;
  }
  /** Returns `subTotalNet`. */
  getSubTotalNet(): number {
    return this.subTotalNet;
  }
  /** Returns `discountPercentage`. */
  getDiscountPercentage(): number {
    return this.discountPercentage;
  }
  /** Returns `totalNet`. */
  getTotalNet(): number {
    return this.totalNet;
  }
  /** Returns `totalGross`. */
  getTotalGross(): number {
    return this.totalGross;
  }
  /** Returns `discountNet`. */
  getDiscountNet(): number {
    return this.discountNet;
  }
  /** Returns `discount`. */
  getDiscount(): number {
    return this.discount;
  }
}