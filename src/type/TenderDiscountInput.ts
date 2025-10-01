import { OrderDiscountType } from '../enum/OrderDiscountType';
/**
 Input object for TenderDiscountInput
 */
export interface TenderDiscountInput {
  /** Order discount type */
  type: OrderDiscountType;
  /** Discount amount/ percentage, depending on discount type */
  value: number;
}