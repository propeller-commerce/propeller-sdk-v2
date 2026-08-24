import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Input object for ClusterConfigSettingUpdateInput
 */
export interface ClusterConfigSettingUpdateInput {
  /** displayType input field */
  displayType?: ClusterConfigSettingDisplayType;
  /** priority input field */
  priority?: number;

  /** Attribute name for the configuration setting */
  attributeName?: string;
}