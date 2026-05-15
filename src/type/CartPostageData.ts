import { PriceMode } from '../enum/PriceMode';
import { YesNo } from '../enum/YesNo';
import { Warehouse } from './Warehouse';
/**
 Object class for CartPostageData
 */
export class CartPostageData {
  /** Selected shipping method for this cart. Defaults to DELIVERY. */
  method!: string;
  /** Tax percentage */
  taxPercentage?: number;
  /** Preferred delivery date for this order as requested by the user. */
  requestDate?: string;
  /** Costs associated with the selected shipping method and business rules that apply to this cart. Excluding VAT. */
  price?: number;
  /** Costs associated with the selected shipping method and business rules that apply to this cart. Including VAT. */
  priceNet?: number;
  /** Indicates where the price is calculated. PLATFORM - Price was calculated based on product price/postage rules set in Propeller. EXTERNAL - price was set externally */
  priceMode?: PriceMode;
  /** Selected carrier for this cart. */
  carrier?: string;
  /** This order can be shipped in parts when items different delivery dates */
  partialDeliveryAllowed?: YesNo;
  /** Pick up location ID */
  pickUpLocationId?: number;
  /** warehouse field */
  warehouse?: Warehouse;
  constructor(data: Partial<CartPostageData> = {}) {
    Object.assign(this, data);
  }

  /** Returns `method`. */
  getMethod(): string {
    return this.method;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number | undefined {
    return this.taxPercentage;
  }
  /** Returns `requestDate`. */
  getRequestDate(): string | undefined {
    return this.requestDate;
  }
  /** Returns `price`. */
  getPrice(): number | undefined {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number | undefined {
    return this.priceNet;
  }
  /** Returns `priceMode`. */
  getPriceMode(): PriceMode | undefined {
    return this.priceMode;
  }
  /** Returns `carrier`. */
  getCarrier(): string | undefined {
    return this.carrier;
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