import { OrderStatusSetSortInput } from './OrderStatusSetSortInput';
/**
 Input object for OrderStatusSetsSearchInput
 */
export interface OrderStatusSetsSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Order status set name */
  name?: string;
  /** Inputs to sort by */
  sortInputs?: OrderStatusSetSortInput[];
}