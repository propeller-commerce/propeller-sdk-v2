import { Gender } from '../enum/Gender';
import { ContactSortInput } from './ContactSortInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for ContactSearchArguments
 */
export interface ContactSearchArguments {
  /** List of unique contact ids */
  contactIds?: number[];
  /** Contact's first name */
  firstName?: string;
  /** Contact's middle name */
  middleName?: string;
  /** Contact's last name */
  lastName?: string;
  /** Contact's email */
  email?: string;
  /** Contact's gender */
  gender?: Gender;
  /** page input field */
  page: number;
  /** offset input field */
  offset: number;
  /** List of contact sort filters */
  sort?: ContactSortInput[];
  /** Search by date modified */
  lastModifiedAt?: DateSearchInput;
  /** Search by date created */
  createdAt?: DateSearchInput;
}