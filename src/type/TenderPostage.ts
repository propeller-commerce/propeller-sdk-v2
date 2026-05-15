import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for TenderPostage
 */
export class TenderPostage {
  /** The selected shipping method for this tender/order */
  method!: string;
  /** Postage tax percentage */
  taxPercentage!: number;
  /** The preferred delivery date for this order as requested by the user */
  requestDate?: string;
  /** The selected carrier for this tender/order */
  carrier?: string;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT excluding */
  price!: number;
  /** The costs associated with the selected shipping method and business rules that apply to this tender/order. VAT including */
  priceNet!: number;
  /** The VAT associated with the selected shipping method and business rules that apply to this tender/order. */
  tax!: number;
  /** If false, shipping costs are automatically calculated */
  overruled?: YesNo;
  /** This order can be shipped in parts when items different delivery dates */
  partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  pickUpLocationId?: number;
  /** warehouse field */
  warehouse?: Warehouse;
  constructor(data: Partial<TenderPostage> = {}) {
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
  /** Returns `carrier`. */
  getCarrier(): string | undefined {
    return this.carrier;
  }
  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number {
    return this.priceNet;
  }
  /** Returns `tax`. */
  getTax(): number {
    return this.tax;
  }
  /** Returns `overruled`. */
  getOverruled(): YesNo | undefined {
    return this.overruled;
  }
  /** Returns `partialDeliveryAllowed`. */
  getPartialDeliveryAllowed(): YesNo | undefined {
    return this.partialDeliveryAllowed;
  }
  /** Returns `pickUpLocationId`. */
  getPickUpLocationId(): number | undefined {
    return this.pickUpLocationId;
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