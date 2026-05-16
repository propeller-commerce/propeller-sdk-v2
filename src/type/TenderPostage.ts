import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for TenderPostage
 */
export interface TenderPostage {
  /** The selected shipping method for this tender/order */
  method: string;
  /** Postage tax percentage */
  taxPercentage: number;
  /** The preferred delivery date for this order as requested by the user */
  requestDate?: string;
  /** The selected carrier for this tender/order */
  carrier?: string;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding */
  price: number;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including */
  priceNet: number;
  /** The VAT associated with the selected shipping method and business rules that apply to this tender/order. */
  tax: number;
  /** If false, shipping costs are automatically calculated */
  overruled?: YesNo;
  /** This order can be shipped in parts when items different delivery dates */
  partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  pickUpLocationId?: number;
  /** warehouse field */
  warehouse?: Warehouse;
}