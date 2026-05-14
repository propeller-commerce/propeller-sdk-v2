import { ClusterConfigSetting } from './ClusterConfigSetting';
/**
 Object class for ClusterConfig
 */
export class ClusterConfig {
  /** id field */
  id!: number;
  /** name field */
  name!: string;
  /** settings field */
  settings?: ClusterConfigSetting[];
  constructor(data: Partial<ClusterConfig> = {}) {
    Object.assign(this, data);
  }
}