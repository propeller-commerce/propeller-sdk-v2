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
}