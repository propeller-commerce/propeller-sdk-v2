import { SourceInput } from './SourceInput';
/**
 Input object for FavoriteListsUpdateInput
 */
export interface FavoriteListsUpdateInput {
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
  name?: string;
}