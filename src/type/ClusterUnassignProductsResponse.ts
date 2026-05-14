import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterUnassignProductsResponse
 */
export class ClusterUnassignProductsResponse {
  /** The cluster object */
  cluster!: Cluster;
  /** Output messages about the actions performed. */
  actions!: ClusterProductsActionResponse;
  constructor(data: Partial<ClusterUnassignProductsResponse> = {}) {
    Object.assign(this, data);
  }
}