import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderAddress
 */
export class TenderAddress {
  /** Address company */
  private _company?: string;
  /** Address contact gender */
  private _gender?: Gender;
  /** Address contact first name */
  private _firstName?: string;
  /** Address contact middle name */
  private _middleName?: string;
  /** Address contact last name */
  private _lastName?: string;
  /** Street */
  private _street: string;
  /** Number */
  private _number?: string;
  /** Number extension */
  private _numberExtension?: string;
  /** Postal code */
  private _postalCode: string;
  /** City */
  private _city: string;
  /** Region */
  private _region?: string;
  /** Country code */
  private _country: string;
  /** Address code */
  private _code?: string;
  /** Address contact email */
  private _email?: string;
  /** Address contact mobile phone number */
  private _mobile?: string;
  /** Address contact phone number */
  private _phone?: string;
  /** ICP is Yes when taxes do not apply for shipping to the given address/ country */
  private _icp?: YesNo;
  /** Notes, remarks, etc. */
  private _notes?: string;
  /**
   Creates a new instance of TenderAddress
   */
  constructor(data: Partial<TenderAddress> = {}) {
    this._company = data.company;
    this._gender = data.gender;
    this._firstName = data.firstName;
    this._middleName = data.middleName;
    this._lastName = data.lastName;
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
   Address company
   */
  get company(): string | undefined {
    return this._company;
  }
  /**
   Address company
   */
  set company(value: string | undefined) {
    this._company = value;
  }
  /**
   Address contact gender
   */
  get gender(): Gender | undefined {
    return this._gender;
  }
  /**
   Address contact gender
   */
  set gender(value: Gender | undefined) {
    this._gender = value;
  }
  /**
   Address contact first name
   */
  get firstName(): string | undefined {
    return this._firstName;
  }
  /**
   Address contact first name
   */
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  /**
   Address contact middle name
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   Address contact middle name
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   Address contact last name
   */
  get lastName(): string | undefined {
    return this._lastName;
  }
  /**
   Address contact last name
   */
  set lastName(value: string | undefined) {
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
   Number
   */
  get number(): string | undefined {
    return this._number;
  }
  /**
   Number
   */
  set number(value: string | undefined) {
    this._number = value;
  }
  /**
   Number extension
   */
  get numberExtension(): string | undefined {
    return this._numberExtension;
  }
  /**
   Number extension
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
   Country code
   */
  get country(): string {
    return this._country;
  }
  /**
   Country code
   */
  set country(value: string) {
    this._country = value;
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
   Address contact email
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   Address contact email
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Address contact mobile phone number
   */
  get mobile(): string | undefined {
    return this._mobile;
  }
  /**
   Address contact mobile phone number
   */
  set mobile(value: string | undefined) {
    this._mobile = value;
  }
  /**
   Address contact phone number
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   Address contact phone number
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   ICP is Yes when taxes do not apply for shipping to the given address/ country
   */
  get icp(): YesNo | undefined {
    return this._icp;
  }
  /**
   ICP is Yes when taxes do not apply for shipping to the given address/ country
   */
  set icp(value: YesNo | undefined) {
    this._icp = value;
  }
  /**
   Notes, remarks, etc.
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Notes, remarks, etc.
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
}