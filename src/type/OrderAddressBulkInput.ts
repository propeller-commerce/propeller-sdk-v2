import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Input object for OrderAddressBulkInput
 */
export interface OrderAddressBulkInput {
  /** First name of the person at this address */
  firstName?: string;
  /** Middle name of the person at this address */
  middleName?: string;
  /** Last name of the person at this address */
  lastName?: string;
  /** Gender of the person at this address */
  gender?: Gender;
  /** Company name at this address */
  company?: string;
  /** Street name and number */
  street?: string;
  /** House or building number */
  number?: string;
  /** Extension to the house number */
  numberExtension?: string;
  /** Postal or ZIP code */
  postalCode?: string;
  /** City name */
  city?: string;
  /** State, province, or region code */
  region?: string;
  /** Country code (ISO 2-letter) */
  country?: string;
  /** Fixed phone number [min: 6, max: 30] */
  phone?: string;
  /** Mobile phone number [min: 6, max: 30] */
  mobile?: string;
  /** Email that applies to this address */
  email?: string;
  /** Internal code or reference for this address */
  code?: string;
  /** Additional notes about this address */
  notes?: string;
  /** ICP address field defines whether tax should be applied */
  icp?: YesNo;
  /** Website URL if applicable */
  url?: string;
  /** Display name for this address */
  name?: string;
  /** Address type [one of: delivery, invoice, home] */
  type: AddressType;
}
