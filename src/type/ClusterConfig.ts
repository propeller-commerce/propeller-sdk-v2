import { ClusterConfigSetting } from './ClusterConfigSetting';
/**
 Object class for ClusterConfig
 */
export interface ClusterConfig {
  /** id field */
  id: number;
  /** name field */
  name: string;
  /** settings field */
  settings?: ClusterConfigSetting[];
}