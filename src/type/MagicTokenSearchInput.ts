import { DateSearchInput } from './DateSearchInput';
import { IntegerRangeSearchInput } from './IntegerRangeSearchInput';
/**
 Input object for MagicTokenSearchInput
 */
export interface MagicTokenSearchInput {
  /** Search by ids */
  ids?: string[];
  /** Search by contact ids */
  contactIds?: number[];
  /** Search by customer ids */
  customerIds?: number[];
  /** Search by date expires */
  expiresAt?: DateSearchInput;
  /** Search by magic token one time use */
  oneTimeUse?: boolean;
  /** Search by number of failed attempts */
  failedLogins?: IntegerRangeSearchInput;
  /** Search by number of successful attempts */
  successfulLogins?: IntegerRangeSearchInput;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
}