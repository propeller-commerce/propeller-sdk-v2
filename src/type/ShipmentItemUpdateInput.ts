/**
 Input object for ShipmentItemUpdateInput
 */
export interface ShipmentItemUpdateInput {
  /** Order item id */
  orderItemId?: number;
  /** Quantity */
  quantity?: number;
  /** Name */
  name?: string;
  /** SKU */
  sku?: string;
  /** The ID of the shipment the item belongs to */
  shipmentId?: string;
}