import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSettingResponse
 */
export class ClusterConfigSettingResponse {
  /** id field */
  id!: number;
  /** attributeName field */
  attributeName!: string;
  /** displayType field */
  displayType!: ClusterConfigSettingDisplayType;
  /** priority field */
  priority?: number;
  /** clusterConfigId field */
  clusterConfigId!: string;
  constructor(data: Partial<ClusterConfigSettingResponse> = {}) {
    Object.assign(this, data);
  }
}