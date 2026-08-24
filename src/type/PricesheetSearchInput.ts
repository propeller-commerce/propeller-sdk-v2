import { DateSearchInput } from './DateSearchInput';
import { NumberSearchInput } from './NumberSearchInput';
import { PricesheetSortInput } from './PricesheetSortInput';
/**
 Input object for PricesheetSearchInput
 */
export interface PricesheetSearchInput {
  /** Pagination page number */
  page?: number;
  /** Pagination offset number */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by ids */
  ids?: string[];
  /** Search by contact ids */
  contactIds?: number[];
  /** Search by customer ids */
  customerIds?: number[];
  /** Search by company ids */
  companyIds?: number[];
  /** Search by pricesheet code */
  codes?: string[];
  /** Search by pricesheet name */
  names?: string[];
  /** Search by pricesheet priority */
  priority?: NumberSearchInput;
  /** Search by pricesheet readonly */
  readonly?: boolean;
  /** Inputs to sort by */
  sortInputs?: PricesheetSortInput[];
}