import { CartAddressType } from '../enum/CartAddressType';
import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Input object for CartUpdateAddressInput
 */
export interface CartUpdateAddressInput {
  /** Address type */
  type: CartAddressType;
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
  /** Street name */
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
  /** Country code */
  country?: string;
  /** Address code */
  code?: string;
  /** Address name */
  email?: string;
  /** Mobile phone number */
  mobile?: string;
  /** Phone number */
  phone?: string;
  /** icp input field */
  icp?: YesNo;
  /** Notes */
  notes?: string;
}