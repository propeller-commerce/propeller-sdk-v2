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
}