import { TaxCode } from '../enum/TaxCode';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
/**
 Object class for TenderBaseItem
 */
export class TenderBaseItem {
  /** Id of the tender item, this id can be used for update or delete mutation for this tender item */
  uuid!: string;
  /** Id of the order item */
  orderItemId?: number;
  /** Tender/order item name */
  name!: string;
  /** The tender/order item's productId, if applicable */
  productId!: number;
  /** Tender/order item SKU */
  sku!: string;
  /** The quantity for this tender/order item */
  quantity!: number;
  /** Tender/order item supplier */
  supplier?: string;
  /** Tender/order item supplier code */
  supplierCode?: string;
  /** The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  price!: number;
  /** The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  priceNet!: number;
  /** The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  totalPrice!: number;
  /** The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  totalPriceNet!: number;
  /** The tax code for this tender/order item */
  taxCode!: TaxCode;
  /** The tax percentage for this tender/order item */
  taxPercentage!: number;
  /** Customer discount (%) */
  customerDiscountPercentage!: number;
  /** Sales discount (%) */
  discountPercentage!: number;
  /** Total discount (%) */
  totalDiscountPercentage!: number;
  /** Default margin amount (list price). VAT excluding */
  marginAmount!: number;
  /** Default margin percentage (list price) */
  marginPercentage!: number;
  /** Margin amount. VAT excluding */
  saleMarginAmount!: number;
  /** Margin percentage */
  saleMarginPercentage!: number;
  /** Extra item discount (%) calculated based on tender/order total discount */
  attributedSaleDiscount!: number;
  /** Margin percentage calculated based on tender/order total discount */
  attributedSaleMargin!: number;
  /** Product list price per UOM of this tender/order item. VAT excluding */
  originalPrice!: number;
  /** Product cost price per UOM of this tender/order item. VAT excluding */
  costPrice!: number;
  /** Customer special price per UOM of this tender/order item. VAT excluding */
  customerPrice!: number;
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
  constructor(data: Partial<TenderBaseItem> = {}) {
    Object.assign(this, data);
  }

  /** Returns `uuid`. */
  getUuid(): string {
    return this.uuid;
  }
  /** Returns `orderItemId`. */
  getOrderItemId(): number | undefined {
    return this.orderItemId;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `sku`. */
  getSku(): string {
    return this.sku;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `supplier`. */
  getSupplier(): string | undefined {
    return this.supplier;
  }
  /** Returns `supplierCode`. */
  getSupplierCode(): string | undefined {
    return this.supplierCode;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number {
    return this.priceNet;
  }
  /** Returns `totalPrice`. */
  getTotalPrice(): number {
    return this.totalPrice;
  }
  /** Returns `totalPriceNet`. */
  getTotalPriceNet(): number {
    return this.totalPriceNet;
  }
  /** Returns `taxCode`. */
  getTaxCode(): TaxCode {
    return this.taxCode;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `customerDiscountPercentage`. */
  getCustomerDiscountPercentage(): number {
    return this.customerDiscountPercentage;
  }
  /** Returns `discountPercentage`. */
  getDiscountPercentage(): number {
    return this.discountPercentage;
  }
  /** Returns `totalDiscountPercentage`. */
  getTotalDiscountPercentage(): number {
    return this.totalDiscountPercentage;
  }
  /** Returns `marginAmount`. */
  getMarginAmount(): number {
    return this.marginAmount;
  }
  /** Returns `marginPercentage`. */
  getMarginPercentage(): number {
    return this.marginPercentage;
  }
  /** Returns `saleMarginAmount`. */
  getSaleMarginAmount(): number {
    return this.saleMarginAmount;
  }
  /** Returns `saleMarginPercentage`. */
  getSaleMarginPercentage(): number {
    return this.saleMarginPercentage;
  }
  /** Returns `attributedSaleDiscount`. */
  getAttributedSaleDiscount(): number {
    return this.attributedSaleDiscount;
  }
  /** Returns `attributedSaleMargin`. */
  getAttributedSaleMargin(): number {
    return this.attributedSaleMargin;
  }
  /** Returns `originalPrice`. */
  getOriginalPrice(): number {
    return this.originalPrice;
  }
  /** Returns `costPrice`. */
  getCostPrice(): number {
    return this.costPrice;
  }
  /** Returns `customerPrice`. */
  getCustomerPrice(): number {
    return this.customerPrice;
  }
  /** Returns `valuePoints`. */
  getValuePoints(): number | undefined {
    return this.valuePoints;
  }
  /** Returns `expectedDeliveryDate`. */
  getExpectedDeliveryDate(): string | undefined {
    return this.expectedDeliveryDate;
  }
  /** Returns `externalOrderitemId`. */
  getExternalOrderitemId(): string | undefined {
    return this.externalOrderitemId;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `incentive` as a TenderItemIncentive instance (coerced on first access). */
  getIncentive(): TenderItemIncentive | undefined {
    if (this.incentive == null) return undefined;
    if (!(this.incentive instanceof TenderItemIncentive)) {
      this.incentive = new TenderItemIncentive(this.incentive as any);
    }
    return this.incentive;
  }
  /** Returns `surcharges` as TenderItemSurcharge instances (coerced on first access). */
  getSurcharges(): TenderItemSurcharge[] | undefined {
    if (!this.surcharges) return undefined;
    this.surcharges = this.surcharges.map((x: any) => x instanceof TenderItemSurcharge ? x : new TenderItemSurcharge(x));
    return this.surcharges;
  }
}