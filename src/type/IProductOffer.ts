/**
 Base interface for product offer entities
 */
export interface IProductOffer {
  /** Offer identifier */
  id: string;
  /** Product identifier */
  productId: number;
  /** Offer name */
  name: string;
  /** Offer description */
  description?: string;
  /** Offer price */
  price: number;
  /** Whether the offer is active */
  active: boolean;
}