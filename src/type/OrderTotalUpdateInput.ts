import { OrderDiscountType } from '../enum/OrderDiscountType';
/**
 Input object for OrderTotalUpdateInput
 */
export interface OrderTotalUpdateInput {
  /** The total of this Order excluding tax */
  gross?: number;
  /** The total of this Order including tax */
  net?: number;
  /** The total amount of tax for this Order */
  tax?: number;
  /** The type of global discount */
  discountType?: OrderDiscountType;
  /** The discount value, can be absolute or a percentage depending on the discountType */
  discountValue?: number;
}