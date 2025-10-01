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
}