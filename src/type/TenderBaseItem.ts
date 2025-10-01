import { Taxcode } from '../enum/Taxcode';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
/**
 Object class for TenderBaseItem
 */
export class TenderBaseItem {
  /** Id of the tender item, this id can be used for update or delete mutation for this tender item */
  private _uuid: string;
  /** Id of the order item */
  private _orderItemId?: number;
  /** Tender/order item name */
  private _name: string;
  /** The tender/order item's productId, if applicable */
  private _productId: number;
  /** Tender/order item SKU */
  private _sku: string;
  /** The quantity for this tender/order item */
  private _quantity: number;
  /** Tender/order item supplier */
  private _supplier?: string;
  /** Tender/order item supplier code */
  private _supplierCode?: string;
  /** The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  private _price: number;
  /** The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  private _priceNet: number;
  /** The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding */
  private _totalPrice: number;
  /** The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including */
  private _totalPriceNet: number;
  /** The tax code for this tender/order item */
  private _taxCode: Taxcode;
  /** The tax percentage for this tender/order item */
  private _taxPercentage: number;
  /** Customer discount (%) */
  private _customerDiscountPercentage: number;
  /** Sales discount (%) */
  private _discountPercentage: number;
  /** Total discount (%) */
  private _totalDiscountPercentage: number;
  /** Default margin amount (list price). VAT excluding */
  private _marginAmount: number;
  /** Default margin percentage (list price) */
  private _marginPercentage: number;
  /** Margin amount. VAT excluding */
  private _saleMarginAmount: number;
  /** Margin percentage */
  private _saleMarginPercentage: number;
  /** Extra item discount (%) calculated based on tender/order total discount */
  private _attributedSaleDiscount: number;
  /** Margin percentage calculated based on tender/order total discount */
  private _attributedSaleMargin: number;
  /** Product list price per UOM of this tender/order item. VAT excluding */
  private _originalPrice: number;
  /** Product cost price per UOM of this tender/order item. VAT excluding */
  private _costPrice: number;
  /** Customer special price per UOM of this tender/order item. VAT excluding */
  private _customerPrice: number;
  /** Total amount of valuePoints that apply to this tender/order item */
  private _valuePoints?: number;
  /** The preferred delivery date for this order as requested by the user */
  private _expectedDeliveryDate?: string;
  /** The order item's ID in an external system */
  private _externalOrderitemId?: string;
  /** User notes on tender item level */
  private _notes?: string;
  /** The incentives applied to this tender item */
  private _incentive?: TenderItemIncentive;
  /** The surcharges applied to this tender item */
  private _surcharges?: TenderItemSurcharge[];
  /**
   Creates a new instance of TenderBaseItem
   */
  constructor(data: Partial<TenderBaseItem> = {}) {
    this._uuid = data.uuid!;
    this._orderItemId = data.orderItemId;
    this._name = data.name!;
    this._productId = data.productId!;
    this._sku = data.sku!;
    this._quantity = data.quantity!;
    this._supplier = data.supplier;
    this._supplierCode = data.supplierCode;
    this._price = data.price!;
    this._priceNet = data.priceNet!;
    this._totalPrice = data.totalPrice!;
    this._totalPriceNet = data.totalPriceNet!;
    this._taxCode = data.taxCode!;
    this._taxPercentage = data.taxPercentage!;
    this._customerDiscountPercentage = data.customerDiscountPercentage!;
    this._discountPercentage = data.discountPercentage!;
    this._totalDiscountPercentage = data.totalDiscountPercentage!;
    this._marginAmount = data.marginAmount!;
    this._marginPercentage = data.marginPercentage!;
    this._saleMarginAmount = data.saleMarginAmount!;
    this._saleMarginPercentage = data.saleMarginPercentage!;
    this._attributedSaleDiscount = data.attributedSaleDiscount!;
    this._attributedSaleMargin = data.attributedSaleMargin!;
    this._originalPrice = data.originalPrice!;
    this._costPrice = data.costPrice!;
    this._customerPrice = data.customerPrice!;
    this._valuePoints = data.valuePoints;
    this._expectedDeliveryDate = data.expectedDeliveryDate;
    this._externalOrderitemId = data.externalOrderitemId;
    this._notes = data.notes;
    this._incentive = data.incentive;
    this._surcharges = data.surcharges;
  }
  /**
   Id of the tender item, this id can be used for update or delete mutation for this tender item
   */
  get uuid(): string {
    return this._uuid;
  }
  /**
   Id of the tender item, this id can be used for update or delete mutation for this tender item
   */
  set uuid(value: string) {
    this._uuid = value;
  }
  /**
   Id of the order item
   */
  get orderItemId(): number | undefined {
    return this._orderItemId;
  }
  /**
   Id of the order item
   */
  set orderItemId(value: number | undefined) {
    this._orderItemId = value;
  }
  /**
   Tender/order item name
   */
  get name(): string {
    return this._name;
  }
  /**
   Tender/order item name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The tender/order item's productId, if applicable
   */
  get productId(): number {
    return this._productId;
  }
  /**
   The tender/order item's productId, if applicable
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   Tender/order item SKU
   */
  get sku(): string {
    return this._sku;
  }
  /**
   Tender/order item SKU
   */
  set sku(value: string) {
    this._sku = value;
  }
  /**
   The quantity for this tender/order item
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   The quantity for this tender/order item
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   Tender/order item supplier
   */
  get supplier(): string | undefined {
    return this._supplier;
  }
  /**
   Tender/order item supplier
   */
  set supplier(value: string | undefined) {
    this._supplier = value;
  }
  /**
   Tender/order item supplier code
   */
  get supplierCode(): string | undefined {
    return this._supplierCode;
  }
  /**
   Tender/order item supplier code
   */
  set supplierCode(value: string | undefined) {
    this._supplierCode = value;
  }
  /**
   The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
   */
  get price(): number {
    return this._price;
  }
  /**
   The gross sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
   */
  get priceNet(): number {
    return this._priceNet;
  }
  /**
   The sales price per UOM of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
   */
  set priceNet(value: number) {
    this._priceNet = value;
  }
  /**
   The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
   */
  get totalPrice(): number {
    return this._totalPrice;
  }
  /**
   The total gross price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT excluding
   */
  set totalPrice(value: number) {
    this._totalPrice = value;
  }
  /**
   The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
   */
  get totalPriceNet(): number {
    return this._totalPriceNet;
  }
  /**
   The total price of this tender/order item, no item specific incentives and extra costs are applied to this price. VAT including
   */
  set totalPriceNet(value: number) {
    this._totalPriceNet = value;
  }
  /**
   The tax code for this tender/order item
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   The tax code for this tender/order item
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   The tax percentage for this tender/order item
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   The tax percentage for this tender/order item
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   Customer discount (%)
   */
  get customerDiscountPercentage(): number {
    return this._customerDiscountPercentage;
  }
  /**
   Customer discount (%)
   */
  set customerDiscountPercentage(value: number) {
    this._customerDiscountPercentage = value;
  }
  /**
   Sales discount (%)
   */
  get discountPercentage(): number {
    return this._discountPercentage;
  }
  /**
   Sales discount (%)
   */
  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }
  /**
   Total discount (%)
   */
  get totalDiscountPercentage(): number {
    return this._totalDiscountPercentage;
  }
  /**
   Total discount (%)
   */
  set totalDiscountPercentage(value: number) {
    this._totalDiscountPercentage = value;
  }
  /**
   Default margin amount (list price). VAT excluding
   */
  get marginAmount(): number {
    return this._marginAmount;
  }
  /**
   Default margin amount (list price). VAT excluding
   */
  set marginAmount(value: number) {
    this._marginAmount = value;
  }
  /**
   Default margin percentage (list price)
   */
  get marginPercentage(): number {
    return this._marginPercentage;
  }
  /**
   Default margin percentage (list price)
   */
  set marginPercentage(value: number) {
    this._marginPercentage = value;
  }
  /**
   Margin amount. VAT excluding
   */
  get saleMarginAmount(): number {
    return this._saleMarginAmount;
  }
  /**
   Margin amount. VAT excluding
   */
  set saleMarginAmount(value: number) {
    this._saleMarginAmount = value;
  }
  /**
   Margin percentage
   */
  get saleMarginPercentage(): number {
    return this._saleMarginPercentage;
  }
  /**
   Margin percentage
   */
  set saleMarginPercentage(value: number) {
    this._saleMarginPercentage = value;
  }
  /**
   Extra item discount (%) calculated based on tender/order total discount
   */
  get attributedSaleDiscount(): number {
    return this._attributedSaleDiscount;
  }
  /**
   Extra item discount (%) calculated based on tender/order total discount
   */
  set attributedSaleDiscount(value: number) {
    this._attributedSaleDiscount = value;
  }
  /**
   Margin percentage calculated based on tender/order total discount
   */
  get attributedSaleMargin(): number {
    return this._attributedSaleMargin;
  }
  /**
   Margin percentage calculated based on tender/order total discount
   */
  set attributedSaleMargin(value: number) {
    this._attributedSaleMargin = value;
  }
  /**
   Product list price per UOM of this tender/order item. VAT excluding
   */
  get originalPrice(): number {
    return this._originalPrice;
  }
  /**
   Product list price per UOM of this tender/order item. VAT excluding
   */
  set originalPrice(value: number) {
    this._originalPrice = value;
  }
  /**
   Product cost price per UOM of this tender/order item. VAT excluding
   */
  get costPrice(): number {
    return this._costPrice;
  }
  /**
   Product cost price per UOM of this tender/order item. VAT excluding
   */
  set costPrice(value: number) {
    this._costPrice = value;
  }
  /**
   Customer special price per UOM of this tender/order item. VAT excluding
   */
  get customerPrice(): number {
    return this._customerPrice;
  }
  /**
   Customer special price per UOM of this tender/order item. VAT excluding
   */
  set customerPrice(value: number) {
    this._customerPrice = value;
  }
  /**
   Total amount of valuePoints that apply to this tender/order item
   */
  get valuePoints(): number | undefined {
    return this._valuePoints;
  }
  /**
   Total amount of valuePoints that apply to this tender/order item
   */
  set valuePoints(value: number | undefined) {
    this._valuePoints = value;
  }
  /**
   The preferred delivery date for this order as requested by the user
   */
  get expectedDeliveryDate(): string | undefined {
    return this._expectedDeliveryDate;
  }
  /**
   The preferred delivery date for this order as requested by the user
   */
  set expectedDeliveryDate(value: string | undefined) {
    this._expectedDeliveryDate = value;
  }
  /**
   The order item's ID in an external system
   */
  get externalOrderitemId(): string | undefined {
    return this._externalOrderitemId;
  }
  /**
   The order item's ID in an external system
   */
  set externalOrderitemId(value: string | undefined) {
    this._externalOrderitemId = value;
  }
  /**
   User notes on tender item level
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   User notes on tender item level
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   The incentives applied to this tender item
   */
  get incentive(): TenderItemIncentive | undefined {
    return this._incentive;
  }
  /**
   The incentives applied to this tender item
   */
  set incentive(value: TenderItemIncentive | undefined) {
    this._incentive = value;
  }
  /**
   The surcharges applied to this tender item
   */
  get surcharges(): TenderItemSurcharge[] | undefined {
    return this._surcharges;
  }
  /**
   The surcharges applied to this tender item
   */
  set surcharges(value: TenderItemSurcharge[] | undefined) {
    this._surcharges = value;
  }
}