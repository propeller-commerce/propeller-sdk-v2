import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for UpdateClusterConfigSettingResponse
 */
export class UpdateClusterConfigSettingResponse {
  /** id field */
  id?: number;
  /** displayType field */
  displayType?: ClusterConfigSettingDisplayType;
  /** priority field */
  priority?: number;
  constructor(data: Partial<UpdateClusterConfigSettingResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number | undefined {
    return this.id;
  }
  /** Returns `displayType`. */
  getDisplayType(): ClusterConfigSettingDisplayType | undefined {
    return this.displayType;
  }
  /** Returns `priority`. */
  getPriority(): number | undefined {
    return this.priority;
  }
}