import { CrossupsellType } from '../enum/CrossupsellType';
/**
 Input object for CrossupsellCreateInput
 */
export interface CrossupsellCreateInput {
  /** Crossupsell type! One of: [accessories, alternatives, options, parts, related] */
  type: CrossupsellType;
  /** Crossupsell subtype */
  subType?: string;
  /** productId from */
  productIdFrom?: number;
  /** productId to */
  productIdTo?: number;
  /** clusterId from */
  clusterIdFrom?: number;
  /** clusterId to */
  clusterIdTo?: number;

  /** Identifier of the source record (product or cluster) the relationship originates from. */
  baseProductUuidFrom?: string;
  /** Identifier of the target record (product or cluster) the relationship points to. */
  baseProductUuidTo?: string;
}