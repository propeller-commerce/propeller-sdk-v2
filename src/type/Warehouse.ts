import { WarehouseAddress } from './WarehouseAddress';
import { BusinessHours } from './BusinessHours';
/**
 Object class for Warehouse
 */
export class Warehouse {
  /** Warehouse primary identifier */
  id!: string | number;
  /** Address identifier associated with the warehouse */
  addressId?: number;
  /** Warehouse Address */
  address?: WarehouseAddress;
  /** Warehouse name */
  name!: string;
  /** Warehouse description */
  description!: string;
  /** Warehouse notes */
  notes!: string;
  /** Warehouse isActive status */
  isActive!: boolean;
  /** Warehouse isStore status */
  isStore!: boolean;
  /** Warehouse isPickupLocation status */
  isPickupLocation!: boolean;
  /** Optional warehouse shopId */
  /** @deprecated Shop is deprecated and will be removed in a future version */
  shopId?: number;
  /** Warehouse business hours per week day */
  businessHours!: BusinessHours[];
  /** Warehouse initial creation timestamp */
  createdAt!: string;
  /** Warehouse last update timestamp */
  lastModifiedAt!: string;
  constructor(data: Partial<Warehouse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `addressId`. */
  getAddressId(): number | undefined {
    return this.addressId;
  }
  /** Returns `address` as a WarehouseAddress instance (coerced on first access). */
  getAddress(): WarehouseAddress | undefined {
    if (this.address == null) return undefined;
    if (!(this.address instanceof WarehouseAddress)) {
      this.address = new WarehouseAddress(this.address as any);
    }
    return this.address;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `description`. */
  getDescription(): string {
    return this.description;
  }
  /** Returns `notes`. */
  getNotes(): string {
    return this.notes;
  }
  /** Returns `isActive`. */
  getIsActive(): boolean {
    return this.isActive;
  }
  /** Returns `isStore`. */
  getIsStore(): boolean {
    return this.isStore;
  }
  /** Returns `isPickupLocation`. */
  getIsPickupLocation(): boolean {
    return this.isPickupLocation;
  }
  /** Returns `shopId`. */
  getShopId(): number | undefined {
    return this.shopId;
  }
  /** Returns `businessHours` as BusinessHours instances (coerced on first access). */
  getBusinessHours(): BusinessHours[] {
    if (!this.businessHours) return [];
    this.businessHours = this.businessHours.map((x: any) => x instanceof BusinessHours ? x : new BusinessHours(x));
    return this.businessHours;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
}