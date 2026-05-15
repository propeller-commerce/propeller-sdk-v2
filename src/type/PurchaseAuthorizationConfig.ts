import { PurchaseRole } from '../enum/PurchaseRole';
import { Company } from './Company';
import { Contact } from './Contact';
/**
 Object class for PurchaseAuthorizationConfig
 */
export class PurchaseAuthorizationConfig {
  /** The primary ID of the purchase authorization config, uuid v7 format */
  id!: string;
  /** The purchase role of the contact within the company. Defaults to PURCHASER */
  purchaseRole!: PurchaseRole;
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  authorizationLimit?: number;
  /** The creation date of this PurchaseAuthorizationConfig */
  createdAt!: string;
  /** The last modified date of this PurchaseAuthorizationConfig */
  lastModifiedAt!: string;
  /** The company the purchase authorization config is valid for */
  company?: Company;
  /** The contact the purchase authorization config is valid for */
  contact?: Contact;
  constructor(data: Partial<PurchaseAuthorizationConfig> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `purchaseRole`. */
  getPurchaseRole(): PurchaseRole {
    return this.purchaseRole;
  }
  /** Returns `authorizationLimit`. */
  getAuthorizationLimit(): number | undefined {
    return this.authorizationLimit;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `company` as a Company instance (coerced on first access). */
  getCompany(): Company | undefined {
    if (this.company == null) return undefined;
    if (!(this.company instanceof Company)) {
      this.company = new Company(this.company as any);
    }
    return this.company;
  }
  /** Returns `contact` as a Contact instance (coerced on first access). */
  getContact(): Contact | undefined {
    if (this.contact == null) return undefined;
    if (!(this.contact instanceof Contact)) {
      this.contact = new Contact(this.contact as any);
    }
    return this.contact;
  }
}