import { SourceInput } from './SourceInput';
/**
 Input object for FavoriteListsItemsInput
 */
export interface FavoriteListsItemsInput {
  /** Favorite List product IDs list */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** Favorite List cluster IDs list */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
}