/**
 Input object for UpdateInventoryInput
 */
export interface UpdateInventoryInput {
  /** Inventory quantity */
  quantity?: number;
  /** Inventory notes */
  notes?: string;
  /** Inventory estimated next delivery date in ISO8601 format */
  nextDeliveryDate?: string;
  /** Inventory cost price */
  costPrice?: number;
}