import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for MagicToken
 */
export class MagicToken {
  /** Magic token primary identifier */
  id!: string;
  /** Identifier of the associated contact, use either contactId or customerId */
  contactId?: number;
  /** Identifier of the associated customer, use either customerId or contactId */
  customerId?: number;
  /** Expiration date and time of the magic token */
  expiresAt?: string;
  /** Last accessed date and time of the magic token */
  lastAccessedAt?: string;
  /** Number of failed login attempts using the magic token */
  failedLogins?: number;
  /** Number of successful login attempts using the magic token */
  successfulLogins?: number;
  /** Indicates if the magic token is for one-time use only */
  oneTimeUse!: boolean;
  /** Additional information or metadata associated with the magic token */
  extra?: string[];
  /** contact field */
  contact?: Contact;
  /** customer field */
  customer?: Customer;
  constructor(data: Partial<MagicToken> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `expiresAt`. */
  getExpiresAt(): string | undefined {
    return this.expiresAt;
  }
  /** Returns `lastAccessedAt`. */
  getLastAccessedAt(): string | undefined {
    return this.lastAccessedAt;
  }
  /** Returns `failedLogins`. */
  getFailedLogins(): number | undefined {
    return this.failedLogins;
  }
  /** Returns `successfulLogins`. */
  getSuccessfulLogins(): number | undefined {
    return this.successfulLogins;
  }
  /** Returns `oneTimeUse`. */
  getOneTimeUse(): boolean {
    return this.oneTimeUse;
  }
  /** Returns `extra`. */
  getExtra(): string[] | undefined {
    return this.extra;
  }
  /** Returns `contact` as a Contact instance (coerced on first access). */
  getContact(): Contact | undefined {
    if (this.contact == null) return undefined;
    if (!(this.contact instanceof Contact)) {
      this.contact = new Contact(this.contact as any);
    }
    return this.contact;
  }
  /** Returns `customer` as a Customer instance (coerced on first access). */
  getCustomer(): Customer | undefined {
    if (this.customer == null) return undefined;
    if (!(this.customer instanceof Customer)) {
      this.customer = new Customer(this.customer as any);
    }
    return this.customer;
  }
}