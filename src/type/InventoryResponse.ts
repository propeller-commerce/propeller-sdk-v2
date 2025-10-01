import { Warehouse } from './Warehouse';
/**
 Object class for InventoryResponse
 */
export class InventoryResponse {
  /** Inventory primary identifier */
  private _id: string | number;
  /** Inventory product identifier */
  private _productId: number;
  /** Inventory quantity */
  private _quantity: number;
  /** Inventory cost price */
  private _costPrice: number;
  /** Inventory supplier */
  private _supplier: string;
  /** Inventory supplier code */
  private _supplierCode: string;
  /** Inventory sku */
  private _sku: string;
  /** Inventory last modified date */
  private _dateModified?: string;
  /** Inventory warehouse identifier */
  private _warehouseId: number;
  /** Inventory location */
  private _location: string;
  /** Inventory estimated next delivery date */
  private _nextDeliveryDate: string;
  /** Inventory note */
  private _notes: string;
  /** Error messages */
  private _messages: string[];
  /** Total */
  private _total: number;
  /** warehouse field */
  private _warehouse?: Warehouse;
  /**
   Creates a new instance of InventoryResponse
   */
  constructor(data: Partial<InventoryResponse> = {}) {
    this._id = data.id!;
    this._productId = data.productId!;
    this._quantity = data.quantity!;
    this._costPrice = data.costPrice!;
    this._supplier = data.supplier!;
    this._supplierCode = data.supplierCode!;
    this._sku = data.sku!;
    this._dateModified = data.dateModified;
    this._warehouseId = data.warehouseId!;
    this._location = data.location!;
    this._nextDeliveryDate = data.nextDeliveryDate!;
    this._notes = data.notes!;
    this._messages = data.messages!;
    this._total = data.total!;
    this._warehouse = data.warehouse;
  }
  /**
   Inventory primary identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Inventory primary identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Inventory product identifier
   */
  get productId(): number {
    return this._productId;
  }
  /**
   Inventory product identifier
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   Inventory quantity
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   Inventory quantity
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   Inventory cost price
   */
  get costPrice(): number {
    return this._costPrice;
  }
  /**
   Inventory cost price
   */
  set costPrice(value: number) {
    this._costPrice = value;
  }
  /**
   Inventory supplier
   */
  get supplier(): string {
    return this._supplier;
  }
  /**
   Inventory supplier
   */
  set supplier(value: string) {
    this._supplier = value;
  }
  /**
   Inventory supplier code
   */
  get supplierCode(): string {
    return this._supplierCode;
  }
  /**
   Inventory supplier code
   */
  set supplierCode(value: string) {
    this._supplierCode = value;
  }
  /**
   Inventory sku
   */
  get sku(): string {
    return this._sku;
  }
  /**
   Inventory sku
   */
  set sku(value: string) {
    this._sku = value;
  }
  /**
   Inventory last modified date
   */
  get dateModified(): string | undefined {
    return this._dateModified;
  }
  /**
   Inventory last modified date
   */
  set dateModified(value: string | undefined) {
    this._dateModified = value;
  }
  /**
   Inventory warehouse identifier
   */
  get warehouseId(): number {
    return this._warehouseId;
  }
  /**
   Inventory warehouse identifier
   */
  set warehouseId(value: number) {
    this._warehouseId = value;
  }
  /**
   Inventory location
   */
  get location(): string {
    return this._location;
  }
  /**
   Inventory location
   */
  set location(value: string) {
    this._location = value;
  }
  /**
   Inventory estimated next delivery date
   */
  get nextDeliveryDate(): string {
    return this._nextDeliveryDate;
  }
  /**
   Inventory estimated next delivery date
   */
  set nextDeliveryDate(value: string) {
    this._nextDeliveryDate = value;
  }
  /**
   Inventory note
   */
  get notes(): string {
    return this._notes;
  }
  /**
   Inventory note
   */
  set notes(value: string) {
    this._notes = value;
  }
  /**
   Error messages
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   Error messages
   */
  set messages(value: string[]) {
    this._messages = value;
  }
  /**
   Total
   */
  get total(): number {
    return this._total;
  }
  /**
   Total
   */
  set total(value: number) {
    this._total = value;
  }
  /**
   warehouse field
   */
  get warehouse(): Warehouse | undefined {
    return this._warehouse;
  }
  /**
   warehouse field
   */
  set warehouse(value: Warehouse | undefined) {
    this._warehouse = value;
  }
}