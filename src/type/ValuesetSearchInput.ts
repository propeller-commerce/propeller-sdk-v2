import { ValuesetType } from '../enum/ValuesetType';
import { DateSearchInput } from './DateSearchInput';
import { ValuesetSortInput } from './ValuesetSortInput';
/**
 Input object for ValuesetSearchInput
 */
export interface ValuesetSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by ids */
  ids?: number[];
  /** Search by names */
  names?: string[];
  /** Valueset type. One of: [SYSTEM, CUSTOM] */
  type?: ValuesetType;
  /** Inputs to sort by */
  sortInputs?: ValuesetSortInput[];
}