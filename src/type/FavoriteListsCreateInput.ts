import { SourceInput } from './SourceInput';
/**
 Input object for FavoriteListsCreateInput
 */
export interface FavoriteListsCreateInput {
  /** Favorite List product IDs list */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** Favorite List cluster IDs list */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
  /** Favorite List is default */
  isDefault?: boolean;
  /** Favorite List name */
  name: string;
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
}