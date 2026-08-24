import { OrderlistSortField } from '../enum/OrderlistSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for OrderlistSortInput
 */
export interface OrderlistSortInput {
  /** Field to sort by */
  field: OrderlistSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}