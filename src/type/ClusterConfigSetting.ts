import { ClusterConfigSettingType } from '../enum/ClusterConfigSettingType';
import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSetting
 */
export class ClusterConfigSetting {
  /** id field */
  private _id: number;
  /** name field */
  private _name: string;
  /** type field */
  private _type: ClusterConfigSettingType;
  /** displayType field */
  private _displayType: ClusterConfigSettingDisplayType;
  /** priority field */
  private _priority: string;
  /**
   Creates a new instance of ClusterConfigSetting
   */
  constructor(data: Partial<ClusterConfigSetting> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._type = data.type!;
    this._displayType = data.displayType!;
    this._priority = data.priority!;
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
   type field
   */
  get type(): ClusterConfigSettingType {
    return this._type;
  }
  /**
   type field
   */
  set type(value: ClusterConfigSettingType) {
    this._type = value;
  }
  /**
   displayType field
   */
  get displayType(): ClusterConfigSettingDisplayType {
    return this._displayType;
  }
  /**
   displayType field
   */
  set displayType(value: ClusterConfigSettingDisplayType) {
    this._displayType = value;
  }
  /**
   priority field
   */
  get priority(): string {
    return this._priority;
  }
  /**
   priority field
   */
  set priority(value: string) {
    this._priority = value;
  }
}