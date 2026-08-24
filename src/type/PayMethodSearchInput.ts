import { DateSearchInput } from './DateSearchInput';
import { PayMethodSortInput } from './PayMethodSortInput';
/**
 Input object for PayMethodSearchInput
 */
export interface PayMethodSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** List of primary identifiers */
  ids?: number[];
  /** List of external codes */
  externalCodes?: string[];
  /** Inputs to sort by */
  sortInputs?: PayMethodSortInput[];
}