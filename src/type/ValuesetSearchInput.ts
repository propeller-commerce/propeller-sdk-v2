import { ValuesetTermField } from '../enum/ValuesetTermField';
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

  /** Free-text search term to filter by.

Performs a case-insensitive partial-match search across value set fields. Use this to find value sets that match a specific keyword or phrase. */
  term?: string;
  /** Fields to search in when using the term filter.

Specifies which fields should be included in the full-text search when a term is provided. Defaults to searching in all fields. Array must contain unique values and be non-empty when provided. */
  termFields?: ValuesetTermField[];
  /** Languages to search in when using the term filter.

Specifies which languages should be included in the full-text search when a term is provided. All languages are included by default. Array must contain unique values and be non-empty when provided. */
  termLanguages?: string[];
}