/**
 Input object for BulkPriceCreateInput
 */
export interface BulkPriceCreateInput {
  /** Price id */
  priceId: string;
  /** Discount on bulk purchases, expressed either as a percentage of the standard price or as a specific reduced price per unit, depending on the bulk price discount type. */
  value: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validFrom?: string;
  /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
  validTo?: string;
}