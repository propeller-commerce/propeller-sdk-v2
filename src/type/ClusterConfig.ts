import { ClusterConfigSetting } from './ClusterConfigSetting';
/**
 Object class for ClusterConfig
 */
export class ClusterConfig {
  /** id field */
  private _id: number;
  /** name field */
  private _name: string;
  /** settings field */
  private _settings?: ClusterConfigSetting[];
  /**
   Creates a new instance of ClusterConfig
   */
  constructor(data: Partial<ClusterConfig> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._settings = data.settings;
  }
  /**
   id field
   */
  get id(): number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   settings field
   */
  get settings(): ClusterConfigSetting[] | undefined {
    return this._settings;
  }
  /**
   settings field
   */
  set settings(value: ClusterConfigSetting[] | undefined) {
    this._settings = value;
  }
}