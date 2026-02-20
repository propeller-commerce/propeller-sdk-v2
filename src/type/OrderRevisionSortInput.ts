import { OrderRevisionSortField } from '../enum/OrderRevisionSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for OrderRevisionSortInput
 */
export interface OrderRevisionSortInput {
  /** Field to sort by */
  field: OrderRevisionSortField;
  /** Sort direction */
  order: SortOrder;
}
