import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
/**
 Object class for ClusterConfigResponse
 */
export class ClusterConfigResponse {
  /** id field */
  id!: number;
  /** name field */
  name!: string;
  /** settings field */
  settings?: ClusterConfigSettingResponse[];
  constructor(data: Partial<ClusterConfigResponse> = {}) {
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
  /** Returns `settings` as ClusterConfigSettingResponse instances (coerced on first access). */
  getSettings(): ClusterConfigSettingResponse[] | undefined {
    if (!this.settings) return undefined;
    this.settings = this.settings.map((x: any) => x instanceof ClusterConfigSettingResponse ? x : new ClusterConfigSettingResponse(x));
    return this.settings;
  }
}