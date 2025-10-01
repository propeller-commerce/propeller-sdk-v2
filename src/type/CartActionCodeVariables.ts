import { CartActionCodeInput } from './CartActionCodeInput';
import { MediaImageProductSearchInput } from './MediaImageProductSearchInput';
import { TransformationsInput } from './TransformationsInput';
/**
 * Cart action code variables interface
 Variables for adding/removing action codes to/from cart
 */
export interface CartActionCodeVariables {
  /** Cart ID to add/remove action code to/from */
  id: string;
  /** Cart action code input data */
  input: CartActionCodeInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}