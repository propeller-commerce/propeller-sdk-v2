import { DateSearchInput } from './DateSearchInput';
import { TrackAndTraceSortInput } from './TrackAndTraceSortInput';
/**
 Input object for TrackAndTraceSearchInput
 */
export interface TrackAndTraceSearchInput {
  /** Pagination page number */
  page: number;
  /** Pagination offset number */
  offset: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Inputs to sort by */
  sortInputs?: TrackAndTraceSortInput[];
  /** Search by ids */
  ids?: string[];
  /** Search by shipment ids */
  shipmentIds?: string[];
  /** Search by codes */
  codes?: string[];
  /** Search by carrier ids */
  carrierIds?: number[];
}