import { ShipmentItemSortField } from '../enum/ShipmentItemSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ShipmentItemSortInput
 */
export interface ShipmentItemSortInput {
  /** Field to sort by */
  field: ShipmentItemSortField;
  /** Option to sort by */
  order: SortOrder;
}