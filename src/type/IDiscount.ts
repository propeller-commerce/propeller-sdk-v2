import { DiscountType } from '../enum/DiscountType';
/**
 Base interface for discount types
 */
export interface IDiscount {
  /** Unique identifier */
  id: string;
  /** Discount type */
  type: DiscountType;
  /** Discount value */
  value: number;
  /** Whether the discount is enabled */
  enabled: boolean;
}