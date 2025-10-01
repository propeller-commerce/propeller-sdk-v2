import { YesNo } from '../enum/YesNo';
/**
 Input object for CartPostageDataInput
 */
export interface CartPostageDataInput {
  /** Selected shipping method for this cart. */
  method?: string;
  /** Preferred delivery date for this order as requested by the user. */
  requestDate?: string;
  /** Is partial delivery allowed for this cart. */
  partialDeliveryAllowed?: YesNo;
  /** Postage cost excluding VAT based on external postage calculation. If value is set, postage priceMode is set to 'EXTERNAL' for this cart. */
  price?: number;
  /** Selected carrier for this cart. */
  carrier?: string;
  /** Pick up location ID */
  pickUpLocationId?: number;
}