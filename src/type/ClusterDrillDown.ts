import { ClusterDrillDownDisplayType } from '../enum/ClusterDrillDownDisplayType';
/**
 Object class for ClusterDrillDown
 */
export class ClusterDrillDown {
  /** The id of the Attribute to create the drilldown matrix for  */
  attributeId!: string;
  /** The order in which the drilldown should be generated */
  priority!: number;
  /** Indicator how to display the current drilldown selection */
  displayType!: ClusterDrillDownDisplayType;
  constructor(data: Partial<ClusterDrillDown> = {}) {
    Object.assign(this, data);
  }
}