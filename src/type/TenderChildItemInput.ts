/**
 Input object for TenderChildItemInput
 */
export interface TenderChildItemInput {
  /** Product ID */
  productId: number;
  /** Item name. Defaults to product name */
  name?: string;
  /** Item price. Defaults to calculated sales price */
  price?: number;
  /** Delivery date - ISO 8601 Date string */
  deliveryDate?: string;
  /** Notes, remarks, etc. */
  notes?: string;
  /** ChildItem quantity, when omitted, the quantity is linked with parent's quantity */
  quantity?: number;
}