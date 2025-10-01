import { WarehouseAddress } from './WarehouseAddress';
import { BusinessHours } from './BusinessHours';
/**
 Object class for Warehouse
 */
export class Warehouse {
  /** Warehouse primary identifier */
  private _id: string | number;
  /** Address identifier associated with the warehouse */
  private _addressId?: number;
  /** Warehouse Address */
  private _address?: WarehouseAddress;
  /** Warehouse name */
  private _name: string;
  /** Warehouse description */
  private _description: string;
  /** Warehouse notes */
  private _notes: string;
  /** Warehouse isActive status */
  private _isActive: boolean;
  /** Warehouse isStore status */
  private _isStore: boolean;
  /** Warehouse isPickupLocation status */
  private _isPickupLocation: boolean;
  /** Optional warehouse shopId */
  private _shopId?: number;
  /** Warehouse business hours per week day */
  private _businessHours: BusinessHours[];
  /** Warehouse initial creation timestamp */
  private _createdAt: string;
  /** Warehouse last update timestamp */
  private _lastModifiedAt: string;
  /**
   Creates a new instance of Warehouse
   */
  constructor(data: Partial<Warehouse> = {}) {
    this._id = data.id!;
    this._addressId = data.addressId;
    this._address = data.address;
    this._name = data.name!;
    this._description = data.description!;
    this._notes = data.notes!;
    this._isActive = data.isActive!;
    this._isStore = data.isStore!;
    this._isPickupLocation = data.isPickupLocation!;
    this._shopId = data.shopId;
    this._businessHours = data.businessHours!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
  }
  /**
   Warehouse primary identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Warehouse primary identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Address identifier associated with the warehouse
   */
  get addressId(): number | undefined {
    return this._addressId;
  }
  /**
   Address identifier associated with the warehouse
   */
  set addressId(value: number | undefined) {
    this._addressId = value;
  }
  /**
   Warehouse Address
   */
  get address(): WarehouseAddress | undefined {
    return this._address;
  }
  /**
   Warehouse Address
   */
  set address(value: WarehouseAddress | undefined) {
    this._address = value;
  }
  /**
   Warehouse name
   */
  get name(): string {
    return this._name;
  }
  /**
   Warehouse name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Warehouse description
   */
  get description(): string {
    return this._description;
  }
  /**
   Warehouse description
   */
  set description(value: string) {
    this._description = value;
  }
  /**
   Warehouse notes
   */
  get notes(): string {
    return this._notes;
  }
  /**
   Warehouse notes
   */
  set notes(value: string) {
    this._notes = value;
  }
  /**
   Warehouse isActive status
   */
  get isActive(): boolean {
    return this._isActive;
  }
  /**
   Warehouse isActive status
   */
  set isActive(value: boolean) {
    this._isActive = value;
  }
  /**
   Warehouse isStore status
   */
  get isStore(): boolean {
    return this._isStore;
  }
  /**
   Warehouse isStore status
   */
  set isStore(value: boolean) {
    this._isStore = value;
  }
  /**
   Warehouse isPickupLocation status
   */
  get isPickupLocation(): boolean {
    return this._isPickupLocation;
  }
  /**
   Warehouse isPickupLocation status
   */
  set isPickupLocation(value: boolean) {
    this._isPickupLocation = value;
  }
  /**
   Optional warehouse shopId
   */
  get shopId(): number | undefined {
    return this._shopId;
  }
  /**
   Optional warehouse shopId
   */
  set shopId(value: number | undefined) {
    this._shopId = value;
  }
  /**
   Warehouse business hours per week day
   */
  get businessHours(): BusinessHours[] {
    return this._businessHours;
  }
  /**
   Warehouse business hours per week day
   */
  set businessHours(value: BusinessHours[]) {
    this._businessHours = value;
  }
  /**
   Warehouse initial creation timestamp
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Warehouse initial creation timestamp
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Warehouse last update timestamp
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Warehouse last update timestamp
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
}