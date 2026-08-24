/**
 Input object for CreateOrderStatusSetInput
 */
export interface CreateOrderStatusSetInput {
  /** The order status set name */
  name: string;
  /** The order status set description */
  description?: string;
  /** The ids of the order statuses that will be added to the set */
  orderStatusIds?: number[];
}