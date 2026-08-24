import { TenderAddItemInput } from './TenderAddItemInput';
/**
 Input object for TenderAddItemsInput
 */
export interface TenderAddItemsInput {
  /** Tender items */
  products: TenderAddItemInput[];
  /** If set to true and an existing item for the same product is found, a new tender item will be created. Existing items are updated by default. Defaults to false */
  forceAdd?: boolean;
  /** If set to false, the items will not be validated against customer order lists. Defaults to true */
  validateOrderList?: boolean;
  /** If set to false, budget validation will be skipped. Defaults to true */
  validateBudget?: boolean;
}