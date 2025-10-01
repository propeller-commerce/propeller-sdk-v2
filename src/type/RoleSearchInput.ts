import { RoleSortInput } from './RoleSortInput';
/**
 Input object for RoleSearchInput
 */
export interface RoleSearchInput {
  /** Search by user ids */
  userIds: number[];
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** Inputs to sort by */
  sortInputs?: RoleSortInput[];
}