import { TicketStatus } from '../enum/TicketStatus';
import { DateSearchInput } from './DateSearchInput';
import { TicketSortInput } from './TicketSortInput';
/**
 Input object for TicketSearchInput
 Search and pagination parameters for retrieving tickets.
 */
export interface TicketSearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: TicketSortInput[];
  /** Filter by ticket IDs */
  ids?: string[];
  /** Filter by ticket types */
  types?: string[];
  /** Filter by ticket statuses */
  statuses?: TicketStatus[];
  /** Filter by assigned admin user IDs */
  assignedToAdminUserIds?: number[];
  /** Filter by contact IDs */
  contactIds?: number[];
  /** Filter by customer IDs */
  customerIds?: number[];
  /** Filter by product IDs */
  productIds?: number[];
  /** Filter by cluster IDs */
  clusterIds?: number[];
  /** Filter by order IDs */
  orderIds?: number[];
  /** Filter by company IDs */
  companyIds?: number[];
  /** Filter by email addresses */
  emails?: string[];
  /** Filter by phone numbers */
  phones?: string[];
  /** Filter by external URLs */
  externalUrls?: string[];
  /** Filter by pickedUpAt date range */
  pickedUpAt?: DateSearchInput;
  /** Filter by completedAt date range */
  completedAt?: DateSearchInput;
  /** Filter by last modified by admin user IDs */
  lastModifiedByAdminUserIds?: number[];
  /** Filter by created by admin user IDs */
  createdByAdminUserIds?: number[];
}
