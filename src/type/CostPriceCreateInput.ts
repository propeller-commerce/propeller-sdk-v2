/**
 Input object for CostPriceCreateInput
 */
export interface CostPriceCreateInput {
  /** Price id */
  priceId: string;
  /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
  value: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom: number;
}