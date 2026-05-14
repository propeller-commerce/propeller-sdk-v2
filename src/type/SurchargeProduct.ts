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
}