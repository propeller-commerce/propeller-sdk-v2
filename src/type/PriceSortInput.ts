import { PriceSortField } from '../enum/PriceSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for PriceSortInput
 */
export interface PriceSortInput {
  /** Field to sort by */
  field: PriceSortField;
  /** order input field */
  order: SortOrder;
}