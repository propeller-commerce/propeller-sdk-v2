import { ClusterConfigSettingType } from '../enum/ClusterConfigSettingType';
import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSetting
 */
export class ClusterConfigSetting {
  /** id field */
  id!: number;
  /** name field */
  name!: string;
  /** type field */
  type!: ClusterConfigSettingType;
  /** displayType field */
  displayType!: ClusterConfigSettingDisplayType;
  /** priority field */
  priority!: string;
  constructor(data: Partial<ClusterConfigSetting> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `type`. */
  getType(): ClusterConfigSettingType {
    return this.type;
  }
  /** Returns `displayType`. */
  getDisplayType(): ClusterConfigSettingDisplayType {
    return this.displayType;
  }
  /** Returns `priority`. */
  getPriority(): string {
    return this.priority;
  }
}