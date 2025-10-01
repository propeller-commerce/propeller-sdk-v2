import { Cluster } from './Cluster';
import { ClusterProductsActionResponse } from './ClusterProductsActionResponse';
/**
 Object class for ClusterUnassignProductsResponse
 */
export class ClusterUnassignProductsResponse {
  /** The cluster object */
  private _cluster: Cluster;
  /** Output messages about the actions performed. */
  private _actions: ClusterProductsActionResponse;
  /**
   Creates a new instance of ClusterUnassignProductsResponse
   */
  constructor(data: Partial<ClusterUnassignProductsResponse> = {}) {
    this._cluster = data.cluster!;
    this._actions = data.actions!;
  }
  /**
   The cluster object
   */
  get cluster(): Cluster {
    return this._cluster;
  }
  /**
   The cluster object
   */
  set cluster(value: Cluster) {
    this._cluster = value;
  }
  /**
   Output messages about the actions performed.
   */
  get actions(): ClusterProductsActionResponse {
    return this._actions;
  }
  /**
   Output messages about the actions performed.
   */
  set actions(value: ClusterProductsActionResponse) {
    this._actions = value;
  }
}