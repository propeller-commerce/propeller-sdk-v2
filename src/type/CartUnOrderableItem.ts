import { PriceMode } from '../enum/PriceMode';
/**
 Object class for CartUnOrderableItem
 */
export class CartUnOrderableItem {
  /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
  itemId!: string;
  /** Id of the parent cart item. */
  parentItemUUID?: string;
  /** Price mode for this cart item, if not set the platform default will be used. */
  priceMode?: PriceMode;
  /** Quantity for the cart item */
  quantity?: number;
  /** Price for the cart item, used when priceMode === EXTERNAL */
  price?: number;
  /** Customer notes for the cart item */
  notes?: string;
  /** Product identifier */
  productId!: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  clusterId?: number;
  /** Cluster ID the item belongs to. Any child items provided must be part of the cluster's configuration as well. */
  bundleId?: string;
  constructor(data: Partial<CartUnOrderableItem> = {}) {
    Object.assign(this, data);
  }

  /** Returns `itemId`. */
  getItemId(): string {
    return this.itemId;
  }
  /** Returns `parentItemUUID`. */
  getParentItemUUID(): string | undefined {
    return this.parentItemUUID;
  }
  /** Returns `priceMode`. */
  getPriceMode(): PriceMode | undefined {
    return this.priceMode;
  }
  /** Returns `quantity`. */
  getQuantity(): number | undefined {
    return this.quantity;
  }
  /** Returns `price`. */
  getPrice(): number | undefined {
    return this.price;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
  /** Returns `bundleId`. */
  getBundleId(): string | undefined {
    return this.bundleId;
  }
}