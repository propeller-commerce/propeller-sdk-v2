import { ClusterConfigSettingType } from '../enum/ClusterConfigSettingType';
import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSetting
 */
export interface ClusterConfigSetting {
  /** id field */
  id: number;
  /** name field */
  name: string;
  /** type field */
  type: ClusterConfigSettingType;
  /** displayType field */
  displayType: ClusterConfigSettingDisplayType;
  /** priority field */
  priority: string;
}