import { Gender } from '../enum/Gender';
import { AddressType } from '../enum/AddressType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderAddress
 */
export class OrderAddress {
  /** Address primary identifier */
  id!: number;
  /** The ID of the Order the address belongs to */
  orderId!: number;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** First name the address applies to */
  firstName?: string;
  /** Middle name the address applies to */
  middleName?: string;
  /** Last name the address applies to */
  lastName?: string;
  /** Gender the address applies to */
  gender!: Gender;
  /** Company the address applies to */
  company?: string;
  /** Address street */
  street!: string;
  /** Address street number */
  number?: string;
  /** Address street number extension */
  numberExtension?: string;
  /** Address postal code */
  postalCode!: string;
  /** Address city */
  city!: string;
  /** Address region */
  region?: string;
  /** Address country */
  country!: string;
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
  /** Address type [one of: delivery, invoice, home] */
  type!: AddressType;
  /** ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad */
  icp!: YesNo;
  /** Address company domain url */
  url?: string;
  /** Address friendly descriptive name */
  name?: string;
  constructor(data: Partial<OrderAddress> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `orderId`. */
  getOrderId(): number {
    return this.orderId;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
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
  /** Returns `gender`. */
  getGender(): Gender {
    return this.gender;
  }
  /** Returns `company`. */
  getCompany(): string | undefined {
    return this.company;
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
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `mobile`. */
  getMobile(): string | undefined {
    return this.mobile;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `code`. */
  getCode(): string | undefined {
    return this.code;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `type`. */
  getType(): AddressType {
    return this.type;
  }
  /** Returns `icp`. */
  getIcp(): YesNo {
    return this.icp;
  }
  /** Returns `url`. */
  getUrl(): string | undefined {
    return this.url;
  }
  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
}