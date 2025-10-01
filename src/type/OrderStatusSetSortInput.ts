import { OrderStatusSetSortField } from '../enum/OrderStatusSetSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for OrderStatusSetSortInput
 */
export interface OrderStatusSetSortInput {
  /** Field to sort by */
  field: OrderStatusSetSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}