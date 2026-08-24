import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Input object for AddressBulkItemInput
 */
export interface AddressBulkItemInput {
  /** First name the address applies to */
  firstName?: string;
  /** Middle name the address applies to */
  middleName?: string;
  /** Last name the address applies to */
  lastName?: string;
  /** Gender the address applies to */
  gender?: Gender;
  /** Company the address applies to */
  company?: string;
  /** Street address */
  street: string;
  /** Street number */
  number?: string;
  /** Street number extension */
  numberExtension?: string;
  /** Address postal code */
  postalCode: string;
  /** Address city */
  city: string;
  /** Address region */
  region?: string;
  /** Address country */
  country: string;
  /** Address fixed phone number [min: 6, max: 30] */
  phone?: string;
  /** Address mobile number [min: 6, max: 30] */
  mobile?: string;
  /** Address email [valid email format required] */
  email?: string;
  /** Address code */
  code?: string;
  /** Address delivery notes */
  notes?: string;
  /** Company website URL */
  url?: string;
  /** Indicates whether the address is default for its type */
  isDefault?: YesNo;
  /** Indicates whether the address is active */
  active?: YesNo;
  /** ICP address field defines whether tax should be applied to an order if the address is selected */
  icp?: YesNo;
  /** Address type [one of 'home', 'delivery' or 'invoice'] */
  type: AddressType;
  /** Address primary identifier */
  id?: number;
}
