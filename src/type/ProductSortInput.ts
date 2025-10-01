import { ProductSortField } from '../enum/ProductSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ProductSortInput
 */
export interface ProductSortInput {
  /** Available sortable fields */
  field: ProductSortField;
  /** Sort ordering ['desc' or 'asc'] */
  order?: SortOrder;
}