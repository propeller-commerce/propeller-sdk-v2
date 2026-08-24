import { ContactTermField } from '../enum/ContactTermField';
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

  /** Free-text search term matched as a case-insensitive substring across the contact's own fields. The id field matches by exact id (numeric terms only). Restrict the searched fields with termFields. Multi-word terms must all match (AND). Each token must be at least 3 characters, or a numeric id. */
  term?: string;
  /** Fields the term searches. Text fields match by case-insensitive substring; the ID field matches by exact id (numeric terms only). When omitted, contact text fields are searched. */
  termFields?: ContactTermField[];
}