import { CarrierType } from '../enum/CarrierType';
import { LocalizedString } from './LocalizedString';
import { TrackAndTrace } from './TrackAndTrace';
import { Warehouse } from './Warehouse';
/**
 Object class for Carrier
 */
export interface Carrier {
  /** Carrier primary identifier */
  id: number;
  /** Carrier name */
  name: string;
  /** Carrier type */
  type: CarrierType;
  /** Carrier description per language */
  descriptions?: LocalizedString[];
  /** shippingCost field */
  /** @deprecated Deprecated in favor Propeller's business rule builder, where logic can be set up for carriers and more complex use cases */
  shippingCost: number;
  /** Track and Trace redirect URL */
  trackAndTraceURL?: string;
  /** Logo url */
  logo?: string;
  /** Carrier creation date */
  createdAt: string;
  /** Carrier last modified date */
  lastModifiedAt: string;
  /** The userId of the user that created the carrier */
  createdBy?: number;
  /** The userId of the user that last modified the carrier */
  lastModifiedBy?: number;
  /** Get all track and traces for a carrier */
  trackAndTraces: TrackAndTrace[];
  /** warehouses field */
  warehouses?: Warehouse[];
}