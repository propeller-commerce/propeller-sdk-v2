import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for CartAddress
 */
export class CartAddress {
  /** Company name */
  private _company?: string;
  /** Gender */
  private _gender?: Gender;
  /** First name */
  private _firstName: string;
  /** Middle name */
  private _middleName?: string;
  /** Last name */
  private _lastName: string;
  /** Street */
  private _street: string;
  /** Street number */
  private _number?: string;
  /** Street number extension */
  private _numberExtension?: string;
  /** Postal code */
  private _postalCode: string;
  /** City */
  private _city: string;
  /** Region */
  private _region?: string;
  /** Country */
  private _country: string;
  /** Code */
  private _code?: string;
  /** Email */
  private _email?: string;
  /** Mobile phone number */
  private _mobile?: string;
  /** Phone number */
  private _phone?: string;
  /** Is this an ICP address? */
  private _icp?: YesNo;
  /** Notes */
  private _notes?: string;
  /**
   Creates a new instance of CartAddress
   */
  constructor(data: Partial<CartAddress> = {}) {
    this._company = data.company;
    this._gender = data.gender;
    this._firstName = data.firstName!;
    this._middleName = data.middleName;
    this._lastName = data.lastName!;
    this._street = data.street!;
    this._number = data.number;
    this._numberExtension = data.numberExtension;
    this._postalCode = data.postalCode!;
    this._city = data.city!;
    this._region = data.region;
    this._country = data.country!;
    this._code = data.code;
    this._email = data.email;
    this._mobile = data.mobile;
    this._phone = data.phone;
    this._icp = data.icp;
    this._notes = data.notes;
  }
  /**
   Company name
   */
  get company(): string | undefined {
    return this._company;
  }
  /**
   Company name
   */
  set company(value: string | undefined) {
    this._company = value;
  }
  /**
   Gender
   */
  get gender(): Gender | undefined {
    return this._gender;
  }
  /**
   Gender
   */
  set gender(value: Gender | undefined) {
    this._gender = value;
  }
  /**
   First name
   */
  get firstName(): string {
    return this._firstName;
  }
  /**
   First name
   */
  set firstName(value: string) {
    this._firstName = value;
  }
  /**
   Middle name
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   Middle name
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   Last name
   */
  get lastName(): string {
    return this._lastName;
  }
  /**
   Last name
   */
  set lastName(value: string) {
    this._lastName = value;
  }
  /**
   Street
   */
  get street(): string {
    return this._street;
  }
  /**
   Street
   */
  set street(value: string) {
    this._street = value;
  }
  /**
   Street number
   */
  get number(): string | undefined {
    return this._number;
  }
  /**
   Street number
   */
  set number(value: string | undefined) {
    this._number = value;
  }
  /**
   Street number extension
   */
  get numberExtension(): string | undefined {
    return this._numberExtension;
  }
  /**
   Street number extension
   */
  set numberExtension(value: string | undefined) {
    this._numberExtension = value;
  }
  /**
   Postal code
   */
  get postalCode(): string {
    return this._postalCode;
  }
  /**
   Postal code
   */
  set postalCode(value: string) {
    this._postalCode = value;
  }
  /**
   City
   */
  get city(): string {
    return this._city;
  }
  /**
   City
   */
  set city(value: string) {
    this._city = value;
  }
  /**
   Region
   */
  get region(): string | undefined {
    return this._region;
  }
  /**
   Region
   */
  set region(value: string | undefined) {
    this._region = value;
  }
  /**
   Country
   */
  get country(): string {
    return this._country;
  }
  /**
   Country
   */
  set country(value: string) {
    this._country = value;
  }
  /**
   Code
   */
  get code(): string | undefined {
    return this._code;
  }
  /**
   Code
   */
  set code(value: string | undefined) {
    this._code = value;
  }
  /**
   Email
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   Email
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Mobile phone number
   */
  get mobile(): string | undefined {
    return this._mobile;
  }
  /**
   Mobile phone number
   */
  set mobile(value: string | undefined) {
    this._mobile = value;
  }
  /**
   Phone number
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   Phone number
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   Is this an ICP address?
   */
  get icp(): YesNo | undefined {
    return this._icp;
  }
  /**
   Is this an ICP address?
   */
  set icp(value: YesNo | undefined) {
    this._icp = value;
  }
  /**
   Notes
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Notes
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
}