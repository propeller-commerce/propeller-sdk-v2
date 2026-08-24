import { RestApiKeySortField } from '../enum/RestApiKeySortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for RestApiKeySortInput
 */
export interface RestApiKeySortInput {
  /** Field to sort by */
  field: RestApiKeySortField;
  /** Sort order direction */
  order: SortOrder;
}
