import { SurchargeType } from '../enum/SurchargeType';
import { Taxcode } from '../enum/Taxcode';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for SurchargeSearchInput
 */
export interface SurchargeSearchInput {
  /** Only search for surcharges of the type provided */
  type?: SurchargeType;
  /** Only search for surcharges with taxCode provided */
  taxCode?: Taxcode;
  /** Only search for already enabled surcharges */
  enabled?: boolean;
  /** Only search for surcharges with taxZone provided */
  taxZone?: string;
  /** page input field */
  page?: number;
  /** offset input field */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
}