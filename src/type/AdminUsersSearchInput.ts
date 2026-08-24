import { DateSearchInput } from './DateSearchInput';
import { AdminUserSortInput } from './AdminUserSortInput';
/**
 Input object for AdminUsersSearchInput
 */
export interface AdminUsersSearchInput {
  /** page input field */
  page: number;
  /** offset input field */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** sortInputs input field */
  sortInputs?: AdminUserSortInput[];
}