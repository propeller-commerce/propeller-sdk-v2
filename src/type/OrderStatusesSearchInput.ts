import { DateSearchInput } from './DateSearchInput';
import { OrderStatusSortInput } from './OrderStatusSortInput';
/**
 Input object for OrderStatusesSearchInput
 */
export interface OrderStatusesSearchInput {
  /** Pagination page number. [Default to `1`] */
  page?: number;
  /** Pagination offset number. [Default to `12`] */
  offset?: number;
  /** List of order status ids */
  ids?: number[];
  /** List of order status codes */
  codes?: string[];
  /** Order status name */
  name?: string;
  /** Order status priority */
  priority?: number;
  /** Order status type */
  type?: string;
  /** Order status for order type */
  orderType?: string;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
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
  /** Inputs to sort by */
  sortInputs?: OrderStatusSortInput[];
}