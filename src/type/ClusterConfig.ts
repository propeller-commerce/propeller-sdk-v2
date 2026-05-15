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

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `settings` as ClusterConfigSetting instances (coerced on first access). */
  getSettings(): ClusterConfigSetting[] | undefined {
    if (!this.settings) return undefined;
    this.settings = this.settings.map((x: any) => x instanceof ClusterConfigSetting ? x : new ClusterConfigSetting(x));
    return this.settings;
  }
}