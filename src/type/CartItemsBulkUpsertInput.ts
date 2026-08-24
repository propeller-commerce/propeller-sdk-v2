import { CartItemBulkInput } from './CartItemBulkInput';
/**
 Input object for CartItemsBulkUpsertInput
 */
export interface CartItemsBulkUpsertInput {
  /** Cart unique identifier */
  cartId: string;
  /** Cart items */
  items: CartItemBulkInput[];
}