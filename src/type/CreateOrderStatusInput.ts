import { OrderStatusSetSearchByInput } from './OrderStatusSetSearchByInput';
/**
 Input object for CreateOrderStatusInput
 */
export interface CreateOrderStatusInput {
  /** The order status name */
  name: string;
  /** The order status code value */
  code: string;
  /** The order status type. SYSTEM types are only created by the system */
  type: string;
  /** The order status for order type.  */
  orderType: string;
  /** The order status description */
  description?: string;
  /** The order status priority */
  priority?: number;
  /** Marks if the order status is default */
  isDefault?: boolean;
  /** Marks if the order is public */
  isPublic?: boolean;
  /** Marks if the order is editable */
  isEditable?: boolean;
  /** Marks if the order is deletable */
  isDeletable?: boolean;
  /** Marks if the order is exportable */
  isExportable?: boolean;
  /** Marks if the order is confirmable */
  isConfirmable?: boolean;
  /** Marks if the order status can be archived */
  isArchivable?: boolean;
  /** The IDs of the next possible order statuses */
  nextStatusesIds?: number[];
  /** The order status set to add this order status to */
  addOrderStatusToSet?: OrderStatusSetSearchByInput;
}