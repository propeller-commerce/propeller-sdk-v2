import { TenderChildItemInput } from './TenderChildItemInput';
/**
 Input object for TenderAddItemInput
 */
export interface TenderAddItemInput {
  /** Item quantity */
  quantity: number;
  /** Item name. Defaults to product name */
  name?: string;
  /** Item price. Defaults to calculated sales price */
  price?: number;
  /** Item supplier. Defaults to product supplier */
  supplier?: string;
  /** Delivery date - ISO 8601 Date string */
  deliveryDate?: string;
  /** Notes, remarks, etc. */
  notes?: string;
  /** Product ID */
  productId: number;
  /** Adds child items to this tender item. This field is used when adding configurable clusters to the Tender.
  Provide an array of children options/ products of the parent item. */
  childItems?: TenderChildItemInput[];
}