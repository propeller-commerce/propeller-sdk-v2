import { RoleSortableFields } from '../enum/RoleSortableFields';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for RoleSortInput
 */
export interface RoleSortInput {
  /** Field to sort by */
  field: RoleSortableFields;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}