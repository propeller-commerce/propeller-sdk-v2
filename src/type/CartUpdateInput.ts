import { CartPaymentDataInput } from './CartPaymentDataInput';
import { CartPostageDataInput } from './CartPostageDataInput';
/**
 Input object for CartUpdateInput
 */
export interface CartUpdateInput {
  /** Payment data for this cart. */
  paymentData?: CartPaymentDataInput;
  /** Postage data for this cart. */
  postageData?: CartPostageDataInput;
  /** Cart notes */
  notes?: string;
  /** Cart reference */
  reference?: string;
  /** Additional information field that can be stored with a cart and order. */
  extra3?: string;
  /** Additional information field that can be stored with a cart and order. */
  extra4?: string;
}