import { YesNo } from '../enum/YesNo';
/**
 Input object for OrderPostageInput
 */
export interface OrderPostageInput {
  /** The chosen shipping method */
  method: string;
  /** The shipping costs tax percentage */
  taxPercentage: number;
  /** The provided delivery date for the Order */
  requestDate?: string;
  /** The shipping costs excluding tax */
  gross: number;
  /** The shipping costs including tax */
  net: number;
  /** The shipping costs tax */
  tax: number;
  /** Is partial delivery allowed for this Order */
  partialDeliveryAllowed?: YesNo;
  /** ID of the pick up location when the Order's shipping method is PICKUP */
  pickUpLocationId?: number;
  /** The selected carrier for this Order */
  carrier?: string;
  /** Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  overruled?: YesNo;
}