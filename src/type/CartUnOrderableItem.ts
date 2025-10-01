import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartUnOrderableItem
 */
export class CartUnOrderableItem {
  /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
  private _itemId: string;
  /** Id of the parent cart item. */
  private _parentItemUUID?: string;
  /** Price mode for this cart item, if not set the platform default will be used. */
  private _priceMode?: PriceMode;
  /** Quantity for the cart item */
  private _quantity?: number;
  /** Price for the cart item, used when priceMode === EXTERNAL */
  private _price?: number;
  /** Customer notes for the cart item */
  private _notes?: string;
  /** Product identifier */
  private _productId: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  private _clusterId?: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  private _bundleId?: string;
  /**
   Creates a new instance of CartUnOrderableItem
   */
  constructor(data: Partial<CartUnOrderableItem> = {}) {
    this._itemId = data.itemId!;
    this._parentItemUUID = data.parentItemUUID;
    this._priceMode = data.priceMode;
    this._quantity = data.quantity;
    this._price = data.price;
    this._notes = data.notes;
    this._productId = data.productId!;
    this._clusterId = data.clusterId;
    this._bundleId = data.bundleId;
  }
  /**
   Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
   */
  get itemId(): string {
    return this._itemId;
  }
  /**
   Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
   */
  set itemId(value: string) {
    this._itemId = value;
  }
  /**
   Id of the parent cart item.
   */
  get parentItemUUID(): string | undefined {
    return this._parentItemUUID;
  }
  /**
   Id of the parent cart item.
   */
  set parentItemUUID(value: string | undefined) {
    this._parentItemUUID = value;
  }
  /**
   Price mode for this cart item, if not set the platform default will be used.
   */
  get priceMode(): PriceMode | undefined {
    return this._priceMode;
  }
  /**
   Price mode for this cart item, if not set the platform default will be used.
   */
  set priceMode(value: PriceMode | undefined) {
    this._priceMode = value;
  }
  /**
   Quantity for the cart item
   */
  get quantity(): number | undefined {
    return this._quantity;
  }
  /**
   Quantity for the cart item
   */
  set quantity(value: number | undefined) {
    this._quantity = value;
  }
  /**
   Price for the cart item, used when priceMode === EXTERNAL
   */
  get price(): number | undefined {
    return this._price;
  }
  /**
   Price for the cart item, used when priceMode === EXTERNAL
   */
  set price(value: number | undefined) {
    this._price = value;
  }
  /**
   Customer notes for the cart item
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Customer notes for the cart item
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Product identifier
   */
  get productId(): number {
    return this._productId;
  }
  /**
   Product identifier
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
   */
  get clusterId(): number | undefined {
    return this._clusterId;
  }
  /**
   Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
   */
  set clusterId(value: number | undefined) {
    this._clusterId = value;
  }
  /**
   Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
   */
  get bundleId(): string | undefined {
    return this._bundleId;
  }
  /**
   Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well.
   */
  set bundleId(value: string | undefined) {
    this._bundleId = value;
  }
}