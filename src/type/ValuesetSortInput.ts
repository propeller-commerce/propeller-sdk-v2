import { ValuesetSortField } from '../enum/ValuesetSortField';
import { ValuesetSortOrder } from '../enum/ValuesetSortOrder';
/**
 Input object for ValuesetSortInput
 */
export interface ValuesetSortInput {
  /** Field to sort by */
  field: ValuesetSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order?: ValuesetSortOrder;
}