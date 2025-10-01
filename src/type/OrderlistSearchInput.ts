import { OrderlistType } from '../enum/OrderlistType';
import { YesNo } from '../enum/YesNo';
import { DateSearchInput } from './DateSearchInput';
import { SourceInput } from './SourceInput';
import { OrderlistSortInput } from './OrderlistSortInput';
/**
 Input object for OrderlistSearchInput
 */
export interface OrderlistSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** List of Orderlist primary identifiers */
  ids?: number[];
  /** List of codes */
  codes?: string[];
  /** Search by valid to */
  validTo?: DateSearchInput;
  /** Search by valid from */
  validFrom?: DateSearchInput;
  /** Orderlist type. One of: [POSITIVE, NEGATIVE] */
  type?: OrderlistType;
  /** Partner entity */
  partnerEntities?: string[];
  /** Shows if the orderlist is active */
  active?: YesNo;
  /** List of user ids */
  userIds?: number[];
  /** List of user sources */
  userSources?: SourceInput[];
  /** List of company ids */
  companyIds?: number[];
  /** List of company sources */
  companySources?: SourceInput[];
  /** List of product ids */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** List of cluster ids */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
  /** Inputs to sort by */
  sortInputs?: OrderlistSortInput[];
}