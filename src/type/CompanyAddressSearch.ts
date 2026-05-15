import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Object class for CompanyAddressSearch
 */
export class CompanyAddressSearch {
  /** Address primary identifier */
  id!: number;
  /** First name the address applies to */
  firstName?: string;
  /** Last name the address applies to */
  lastName?: string;
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
  /** Address friendly descriptive name */
  name?: string;
  /** Indicates whether the address is default for its type */
  isDefault!: YesNo;
  /** Address type [one of 'home', 'delivery', 'invoice'] */
  type!: AddressType;
  /** Indicates whether the address is active */
  active?: YesNo;
  /** Date when the address was created */
  createdAt!: string;
  /** Date when the address was last modified */
  lastModifiedAt!: string;
  constructor(data: Partial<CompanyAddressSearch> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `firstName`. */
  getFirstName(): string | undefined {
    return this.firstName;
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
  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
  /** Returns `isDefault`. */
  getIsDefault(): YesNo {
    return this.isDefault;
  }
  /** Returns `type`. */
  getType(): AddressType {
    return this.type;
  }
  /** Returns `active`. */
  getActive(): YesNo | undefined {
    return this.active;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
}