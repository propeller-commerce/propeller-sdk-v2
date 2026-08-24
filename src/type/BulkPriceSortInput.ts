import { BulkPriceSortField } from '../enum/BulkPriceSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for BulkPriceSortInput
 */
export interface BulkPriceSortInput {
  /** Field to sort by */
  field: BulkPriceSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}