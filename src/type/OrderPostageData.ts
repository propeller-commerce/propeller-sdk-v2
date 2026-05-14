import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for OrderPostageData
 */
export class OrderPostageData {
  /** The chosen shipping method */
  method!: string;
  /** The shipping costs tax percentage */
  taxPercentage!: number;
  /** The preferred delivery date for the Order */
  requestDate?: string;
  /** The shipping costs excluding tax */
  gross!: number;
  /** The shipping costs including tax */
  net!: number;
  /** The tax on the shipping costs */
  tax!: number;
  /** Is partial delivery allowed for this Order */
  partialDeliveryAllowed?: YesNo;
  /** ID of the pick up location when the Order's shipping method is PICKUP */
  pickUpLocationId?: number;
  /** The selected carrier for this Order */
  carrier?: string;
  /** Whether the shipping costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  overruled?: YesNo;
  /** warehouse field */
  warehouse?: Warehouse;
  constructor(data: Partial<OrderPostageData> = {}) {
    Object.assign(this, data);
  }
}