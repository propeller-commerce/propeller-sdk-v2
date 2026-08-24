import { GqlApiKeySortField } from '../enum/GqlApiKeySortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for GqlApiKeySortInput
 */
export interface GqlApiKeySortInput {
  /** Field to sort by */
  field: GqlApiKeySortField;
  /** Sort order direction */
  order: SortOrder;
}
