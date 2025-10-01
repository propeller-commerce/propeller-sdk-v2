/**
 Input object for TrackAndTraceCreateInput
 */
export interface TrackAndTraceCreateInput {
  /** Carrier id */
  carrierId?: number;
  /** Code */
  code: string;
  /** The ID of the shipment the item belongs to */
  shipmentId: string;
}