import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartAddress
 */
export class CartAddress {
  /** Company name */
  company?: string;
  /** Gender */
  gender?: Gender;
  /** First name */
  firstName!: string;
  /** Middle name */
  middleName?: string;
  /** Last name */
  lastName!: string;
  /** Street */
  street!: string;
  /** Street number */
  number?: string;
  /** Street number extension */
  numberExtension?: string;
  /** Postal code */
  postalCode!: string;
  /** City */
  city!: string;
  /** Region */
  region?: string;
  /** Country */
  country!: string;
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
  constructor(data: Partial<CartAddress> = {}) {
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
  getFirstName(): string {
    return this.firstName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `lastName`. */
  getLastName(): string {
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