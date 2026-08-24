import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Input object for OrderAddressUpdateInput
 */
export interface OrderAddressUpdateInput {
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
  /** Address street */
  street?: string;
  /** Address street number */
  number?: string;
  /** Address street number extension */
  numberExtension?: string;
  /** Address postal code */
  postalCode?: string;
  /** Address city */
  city?: string;
  /** Address region */
  region?: string;
  /** Address country */
  country?: string;
  /** Fixed phone number that applies to this address [min: 6, max: 30] */
  phone?: string;
  /** Mobile phone number that applies to this address [min: 6, max: 30] */
  mobile?: string;
  /** Email that applies to this address [valid email format needed] */
  email?: string;
  /** Address code */
  code?: string;
  /** Address delivery notes */
  notes?: string;
  /** ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad */
  icp?: YesNo;
  /** Address company domain url */
  url?: string;
  /** Address friendly descriptive name */
  name?: string;
}