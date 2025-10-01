import { OrderItemClass } from '../enum/OrderItemClass';
import { Taxcode } from '../enum/Taxcode';
import { YesNo } from '../enum/YesNo';
import { SourceInput } from './SourceInput';
/**
 Input object for OrderItemCreateInput
 */
export interface OrderItemCreateInput {
  /** The class of the orderItem. Either product, incentive, surcharge, postage, payment */
  class: OrderItemClass;
  /** The UUID for the OrderItem */
  uuid?: string;
  /** The productId of the OrderItem */
  productId?: number;
  /** A product source */
  productSource?: SourceInput;
  /** The ID of the parent OrderItem */
  parentOrderItemId?: number;
  /** The UUID of the parent OrderItem, this can be used in bulk operations where the auto-increment ID's are not known */
  parentOrderItemUUID?: string;
  /** The quantity of the OrderItem */
  quantity: number;
  /** The SKU of the product of the OrderItem */
  sku: string;
  /** Remarks by the customer for the OrderItem */
  notes?: string;
  /** The name of the product of the OrderItem */
  name: string;
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
  originalPrice: number;
  /** The calculated customerPrice of the OrderItem at the time the order was placed */
  customerPrice?: number;
  /** The calculated price per unit excluding tax */
  price: number;
  /** The total price of the OrderItem excluding tax */
  priceTotal: number;
  /** The calculated price per unit including tax */
  priceNet?: number;
  /** The total price of the OrderItem including tax */
  priceTotalNet?: number;
  /** The cost price of the OrderItem */
  costPrice?: number;
  /** The discount of the OrderItem */
  discount?: number;
  /** The total tax of the OrderItem */
  tax?: number;
  /** The tax percentage of the OrderItem */
  taxPercentage: number;
  /** The tax code of the OrderItem */
  taxCode: Taxcode;
  /** Is the OrderItem a bonusItem? */
  isBonus: YesNo;
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
  /** Requested delivery date for this orderline */
  requestDate?: string;
}