/**
 Input object for TenderUpdateItemInput
 */
export interface TenderUpdateItemInput {
  /** Item quantity */
  quantity?: number;
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
  /** If set to false, the items will not be validated against customer order lists. Defaults to true */
  validateOrderList?: boolean;
  /** If set to false, budget validation will be skipped. Defaults to true */
  validateBudget?: boolean;
}