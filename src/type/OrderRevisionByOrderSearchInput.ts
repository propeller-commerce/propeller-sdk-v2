import { DateSearchInput } from './DateSearchInput';
import { OrderRevisionSortInput } from './OrderRevisionSortInput';
/**
 Input object for OrderRevisionByOrderSearchInput
 */
export interface OrderRevisionByOrderSearchInput {
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
  /** Filter by specific revision numbers */
  revisionNumbers?: number[];
  /** Filter by public status */
  public?: boolean;
  /** Filter by invalid status */
  invalid?: boolean;
  /** Search by channel ids */
  channelIds?: number[];
}
