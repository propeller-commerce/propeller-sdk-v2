import { Taxcode } from '../enum/Taxcode';
/**
 Input object for OrderItemUpdateInput
 */
export interface OrderItemUpdateInput {
  /** The ID of the orderitem to update. */
  id: number;
  /** The quantity of the orderitem */
  quantity: number;
  /** The orderitem notes */
  notes?: string;
  /** The calculated price per unit including tax */
  priceNet?: number;
  /** The gross price per unit excluding tax */
  price: number;
  /** The total price of the orderitem excluding tax */
  priceTotal: number;
  /** The total price of the OrderItem including tax */
  priceTotalNet?: number;
  /** The discount applied to this orderitem */
  discount: number;
  /** The amount of tax applied to this orderitem */
  tax: number;
  /** The tax percentage applied to this orderitem */
  taxPercentage: number;
  /** The original price of the OrderItem, before applying any discounts */
  originalPrice: number;
  /** The tax code of the OrderItem */
  taxCode: Taxcode;
  /** The calculated user specific price of the orderitem, before applying any additional discounts */
  customerPrice?: number;
  /** The costprice of the orderitem */
  costPrice?: number;
  /** Requested delivery date for this orderline */
  requestDate?: string;
}