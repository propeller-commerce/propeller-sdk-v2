/**
 Object class for CostPrice
 */
export interface CostPrice {
  /** Primary identifier */
  id: string;
  /** Price foreign identifier */
  priceId: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Indicates the minimum quantity threshold needed to qualify for the cost price. */
  quantityFrom: number;
  /** The cost associated to acquire the product. */
  value: number;
  /** Date when this cost price becomes active and available for margin calculations. If not specified, the cost price is immediately effective. */
  validFrom?: string;
  /** Date when this cost price expires and is no longer available for margin calculations. If not specified, the cost price remains active indefinitely. */
  validTo?: string;
}