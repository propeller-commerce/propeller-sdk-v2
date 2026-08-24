import { ClusterMoveItem } from './ClusterMoveItem';
/**
 Input object for ClusterBulkMoveInput
 Input for bulk moving clusters to categories.
 */
export interface ClusterBulkMoveInput {
  /** List of cluster move operations specifying which clusters should be moved */
  clusters: ClusterMoveItem[];
}
