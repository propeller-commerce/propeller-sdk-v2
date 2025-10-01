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
}