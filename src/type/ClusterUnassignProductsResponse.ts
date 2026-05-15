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

  /** Returns `cluster` as a Cluster instance (coerced on first access). */
  getCluster(): Cluster | undefined {
    if (this.cluster == null) return undefined;
    if (!(this.cluster instanceof Cluster)) {
      this.cluster = new Cluster(this.cluster as any);
    }
    return this.cluster;
  }
  /** Returns `actions` as a ClusterProductsActionResponse instance (coerced on first access). */
  getActions(): ClusterProductsActionResponse | undefined {
    if (this.actions == null) return undefined;
    if (!(this.actions instanceof ClusterProductsActionResponse)) {
      this.actions = new ClusterProductsActionResponse(this.actions as any);
    }
    return this.actions;
  }
}