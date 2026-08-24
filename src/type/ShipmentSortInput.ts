import { ShipmentSortField } from '../enum/ShipmentSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ShipmentSortInput
 */
export interface ShipmentSortInput {
  /** Field to sort by */
  field: ShipmentSortField;
  /** Option to sort by */
  order: SortOrder;
}