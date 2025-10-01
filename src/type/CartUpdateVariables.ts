import { CartUpdateInput } from './CartUpdateInput';
import { MediaImageProductSearchInput } from './MediaImageProductSearchInput';
import { TransformationsInput } from './TransformationsInput';
/**
 * Cart update variables interface
 Variables for updating a cart
 */
export interface CartUpdateVariables {
  /** Cart ID to update */
  id: string;
  /** Cart update input data */
  input: CartUpdateInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}