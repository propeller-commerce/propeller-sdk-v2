import { ZoneTaxCodeSortField } from '../enum/ZoneTaxCodeSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ZoneTaxCodeSortInput
 */
export interface ZoneTaxCodeSortInput {
  /** Field to sort by */
  field: ZoneTaxCodeSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}