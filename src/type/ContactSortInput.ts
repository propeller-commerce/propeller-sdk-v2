import { ContactSortableField } from '../enum/ContactSortableField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ContactSortInput
 */
export interface ContactSortInput {
  /** Available contact sortable fields */
  field: ContactSortableField;
  /** Sort contact ordering ['ASC' or 'DESC'] */
  order: SortOrder;
}