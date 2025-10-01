import { CarrierType } from '../enum/CarrierType';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for CarrierUpdateInput
 */
export interface CarrierUpdateInput {
  /** Carrier unique name */
  name?: string;
  /** Carrier type! One of: [PICKUP, DELIVERY] */
  type?: CarrierType;
  /** Carrier descriptions per language */
  descriptions?: LocalizedStringInput[];
  /** Carrier specific shipping cost */
  shippingCost?: number;
  /** Track and Trace redirect URL */
  trackAndTraceURL?: string;
  /** Logo url, must be public reachable url [maxLogoSize: 200kB, maxLogoDimensions: 200x200px ] */
  logo?: string;
  /** List of supported warehouse ids for this carrier */
  warehouseIds?: number[];
}