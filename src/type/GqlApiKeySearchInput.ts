import { DateSearchInput } from './DateSearchInput';
import { GqlApiKeySortInput } from './GqlApiKeySortInput';
/**
 Input object for GqlApiKeySearchInput
 */
export interface GqlApiKeySearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: GqlApiKeySortInput[];
  /** Filter by specific IDs */
  ids?: string[];
  /** Filter by active status */
  active?: boolean;
  /** Filter by channel ID */
  channelIds?: number[];
}
