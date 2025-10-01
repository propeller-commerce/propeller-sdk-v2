import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for UpdateClusterConfigSettingResponse
 */
export class UpdateClusterConfigSettingResponse {
  /** id field */
  private _id?: number;
  /** displayType field */
  private _displayType?: ClusterConfigSettingDisplayType;
  /** priority field */
  private _priority?: number;
  /**
   Creates a new instance of UpdateClusterConfigSettingResponse
   */
  constructor(data: Partial<UpdateClusterConfigSettingResponse> = {}) {
    this._id = data.id;
    this._displayType = data.displayType;
    this._priority = data.priority;
  }
  /**
   id field
   */
  get id(): number | undefined {
    return this._id;
  }
  /**
   id field
   */
  set id(value: number | undefined) {
    this._id = value;
  }
  /**
   displayType field
   */
  get displayType(): ClusterConfigSettingDisplayType | undefined {
    return this._displayType;
  }
  /**
   displayType field
   */
  set displayType(value: ClusterConfigSettingDisplayType | undefined) {
    this._displayType = value;
  }
  /**
   priority field
   */
  get priority(): number | undefined {
    return this._priority;
  }
  /**
   priority field
   */
  set priority(value: number | undefined) {
    this._priority = value;
  }
}