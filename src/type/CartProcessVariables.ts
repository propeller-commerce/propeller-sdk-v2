import { CartProcessInput } from './CartProcessInput';
/**
 * Cart process variables interface
 Variables for processing a cart (checkout)
 */
export interface CartProcessVariables {
  /** Cart ID to process */
  id: string;
  /** Cart process input data */
  input: CartProcessInput;
}