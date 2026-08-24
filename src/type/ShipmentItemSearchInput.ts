import { DateSearchInput } from './DateSearchInput';
import { ShipmentItemSortInput } from './ShipmentItemSortInput';
import { NumberSearchInput } from './NumberSearchInput';
/**
 Input object for ShipmentItemSearchInput
 */
export interface ShipmentItemSearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: ShipmentItemSortInput[];
  /** Search by ids */
  ids?: string[];
  /** Search by shipment ids */
  shipmentIds?: string[];
  /** Search by order item ids */
  orderItemIds?: number[];
  /** Search by names */
  names?: string[];
  /** Search by SKUs */
  skus?: string[];
  /** Search by quantity */
  quantity?: NumberSearchInput;
}