import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterAssignProductsResponse
 */
export class ClusterAssignProductsResponse {
  /** The cluster object */
  cluster!: Cluster;
  /** Output messages about the actions performed. */
  actions!: ClusterProductsActionResponse;
  constructor(data: Partial<ClusterAssignProductsResponse> = {}) {
    Object.assign(this, data);
  }
}