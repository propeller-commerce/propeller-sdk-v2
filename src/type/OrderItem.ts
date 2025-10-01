import { OrderItemClass } from '../enum/OrderItemClass';
import { Taxcode } from '../enum/Taxcode';
import { YesNo } from '../enum/YesNo';
import { Source } from './Source';
import { Product } from './Product';
/**
 Object class for OrderItem
 */
export class OrderItem {
  /** The autoincerment ID for the OrderItem */
  private _id: number;
  /** The ID of the Order the OrderItem belongs to */
  private _orderId: number;
  /** The UUID for the OrderItem */
  private _uuid: string;
  /** The class of the orderItem. Either product, incentive, surcharge, postage, payment */
  private _class: OrderItemClass;
  /** The productId of the OrderItem */
  private _productId?: number;
  /** The ID of the parent OrderItem */
  private _parentOrderItemId?: number;
  /** The quantity of the OrderItem */
  private _quantity: number;
  /** The SKU of the product of the OrderItem */
  private _sku: string;
  /** Remarks by the customer for the OrderItem */
  private _notes?: string;
  /** The name of the product of the OrderItem */
  private _name: string;
  /** The supplier of the product of the OrderItem */
  private _supplier?: string;
  /** The supplierCode of the product of the OrderItem */
  private _supplierCode?: string;
  /** The manufacturer of the product of the OrderItem */
  private _manufacturer?: string;
  /** The manufacturerCode of the product of the OrderItem */
  private _manufacturerCode?: string;
  /** The eanCode of the product of the OrderItem */
  private _eanCode?: string;
  /** The original price of the OrderItem, before applying any discounts */
  private _originalPrice?: number;
  /** The calculated price per unit excluding tax */
  private _price: number;
  /** The total price of the OrderItem excluding tax */
  private _priceTotal: number;
  /** The calculated price per unit including tax */
  private _priceNet?: number;
  /** The total price of the OrderItem including tax */
  private _priceTotalNet?: number;
  /** The calculated customerPrice of the OrderItem at the time the order was placed */
  private _customerPrice?: number;
  /** The cost price of the OrderItem at the time the order was placed */
  private _costPrice?: number;
  /** The discount of the OrderItem */
  private _discount?: number;
  /** The total tax of the OrderItem */
  private _tax?: number;
  /** The tax percentage of the OrderItem */
  private _taxPercentage: number;
  /** The tax code of the OrderItem */
  private _taxCode: Taxcode;
  /** Is the OrderItem a bonusItem? */
  private _isBonus: YesNo;
  /** The minimum quantity of the product of the OrderItem */
  private _minimumQuantity?: number;
  /** The unit of the product of the OrderItem */
  private _unit?: number;
  /** The package of the product of the OrderItem */
  private _package?: string;
  /** The package unit of the product of the OrderItem */
  private _packageUnit?: string;
  /** The package unit quantity of the product of the OrderItem */
  private _packageUnitQuantity?: string;
  /** The purchase unit of the product of the OrderItem */
  private _purchaseUnit?: number;
  /** The purchase minimum quantity of the product of the OrderItem */
  private _purchaseMinimumQuantity?: number;
  /** The requested delivery date for this orderline */
  private _requestDate?: string;
  /** sources field */
  private _sources?: Source[];
  /** product field */
  private _product?: Product;
  /**
   Creates a new instance of OrderItem
   */
  constructor(data: Partial<OrderItem> = {}) {
    this._id = data.id!;
    this._orderId = data.orderId!;
    this._uuid = data.uuid!;
    this._class = data.class!;
    this._productId = data.productId;
    this._parentOrderItemId = data.parentOrderItemId;
    this._quantity = data.quantity!;
    this._sku = data.sku!;
    this._notes = data.notes;
    this._name = data.name!;
    this._supplier = data.supplier;
    this._supplierCode = data.supplierCode;
    this._manufacturer = data.manufacturer;
    this._manufacturerCode = data.manufacturerCode;
    this._eanCode = data.eanCode;
    this._originalPrice = data.originalPrice;
    this._price = data.price!;
    this._priceTotal = data.priceTotal!;
    this._priceNet = data.priceNet;
    this._priceTotalNet = data.priceTotalNet;
    this._customerPrice = data.customerPrice;
    this._costPrice = data.costPrice;
    this._discount = data.discount;
    this._tax = data.tax;
    this._taxPercentage = data.taxPercentage!;
    this._taxCode = data.taxCode!;
    this._isBonus = data.isBonus!;
    this._minimumQuantity = data.minimumQuantity;
    this._unit = data.unit;
    this._package = data.package;
    this._packageUnit = data.packageUnit;
    this._packageUnitQuantity = data.packageUnitQuantity;
    this._purchaseUnit = data.purchaseUnit;
    this._purchaseMinimumQuantity = data.purchaseMinimumQuantity;
    this._requestDate = data.requestDate;
    this._sources = data.sources;
    this._product = data.product;
  }
  /**
   The autoincerment ID for the OrderItem
   */
  get id(): number {
    return this._id;
  }
  /**
   The autoincerment ID for the OrderItem
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   The ID of the Order the OrderItem belongs to
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   The ID of the Order the OrderItem belongs to
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   The UUID for the OrderItem
   */
  get uuid(): string {
    return this._uuid;
  }
  /**
   The UUID for the OrderItem
   */
  set uuid(value: string) {
    this._uuid = value;
  }
  /**
   The class of the orderItem. Either product, incentive, surcharge, postage, payment
   */
  get class(): OrderItemClass {
    return this._class;
  }
  /**
   The class of the orderItem. Either product, incentive, surcharge, postage, payment
   */
  set class(value: OrderItemClass) {
    this._class = value;
  }
  /**
   The productId of the OrderItem
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   The productId of the OrderItem
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   The ID of the parent OrderItem
   */
  get parentOrderItemId(): number | undefined {
    return this._parentOrderItemId;
  }
  /**
   The ID of the parent OrderItem
   */
  set parentOrderItemId(value: number | undefined) {
    this._parentOrderItemId = value;
  }
  /**
   The quantity of the OrderItem
   */
  get quantity(): number {
    return this._quantity;
  }
  /**
   The quantity of the OrderItem
   */
  set quantity(value: number) {
    this._quantity = value;
  }
  /**
   The SKU of the product of the OrderItem
   */
  get sku(): string {
    return this._sku;
  }
  /**
   The SKU of the product of the OrderItem
   */
  set sku(value: string) {
    this._sku = value;
  }
  /**
   Remarks by the customer for the OrderItem
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Remarks by the customer for the OrderItem
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   The name of the product of the OrderItem
   */
  get name(): string {
    return this._name;
  }
  /**
   The name of the product of the OrderItem
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The supplier of the product of the OrderItem
   */
  get supplier(): string | undefined {
    return this._supplier;
  }
  /**
   The supplier of the product of the OrderItem
   */
  set supplier(value: string | undefined) {
    this._supplier = value;
  }
  /**
   The supplierCode of the product of the OrderItem
   */
  get supplierCode(): string | undefined {
    return this._supplierCode;
  }
  /**
   The supplierCode of the product of the OrderItem
   */
  set supplierCode(value: string | undefined) {
    this._supplierCode = value;
  }
  /**
   The manufacturer of the product of the OrderItem
   */
  get manufacturer(): string | undefined {
    return this._manufacturer;
  }
  /**
   The manufacturer of the product of the OrderItem
   */
  set manufacturer(value: string | undefined) {
    this._manufacturer = value;
  }
  /**
   The manufacturerCode of the product of the OrderItem
   */
  get manufacturerCode(): string | undefined {
    return this._manufacturerCode;
  }
  /**
   The manufacturerCode of the product of the OrderItem
   */
  set manufacturerCode(value: string | undefined) {
    this._manufacturerCode = value;
  }
  /**
   The eanCode of the product of the OrderItem
   */
  get eanCode(): string | undefined {
    return this._eanCode;
  }
  /**
   The eanCode of the product of the OrderItem
   */
  set eanCode(value: string | undefined) {
    this._eanCode = value;
  }
  /**
   The original price of the OrderItem, before applying any discounts
   */
  get originalPrice(): number | undefined {
    return this._originalPrice;
  }
  /**
   The original price of the OrderItem, before applying any discounts
   */
  set originalPrice(value: number | undefined) {
    this._originalPrice = value;
  }
  /**
   The calculated price per unit excluding tax
   */
  get price(): number {
    return this._price;
  }
  /**
   The calculated price per unit excluding tax
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   The total price of the OrderItem excluding tax
   */
  get priceTotal(): number {
    return this._priceTotal;
  }
  /**
   The total price of the OrderItem excluding tax
   */
  set priceTotal(value: number) {
    this._priceTotal = value;
  }
  /**
   The calculated price per unit including tax
   */
  get priceNet(): number | undefined {
    return this._priceNet;
  }
  /**
   The calculated price per unit including tax
   */
  set priceNet(value: number | undefined) {
    this._priceNet = value;
  }
  /**
   The total price of the OrderItem including tax
   */
  get priceTotalNet(): number | undefined {
    return this._priceTotalNet;
  }
  /**
   The total price of the OrderItem including tax
   */
  set priceTotalNet(value: number | undefined) {
    this._priceTotalNet = value;
  }
  /**
   The calculated customerPrice of the OrderItem at the time the order was placed
   */
  get customerPrice(): number | undefined {
    return this._customerPrice;
  }
  /**
   The calculated customerPrice of the OrderItem at the time the order was placed
   */
  set customerPrice(value: number | undefined) {
    this._customerPrice = value;
  }
  /**
   The cost price of the OrderItem at the time the order was placed
   */
  get costPrice(): number | undefined {
    return this._costPrice;
  }
  /**
   The cost price of the OrderItem at the time the order was placed
   */
  set costPrice(value: number | undefined) {
    this._costPrice = value;
  }
  /**
   The discount of the OrderItem
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   The discount of the OrderItem
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
  /**
   The total tax of the OrderItem
   */
  get tax(): number | undefined {
    return this._tax;
  }
  /**
   The total tax of the OrderItem
   */
  set tax(value: number | undefined) {
    this._tax = value;
  }
  /**
   The tax percentage of the OrderItem
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   The tax percentage of the OrderItem
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   The tax code of the OrderItem
   */
  get taxCode(): Taxcode {
    return this._taxCode;
  }
  /**
   The tax code of the OrderItem
   */
  set taxCode(value: Taxcode) {
    this._taxCode = value;
  }
  /**
   Is the OrderItem a bonusItem?
   */
  get isBonus(): YesNo {
    return this._isBonus;
  }
  /**
   Is the OrderItem a bonusItem?
   */
  set isBonus(value: YesNo) {
    this._isBonus = value;
  }
  /**
   The minimum quantity of the product of the OrderItem
   */
  get minimumQuantity(): number | undefined {
    return this._minimumQuantity;
  }
  /**
   The minimum quantity of the product of the OrderItem
   */
  set minimumQuantity(value: number | undefined) {
    this._minimumQuantity = value;
  }
  /**
   The unit of the product of the OrderItem
   */
  get unit(): number | undefined {
    return this._unit;
  }
  /**
   The unit of the product of the OrderItem
   */
  set unit(value: number | undefined) {
    this._unit = value;
  }
  /**
   The package of the product of the OrderItem
   */
  get package(): string | undefined {
    return this._package;
  }
  /**
   The package of the product of the OrderItem
   */
  set package(value: string | undefined) {
    this._package = value;
  }
  /**
   The package unit of the product of the OrderItem
   */
  get packageUnit(): string | undefined {
    return this._packageUnit;
  }
  /**
   The package unit of the product of the OrderItem
   */
  set packageUnit(value: string | undefined) {
    this._packageUnit = value;
  }
  /**
   The package unit quantity of the product of the OrderItem
   */
  get packageUnitQuantity(): string | undefined {
    return this._packageUnitQuantity;
  }
  /**
   The package unit quantity of the product of the OrderItem
   */
  set packageUnitQuantity(value: string | undefined) {
    this._packageUnitQuantity = value;
  }
  /**
   The purchase unit of the product of the OrderItem
   */
  get purchaseUnit(): number | undefined {
    return this._purchaseUnit;
  }
  /**
   The purchase unit of the product of the OrderItem
   */
  set purchaseUnit(value: number | undefined) {
    this._purchaseUnit = value;
  }
  /**
   The purchase minimum quantity of the product of the OrderItem
   */
  get purchaseMinimumQuantity(): number | undefined {
    return this._purchaseMinimumQuantity;
  }
  /**
   The purchase minimum quantity of the product of the OrderItem
   */
  set purchaseMinimumQuantity(value: number | undefined) {
    this._purchaseMinimumQuantity = value;
  }
  /**
   The requested delivery date for this orderline
   */
  get requestDate(): string | undefined {
    return this._requestDate;
  }
  /**
   The requested delivery date for this orderline
   */
  set requestDate(value: string | undefined) {
    this._requestDate = value;
  }
  /**
   sources field
   */
  get sources(): Source[] | undefined {
    return this._sources;
  }
  /**
   sources field
   */
  set sources(value: Source[] | undefined) {
    this._sources = value;
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