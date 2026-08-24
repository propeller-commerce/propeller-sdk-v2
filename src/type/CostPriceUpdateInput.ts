/**
 Input object for CostPriceUpdateInput
 */
export interface CostPriceUpdateInput {
  /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
  value?: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom: number;

  /** Date when this cost price becomes active. If omitted, the cost price is immediately effective. */
  validFrom?: string;
  /** Date when this cost price expires. If omitted, the cost price remains active indefinitely. */
  validTo?: string;
}