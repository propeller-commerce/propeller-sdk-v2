import { ValuesetItemSortField } from '../enum/ValuesetItemSortField';
import { ValuesetSortOrder } from '../enum/ValuesetSortOrder';
/**
 Input object for ValuesetItemSortInput
 */
export interface ValuesetItemSortInput {
  /** Field to sort by */
  field: ValuesetItemSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order?: ValuesetSortOrder;
}