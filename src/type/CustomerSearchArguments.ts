import { CustomerTermField } from '../enum/CustomerTermField';
import { Gender } from '../enum/Gender';
import { CustomerSortInput } from './CustomerSortInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for CustomerSearchArguments
 */
export interface CustomerSearchArguments {
  /** List of unique customer ids */
  customerIds?: number[];
  /** Customer's first name */
  firstName?: string;
  /** Customer's middle name */
  middleName?: string;
  /** Customer's last name */
  lastName?: string;
  /** Customer's email */
  email?: string;
  /** Customer's gender */
  gender?: Gender;
  /** page input field */
  page?: number;
  /** offset input field */
  offset?: number;
  /** List of customer sort filters */
  sort?: CustomerSortInput[];
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by date created */
  createdAt?: DateSearchInput;

  /** Free-text search term matched as a case-insensitive substring across the customer's own fields. The *_ID fields match by exact id (numeric terms only). Restrict the searched fields with termFields. Multi-word terms must all match (AND). Each token must be at least 3 characters, or a numeric id. */
  term?: string;
  /** Fields the term searches. Text fields match by case-insensitive substring; the *_ID fields match by exact id (numeric terms only). When omitted, the customer's own fields are searched. */
  termFields?: CustomerTermField[];
}