import { Carrier } from './Carrier';
/**
 Object class for TrackAndTrace
 */
export interface TrackAndTrace {
  /** Carrier id */
  carrierId?: number;
  /** Get carrier for track and trace */
  carrier?: Carrier;
  /** Unique identifier */
  id: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Code */
  code: string;
  /** Shipment unique identifier */
  shipmentId: string;
}