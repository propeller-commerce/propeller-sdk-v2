import { CartAcceptPurchaseAuthorizationRequestInput } from './CartAcceptPurchaseAuthorizationRequestInput';
import { MediaImageProductSearchInput } from './MediaImageProductSearchInput';
import { TransformationsInput } from './TransformationsInput';
/**
 * Cart accept purchase authorization variables interface
 Variables for accepting a purchase authorization request for a cart
 */
export interface CartAcceptPurchaseAuthorizationVariables {
  /** Cart ID to accept purchase authorization for */
  id: string;
  /** Cart accept purchase authorization input data */
  input: CartAcceptPurchaseAuthorizationRequestInput;
  /** Language for localized content */
  language?: string;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}