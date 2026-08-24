import { SourceInput } from './SourceInput';
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

  /** List of shipment sources.

Identifies the origin system or channel of this shipment. Useful for matching a shipment to an external record when updating. */
  sources?: SourceInput[];
}