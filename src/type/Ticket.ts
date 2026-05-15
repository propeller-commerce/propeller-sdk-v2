import { TicketStatus } from '../enum/TicketStatus';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { AdminUser } from './AdminUser';
/**
 Object class for Ticket
 Ticket entity representing a support or service request within the system.
 */
export class Ticket {
  /** Unique identifier for the ticket */
  id!: string;
  /** Localized human-readable titles */
  titles!: LocalizedString[];
  /** Localized human-readable descriptions */
  descriptions?: LocalizedString[];
  /** Localized human-readable labels for the action button */
  buttonLabels?: LocalizedString[];
  /** Type of the ticket. Used for categorization and filtering purposes */
  type?: string;
  /** Status of the ticket */
  status!: TicketStatus;
  /** Identifier of the admin user assigned to this ticket */
  assignedToAdminUserId?: number;
  /** Identifier of the contact associated with this ticket */
  contactId?: number;
  /** Identifier of the customer associated with this ticket */
  customerId?: number;
  /** Identifier of the product associated with this ticket */
  productId?: number;
  /** Identifier of the cluster associated with this ticket */
  clusterId?: number;
  /** Identifier of the order associated with this ticket */
  orderId?: number;
  /** Identifier of the company associated with this ticket */
  companyId?: number;
  /** Email address of the contact associated with this ticket */
  email?: string;
  /** Phone number of the contact associated with this ticket */
  phone?: string;
  /** External URL associated with this ticket */
  externalUrl?: string;
  /** External sources of the ticket */
  sources?: Source[];
  /** Timestamp when the ticket was created */
  createdAt!: string;
  /** Timestamp when the ticket was last modified */
  lastModifiedAt!: string;
  /** Timestamp when the ticket was picked up by an admin user */
  pickedUpAt?: string;
  /** Timestamp when the ticket was completed */
  completedAt?: string;
  /** Identifier of the admin user who last modified this ticket */
  lastModifiedByAdminUserId?: number;
  /** Identifier of the admin user who created this ticket */
  createdByAdminUserId?: number;
  /** The admin user assigned to this ticket */
  assignedToAdminUser?: AdminUser;
  constructor(data: Partial<Ticket> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns the title for the given language, falling back to NL. */
  getTitle(language: string = 'NL'): string | undefined {
    const arr = this.titles;
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
  /** Returns the buttonLabel for the given language, falling back to NL. */
  getButtonLabel(language: string = 'NL'): string | undefined {
    const arr = this.buttonLabels;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `type`. */
  getType(): string | undefined {
    return this.type;
  }
  /** Returns `status`. */
  getStatus(): TicketStatus {
    return this.status;
  }
  /** Returns `assignedToAdminUserId`. */
  getAssignedToAdminUserId(): number | undefined {
    return this.assignedToAdminUserId;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
  /** Returns `orderId`. */
  getOrderId(): number | undefined {
    return this.orderId;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `externalUrl`. */
  getExternalUrl(): string | undefined {
    return this.externalUrl;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] | undefined {
    if (!this.sources) return undefined;
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `pickedUpAt`. */
  getPickedUpAt(): string | undefined {
    return this.pickedUpAt;
  }
  /** Returns `completedAt`. */
  getCompletedAt(): string | undefined {
    return this.completedAt;
  }
  /** Returns `lastModifiedByAdminUserId`. */
  getLastModifiedByAdminUserId(): number | undefined {
    return this.lastModifiedByAdminUserId;
  }
  /** Returns `createdByAdminUserId`. */
  getCreatedByAdminUserId(): number | undefined {
    return this.createdByAdminUserId;
  }
  /** Returns `assignedToAdminUser` as a AdminUser instance (coerced on first access). */
  getAssignedToAdminUser(): AdminUser | undefined {
    if (this.assignedToAdminUser == null) return undefined;
    if (!(this.assignedToAdminUser instanceof AdminUser)) {
      this.assignedToAdminUser = new AdminUser(this.assignedToAdminUser as any);
    }
    return this.assignedToAdminUser;
  }
}
