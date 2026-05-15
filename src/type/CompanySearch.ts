import { CompanyAddressSearch } from './CompanyAddressSearch';
import { CompanyContactSearch } from './CompanyContactSearch';
import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanySearch
 */
export class CompanySearch {
  /** Company id */
  id!: number;
  /** Company name */
  name!: string;
  /** Company tax number */
  taxNumber?: string;
  /** Company coc number */
  cocNumber?: string;
  /** Notes of the company */
  notes?: string;
  /** Company debtor identifier */
  debtorId?: string;
  /** Company email */
  email?: string;
  /** Company creation date */
  createdAt!: string;
  /** Company last modified date */
  lastModifiedAt!: string;
  /** Company deletion date */
  deletedAt?: string;
  /** Addresses assigned to this company. */
  addresses!: CompanyAddressSearch[];
  /** Contacts part of this company. */
  contacts!: CompanyContactSearch[];
  /** Attributes of the company. */
  attributes!: CompanyAttributeSearch[];
  constructor(data: Partial<CompanySearch> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `taxNumber`. */
  getTaxNumber(): string | undefined {
    return this.taxNumber;
  }
  /** Returns `cocNumber`. */
  getCocNumber(): string | undefined {
    return this.cocNumber;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `deletedAt`. */
  getDeletedAt(): string | undefined {
    return this.deletedAt;
  }
  /** Returns `addresses` as CompanyAddressSearch instances (coerced on first access). */
  getAddresses(): CompanyAddressSearch[] {
    if (!this.addresses) return [];
    this.addresses = this.addresses.map((x: any) => x instanceof CompanyAddressSearch ? x : new CompanyAddressSearch(x));
    return this.addresses;
  }
  /** Returns `contacts` as CompanyContactSearch instances (coerced on first access). */
  getContacts(): CompanyContactSearch[] {
    if (!this.contacts) return [];
    this.contacts = this.contacts.map((x: any) => x instanceof CompanyContactSearch ? x : new CompanyContactSearch(x));
    return this.contacts;
  }
  /** Returns `attributes` as CompanyAttributeSearch instances (coerced on first access). */
  getAttributes(): CompanyAttributeSearch[] {
    if (!this.attributes) return [];
    this.attributes = this.attributes.map((x: any) => x instanceof CompanyAttributeSearch ? x : new CompanyAttributeSearch(x));
    return this.attributes;
  }
}