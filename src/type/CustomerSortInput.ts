import { CustomerSortableField } from '../enum/CustomerSortableField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CustomerSortInput
 */
export interface CustomerSortInput {
  /** Available customer sortable fields */
  field: CustomerSortableField;
  /** Sort customer ordering ['ASC' or 'DESC'] */
  order: SortOrder;
}