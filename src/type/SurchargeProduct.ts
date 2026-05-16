import { Surcharge } from './Surcharge';
/**
 Object class for SurchargeProduct
 */
export interface SurchargeProduct {
  /** The surcharge identifier */
  surchargeId: string;
  /** The product identifier */
  productId?: number;
  /** The surcharge object */
  surcharge: Surcharge;
}