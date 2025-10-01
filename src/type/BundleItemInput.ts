import { YesNo } from '../enum/YesNo';
/**
 Input object for BundleItemInput
 */
export interface BundleItemInput {
  /** The bundles primary product identifier */
  productId: number;
  /** Indicates whether the product is leader for this bundle. */
  isLeader?: YesNo;
}