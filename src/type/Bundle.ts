import { BundleCondition } from '../enum/BundleCondition';
import { BundlePrice } from './BundlePrice';
import { BundleItem } from './BundleItem';
/**
 Object class for Bundle
 */
export class Bundle {
  /** Bundle primary identifier */
  id!: string;
  /** Bundle name */
  name?: string;
  /** Bundle description */
  description?: string;
  /** Bundle discount amount */
  discount?: number;
  /** Discount condition for this bundle. Discount can be applied for Extra Products (EP) or All Products (ALL). */
  condition?: BundleCondition;
  /** Bundle price */
  price?: BundlePrice;
  /** Items in the bundle. */
  items?: BundleItem[];
  /** Bundle creation date [default: now] */
  createdAt?: string;
  /** Bundle creator */
  createdBy?: number;
  /** Last modified date */
  lastModifiedAt?: string;
  /** Last modified by */
  lastModifiedBy?: number;
  constructor(data: Partial<Bundle> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
  /** Returns `description`. */
  getDescription(): string | undefined {
    return this.description;
  }
  /** Returns `discount`. */
  getDiscount(): number | undefined {
    return this.discount;
  }
  /** Returns `condition`. */
  getCondition(): BundleCondition | undefined {
    return this.condition;
  }
  /** Returns `price` as a BundlePrice instance (coerced on first access). */
  getPrice(): BundlePrice | undefined {
    if (this.price == null) return undefined;
    if (!(this.price instanceof BundlePrice)) {
      this.price = new BundlePrice(this.price as any);
    }
    return this.price;
  }
  /** Returns `items` as BundleItem instances (coerced on first access). */
  getItems(): BundleItem[] | undefined {
    if (!this.items) return undefined;
    this.items = this.items.map((x: any) => x instanceof BundleItem ? x : new BundleItem(x));
    return this.items;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string | undefined {
    return this.lastModifiedAt;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
}