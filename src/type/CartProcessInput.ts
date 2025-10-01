/**
 Input object for CartProcessInput
 */
export interface CartProcessInput {
  /** Initial order status to set on the order that will be created from this cart */
  orderStatus: string;
  /** Language of the order that will be created from this cart. Order confirmation email will be sent in that language. */
  language?: string;
}