import { AttributeDescriptionSortField } from '../enum/AttributeDescriptionSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for AttributeDescriptionSortInput
 */
export interface AttributeDescriptionSortInput {
  /** The field to sort by */
  field: AttributeDescriptionSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order?: SortOrder;
}