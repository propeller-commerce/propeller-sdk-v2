import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Object class for CompanyAddressSearch
 */
export interface CompanyAddressSearch {
  /** Address primary identifier */
  id: number;
  /** First name the address applies to */
  firstName?: string;
  /** Last name the address applies to */
  lastName?: string;
  /** Address street */
  street: string;
  /** Address street number */
  number?: string;
  /** Address street number extension */
  numberExtension?: string;
  /** Address postal code */
  postalCode: string;
  /** Address city */
  city: string;
  /** Address region */
  region?: string;
  /** Address country */
  country: string;
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
  /** Address friendly descriptive name */
  name?: string;
  /** Indicates whether the address is default for its type */
  isDefault: YesNo;
  /** Address type [one of 'home', 'delivery', 'invoice'] */
  type: AddressType;
  /** Indicates whether the address is active */
  active?: YesNo;
  /** Date when the address was created */
  createdAt: string;
  /** Date when the address was last modified */
  lastModifiedAt: string;
}