import { CarrierType } from '../enum/CarrierType';
import { DateSearchInput } from './DateSearchInput';
import { CarrierSortInput } from './CarrierSortInput';
/**
 Input object for CarriersSearchInput
 */
export interface CarriersSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by carrier names */
  names?: string[];
  /** Search by carrier types */
  types?: CarrierType[];
  /** Search by ids */
  ids?: number[];
  /** Search by warehouse ids */
  warehouseIds?: number[];
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: CarrierSortInput[];
}