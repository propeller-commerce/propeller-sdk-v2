import { DiscountSortField } from '../enum/DiscountSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for DiscountSortInput
 */
export interface DiscountSortInput {
  /** Field to sort by */
  field: DiscountSortField;
  /** order input field */
  order: SortOrder;
}