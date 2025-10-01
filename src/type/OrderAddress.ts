import { Gender } from '../enum/Gender';
import { AddressType } from '../enum/AddressType';
import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderAddress
 */
export class OrderAddress {
  /** Address primary identifier */
  private _id: number;
  /** The ID of the Order the address belongs to */
  private _orderId: number;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** First name the address applies to */
  private _firstName?: string;
  /** Middle name the address applies to */
  private _middleName?: string;
  /** Last name the address applies to */
  private _lastName?: string;
  /** Gender the address applies to */
  private _gender: Gender;
  /** Company the address applies to */
  private _company?: string;
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
  /** Address type [one of: delivery, invoice, home] */
  private _type: AddressType;
  /** ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad */
  private _icp: YesNo;
  /** Address company domain url */
  private _url?: string;
  /** Address friendly descriptive name */
  private _name?: string;
  /**
   Creates a new instance of OrderAddress
   */
  constructor(data: Partial<OrderAddress> = {}) {
    this._id = data.id!;
    this._orderId = data.orderId!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._firstName = data.firstName;
    this._middleName = data.middleName;
    this._lastName = data.lastName;
    this._gender = data.gender!;
    this._company = data.company;
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
    this._type = data.type!;
    this._icp = data.icp!;
    this._url = data.url;
    this._name = data.name;
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
   The ID of the Order the address belongs to
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   The ID of the Order the address belongs to
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
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
   Middle name the address applies to
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   Middle name the address applies to
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
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
   Gender the address applies to
   */
  get gender(): Gender {
    return this._gender;
  }
  /**
   Gender the address applies to
   */
  set gender(value: Gender) {
    this._gender = value;
  }
  /**
   Company the address applies to
   */
  get company(): string | undefined {
    return this._company;
  }
  /**
   Company the address applies to
   */
  set company(value: string | undefined) {
    this._company = value;
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
   Address type [one of: delivery, invoice, home]
   */
  get type(): AddressType {
    return this._type;
  }
  /**
   Address type [one of: delivery, invoice, home]
   */
  set type(value: AddressType) {
    this._type = value;
  }
  /**
   ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
   */
  get icp(): YesNo {
    return this._icp;
  }
  /**
   ICP address field defines whether tax should be applied to an order if the address is selected as a delivery address. Used when shipping b2b order abroad
   */
  set icp(value: YesNo) {
    this._icp = value;
  }
  /**
   Address company domain url
   */
  get url(): string | undefined {
    return this._url;
  }
  /**
   Address company domain url
   */
  set url(value: string | undefined) {
    this._url = value;
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
}