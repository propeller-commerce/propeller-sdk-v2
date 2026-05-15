import { Surcharge } from './Surcharge';
/**
 Object class for SurchargeProduct
 */
export class SurchargeProduct {
  /** The surcharge identifier */
  surchargeId!: string;
  /** The product identifier */
  productId?: number;
  /** The surcharge object */
  surcharge!: Surcharge;
  constructor(data: Partial<SurchargeProduct> = {}) {
    Object.assign(this, data);
  }

  /** Returns `surchargeId`. */
  getSurchargeId(): string {
    return this.surchargeId;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `surcharge` as a Surcharge instance (coerced on first access). */
  getSurcharge(): Surcharge | undefined {
    if (this.surcharge == null) return undefined;
    if (!(this.surcharge instanceof Surcharge)) {
      this.surcharge = new Surcharge(this.surcharge as any);
    }
    return this.surcharge;
  }
}