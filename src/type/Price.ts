import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { PriceDisplay } from '../enum/PriceDisplay';
import { CostPrice } from './CostPrice';
/**
 Object class for Price
 */
export class Price {
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Product Id */
  productId!: number;
  /** The quantity of items that the listed price will purchase. */
  per!: number;
  /** The default sales price. */
  list!: number;
  /** costPrices field */
  costPrices?: CostPrice[];
  /** The manufacturer's or supplier's recommended retail price (RRP) for the product. */
  suggested?: number;
  /** The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies. */
  store?: number;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  bulkPriceDiscountType!: PriceDiscountType;
  /** Default tax code */
  defaultTaxCode!: Taxcode;
  /** Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'. */
  display?: PriceDisplay;
  /** cost field */
  /** @deprecated Deprecated in favor of using costPrices (quantity 1) */
  cost?: number;
  constructor(data: Partial<Price> = {}) {
    Object.assign(this, data);
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
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `per`. */
  getPer(): number {
    return this.per;
  }
  /** Returns `list`. */
  getList(): number {
    return this.list;
  }
  /** Returns `costPrices` as CostPrice instances (coerced on first access). */
  getCostPrices(): CostPrice[] | undefined {
    if (!this.costPrices) return undefined;
    this.costPrices = this.costPrices.map((x: any) => x instanceof CostPrice ? x : new CostPrice(x));
    return this.costPrices;
  }
  /** Returns `suggested`. */
  getSuggested(): number | undefined {
    return this.suggested;
  }
  /** Returns `store`. */
  getStore(): number | undefined {
    return this.store;
  }
  /** Returns `bulkPriceDiscountType`. */
  getBulkPriceDiscountType(): PriceDiscountType {
    return this.bulkPriceDiscountType;
  }
  /** Returns `defaultTaxCode`. */
  getDefaultTaxCode(): Taxcode {
    return this.defaultTaxCode;
  }
  /** Returns `display`. */
  getDisplay(): PriceDisplay | undefined {
    return this.display;
  }
  /** Returns `cost`. */
  getCost(): number | undefined {
    return this.cost;
  }
}