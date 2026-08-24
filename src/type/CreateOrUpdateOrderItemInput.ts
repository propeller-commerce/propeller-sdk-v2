import { OrderItemUpdateInput } from './OrderItemUpdateInput';
import { OrderItemCreateInput } from './OrderItemCreateInput';
/**
 Input object for CreateOrUpdateOrderItemInput
 */
export interface CreateOrUpdateOrderItemInput {
  /** OrderItem update payload */
  update?: OrderItemUpdateInput;
  /** OrderItem create payload */
  create?: OrderItemCreateInput;
}