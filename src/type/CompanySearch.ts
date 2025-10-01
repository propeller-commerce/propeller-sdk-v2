import { CompanyAddressSearch } from './CompanyAddressSearch';
import { CompanyContactSearch } from './CompanyContactSearch';
import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanySearch
 */
export class CompanySearch {
  /** Company id */
  private _id: number;
  /** Company name */
  private _name: string;
  /** Company tax number */
  private _taxNumber?: string;
  /** Company coc number */
  private _cocNumber?: string;
  /** Notes of the company */
  private _notes?: string;
  /** Company debtor identifier */
  private _debtorId?: string;
  /** Company email */
  private _email?: string;
  /** Company creation date */
  private _createdAt: string;
  /** Company last modified date */
  private _lastModifiedAt: string;
  /** Company deletion date */
  private _deletedAt?: string;
  /** Addresses assigned to this company. */
  private _addresses: CompanyAddressSearch[];
  /** Contacts part of this company. */
  private _contacts: CompanyContactSearch[];
  /** Attributes of the company. */
  private _attributes: CompanyAttributeSearch[];
  /**
   Creates a new instance of CompanySearch
   */
  constructor(data: Partial<CompanySearch> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._taxNumber = data.taxNumber;
    this._cocNumber = data.cocNumber;
    this._notes = data.notes;
    this._debtorId = data.debtorId;
    this._email = data.email;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._deletedAt = data.deletedAt;
    this._addresses = data.addresses!;
    this._contacts = data.contacts!;
    this._attributes = data.attributes!;
  }
  /**
   Company id
   */
  get id(): number {
    return this._id;
  }
  /**
   Company id
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Company name
   */
  get name(): string {
    return this._name;
  }
  /**
   Company name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Company tax number
   */
  get taxNumber(): string | undefined {
    return this._taxNumber;
  }
  /**
   Company tax number
   */
  set taxNumber(value: string | undefined) {
    this._taxNumber = value;
  }
  /**
   Company coc number
   */
  get cocNumber(): string | undefined {
    return this._cocNumber;
  }
  /**
   Company coc number
   */
  set cocNumber(value: string | undefined) {
    this._cocNumber = value;
  }
  /**
   Notes of the company
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Notes of the company
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Company debtor identifier
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   Company debtor identifier
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   Company email
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   Company email
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Company creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Company creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Company last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Company last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Company deletion date
   */
  get deletedAt(): string | undefined {
    return this._deletedAt;
  }
  /**
   Company deletion date
   */
  set deletedAt(value: string | undefined) {
    this._deletedAt = value;
  }
  /**
   Addresses assigned to this company.
   */
  get addresses(): CompanyAddressSearch[] {
    return this._addresses;
  }
  /**
   Addresses assigned to this company.
   */
  set addresses(value: CompanyAddressSearch[]) {
    this._addresses = value;
  }
  /**
   Contacts part of this company.
   */
  get contacts(): CompanyContactSearch[] {
    return this._contacts;
  }
  /**
   Contacts part of this company.
   */
  set contacts(value: CompanyContactSearch[]) {
    this._contacts = value;
  }
  /**
   Attributes of the company.
   */
  get attributes(): CompanyAttributeSearch[] {
    return this._attributes;
  }
  /**
   Attributes of the company.
   */
  set attributes(value: CompanyAttributeSearch[]) {
    this._attributes = value;
  }
}