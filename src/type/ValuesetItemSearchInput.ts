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
}