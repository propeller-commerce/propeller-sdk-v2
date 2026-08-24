import { TicketStatus } from '../enum/TicketStatus';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { AdminUser } from './AdminUser';
/**
 Object class for Ticket
 Ticket entity representing a support or service request within the system.
 */
export interface Ticket {
  /** Unique identifier for the ticket */
  id: string;
  /** Localized human-readable titles */
  titles: LocalizedString[];
  /** Localized human-readable descriptions */
  descriptions?: LocalizedString[];
  /** Localized human-readable labels for the action button */
  buttonLabels?: LocalizedString[];
  /** Type of the ticket. Used for categorization and filtering purposes */
  type?: string;
  /** Status of the ticket */
  status: TicketStatus;
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
  createdAt: string;
  /** Timestamp when the ticket was last modified */
  lastModifiedAt: string;
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
}
