import { TaxSortField } from '../enum/TaxSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for TaxSortInput
 */
export interface TaxSortInput {
  /** Field to sort by */
  field: TaxSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}