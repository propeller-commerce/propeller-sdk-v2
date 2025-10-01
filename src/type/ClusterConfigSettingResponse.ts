import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSettingResponse
 */
export class ClusterConfigSettingResponse {
  /** id field */
  private _id: number;
  /** attributeName field */
  private _attributeName: string;
  /** displayType field */
  private _displayType: ClusterConfigSettingDisplayType;
  /** priority field */
  private _priority?: number;
  /** clusterConfigId field */
  private _clusterConfigId: string;
  /**
   Creates a new instance of ClusterConfigSettingResponse
   */
  constructor(data: Partial<ClusterConfigSettingResponse> = {}) {
    this._id = data.id!;
    this._attributeName = data.attributeName!;
    this._displayType = data.displayType!;
    this._priority = data.priority;
    this._clusterConfigId = data.clusterConfigId!;
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
   attributeName field
   */
  get attributeName(): string {
    return this._attributeName;
  }
  /**
   attributeName field
   */
  set attributeName(value: string) {
    this._attributeName = value;
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
  get priority(): number | undefined {
    return this._priority;
  }
  /**
   priority field
   */
  set priority(value: number | undefined) {
    this._priority = value;
  }
  /**
   clusterConfigId field
   */
  get clusterConfigId(): string {
    return this._clusterConfigId;
  }
  /**
   clusterConfigId field
   */
  set clusterConfigId(value: string) {
    this._clusterConfigId = value;
  }
}