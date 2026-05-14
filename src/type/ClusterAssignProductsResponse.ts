import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterAssignProductsResponse
 */
export interface ClusterAssignProductsResponse {
  /** The cluster object */
  cluster: Cluster;
  /** Output messages about the actions performed. */
  actions: ClusterProductsActionResponse;
}