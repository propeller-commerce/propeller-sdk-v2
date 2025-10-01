import { CrossupsellType } from '../enum/CrossupsellType';
import { CrossupsellSortInput } from './CrossupsellSortInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for CrossupsellSearchInput
 */
export interface CrossupsellSearchInput {
  /** Search by ids  */
  ids?: string[];
  /** Search by product ids from */
  productIdsFrom?: number[];
  /** Search by cluster ids from */
  clusterIdsFrom?: number[];
  /** Search by product ids to */
  productIdsTo?: number[];
  /** Search by cluster ids to */
  clusterIdsTo?: number[];
  /** Crossupsell type. One of: [accessories, alternatives, options, parts, related] */
  types?: CrossupsellType[];
  /** Search by subtype */
  subTypes?: string[];
  /** Inputs to sort by */
  sortInputs?: CrossupsellSortInput[];
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
}