import { PriceMode } from '../enum/PriceMode';
import { TaxCode } from '../enum/TaxCode';
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
export interface CartMainItem extends ICartBaseItem {
  /** Item ID of the cart item, this id can be used for update or delete mutation for this cart item. */
  itemId: string;
  /** Cart item's productId if applicable */
  productId?: number;
  /** Cart item's bundleId if applicable */
  bundleId?: string;
  /** Bundle */
  bundle?: Bundle;
  /** Id of the parent cart item. */
  parentItemUUID?: string;
  /** User notes on cart item level */
  notes?: string;
  /** Gross price per UOM of this cart item, no item specific discounts are applied to this price. */
  price: number;
  /** Net price per UOM of this cart item, no item specific discounts are applied to this price. */
  priceNet: number;
  /** Price mode for this cart item, if not set the platform default will be used. */
  priceMode?: PriceMode;
  /** Total gross price for this cart item, including item specific discounts. */
  totalPrice: number;
  /** Total net price for this cart item, including item specific discounts. */
  totalPriceNet: number;
  /** Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  sum: number;
  /** Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price. */
  sumNet: number;
  /** Total gross sum of the main cart price and the prices of its child items. Including item specific discounts. */
  totalSum: number;
  /** Total net sum of the main cart price and the prices of its child items. Including item specific discounts. */
  totalSumNet: number;
  /** Quantity for this cart item  */
  quantity: number;
  /** Cart item's clusterId if applicable */
  clusterId?: number;
  /** Tax code for this cart item. */
  taxCode: TaxCode;
  /** Expected delivery date for this cart item. */
  deliveryDate?: string;
  /** Deadline for delivery of this cart item. */
  deliveryDeadline?: string;
  /** Discount applied to this cart item */
  discount: number;
  /** Discount percentage applied to this cart item */
  discountPercentage: number;
  /** List of surcharges for this cart item */
  surcharges?: CartItemSurcharge[];
  /** Incentive that applied to this cart item */
  incentive?: CartItemIncentive;
  /** Cart item's child items, used when ordering products that are part of a configuration or bundle */
  childItems?: CartBaseItem[];
  /** product field */
  product?: Product;
}