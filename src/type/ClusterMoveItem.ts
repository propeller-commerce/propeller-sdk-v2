/**
 Input object for ClusterMoveItem
 Input for a single cluster move operation.
 */
export interface ClusterMoveItem {
  /** Cluster identifier to move */
  clusterId: number;
  /** Target category identifier */
  categoryId: number;
}
