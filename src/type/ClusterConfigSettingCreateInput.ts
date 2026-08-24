import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Input object for ClusterConfigSettingCreateInput
 */
export interface ClusterConfigSettingCreateInput {
  /** Name of the configurable attribute exposed by the setting. */
  attributeName: string;
  /** Control type used when surfacing the setting in user interfaces. */
  displayType: ClusterConfigSettingDisplayType;
  /** Relative ranking used when ordering settings in user interfaces; higher values surface first. */
  priority?: number;
}
