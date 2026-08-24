import { CostPriceSortField } from '../enum/CostPriceSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CostPriceSortInput
 */
export interface CostPriceSortInput {
  /** Field to sort by */
  field: CostPriceSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}