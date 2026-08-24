/**
 Input object for WarehousesSearchInput
 */
export interface WarehousesSearchInput {
  /** Search warehouses by ids */
  ids?: number[];
  /** Warehouse isActive status */
  isActive?: boolean;
  /** Warehouse isStore status */
  isStore?: boolean;
  /** Warehouse isPickupLocation status */
  isPickupLocation?: boolean;
  /** page input field */
  page?: number;
  /** offset input field */
  offset?: number;
}