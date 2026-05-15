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
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Pricesheet code */
  code!: string;
  /** Pricesheet name */
  names?: LocalizedString[];
  /** Pricesheet description */
  descriptions?: LocalizedString[];
  /** Pricesheet priority */
  priority!: number;
  /** Readonly */
  readonly!: boolean;
  /** usergroups field */
  usergroups!: string[];
  /** Use contactsPaginated. */
  /** @deprecated Use contactsPaginated. */
  contacts!: Contact[];
  /** contactsPaginated field */
  contactsPaginated!: ContactsResponse;
  /** Use customersPaginated. */
  /** @deprecated Use customersPaginated. */
  customers!: Customer[];
  /** customersPaginated field */
  customersPaginated!: CustomersResponse;
  /** Use companiesPaginated. */
  /** @deprecated Use companiesPaginated. */
  companies!: Company[];
  /** companiesPaginated field */
  companiesPaginated!: CompaniesResponse;
  constructor(data: Partial<Pricesheet> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `code`. */
  getCode(): string {
    return this.code;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `priority`. */
  getPriority(): number {
    return this.priority;
  }
  /** Returns `readonly`. */
  getReadonly(): boolean {
    return this.readonly;
  }
  /** Returns `usergroups`. */
  getUsergroups(): string[] {
    return this.usergroups;
  }
  /** Returns `contacts` as Contact instances (coerced on first access). */
  getContacts(): Contact[] {
    if (!this.contacts) return [];
    this.contacts = this.contacts.map((x: any) => x instanceof Contact ? x : new Contact(x));
    return this.contacts;
  }
  /** Returns `contactsPaginated` as a ContactsResponse instance (coerced on first access). */
  getContactsPaginated(): ContactsResponse | undefined {
    if (this.contactsPaginated == null) return undefined;
    if (!(this.contactsPaginated instanceof ContactsResponse)) {
      this.contactsPaginated = new ContactsResponse(this.contactsPaginated as any);
    }
    return this.contactsPaginated;
  }
  /** Returns `customers` as Customer instances (coerced on first access). */
  getCustomers(): Customer[] {
    if (!this.customers) return [];
    this.customers = this.customers.map((x: any) => x instanceof Customer ? x : new Customer(x));
    return this.customers;
  }
  /** Returns `customersPaginated` as a CustomersResponse instance (coerced on first access). */
  getCustomersPaginated(): CustomersResponse | undefined {
    if (this.customersPaginated == null) return undefined;
    if (!(this.customersPaginated instanceof CustomersResponse)) {
      this.customersPaginated = new CustomersResponse(this.customersPaginated as any);
    }
    return this.customersPaginated;
  }
  /** Returns `companies` as Company instances (coerced on first access). */
  getCompanies(): Company[] {
    if (!this.companies) return [];
    this.companies = this.companies.map((x: any) => x instanceof Company ? x : new Company(x));
    return this.companies;
  }
  /** Returns `companiesPaginated` as a CompaniesResponse instance (coerced on first access). */
  getCompaniesPaginated(): CompaniesResponse | undefined {
    if (this.companiesPaginated == null) return undefined;
    if (!(this.companiesPaginated instanceof CompaniesResponse)) {
      this.companiesPaginated = new CompaniesResponse(this.companiesPaginated as any);
    }
    return this.companiesPaginated;
  }
}