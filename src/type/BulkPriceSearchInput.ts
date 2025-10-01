import { DateSearchInput } from './DateSearchInput';
import { NumberSearchInput } from './NumberSearchInput';
import { DecimalSearchInput } from './DecimalSearchInput';
import { BulkPriceSortInput } from './BulkPriceSortInput';
/**
 Input object for BulkPriceSearchInput
 */
export interface BulkPriceSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by bulk price ids */
  ids?: string[];
  /** Search by price ids */
  priceIds?: string[];
  /** Search by quantity from */
  quantityFrom?: NumberSearchInput;
  /** Search by values */
  value?: DecimalSearchInput;
  /** Search by valid from */
  validFrom?: DateSearchInput;
  /** Search by valid to */
  validTo?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: BulkPriceSortInput[];
}