/**
 * @enum ShipmentStatus
 Shipment status enumeration
 */
export enum ShipmentStatus {
  /** Shipment has been created */
  CREATED = "CREATED",
  /** Shipment is being processed */
  PROCESSING = "PROCESSING",
  /** Shipment is in transit */
  IN_TRANSIT = "IN_TRANSIT",
  /** Shipment is out for delivery */
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  /** Shipment has been delivered */
  DELIVERED = "DELIVERED",
  /** Shipment has been canceled */
  CANCELED = "CANCELED",
  /** Shipment has been partially delivered */
  PARTIALLY_DELIVERED = "PARTIALLY_DELIVERED",
  /** Delivery attempt failed */
  FAILED_DELIVERY = "FAILED_DELIVERY",
  /** Shipment has an exception */
  EXCEPTION = "EXCEPTION"
}