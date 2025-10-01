import { ShipmentStatus } from '../enum/ShipmentStatus';
import { ShipmentCreateItemInput } from './ShipmentCreateItemInput';
import { ShipmentCreateTrackAndTraceInput } from './ShipmentCreateTrackAndTraceInput';
/**
 Input object for ShipmentCreateInput
 */
export interface ShipmentCreateInput {
  /** The ID of the Order the shipment belongs to */
  orderId: number;
  /** Expected delivery at date */
  expectedDeliveryAt?: string;
  /** Shipment status */
  status?: ShipmentStatus;
  /** Shipment items */
  items?: ShipmentCreateItemInput[];
  /** Track and traces */
  trackAndTraces?: ShipmentCreateTrackAndTraceInput[];
}