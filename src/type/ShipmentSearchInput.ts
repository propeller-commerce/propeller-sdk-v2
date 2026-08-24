import { ShipmentStatus } from '../enum/ShipmentStatus';
import { DateSearchInput } from './DateSearchInput';
import { ShipmentSortInput } from './ShipmentSortInput';
/**
 Input object for ShipmentSearchInput
 */
export interface ShipmentSearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: ShipmentSortInput[];
  /** Search by expected delivery at date */
  expectedDeliveryAt?: DateSearchInput;
  /** Search by ids */
  ids?: string[];
  /** Search by order ids */
  orderIds?: number[];
  /** List of statuses to search in */
  statuses?: ShipmentStatus[];
}