import { YesNo } from '../enum/YesNo';
import { AddressType } from '../enum/AddressType';
/**
 Object class for CompanyAddressSearch
 */
export class CompanyAddressSearch {
  /** Address primary identifier */
  private _id: number;
  /** First name the address applies to */
  private _firstName?: string;
  /** Last name the address applies to */
  private _lastName?: string;
  /** Address street */
  private _street: string;
  /** Address street number */
  private _number?: string;
  /** Address street number extension */
  private _numberExtension?: string;
  /** Address postal code */
  private _postalCode: string;
  /** Address city */
  private _city: string;
  /** Address region */
  private _region?: string;
  /** Address country */
  private _country: string;
  /** Fixed phone number that applies to this address [min: 6, max: 30] */
  private _phone?: string;
  /** Mobile phone number that applies to this address [min: 6, max: 30] */
  private _mobile?: string;
  /** Email that applies to this address [valid email format needed] */
  private _email?: string;
  /** Address code */
  private _code?: string;
  /** Address delivery notes */
  private _notes?: string;
  /** Address friendly descriptive name */
  private _name?: string;
  /** Indicates whether the address is default for its type */
  private _isDefault: YesNo;
  /** Address type [one of 'home', 'delivery', 'invoice'] */
  private _type: AddressType;
  /** Indicates whether the address is active */
  private _active?: YesNo;
  /** Date when the address was created */
  private _createdAt: string;
  /** Date when the address was last modified */
  private _lastModifiedAt: string;
  /**
   Creates a new instance of CompanyAddressSearch
   */
  constructor(data: Partial<CompanyAddressSearch> = {}) {
    this._id = data.id!;
    this._firstName = data.firstName;
    this._lastName = data.lastName;
    this._street = data.street!;
    this._number = data.number;
    this._numberExtension = data.numberExtension;
    this._postalCode = data.postalCode!;
    this._city = data.city!;
    this._region = data.region;
    this._country = data.country!;
    this._phone = data.phone;
    this._mobile = data.mobile;
    this._email = data.email;
    this._code = data.code;
    this._notes = data.notes;
    this._name = data.name;
    this._isDefault = data.isDefault!;
    this._type = data.type!;
    this._active = data.active;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
  }
  /**
   Address primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Address primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   First name the address applies to
   */
  get firstName(): string | undefined {
    return this._firstName;
  }
  /**
   First name the address applies to
   */
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  /**
   Last name the address applies to
   */
  get lastName(): string | undefined {
    return this._lastName;
  }
  /**
   Last name the address applies to
   */
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  /**
   Address street
   */
  get street(): string {
    return this._street;
  }
  /**
   Address street
   */
  set street(value: string) {
    this._street = value;
  }
  /**
   Address street number
   */
  get number(): string | undefined {
    return this._number;
  }
  /**
   Address street number
   */
  set number(value: string | undefined) {
    this._number = value;
  }
  /**
   Address street number extension
   */
  get numberExtension(): string | undefined {
    return this._numberExtension;
  }
  /**
   Address street number extension
   */
  set numberExtension(value: string | undefined) {
    this._numberExtension = value;
  }
  /**
   Address postal code
   */
  get postalCode(): string {
    return this._postalCode;
  }
  /**
   Address postal code
   */
  set postalCode(value: string) {
    this._postalCode = value;
  }
  /**
   Address city
   */
  get city(): string {
    return this._city;
  }
  /**
   Address city
   */
  set city(value: string) {
    this._city = value;
  }
  /**
   Address region
   */
  get region(): string | undefined {
    return this._region;
  }
  /**
   Address region
   */
  set region(value: string | undefined) {
    this._region = value;
  }
  /**
   Address country
   */
  get country(): string {
    return this._country;
  }
  /**
   Address country
   */
  set country(value: string) {
    this._country = value;
  }
  /**
   Fixed phone number that applies to this address [min: 6, max: 30]
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   Fixed phone number that applies to this address [min: 6, max: 30]
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   Mobile phone number that applies to this address [min: 6, max: 30]
   */
  get mobile(): string | undefined {
    return this._mobile;
  }
  /**
   Mobile phone number that applies to this address [min: 6, max: 30]
   */
  set mobile(value: string | undefined) {
    this._mobile = value;
  }
  /**
   Email that applies to this address [valid email format needed]
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   Email that applies to this address [valid email format needed]
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Address code
   */
  get code(): string | undefined {
    return this._code;
  }
  /**
   Address code
   */
  set code(value: string | undefined) {
    this._code = value;
  }
  /**
   Address delivery notes
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Address delivery notes
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Address friendly descriptive name
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Address friendly descriptive name
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   Indicates whether the address is default for its type
   */
  get isDefault(): YesNo {
    return this._isDefault;
  }
  /**
   Indicates whether the address is default for its type
   */
  set isDefault(value: YesNo) {
    this._isDefault = value;
  }
  /**
   Address type [one of 'home', 'delivery', 'invoice']
   */
  get type(): AddressType {
    return this._type;
  }
  /**
   Address type [one of 'home', 'delivery', 'invoice']
   */
  set type(value: AddressType) {
    this._type = value;
  }
  /**
   Indicates whether the address is active
   */
  get active(): YesNo | undefined {
    return this._active;
  }
  /**
   Indicates whether the address is active
   */
  set active(value: YesNo | undefined) {
    this._active = value;
  }
  /**
   Date when the address was created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Date when the address was created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Date when the address was last modified
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Date when the address was last modified
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
}