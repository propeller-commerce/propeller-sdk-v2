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

  /** Returns `company`. */
  getCompany(): string | undefined {
    return this.company;
  }
  /** Returns `gender`. */
  getGender(): Gender | undefined {
    return this.gender;
  }
  /** Returns `firstName`. */
  getFirstName(): string | undefined {
    return this.firstName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `lastName`. */
  getLastName(): string | undefined {
    return this.lastName;
  }
  /** Returns `street`. */
  getStreet(): string {
    return this.street;
  }
  /** Returns `number`. */
  getNumber(): string | undefined {
    return this.number;
  }
  /** Returns `numberExtension`. */
  getNumberExtension(): string | undefined {
    return this.numberExtension;
  }
  /** Returns `postalCode`. */
  getPostalCode(): string {
    return this.postalCode;
  }
  /** Returns `city`. */
  getCity(): string {
    return this.city;
  }
  /** Returns `region`. */
  getRegion(): string | undefined {
    return this.region;
  }
  /** Returns `country`. */
  getCountry(): string {
    return this.country;
  }
  /** Returns `code`. */
  getCode(): string | undefined {
    return this.code;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `mobile`. */
  getMobile(): string | undefined {
    return this.mobile;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `icp`. */
  getIcp(): YesNo | undefined {
    return this.icp;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
}