import { LocalizedString } from './LocalizedString';
import { Contact } from './Contact';
import { ContactsResponse } from './ContactsResponse';
import { Customer } from './Customer';
import { CustomersResponse } from './CustomersResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
/**
 Object class for Pricesheet
 */
export class Pricesheet {
  /** Primary identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Pricesheet code */
  private _code: string;
  /** Pricesheet name */
  private _names?: LocalizedString[];
  /** Pricesheet description */
  private _descriptions?: LocalizedString[];
  /** Pricesheet priority */
  private _priority: number;
  /** Readonly */
  private _readonly: boolean;
  /** usergroups field */
  private _usergroups: string[];
  /** Use contactsPaginated. */
  /** @deprecated Use contactsPaginated. */
  private _contacts: Contact[];
  /** contactsPaginated field */
  private _contactsPaginated: ContactsResponse;
  /** Use customersPaginated. */
  /** @deprecated Use customersPaginated. */
  private _customers: Customer[];
  /** customersPaginated field */
  private _customersPaginated: CustomersResponse;
  /** Use companiesPaginated. */
  /** @deprecated Use companiesPaginated. */
  private _companies: Company[];
  /** companiesPaginated field */
  private _companiesPaginated: CompaniesResponse;
  /**
   Creates a new instance of Pricesheet
   */
  constructor(data: Partial<Pricesheet> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._code = data.code!;
    this._names = data.names;
    this._descriptions = data.descriptions;
    this._priority = data.priority!;
    this._readonly = data.readonly!;
    this._usergroups = data.usergroups!;
    this._contacts = data.contacts!;
    this._contactsPaginated = data.contactsPaginated!;
    this._customers = data.customers!;
    this._customersPaginated = data.customersPaginated!;
    this._companies = data.companies!;
    this._companiesPaginated = data.companiesPaginated!;
  }
  /**
   Primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Primary identifier
   */
  set id(value: string) {
    this._id = value;
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
   Pricesheet code
   */
  get code(): string {
    return this._code;
  }
  /**
   Pricesheet code
   */
  set code(value: string) {
    this._code = value;
  }
  /**
   Pricesheet name
   */
  get names(): LocalizedString[] | undefined {
    return this._names;
  }
  /**
   Pricesheet name
   */
  set names(value: LocalizedString[] | undefined) {
    this._names = value;
  }
  /**
   Pricesheet description
   */
  get descriptions(): LocalizedString[] | undefined {
    return this._descriptions;
  }
  /**
   Pricesheet description
   */
  set descriptions(value: LocalizedString[] | undefined) {
    this._descriptions = value;
  }
  /**
   Pricesheet priority
   */
  get priority(): number {
    return this._priority;
  }
  /**
   Pricesheet priority
   */
  set priority(value: number) {
    this._priority = value;
  }
  /**
   Readonly
   */
  get readonly(): boolean {
    return this._readonly;
  }
  /**
   Readonly
   */
  set readonly(value: boolean) {
    this._readonly = value;
  }
  /**
   usergroups field
   */
  get usergroups(): string[] {
    return this._usergroups;
  }
  /**
   usergroups field
   */
  set usergroups(value: string[]) {
    this._usergroups = value;
  }
  /**
   Use contactsPaginated.
   */
  get contacts(): Contact[] {
    return this._contacts;
  }
  /**
   Use contactsPaginated.
   */
  set contacts(value: Contact[]) {
    this._contacts = value;
  }
  /**
   contactsPaginated field
   */
  get contactsPaginated(): ContactsResponse {
    return this._contactsPaginated;
  }
  /**
   contactsPaginated field
   */
  set contactsPaginated(value: ContactsResponse) {
    this._contactsPaginated = value;
  }
  /**
   Use customersPaginated.
   */
  get customers(): Customer[] {
    return this._customers;
  }
  /**
   Use customersPaginated.
   */
  set customers(value: Customer[]) {
    this._customers = value;
  }
  /**
   customersPaginated field
   */
  get customersPaginated(): CustomersResponse {
    return this._customersPaginated;
  }
  /**
   customersPaginated field
   */
  set customersPaginated(value: CustomersResponse) {
    this._customersPaginated = value;
  }
  /**
   Use companiesPaginated.
   */
  get companies(): Company[] {
    return this._companies;
  }
  /**
   Use companiesPaginated.
   */
  set companies(value: Company[]) {
    this._companies = value;
  }
  /**
   companiesPaginated field
   */
  get companiesPaginated(): CompaniesResponse {
    return this._companiesPaginated;
  }
  /**
   companiesPaginated field
   */
  set companiesPaginated(value: CompaniesResponse) {
    this._companiesPaginated = value;
  }
}