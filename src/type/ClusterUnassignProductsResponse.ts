import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterUnassignProductsResponse
 */
export interface ClusterUnassignProductsResponse {
  /** The cluster object */
  cluster: Cluster;
  /** Output messages about the actions performed. */
  actions: ClusterProductsActionResponse;
}