import { OrderStatusType } from '../enum/OrderStatusType';
import { OrderStatusOrderType } from '../enum/OrderStatusOrderType';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderStatusesResponse } from './OrderStatusesResponse';
/**
 Object class for OrderStatus
 */
export interface OrderStatus {
  /** The primary order status identifier */
  id: number;
  /** The order status name */
  name: string;
  /** The order status code value */
  code: string;
  /** The order status type */
  type: OrderStatusType;
  /** The order status for order type */
  orderType: OrderStatusOrderType;
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
  /** Marks if the order can be archived */
  isArchivable?: boolean;
  /** The order status creation date */
  createdAt: string;
  /** The order status last modification date */
  lastModifiedAt: string;
  /** The order status set the current status belongs to */
  statusSet?: OrderStatusSet;
  /** nextStatuses field */
  nextStatuses: OrderStatusesResponse;
  /** previousStatuses field */
  previousStatuses: OrderStatusesResponse;
}