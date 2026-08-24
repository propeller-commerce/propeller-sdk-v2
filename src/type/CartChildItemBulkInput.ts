/**
 Input object for CartChildItemBulkInput
 Input for child items in bulk cart operations.
 Represents component items that belong to a main item in configurable products or bundles.
 */
export interface CartChildItemBulkInput {
  /** Unique identifier of an existing cart item to update or remove */
  itemId?: string;
  /** Product identifier for adding new items to the cart */
  productId?: number;
  /** Override price per unit for this cart item */
  price?: number;
  /** Number of units to add, update, or maintain in the cart */
  quantity?: number;
  /** Additional notes or special instructions for this item (max 255 characters) */
  notes?: string;
  /** Preferred delivery date for this specific item (ISO 8601 date format) */
  requestDate?: string;
}
