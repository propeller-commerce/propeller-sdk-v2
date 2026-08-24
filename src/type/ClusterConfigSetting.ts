import { ClusterConfigSettingType } from '../enum/ClusterConfigSettingType';
import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSetting
 */
export interface ClusterConfigSetting {
  /** type field */
  type: ClusterConfigSettingType;
  /** displayType field */
  displayType: ClusterConfigSettingDisplayType;
  /** priority field */
  priority: string;

  /** Globally unique identifier for the cluster configuration. */
  uuid: string;
  /** Identifier of the tenant the cluster configuration belongs to. */
  tenant: string;
  /** Timestamp marking when the cluster configuration was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Identifier of the user account that created the cluster configuration. */
  createdBy: number;
  /** Timestamp marking the last modification of the cluster configuration, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** Identifier of the user account that last modified the cluster configuration. */
  lastModifiedBy: number;
  /** Name of the configurable attribute exposed by the setting. */
  attributeName: string;
  /** Reference to the cluster configuration that owns the setting. */
  configUuid: string;
  /** Numeric identifier of the cluster configuration. */
  clusterConfigId: number;
}