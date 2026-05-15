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

  /** Returns `method`. */
  getMethod(): string {
    return this.method;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `requestDate`. */
  getRequestDate(): string | undefined {
    return this.requestDate;
  }
  /** Returns `gross`. */
  getGross(): number {
    return this.gross;
  }
  /** Returns `net`. */
  getNet(): number {
    return this.net;
  }
  /** Returns `tax`. */
  getTax(): number {
    return this.tax;
  }
  /** Returns `partialDeliveryAllowed`. */
  getPartialDeliveryAllowed(): YesNo | undefined {
    return this.partialDeliveryAllowed;
  }
  /** Returns `pickUpLocationId`. */
  getPickUpLocationId(): number | undefined {
    return this.pickUpLocationId;
  }
  /** Returns `carrier`. */
  getCarrier(): string | undefined {
    return this.carrier;
  }
  /** Returns `overruled`. */
  getOverruled(): YesNo | undefined {
    return this.overruled;
  }
  /** Returns `warehouse` as a Warehouse instance (coerced on first access). */
  getWarehouse(): Warehouse | undefined {
    if (this.warehouse == null) return undefined;
    if (!(this.warehouse instanceof Warehouse)) {
      this.warehouse = new Warehouse(this.warehouse as any);
    }
    return this.warehouse;
  }
}