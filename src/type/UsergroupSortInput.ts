import { UsergroupSortableField } from '../enum/UsergroupSortableField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for UsergroupSortInput
 */
export interface UsergroupSortInput {
  /** Available sortable fields */
  field: UsergroupSortableField;
  /** Sort ordering ['ASC' or 'DESC'] */
  order: SortOrder;
}