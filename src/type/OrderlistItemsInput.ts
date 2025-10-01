import { SourceInput } from './SourceInput';
/**
 Input object for OrderlistItemsInput
 */
export interface OrderlistItemsInput {
  /** List of product ids */
  productIds?: number[];
  /** List of product sources */
  productSources?: SourceInput[];
  /** List of cluster ids */
  clusterIds?: number[];
  /** List of cluster sources */
  clusterSources?: SourceInput[];
}