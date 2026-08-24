import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSettingResponse
 */
export interface ClusterConfigSettingResponse {
  /** id field */
  id: number;
  /** attributeName field */
  attributeName: string;
  /** displayType field */
  displayType: ClusterConfigSettingDisplayType;
  /** priority field */
  priority?: number;
  /** clusterConfigId field */
  clusterConfigId: string;
}