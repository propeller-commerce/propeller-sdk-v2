import { ClusterDrillDownDisplayType } from '../enum/ClusterDrillDownDisplayType';
/**
 Base interface for cluster drill down entities
 */
export interface IClusterDrillDown {
  /** Drill down identifier */
  id: string;
  /** Drill down name */
  name: string;
  /** Drill down description */
  description?: string;
  /** Whether the drill down is enabled */
  enabled: boolean;
}