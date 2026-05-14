import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartAddress
 */
export interface CartAddress {
  /** Company name */
  company?: string;
  /** Gender */
  gender?: Gender;
  /** First name */
  firstName: string;
  /** Middle name */
  middleName?: string;
  /** Last name */
  lastName: string;
  /** Street */
  street: string;
  /** Street number */
  number?: string;
  /** Street number extension */
  numberExtension?: string;
  /** Postal code */
  postalCode: string;
  /** City */
  city: string;
  /** Region */
  region?: string;
  /** Country */
  country: string;
  /** Code */
  code?: string;
  /** Email */
  email?: string;
  /** Mobile phone number */
  mobile?: string;
  /** Phone number */
  phone?: string;
  /** Is this an ICP address? */
  icp?: YesNo;
  /** Notes */
  notes?: string;
}