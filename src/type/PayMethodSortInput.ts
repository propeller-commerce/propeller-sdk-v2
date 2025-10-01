import { PayMethodSortField } from '../enum/PayMethodSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for PayMethodSortInput
 */
export interface PayMethodSortInput {
  /** Field to sort by */
  field: PayMethodSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}