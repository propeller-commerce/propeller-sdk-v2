import { OrderSortField } from '../enum/OrderSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for OrderSortInput
 */
export interface OrderSortInput {
  /** Field to sort by */
  field: OrderSortField;
  /** Option to sort by */
  order: SortOrder;
}