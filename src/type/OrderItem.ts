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
  id!: number;
  /** The ID of the Order the OrderItem belongs to */
  orderId!: number;
  /** The UUID for the OrderItem */
  uuid!: string;
  /** The class of the orderItem. Either product, incentive, surcharge, postage, payment */
  class!: OrderItemClass;
  /** The productId of the OrderItem */
  productId?: number;
  /** The ID of the parent OrderItem */
  parentOrderItemId?: number;
  /** The quantity of the OrderItem */
  quantity!: number;
  /** The SKU of the product of the OrderItem */
  sku!: string;
  /** Remarks by the customer for the OrderItem */
  notes?: string;
  /** The name of the product of the OrderItem */
  name!: string;
  /** The supplier of the product of the OrderItem */
  supplier?: string;
  /** The supplierCode of the product of the OrderItem */
  supplierCode?: string;
  /** The manufacturer of the product of the OrderItem */
  manufacturer?: string;
  /** The manufacturerCode of the product of the OrderItem */
  manufacturerCode?: string;
  /** The eanCode of the product of the OrderItem */
  eanCode?: string;
  /** The original price of the OrderItem, before applying any discounts */
  originalPrice?: number;
  /** The calculated price per unit excluding tax */
  price!: number;
  /** The total price of the OrderItem excluding tax */
  priceTotal!: number;
  /** The calculated price per unit including tax */
  priceNet?: number;
  /** The total price of the OrderItem including tax */
  priceTotalNet?: number;
  /** The calculated customerPrice of the OrderItem at the time the order was placed */
  customerPrice?: number;
  /** The cost price of the OrderItem at the time the order was placed */
  costPrice?: number;
  /** The discount of the OrderItem */
  discount?: number;
  /** The total tax of the OrderItem */
  tax?: number;
  /** The tax percentage of the OrderItem */
  taxPercentage!: number;
  /** The tax code of the OrderItem */
  taxCode!: Taxcode;
  /** Is the OrderItem a bonusItem? */
  isBonus!: YesNo;
  /** The minimum quantity of the product of the OrderItem */
  minimumQuantity?: number;
  /** The unit of the product of the OrderItem */
  unit?: number;
  /** The package of the product of the OrderItem */
  package?: string;
  /** The package unit of the product of the OrderItem */
  packageUnit?: string;
  /** The package unit quantity of the product of the OrderItem */
  packageUnitQuantity?: string;
  /** The purchase unit of the product of the OrderItem */
  purchaseUnit?: number;
  /** The purchase minimum quantity of the product of the OrderItem */
  purchaseMinimumQuantity?: number;
  /** The requested delivery date for this orderline */
  requestDate?: string;
  /** sources field */
  sources?: Source[];
  /** product field */
  product?: Product;
  constructor(data: Partial<OrderItem> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `orderId`. */
  getOrderId(): number {
    return this.orderId;
  }
  /** Returns `uuid`. */
  getUuid(): string {
    return this.uuid;
  }
  /** Returns `class`. */
  getClass(): OrderItemClass {
    return this.class;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `parentOrderItemId`. */
  getParentOrderItemId(): number | undefined {
    return this.parentOrderItemId;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
  /** Returns `sku`. */
  getSku(): string {
    return this.sku;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `supplier`. */
  getSupplier(): string | undefined {
    return this.supplier;
  }
  /** Returns `supplierCode`. */
  getSupplierCode(): string | undefined {
    return this.supplierCode;
  }
  /** Returns `manufacturer`. */
  getManufacturer(): string | undefined {
    return this.manufacturer;
  }
  /** Returns `manufacturerCode`. */
  getManufacturerCode(): string | undefined {
    return this.manufacturerCode;
  }
  /** Returns `eanCode`. */
  getEanCode(): string | undefined {
    return this.eanCode;
  }
  /** Returns `originalPrice`. */
  getOriginalPrice(): number | undefined {
    return this.originalPrice;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `priceTotal`. */
  getPriceTotal(): number {
    return this.priceTotal;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number | undefined {
    return this.priceNet;
  }
  /** Returns `priceTotalNet`. */
  getPriceTotalNet(): number | undefined {
    return this.priceTotalNet;
  }
  /** Returns `customerPrice`. */
  getCustomerPrice(): number | undefined {
    return this.customerPrice;
  }
  /** Returns `costPrice`. */
  getCostPrice(): number | undefined {
    return this.costPrice;
  }
  /** Returns `discount`. */
  getDiscount(): number | undefined {
    return this.discount;
  }
  /** Returns `tax`. */
  getTax(): number | undefined {
    return this.tax;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `taxCode`. */
  getTaxCode(): Taxcode {
    return this.taxCode;
  }
  /** Returns `isBonus`. */
  getIsBonus(): YesNo {
    return this.isBonus;
  }
  /** Returns `minimumQuantity`. */
  getMinimumQuantity(): number | undefined {
    return this.minimumQuantity;
  }
  /** Returns `unit`. */
  getUnit(): number | undefined {
    return this.unit;
  }
  /** Returns `package`. */
  getPackage(): string | undefined {
    return this.package;
  }
  /** Returns `packageUnit`. */
  getPackageUnit(): string | undefined {
    return this.packageUnit;
  }
  /** Returns `packageUnitQuantity`. */
  getPackageUnitQuantity(): string | undefined {
    return this.packageUnitQuantity;
  }
  /** Returns `purchaseUnit`. */
  getPurchaseUnit(): number | undefined {
    return this.purchaseUnit;
  }
  /** Returns `purchaseMinimumQuantity`. */
  getPurchaseMinimumQuantity(): number | undefined {
    return this.purchaseMinimumQuantity;
  }
  /** Returns `requestDate`. */
  getRequestDate(): string | undefined {
    return this.requestDate;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] | undefined {
    if (!this.sources) return undefined;
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
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