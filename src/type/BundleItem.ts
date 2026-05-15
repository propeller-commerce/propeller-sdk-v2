import { YesNo } from '../enum/YesNo';
import { BundlePrice } from './BundlePrice';
import { Product } from './Product';
/**
 Object class for BundleItem
 */
export class BundleItem {
  /** The bundles primary product identifier */
  productId!: number;
  /** Bundle price */
  price?: BundlePrice;
  /** Indicates whether the product is leader for this bundle. */
  isLeader?: YesNo;
  /** Bundle creation date */
  createdAt?: string;
  /** Bundle creator */
  createdBy?: number;
  /** Last modified date */
  lastModifiedAt?: string;
  /** Last modified by */
  lastModifiedBy?: number;
  /** product field */
  product!: Product;
  constructor(data: Partial<BundleItem> = {}) {
    Object.assign(this, data);
  }

  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `price` as a BundlePrice instance (coerced on first access). */
  getPrice(): BundlePrice | undefined {
    if (this.price == null) return undefined;
    if (!(this.price instanceof BundlePrice)) {
      this.price = new BundlePrice(this.price as any);
    }
    return this.price;
  }
  /** Returns `isLeader`. */
  getIsLeader(): YesNo | undefined {
    return this.isLeader;
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
  /** Returns `product` as a Product instance (coerced on first access). */
  getProduct(): Product | undefined {
    if (this.product == null) return undefined;
    if (!(this.product instanceof Product)) {
      this.product = new Product(this.product as any);
    }
    return this.product;
  }
}