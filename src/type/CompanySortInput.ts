import { CompanySortableField } from '../enum/CompanySortableField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CompanySortInput
 */
export interface CompanySortInput {
  /** Available sortable fields */
  field: CompanySortableField;
  /** Sort ordering ['ASC' or 'DESC'] */
  order: SortOrder;
}