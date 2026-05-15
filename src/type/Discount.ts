import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Category } from './Category';
import { Pricesheet } from './Pricesheet';
import { Product } from './Product';
/**
 Object class for Discount
 */
export class Discount {
  /** Category Id */
  categoryId?: number;
  /** category field */
  category?: Category;
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Discount value, either percentage or fixed amount */
  value!: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  quantityFrom!: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  validFrom?: string;
  /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
  validTo?: string;
  /** pricesheet foreign identifier */
  pricesheetId!: string;
  /** Product Id */
  productId?: number;
  /** Price group */
  priceGroup?: string;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  discountType!: PriceDiscountType;
  /** AUTH: Role=[pricing.OWNER] */
  pricesheet?: Pricesheet;
  /** product field */
  product?: Product;
  constructor(data: Partial<Discount> = {}) {
    Object.assign(this, data);
  }

  /** Returns `categoryId`. */
  getCategoryId(): number | undefined {
    return this.categoryId;
  }
  /** Returns `category` as a Category instance (coerced on first access). */
  getCategory(): Category | undefined {
    if (this.category == null) return undefined;
    if (!(this.category instanceof Category)) {
      this.category = new Category(this.category as any);
    }
    return this.category;
  }
  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `value`. */
  getValue(): number {
    return this.value;
  }
  /** Returns `quantityFrom`. */
  getQuantityFrom(): number {
    return this.quantityFrom;
  }
  /** Returns `validFrom`. */
  getValidFrom(): string | undefined {
    return this.validFrom;
  }
  /** Returns `validTo`. */
  getValidTo(): string | undefined {
    return this.validTo;
  }
  /** Returns `pricesheetId`. */
  getPricesheetId(): string {
    return this.pricesheetId;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `priceGroup`. */
  getPriceGroup(): string | undefined {
    return this.priceGroup;
  }
  /** Returns `discountType`. */
  getDiscountType(): PriceDiscountType {
    return this.discountType;
  }
  /** Returns `pricesheet` as a Pricesheet instance (coerced on first access). */
  getPricesheet(): Pricesheet | undefined {
    if (this.pricesheet == null) return undefined;
    if (!(this.pricesheet instanceof Pricesheet)) {
      this.pricesheet = new Pricesheet(this.pricesheet as any);
    }
    return this.pricesheet;
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