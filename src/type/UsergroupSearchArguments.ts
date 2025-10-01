import { UsergroupSortInput } from './UsergroupSortInput';
/**
 Input object for UsergroupSearchArguments
 */
export interface UsergroupSearchArguments {
  /** Usergroup's name */
  name?: string;
  /** page input field */
  page?: number;
  /** offset input field */
  offset?: number;
  /** List of usergroup sort filters */
  sort?: UsergroupSortInput[];
}