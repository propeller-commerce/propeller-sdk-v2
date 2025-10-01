import { CartAddBundleInput } from './CartAddBundleInput';
import { MediaImageProductSearchInput } from './MediaImageProductSearchInput';
import { TransformationsInput } from './TransformationsInput';
/**
 * Cart add bundle variables interface
 Variables for adding a bundle to cart
 */
export interface CartAddBundleVariables {
  /** Cart ID to add bundle to */
  id: string;
  /** Cart add bundle input data */
  input: CartAddBundleInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}