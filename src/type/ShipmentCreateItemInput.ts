/**
 Input object for ShipmentCreateItemInput
 */
export interface ShipmentCreateItemInput {
  /** Order item id */
  orderItemId: number;
  /** Quantity */
  quantity?: number;
  /** Name */
  name?: string;
  /** SKU */
  sku?: string;
}