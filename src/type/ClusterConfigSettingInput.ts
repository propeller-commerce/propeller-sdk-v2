import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Input object for ClusterConfigSettingInput
 */
export interface ClusterConfigSettingInput {
  /** attributeName input field */
  attributeName: string;
  /** displayType input field */
  displayType: ClusterConfigSettingDisplayType;
  /** priority input field */
  priority?: number;
}