import { DateSearchInput } from './DateSearchInput';
import { RestApiKeySortInput } from './RestApiKeySortInput';
/**
 Input object for RestApiKeySearchInput
 */
export interface RestApiKeySearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: RestApiKeySortInput[];
  /** Filter by specific IDs */
  ids?: string[];
  /** Filter by active status */
  active?: boolean;
}
