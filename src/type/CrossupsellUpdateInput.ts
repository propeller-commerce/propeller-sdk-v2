import { CrossupsellType } from '../enum/CrossupsellType';
/**
 Input object for CrossupsellUpdateInput
 */
export interface CrossupsellUpdateInput {
  /** Crossupsell subtype */
  subType?: string;

  /** Type of cross-upsell relationship */
  type?: CrossupsellType;
  /** UUID of the source base product (STI reference) */
  baseProductUuidFrom?: string;
  /** UUID of the target base product (STI reference) */
  baseProductUuidTo?: string;
  /** Legacy product ID from source (will be converted to UUID) */
  productIdFrom?: number;
  /** Legacy cluster ID from source (will be converted to UUID) */
  clusterIdFrom?: number;
  /** Legacy product ID to target (will be converted to UUID) */
  productIdTo?: number;
  /** Legacy cluster ID to target (will be converted to UUID) */
  clusterIdTo?: number;
}