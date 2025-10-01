import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { Product } from './Product';
import { ClusterOption } from './ClusterOption';
import { ClusterDrillDown } from './ClusterDrillDown';
import { ClusterConfig } from './ClusterConfig';
/**
 Base interface for cluster entities
 */
export interface ICluster {
  /** Cluster identifier */
  id: number;
  /** Cluster name */
  name: string;
  /** Cluster description */
  description?: string;
  /** Whether the cluster is enabled */
  enabled: boolean;
  /** Cluster priority */
  priority?: number;
}