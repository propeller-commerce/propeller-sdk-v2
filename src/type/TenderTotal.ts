import { OrderDiscountType } from '../enum/OrderDiscountType';
/**
 Object class for TenderTotal
 */
export interface TenderTotal {
  /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT excluding */
  subTotalGross: number;
  /** The total payable amount of all items in this tender/order, excluding postage costs, paymethod costs and discounts. VAT including */
  subTotalNet: number;
  /** Discount value that is applied to the tender/order total through one or multiple incentives */
  discount?: number;
  /** Discount percentage that is applied to the tender/order total through one or multiple incentives */
  discountPercentage?: number;
  /** Discount type */
  discountType?: OrderDiscountType;
  /** The total payable amount for this tender/order. VAT including */
  totalNet: number;
  /** The total payable amount for this tender/order. VAT excluding */
  totalGross: number;
  /** Discount that is applied to the tender/order total through one or multiple incentives. VAT including */
  discountNet: number;
  /** Discount that is applied to the tender/order total through one or multiple incentives. VAT excluding */
  discountGross: number;
  /** Total amount of tax that applies to this tender/order */
  totalTax: number;
}