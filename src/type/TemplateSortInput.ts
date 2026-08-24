import { TemplateSortField } from '../enum/TemplateSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for TemplateSortInput
 */
export interface TemplateSortInput {
  /** Field to sort by */
  field: TemplateSortField;
  /** The sort order ASC/DESC */
  order: SortOrder;
}