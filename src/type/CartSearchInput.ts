import { CartStatus } from '../enum/CartStatus';
import { DateSearchInput } from './DateSearchInput';
import { CartSortInput } from './CartSortInput';
/**
 Input object for CartSearchInput
 */
export interface CartSearchInput {
  /** Cart unique identifiers */
  ids?: string[];
  /** Contact unique identifiers */
  contactIds?: number[];
  /** Customer unique identifiers */
  customerIds?: number[];
  /** Company unique identifiers */
  companyIds?: number[];
  /** Cart status */
  statuses?: CartStatus[];
  /** Page number */
  page?: number;
  /** Offset number */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: CartSortInput[];
}