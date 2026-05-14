import { AdminUser } from './AdminUser';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Version control record for order modifications
 * Represents a specific version of an order at a point in time, including complete snapshot data and metadata about who created the revision and when. Used for audit trails, rollback capabilities, and tracking order evolution.
 */
export interface OrderRevision {
  /** ID of the order this revision belongs to */
  orderId: number;
  /** Revision number */
  revisionNumber: number;
  /** ID of the contact who created this revision */
  createdByContactId?: number;
  /** ID of the customer who created this revision */
  createdByCustomerId?: number;
  /** ID of the admin user who created this revision */
  createdByAdminUserId?: number;
  /** Admin user that created the revision */
  createdByAdminUser?: AdminUser;
  /** Date and time when this revision was created */
  createdAt: string;
  /** The revision this was created from */
  createdFromRevisionNumber?: number;
  /** Complete snapshot of the order data at the time this revision was created */
  snapshot: any;
  /** Contact that created the revision */
  createdByContact?: Contact;
  /** Customer that created the revision */
  createdByCustomer?: Customer;
}