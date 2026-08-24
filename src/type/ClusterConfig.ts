import { ClusterConfigSetting } from './ClusterConfigSetting';
/**
 Object class for ClusterConfig
 */
export interface ClusterConfig {
  /** id field */
  id: number;
  /** name field */
  name: string;
  /** settings field */
  settings?: ClusterConfigSetting[];

  /** Globally unique identifier for the cluster configuration. */
  uuid: string;
  /** Timestamp marking when the cluster configuration was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Identifier of the user account that created the cluster configuration. */
  createdBy?: number;
  /** Timestamp marking the last modification of the cluster configuration, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** Identifier of the user account that last modified the cluster configuration. */
  lastModifiedBy?: number;
}