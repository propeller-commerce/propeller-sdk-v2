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

  /** Filter by source base product UUIDs (STI-based) */
  baseProductUuidsFrom?: string[];
  /** Filter by target base product UUIDs (STI-based) */
  baseProductUuidsTo?: string[];
  /** Filter by hidden status of related base products. true = only hidden, false = only non-hidden, null = no filter. */
  hidden?: boolean;
  /** Legacy field name for sorting. Use sortInputs instead. Specify multiple sorting criteria for the recommendation results. */
  sortBy?: CrossupsellSortInput[];
  /** Enable or disable applying orderlists */
  applyOrderlists?: boolean;
  /** List orderlists to apply */
  orderlistIds?: number[];
  /** Browse catalog as a specific User. Permissions, orderlists, favorite will be merged with the logged in user. */
  userId?: number;
  /** Browse catalog as a specific Company. Permissions, orderlists, favorite will be merged with the logged in user. */
  companyId?: number;
}