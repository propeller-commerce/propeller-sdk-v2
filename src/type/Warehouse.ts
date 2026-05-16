import { WarehouseAddress } from './WarehouseAddress';
import { BusinessHours } from './BusinessHours';
/**
 Object class for Warehouse
 */
export interface Warehouse {
  /** Warehouse primary identifier */
  id: string | number;
  /** Address identifier associated with the warehouse */
  addressId?: number;
  /** Warehouse Address */
  address?: WarehouseAddress;
  /** Warehouse name */
  name: string;
  /** Warehouse description */
  description: string;
  /** Warehouse notes */
  notes: string;
  /** Warehouse isActive status */
  isActive: boolean;
  /** Warehouse isStore status */
  isStore: boolean;
  /** Warehouse isPickupLocation status */
  isPickupLocation: boolean;
  /** Warehouse business hours per week day */
  businessHours: BusinessHours[];
  /** Warehouse initial creation timestamp */
  createdAt: string;
  /** Warehouse last update timestamp */
  lastModifiedAt: string;
}