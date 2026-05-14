import { Taxcode } from '../enum/Taxcode';
import { Product } from './Product';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
import { ITenderBaseItem } from './ITenderBaseItem';
/**
 Object class for TenderMainItem
 */
export interface TenderMainItem extends ITenderBaseItem {
  /** The tender/order item's productId, if applicable */
  productId?: number;
  /** product field */
  product?: Product;
  /** Id of the tender item, this id can be used for update or delete mutation for this tender item */
  uuid: string;
  /** Id of the order item */
  orderItemId?: number;
  /** Tender/order item name */
  name: string;
  /** Tender/order item SKU */
  sku: string;
  /** The quantity for this tender/order item */
  quantity: number;
  /** Tender/order item supplier */
  supplier?: string;
  /** Tender/order item supplier code */
  supplierCode?: string;
  /** The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  price: number;
  /** The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  priceNet: number;
  /** The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  totalPrice: number;
  /** The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  totalPriceNet: number;
  /** The tax code for this tender/order item */
  taxCode: Taxcode;
  /** The tax percentage for this tender/order item */
  taxPercentage: number;
  /** Customer discount (%) */
  customerDiscountPercentage: number;
  /** Sales discount (%) */
  discountPercentage: number;
  /** Total discount (%) */
  totalDiscountPercentage: number;
  /** Default margin amount (list price). VAT excluding */
  marginAmount: number;
  /** Default margin percentage (list price) */
  marginPercentage: number;
  /** Margin amount. VAT excluding */
  saleMarginAmount: number;
  /** Margin percentage */
  saleMarginPercentage: number;
  /** Extra item discount (%) calculated based on tender/order total discount */
  attributedSaleDiscount: number;
  /** Margin percentage calculated based on tender/order total discount */
  attributedSaleMargin: number;
  /** Product list price per UOM of this tender/order item. VAT excluding */
  originalPrice: number;
  /** Product cost price per UOM of this tender/order item. VAT excluding */
  costPrice: number;
  /** Customer special price per UOM of this tender/order item. VAT excluding */
  customerPrice: number;
  /** Total amount of valuePoints that apply to this tender/order item */
  valuePoints?: number;
  /** The preferred delivery date for this order as requested by the user */
  expectedDeliveryDate?: string;
  /** The order item's ID in an external system */
  externalOrderitemId?: string;
  /** User notes on tender item level */
  notes?: string;
  /** incentive field */
  incentive?: TenderItemIncentive;
  /** surcharges field */
  surcharges?: TenderItemSurcharge[];
  /** The tender/order item's child items. E.g. surcharges, incentives, etc. */
  childItems?: ITenderBaseItem[];
  /** The gross price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding */
  sum: number;
  /** The price per UOM of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including */
  sumNet: number;
  /** The total gross price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT excluding */
  totalSum: number;
  /** The total price of this tender/order item, with item specific incentives and extra costs applied to this price. VAT including */
  totalSumNet: number;
  /** Sales discount (%). Includes item specific incentives and extra costs */
  discountPercentageSum: number;
  /** Total discount (%). Includes item specific incentives and extra costs */
  totalDiscountPercentageSum: number;
  /** Margin amount. Includes item specific incentives and extra costs. VAT excluding */
  saleMarginAmountSum: number;
  /** Margin percentage. Includes item specific incentives and extra costs */
  saleMarginPercentageSum: number;
  /** Extra item discount (%) calculated based on tender/order total discount. Includes item specific incentives and extra costs */
  attributedSaleDiscountSum: number;
  /** Margin percentage calculated based on tender/order total discount. Includes item specific incentives and extra costs */
  attributedSaleMarginSum: number;
}