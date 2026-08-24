import { SourceInput } from './SourceInput';
import { ShipmentStatus } from '../enum/ShipmentStatus';
/**
 Input object for ShipmentUpdateInput
 */
export interface ShipmentUpdateInput {
  /** The ID of the Order the shipment belongs to */
  orderId?: number;
  /** Expected delivery at date */
  expectedDeliveryAt?: string;
  /** Shipment status */
  status?: ShipmentStatus;

  /** List of shipment sources.

Identifies the origin system or channel of this shipment. Useful for matching a shipment to an external record when updating. */
  sources?: SourceInput[];
}