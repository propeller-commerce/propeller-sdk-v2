import { CarrierSortField } from '../enum/CarrierSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CarrierSortInput
 */
export interface CarrierSortInput {
  /** Field to sort by */
  field: CarrierSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}