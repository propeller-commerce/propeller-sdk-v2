import { Taxcode } from '../enum/Taxcode';
import { DateSearchInput } from './DateSearchInput';
import { ZoneTaxCodeSortInput } from './ZoneTaxCodeSortInput';
/**
 Input object for ZoneTaxCodeSearchInput
 */
export interface ZoneTaxCodeSearchInput {
  /** Pagination page number */
  page?: number;
  /** Pagination offset number */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by Zone tax code ids */
  ids?: string[];
  /** Search by price ids */
  priceIds?: string[];
  /** Search by tax code */
  taxCodes?: Taxcode[];
  /** Search by zone code */
  zones?: string[];
  /** Inputs to sort by */
  sortInputs?: ZoneTaxCodeSortInput[];
}