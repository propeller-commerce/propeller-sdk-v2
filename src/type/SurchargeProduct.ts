import { Product } from './Product';
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

  /** Complete product information for the surcharged item.

Detailed product data for the product that this surcharge applies to. */
  product?: Product;
}