import { CrossupsellType } from '../enum/CrossupsellType';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for Crossupsell
 */
export interface Crossupsell {
  /** Primary identifier */
  id: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Cross/Upsell type */
  type: CrossupsellType;
  /** Cross/Up Sell subtype */
  subType?: string;
  /** productTo field */
  productTo?: IBaseProduct;
  /** productFrom field */
  productFrom?: IBaseProduct;
  /** clusterTo field */
  clusterTo?: IBaseProduct;
  /** clusterFrom field */
  clusterFrom?: IBaseProduct;

  /** Identifier of the source record (product or cluster) the relationship originates from. */
  baseProductUuidFrom: string;
  /** Identifier of the target record (product or cluster) the relationship points to. */
  baseProductUuidTo: string;
  /** Source record (product or cluster) the relationship originates from. */
  baseProductFrom?: IBaseProduct;
  /** Target record (product or cluster) the relationship points to. */
  baseProductTo?: IBaseProduct;
  /** Source product identifier retained for compatibility with legacy integrations. */
  productIdFrom?: number;
  /** Target product identifier retained for compatibility with legacy integrations. */
  productIdTo?: number;
  /** Source cluster identifier retained for compatibility with legacy integrations. */
  clusterIdFrom?: number;
  /** Target cluster identifier retained for compatibility with legacy integrations. */
  clusterIdTo?: number;
}