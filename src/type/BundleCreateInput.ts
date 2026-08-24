import { BundleCondition } from '../enum/BundleCondition';
import { BundleItemInput } from './BundleItemInput';
/**
 Input object for BundleCreateInput
 */
export interface BundleCreateInput {
  /** The name for this bundle. */
  name: string;
  /** The description for this bundle. */
  description?: string;
  /** The discount percentage to be applied to this bundle. */
  discount?: number;
  /** The discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL). */
  condition?: BundleCondition;
  /** The bundle prices. */
  price?: number;
  /** The bundle tax zone. */
  taxZone?: string;
  /** Items for this bundle. */
  addBundleItems?: BundleItemInput[];
}