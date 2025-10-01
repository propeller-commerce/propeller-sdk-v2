import { PriceMode } from '../enum/PriceMode';
import { Taxcode } from '../enum/Taxcode';
import { Bundle } from './Bundle';
import { CartItemSurcharge } from './CartItemSurcharge';
import { CartItemIncentive } from './CartItemIncentive';
import { CartBaseItem } from './CartBaseItem';
import { Product } from './Product';
import { OrderItemClass } from '../enum/OrderItemClass';
import { ICartBaseItem } from './ICartBaseItem';
import { CartIncentive } from './CartIncentive';
/**
 Object class for CartMainItem
 */
export class CartMainItem implements ICartBaseItem {
  /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
  private _itemId: string;
  /** Cart item's productId if applicable */
  private _productId?: number;
  /** Cart item's bundleId if applicable */
  private _bundleId?: string;
  /** Bundle */
  private _bundle?: Bundle;
  /** Id of the parent cart item. */
  private _parentItemUUID?: string;
  /** User notes on cart item level */
  private _notes?: string;
  /** Gross price per UOM of this cart item, no item specific discounts are applied to this price. */
  private _price: number;
  /** Net price per UOM of this cart item, no item specific discounts are applied to this price. */
  private _priceNet: number;
  /** Price mode for this cart item, if not set the platform default will be used. */
  private _priceMode?: PriceMode;
  /** Total gross price for this cart item, including item specific discounts. */
  private _totalPrice: number;
  /** Total net price for this cart item, including item specific discounts. */
  private _totalPriceNet: number;
  /** Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  private _sum: number;
  /** Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  private _sumNet: number;
  /** Total gross sum of the main cart price and the prices of its child items. Including item specific discounts. */
  private _totalSum: number;
  /** Total net sum of the main cart price and the prices of its child items. Including item specific discounts. */
  private _totalSumNet: number;
  /** Quantity for this cart item  */
  private _quantity: number;
  /** Cart item's clusterId if applicable */
  private _clusterId?: number;
  /** Tax code for this cart item. */
  private _taxCode: Taxcode;
  /** Expected delivery date for this cart item. */
  private _deliveryDate?: string;
  /** Deadline for delivery of this cart item. */
  private _deliveryDeadline?: string;
  /** Discount applied to this cart item */
  private _discount: number;
  /** Discount percentage applied to this cart item */
  private _discountPercentage: number;
  /** List of surcharges for this cart item */
  private _surcharges?: CartItemSurcharge[];
  /** Incentive that applied to this cart item */
  private _incentive?: CartItemIncentive;
  /** Cart item's child items, used when ordering products that are part of a configuration or bundle */
  private _childItems?: CartBaseItem[];
  /** product field */
  private _product?: Product;
  /**
   Creates a new instance of CartMainItem
   */
  constructor(data: Partial<CartMainItem> = {}) {
    this._itemId = data.itemId!;
    this._productId = data.productId;
    this._bundleId = data.bundleId;
    this._bundle = data.bundle;
    this._parentItemUUID = data.parentItemUUID;
    this._notes = data.notes;
    this._price = data.price!;
    this._priceNet = data.priceNet!;
    this._priceMode = data.priceMode;
    this._totalPrice = data.totalPrice!;
    this._totalPriceNet = data.totalPriceNet!;
    this._sum = data.sum!;
    this._sumNet = data.sumNet!;
    this._totalSum = data.totalSum!;
    this._totalSumNet = data.totalSumNet!;
    this._quantity = data.quantity!;
    this._clusterId = data.clusterId;
    this._taxCode = data.taxCode!;
    this._deliveryDate = data.deliveryDate;
    this._deliveryDeadline = data.deliveryDeadline;
    this._discount = data.discount!;
    this._discountPercentage = data.discountPercentage!;
    this._surcharges = data.surcharges;
    this._incentive = data.incentive;
    this._childItems = data.childItems;
    this._product = data.product;
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
   Cart item's productId if applicable
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   Cart item's productId if applicable
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   Cart item's bundleId if applicable
   */
  get bundleId(): string | undefined {
    return this._bundleId;
  }
  /**
   Cart item's bundleId if applicable
   */
  set bundleId(value: string | undefined) {
    this._bundleId = value;
  }
  /**
   Bundle
   */
  get bundle(): Bundle | undefined {
    return this._bundle;
  }
  /**
   Bundle
   */
  set bundle(value: Bundle | undefined) {
    this._bundle = value;
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
   User notes on cart item level
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   User notes on cart item level
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Gross price per UOM of this cart item, no item specific discounts are applied to this price.
   */
  get price(): number {
    return this._price;
  }
  /**
   Gross price per UOM of this cart item, no item specific discounts are applied to this price.
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   Net price per UOM of this cart item, no item specific discounts are applied to this price.
   */
  get priceNet(): number {
    return this._priceNet;
  }
  /**
   Net price per UOM of this cart item, no item specific discounts are applied to this price.
   */
  set priceNet(value: number) {
    this._priceNet = value;
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
   Total gross price for this cart item, including item specific discounts.
   */
  get totalPrice(): number {
    return this._totalPrice;
  }
  /**
   Total gross price for this cart item, including item specific discounts.
   */
  set totalPrice(value: number) {
    this._totalPrice = value;
  }
  /**
   Total net price for this cart item, including item specific discounts.
   */
  get totalPriceNet(): number {
    return this._totalPriceNet;
  }
  /**
   Total net price for this cart item, including item specific discounts.
   */
  set totalPriceNet(value: number) {
    this._totalPriceNet = value;
  }
  /**
   Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
   */
  get sum(): number {
    return this._sum;
  }
  /**
   Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
   */
  set sum(value: number) {
    this._sum = value;
  }
  /**
   Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
   */
  get sumNet(): number {
    return this._sumNet;
  }
  /**
   Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
   */
  set sumNet(value: number) {
    this._sumNet = value;
  }
  /**
   Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
   */
  get totalSum(): number {
    return this._totalSum;
  }
  /**
   Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
   */
  set totalSum(value: number) {
    this._totalSum = value;
  }
  /**
   Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
   */
  get totalSumNet(): number {
    return this._totalSumNet;
  }
  /**
   Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
   */
  set totalSumNet(value: number) {
    this._totalSumNet = value;
  }
  /**
   Quantity for this cart item
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   Quantity for this cart item
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   Cart item's clusterId if applicable
   */
  get clusterId(): number | undefined {
    return this._clusterId;
  }
  /**
   Cart item's clusterId if applicable
   */
  set clusterId(value: number | undefined) {
    this._clusterId = value;
  }
  /**
   Tax code for this cart item.
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   Tax code for this cart item.
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   Expected delivery date for this cart item.
   */
  get deliveryDate(): string | undefined {
    return this._deliveryDate;
  }
  /**
   Expected delivery date for this cart item.
   */
  set deliveryDate(value: string | undefined) {
    this._deliveryDate = value;
  }
  /**
   Deadline for delivery of this cart item.
   */
  get deliveryDeadline(): string | undefined {
    return this._deliveryDeadline;
  }
  /**
   Deadline for delivery of this cart item.
   */
  set deliveryDeadline(value: string | undefined) {
    this._deliveryDeadline = value;
  }
  /**
   Discount applied to this cart item
   */
  get discount(): number {
    return this._discount;
  }
  /**
   Discount applied to this cart item
   */
  set discount(value: number) {
    this._discount = value;
  }
  /**
   Discount percentage applied to this cart item
   */
  get discountPercentage(): number {
    return this._discountPercentage;
  }
  /**
   Discount percentage applied to this cart item
   */
  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }
  /**
   List of surcharges for this cart item
   */
  get surcharges(): CartItemSurcharge[] | undefined {
    return this._surcharges;
  }
  /**
   List of surcharges for this cart item
   */
  set surcharges(value: CartItemSurcharge[] | undefined) {
    this._surcharges = value;
  }
  /**
   Incentive that applied to this cart item
   */
  get incentive(): CartItemIncentive | undefined {
    return this._incentive;
  }
  /**
   Incentive that applied to this cart item
   */
  set incentive(value: CartItemIncentive | undefined) {
    this._incentive = value;
  }
  /**
   Cart item's child items, used when ordering products that are part of a configuration or bundle
   */
  get childItems(): CartBaseItem[] | undefined {
    return this._childItems;
  }
  /**
   Cart item's child items, used when ordering products that are part of a configuration or bundle
   */
  set childItems(value: CartBaseItem[] | undefined) {
    this._childItems = value;
  }
  /**
   product field
   */
  get product(): Product | undefined {
    return this._product;
  }
  /**
   product field
   */
  set product(value: Product | undefined) {
    this._product = value;
  }
}