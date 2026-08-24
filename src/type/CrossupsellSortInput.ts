import { CrossupsellSortField } from '../enum/CrossupsellSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CrossupsellSortInput
 */
export interface CrossupsellSortInput {
  /** Field to sort by */
  field: CrossupsellSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order?: SortOrder;
}