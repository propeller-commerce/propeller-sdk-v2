import { DateSearchInput } from './DateSearchInput';
/**
 Search criteria and pagination parameters for filtering order revisions
 * Provides comprehensive filtering options including order IDs, revision numbers, date ranges, status filters, and pagination settings for efficient order revision retrieval and analysis.
 */
export interface OrderRevisionSearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: any[];
  /** Filter by specific order IDs */
  orderIds?: number[];
  /** Filter by specific revision numbers */
  revisionNumbers?: number[];
  /** Filter by public status */
  public?: boolean;
  /** Filter by invalid status */
  invalid?: boolean;
}