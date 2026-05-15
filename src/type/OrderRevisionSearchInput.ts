import { DateSearchInput } from './DateSearchInput';
import { OrderRevisionSortInput } from './OrderRevisionSortInput';
/**
 Search criteria and pagination parameters for filtering order revisions
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
  sortInputs?: OrderRevisionSortInput[];
  /** Filter by specific order IDs */
  orderIds?: number[];
  /** Filter by specific revision numbers */
  revisionNumbers?: number[];
  /** Filter by public status */
  public?: boolean;
  /** Filter by invalid status */
  invalid?: boolean;
}