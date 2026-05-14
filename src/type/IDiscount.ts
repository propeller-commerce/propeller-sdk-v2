import { DiscountType } from '../enum/DiscountType';
/**
 Base interface for discount types
 */
export interface IDiscount {
  /** Unique identifier */
  id: string;
/** Discount value */
  value: number;
}