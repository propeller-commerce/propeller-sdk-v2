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
/** Cluster priority */
  priority?: number;

  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Discriminator that distinguishes between a product and a cluster within the shared catalogue. */
  type: ProductClass;
  /** All category IDs this base product belongs to */
  categoryIds: number[];
}