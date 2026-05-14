import { Taxcode } from '../enum/Taxcode';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
/**
 Object class for TenderBaseItem
 */
export interface TenderBaseItem {
  /** Id of the tender item, this id can be used for update or delete mutation for this tender item */
  uuid: string;
  /** Id of the order item */
  orderItemId?: number;
  /** Tender/order item name */
  name: string;
  /** The tender/order item's productId, if applicable */
  productId: number;
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
  /** The incentives applied to this tender item */
  incentive?: TenderItemIncentive;
  /** The surcharges applied to this tender item */
  surcharges?: TenderItemSurcharge[];
}