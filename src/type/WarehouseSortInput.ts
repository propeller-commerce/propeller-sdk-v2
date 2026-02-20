import { WarehouseSortField } from '../enum/WarehouseSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for WarehouseSortInput
 */
export interface WarehouseSortInput {
  /** Field to sort by */
  field: WarehouseSortField;
  /** Order option to sort by */
  order: SortOrder;
}
