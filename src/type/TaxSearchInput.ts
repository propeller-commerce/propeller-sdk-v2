import { Taxcode } from '../enum/Taxcode';
import { DateSearchInput } from './DateSearchInput';
import { TaxSortInput } from './TaxSortInput';
/**
 Input object for TaxSearchInput
 */
export interface TaxSearchInput {
  /** Pagination page number */
  page?: number;
  /** Pagination offset number */
  offset?: number;
  /** Shop identifier for the tax to apply to */
  shopId?: number;
  /** Tax code. One of: [H, L, N] */
  code?: Taxcode;
  /** Tax zone */
  zone?: string;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: TaxSortInput[];
}