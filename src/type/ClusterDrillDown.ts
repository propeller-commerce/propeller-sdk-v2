import { ClusterDrillDownDisplayType } from '../enum/ClusterDrillDownDisplayType';
/**
 Object class for ClusterDrillDown
 */
export class ClusterDrillDown {
  /** The id of the Attribute to create the drilldown matrix for  */
  private _attributeId: string;
  /** The order in which the drilldown should be generated */
  private _priority: number;
  /** Indicator how to display the current drilldown selection */
  private _displayType: ClusterDrillDownDisplayType;
  /**
   Creates a new instance of ClusterDrillDown
   */
  constructor(data: Partial<ClusterDrillDown> = {}) {
    this._attributeId = data.attributeId!;
    this._priority = data.priority!;
    this._displayType = data.displayType!;
  }
  /**
   The id of the Attribute to create the drilldown matrix for
   */
  get attributeId(): string {
    return this._attributeId;
  }
  /**
   The id of the Attribute to create the drilldown matrix for
   */
  set attributeId(value: string) {
    this._attributeId = value;
  }
  /**
   The order in which the drilldown should be generated
   */
  get priority(): number {
    return this._priority;
  }
  /**
   The order in which the drilldown should be generated
   */
  set priority(value: number) {
    this._priority = value;
  }
  /**
   Indicator how to display the current drilldown selection
   */
  get displayType(): ClusterDrillDownDisplayType {
    return this._displayType;
  }
  /**
   Indicator how to display the current drilldown selection
   */
  set displayType(value: ClusterDrillDownDisplayType) {
    this._displayType = value;
  }
}