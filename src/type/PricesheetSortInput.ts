import { PricesheetSortField } from '../enum/PricesheetSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for PricesheetSortInput
 */
export interface PricesheetSortInput {
  /** Field to sort by */
  field: PricesheetSortField;
  /** order input field */
  order: SortOrder;
}