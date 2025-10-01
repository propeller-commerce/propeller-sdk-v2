import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
/**
 Object class for ClusterConfigResponse
 */
export class ClusterConfigResponse {
  /** id field */
  private _id: number;
  /** name field */
  private _name: string;
  /** settings field */
  private _settings?: ClusterConfigSettingResponse[];
  /**
   Creates a new instance of ClusterConfigResponse
   */
  constructor(data: Partial<ClusterConfigResponse> = {}) {
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
  get settings(): ClusterConfigSettingResponse[] | undefined {
    return this._settings;
  }
  /**
   settings field
   */
  set settings(value: ClusterConfigSettingResponse[] | undefined) {
    this._settings = value;
  }
}