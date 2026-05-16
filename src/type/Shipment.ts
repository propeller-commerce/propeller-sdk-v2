import { ShipmentStatus } from '../enum/ShipmentStatus';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
/**
 Object class for Shipment
 */
export interface Shipment {
  /** Unique identifier */
  id: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Expected delivery date */
  expectedDeliveryAt?: string;
  /** Shipment status */
  status?: ShipmentStatus;
  /** The ID of the Order the shipment belongs to */
  orderId: number;
  /** Shipment items */
  items?: ShipmentItem[];
  /** Track and traces */
  trackAndTraces?: TrackAndTrace[];
}