/**
 * Cart purchase authorization request input interface
 Input for requesting purchase authorization for a cart
 */
export interface CartPurchaseAuthorizationRequestInput {
  /** Cart ID to request authorization for */
  cartId: string;
  /** Authorization request message */
  message?: string;
  /** Additional authorization data */
  authorizationData?: Record<string, any>;
}