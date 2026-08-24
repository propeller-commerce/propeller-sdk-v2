import { OrderStatusSortField } from '../enum/OrderStatusSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for OrderStatusSortInput
 */
export interface OrderStatusSortInput {
  /** Field to sort by */
  field: OrderStatusSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}