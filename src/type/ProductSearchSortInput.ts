import { ProductSortField } from '../enum/ProductSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ProductSearchSortInput
 */
export interface ProductSearchSortInput {
  /** Available sortable fields */
  field: ProductSortField;
  /** Sort ordering ['desc' or 'asc'] */
  order?: SortOrder;
}
