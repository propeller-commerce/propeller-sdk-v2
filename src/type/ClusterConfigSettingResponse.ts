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

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `attributeName`. */
  getAttributeName(): string {
    return this.attributeName;
  }
  /** Returns `displayType`. */
  getDisplayType(): ClusterConfigSettingDisplayType {
    return this.displayType;
  }
  /** Returns `priority`. */
  getPriority(): number | undefined {
    return this.priority;
  }
  /** Returns `clusterConfigId`. */
  getClusterConfigId(): string {
    return this.clusterConfigId;
  }
}