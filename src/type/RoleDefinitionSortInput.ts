import { RoleDefinitionSortableFields } from '../enum/RoleDefinitionSortableFields';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for RoleDefinitionSortInput
 */
export interface RoleDefinitionSortInput {
  /** Field to sort by */
  field: RoleDefinitionSortableFields;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}