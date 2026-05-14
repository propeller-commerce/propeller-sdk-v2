import { YesNo } from '../enum/YesNo';
import { BundlePrice } from './BundlePrice';
import { Product } from './Product';
/**
 Object class for BundleItem
 */
export interface BundleItem {
  /** The bundles primary product identifier */
  productId: number;
  /** Bundle price */
  price?: BundlePrice;
  /** Indicates whether the product is leader for this bundle. */
  isLeader?: YesNo;
  /** Bundle creation date */
  createdAt?: string;
  /** Bundle creator */
  createdBy?: number;
  /** Last modified date */
  lastModifiedAt?: string;
  /** Last modified by */
  lastModifiedBy?: number;
  /** product field */
  product: Product;
}