/**
 Input object for ClusterUnassignProductsInput
 */
export interface ClusterUnassignProductsInput {
  /** Array of product ids to unassign from cluster */
  productIds: number[];
  /** Category id to move the products to */
  categoryId?: number;
  /** Cluster id to move the products to */
  clusterId?: number;
}