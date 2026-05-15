import { LocalizedString } from './LocalizedString';
import { ContactsResponse } from './ContactsResponse';
import { CustomersResponse } from './CustomersResponse';
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
  /** contactsPaginated field */
  contactsPaginated!: ContactsResponse;
  /** customersPaginated field */
  customersPaginated!: CustomersResponse;
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
  /** Returns `contactsPaginated` as a ContactsResponse instance (coerced on first access). */
  getContactsPaginated(): ContactsResponse | undefined {
    if (this.contactsPaginated == null) return undefined;
    if (!(this.contactsPaginated instanceof ContactsResponse)) {
      this.contactsPaginated = new ContactsResponse(this.contactsPaginated as any);
    }
    return this.contactsPaginated;
  }
  /** Returns `customersPaginated` as a CustomersResponse instance (coerced on first access). */
  getCustomersPaginated(): CustomersResponse | undefined {
    if (this.customersPaginated == null) return undefined;
    if (!(this.customersPaginated instanceof CustomersResponse)) {
      this.customersPaginated = new CustomersResponse(this.customersPaginated as any);
    }
    return this.customersPaginated;
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