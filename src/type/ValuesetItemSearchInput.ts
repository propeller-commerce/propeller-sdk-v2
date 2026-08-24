import { ValuesetItemTermField } from '../enum/ValuesetItemTermField';
import { ValuesetItemSortInput } from './ValuesetItemSortInput';
/**
 Input object for ValuesetItemSearchInput
 */
export interface ValuesetItemSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by valueset item ids */
  ids?: number[];
  /** Search by valueset ids */
  valuesetIds?: number[];
  /** Search by values */
  values?: string[];
  /** Search by extra values */
  extras?: string[];
  /** Inputs to sort by */
  sortInputs?: ValuesetItemSortInput[];

  /** Free-text search term to filter by.

Performs a case-insensitive partial-match search across value set item fields. Use this to find items that match a specific keyword or phrase (e.g. "Nether" to match the description "Netherlands"). */
  term?: string;
  /** Fields to search in when using the term filter.

Specifies which fields should be included in the full-text search when a term is provided. Defaults to searching in all fields. Array must contain unique values and be non-empty when provided. */
  termFields?: ValuesetItemTermField[];
  /** Languages to search in when using the term filter.

Specifies which languages should be included in the full-text search when a term is provided. All languages are included by default. Array must contain unique values and be non-empty when provided. */
  termLanguages?: string[];
}