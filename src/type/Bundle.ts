import { BundleCondition } from '../enum/BundleCondition';
import { BundlePrice } from './BundlePrice';
import { BundleItem } from './BundleItem';
/**
 Object class for Bundle
 */
export interface Bundle {
  /** Bundle primary identifier */
  id: string;
  /** Bundle name */
  name?: string;
  /** Bundle description */
  description?: string;
  /** Bundle discount amount */
  discount?: number;
  /** Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL). */
  condition?: BundleCondition;
  /** Bundle price */
  price?: BundlePrice;
  /** Items in the bundle. */
  items?: BundleItem[];
  /** Bundle creation date [default: now] */
  createdAt?: string;
  /** Bundle creator */
  createdBy?: number;
  /** Last modified date */
  lastModifiedAt?: string;
  /** Last modified by */
  lastModifiedBy?: number;
}