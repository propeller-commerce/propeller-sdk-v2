import { CartUpdateAddressInput } from './CartUpdateAddressInput';
import { MediaImageProductSearchInput } from './MediaImageProductSearchInput';
import { TransformationsInput } from './TransformationsInput';
/**
 * Cart update address variables interface
 Variables for updating a cart address
 */
export interface CartUpdateAddressVariables {
  /** Cart ID to update address for */
  id: string;
  /** Cart update address input data */
  input: CartUpdateAddressInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}