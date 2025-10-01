import { SourceInput } from './SourceInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for FavoriteListsSearchInput
 */
export interface FavoriteListsSearchInput {
  /** Favorite List name */
  name?: string;
  /** Favorite List is default */
  isDefault?: boolean;
  /** Favorite List page */
  page?: number;
  /** Favorite List offset */
  offset?: number;
  /** Favorite List company ID */
  companyId?: number;
  /** A company source */
  companySource?: SourceInput;
  /** Favorite List contact ID */
  contactId?: number;
  /** A contact source */
  contactSource?: SourceInput;
  /** Favorite List customer ID */
  customerId?: number;
  /** A customer source */
  customerSource?: SourceInput;
  /** List of product ids */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** List of cluster ids */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
}