import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
/**
 Object class for ClusterConfigResponse
 */
export interface ClusterConfigResponse {
  /** id field */
  id: number;
  /** name field */
  name: string;
  /** settings field */
  settings?: ClusterConfigSettingResponse[];
}