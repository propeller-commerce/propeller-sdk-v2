/**
 Object class for CartTotal
 */
export interface CartTotal {
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Excluding  VAT */
  subTotal: number;
  /** Total payable amount of all items in this cart,
    excluding postage, paymethods costs and discounts. Including  VAT */
  subTotalNet: number;
  /** Discount percentage that is applied to the order total through one or multiple incentives. */
  discountPercentage: number;
  /** Total payable amount for this cart. Including VAT */
  totalNet: number;
  /** Total payable amount for this cart. Excluding VAT */
  totalGross: number;
  /** Discount that is applied to the order total through one or multiple incentives. Including VAT. */
  discountNet: number;
  /** Discount that is applied to the order total through one or multiple incentives. Excluding VAT. */
  discount: number;
}