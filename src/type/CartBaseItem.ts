import { PriceMode } from '../enum/PriceMode';
import { Taxcode } from '../enum/Taxcode';
import { CartItemSurcharge } from './CartItemSurcharge';
import { CartItemIncentive } from './CartItemIncentive';
import { Product } from './Product';
import { OrderItemClass } from '../enum/OrderItemClass';
import { ICartBaseItem } from './ICartBaseItem';
import { CartIncentive } from './CartIncentive';
/**
 Object class for CartBaseItem
 */
export class CartBaseItem implements ICartBaseItem {
  /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
  itemId!: string;
  /** Id of the parent cart item. */
  parentItemUUID?: string;
  /** User notes on cart item level */
  notes?: string;
  /** Gross price per UOM of this cart item, no item specific discounts are applied to this price. */
  price!: number;
  /** Net price per UOM of this cart item, no item specific discounts are applied to this price. */
  priceNet!: number;
  /** Price mode for this cart item, if not set the platform default will be used. */
  priceMode?: PriceMode;
  /** Total gross price for this cart item, including item specific discounts. */
  totalPrice!: number;
  /** Total net price for this cart item, including item specific discounts. */
  totalPriceNet!: number;
  /** Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  sum!: number;
  /** Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  sumNet!: number;
  /** Total gross sum of the main cart price and the prices of its child items. Including item specific discounts. */
  totalSum!: number;
  /** Total net sum of the main cart price and the prices of its child items. Including item specific discounts. */
  totalSumNet!: number;
  /** Quantity for this cart item  */
  quantity!: number;
  /** Cart item's bundleId if applicable */
  bundleId?: string;
  /** Cart item's clusterId if applicable */
  clusterId?: number;
  /** Cart item's productId if applicable */
  productId?: number;
  /** Tax code for this cart item. */
  taxCode!: Taxcode;
  /** Expected delivery date for this cart item. */
  deliveryDate?: string;
  /** Deadline for delivery of this cart item. */
  deliveryDeadline?: string;
  /** Discount applied to this cart item */
  discount!: number;
  /** Discount percentage applied to this cart item */
  discountPercentage!: number;
  /** List of surcharges for this cart item */
  surcharges?: CartItemSurcharge[];
  /** Incentive that applied to this cart item */
  incentive?: CartItemIncentive;
  /** product field */
  product!: Product;
  constructor(data: Partial<CartBaseItem> = {}) {
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
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number {
    return this.priceNet;
  }
  /** Returns `priceMode`. */
  getPriceMode(): PriceMode | undefined {
    return this.priceMode;
  }
  /** Returns `totalPrice`. */
  getTotalPrice(): number {
    return this.totalPrice;
  }
  /** Returns `totalPriceNet`. */
  getTotalPriceNet(): number {
    return this.totalPriceNet;
  }
  /** Returns `sum`. */
  getSum(): number {
    return this.sum;
  }
  /** Returns `sumNet`. */
  getSumNet(): number {
    return this.sumNet;
  }
  /** Returns `totalSum`. */
  getTotalSum(): number {
    return this.totalSum;
  }
  /** Returns `totalSumNet`. */
  getTotalSumNet(): number {
    return this.totalSumNet;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `bundleId`. */
  getBundleId(): string | undefined {
    return this.bundleId;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `taxCode`. */
  getTaxCode(): Taxcode {
    return this.taxCode;
  }
  /** Returns `deliveryDate`. */
  getDeliveryDate(): string | undefined {
    return this.deliveryDate;
  }
  /** Returns `deliveryDeadline`. */
  getDeliveryDeadline(): string | undefined {
    return this.deliveryDeadline;
  }
  /** Returns `discount`. */
  getDiscount(): number {
    return this.discount;
  }
  /** Returns `discountPercentage`. */
  getDiscountPercentage(): number {
    return this.discountPercentage;
  }
  /** Returns `surcharges` as CartItemSurcharge instances (coerced on first access). */
  getSurcharges(): CartItemSurcharge[] | undefined {
    if (!this.surcharges) return undefined;
    this.surcharges = this.surcharges.map((x: any) => x instanceof CartItemSurcharge ? x : new CartItemSurcharge(x));
    return this.surcharges;
  }
  /** Returns `incentive` as a CartItemIncentive instance (coerced on first access). */
  getIncentive(): CartItemIncentive | undefined {
    if (this.incentive == null) return undefined;
    if (!(this.incentive instanceof CartItemIncentive)) {
      this.incentive = new CartItemIncentive(this.incentive as any);
    }
    return this.incentive;
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