import { ClusterConfigSettingInput } from './ClusterConfigSettingInput';
/**
 Input object for ClusterConfigCreateInput
 */
export interface ClusterConfigCreateInput {
  /** name input field */
  name: string;
  /** settings input field */
  settings?: ClusterConfigSettingInput[];
}