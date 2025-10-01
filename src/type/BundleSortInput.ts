import { BundleSortField } from '../enum/BundleSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for BundleSortInput
 */
export interface BundleSortInput {
  /** Field to sort by */
  field: BundleSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order?: SortOrder;
}