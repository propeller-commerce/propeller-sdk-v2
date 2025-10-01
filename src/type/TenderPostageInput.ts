import { YesNo } from '../enum/YesNo';
/**
 Input object for TenderPostageInput
 */
export interface TenderPostageInput {
  /** The shipping method for this tender/order */
  method?: string;
  /** The preferred delivery date for this order as requested by the user - ISO 8601 Date string */
  requestDate?: string;
  /** The carrier for this tender/order */
  carrier?: string;
  /** Shipping costs, VAT excluding. If omitted, shipping costs are automatically calculated */
  price?: number;
  /** This order can be shipped in parts when items have different delivery dates */
  partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  pickUpLocationId?: number;
}