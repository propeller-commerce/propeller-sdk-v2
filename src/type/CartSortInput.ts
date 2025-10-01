import { CartSortField } from '../enum/CartSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CartSortInput
 */
export interface CartSortInput {
  /** Field to sort by */
  field: CartSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}