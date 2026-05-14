import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderAddress
 */
export class TenderAddress {
  /** Address company */
  company?: string;
  /** Address contact gender */
  gender?: Gender;
  /** Address contact first name */
  firstName?: string;
  /** Address contact middle name */
  middleName?: string;
  /** Address contact last name */
  lastName?: string;
  /** Street */
  street!: string;
  /** Number */
  number?: string;
  /** Number extension */
  numberExtension?: string;
  /** Postal code */
  postalCode!: string;
  /** City */
  city!: string;
  /** Region */
  region?: string;
  /** Country code */
  country!: string;
  /** Address code */
  code?: string;
  /** Address contact email */
  email?: string;
  /** Address contact mobile phone number */
  mobile?: string;
  /** Address contact phone number */
  phone?: string;
  /** ICP is Yes when taxes do not apply for shipping to the given address/ country */
  icp?: YesNo;
  /** Notes, remarks, etc. */
  notes?: string;
  constructor(data: Partial<TenderAddress> = {}) {
    Object.assign(this, data);
  }
}