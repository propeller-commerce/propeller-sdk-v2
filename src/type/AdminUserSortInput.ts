import { AdminUserSortField } from '../enum/AdminUserSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for AdminUserSortInput
 */
export interface AdminUserSortInput {
  /** field input field */
  field: AdminUserSortField;
  /** order input field */
  order: SortOrder;
}