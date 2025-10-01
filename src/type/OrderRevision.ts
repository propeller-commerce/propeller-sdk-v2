import { AdminUser } from './AdminUser';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Version control record for order modifications
 * Represents a specific version of an order at a point in time, including complete snapshot data and metadata about who created the revision and when. Used for audit trails, rollback capabilities, and tracking order evolution.
 */
export class OrderRevision {
  /** ID of the order this revision belongs to */
  private _orderId: number;
  /** Revision number */
  private _revisionNumber: number;
  /** ID of the contact who created this revision */
  private _createdByContactId?: number;
  /** ID of the customer who created this revision */
  private _createdByCustomerId?: number;
  /** ID of the admin user who created this revision */
  private _createdByAdminUserId?: number;
  /** Admin user that created the revision */
  private _createdByAdminUser?: AdminUser;
  /** Date and time when this revision was created */
  private _createdAt: string;
  /** The revision this was created from */
  private _createdFromRevisionNumber?: number;
  /** Complete snapshot of the order data at the time this revision was created */
  private _snapshot: any;
  /** Contact that created the revision */
  private _createdByContact?: Contact;
  /** Customer that created the revision */
  private _createdByCustomer?: Customer;
  /**
   Creates a new instance of OrderRevision
   */
  constructor(data: Partial<OrderRevision> = {}) {
    this._orderId = data.orderId!;
    this._revisionNumber = data.revisionNumber!;
    this._createdByContactId = data.createdByContactId;
    this._createdByCustomerId = data.createdByCustomerId;
    this._createdByAdminUserId = data.createdByAdminUserId;
    this._createdByAdminUser = data.createdByAdminUser;
    this._createdAt = data.createdAt!;
    this._createdFromRevisionNumber = data.createdFromRevisionNumber;
    this._snapshot = data.snapshot!;
    this._createdByContact = data.createdByContact;
    this._createdByCustomer = data.createdByCustomer;
  }
  /**
   ID of the order this revision belongs to
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   ID of the order this revision belongs to
   */
  set orderId(value: number) {
    this._orderId = value;
  }
  /**
   Revision number
   */
  get revisionNumber(): number {
    return this._revisionNumber;
  }
  /**
   Revision number
   */
  set revisionNumber(value: number) {
    this._revisionNumber = value;
  }
  /**
   ID of the contact who created this revision
   */
  get createdByContactId(): number | undefined {
    return this._createdByContactId;
  }
  /**
   ID of the contact who created this revision
   */
  set createdByContactId(value: number | undefined) {
    this._createdByContactId = value;
  }
  /**
   ID of the customer who created this revision
   */
  get createdByCustomerId(): number | undefined {
    return this._createdByCustomerId;
  }
  /**
   ID of the customer who created this revision
   */
  set createdByCustomerId(value: number | undefined) {
    this._createdByCustomerId = value;
  }
  /**
   ID of the admin user who created this revision
   */
  get createdByAdminUserId(): number | undefined {
    return this._createdByAdminUserId;
  }
  /**
   ID of the admin user who created this revision
   */
  set createdByAdminUserId(value: number | undefined) {
    this._createdByAdminUserId = value;
  }
  /**
   Admin user that created the revision
   */
  get createdByAdminUser(): AdminUser | undefined {
    return this._createdByAdminUser;
  }
  /**
   Admin user that created the revision
   */
  set createdByAdminUser(value: AdminUser | undefined) {
    this._createdByAdminUser = value;
  }
  /**
   Date and time when this revision was created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Date and time when this revision was created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The revision this was created from
   */
  get createdFromRevisionNumber(): number | undefined {
    return this._createdFromRevisionNumber;
  }
  /**
   The revision this was created from
   */
  set createdFromRevisionNumber(value: number | undefined) {
    this._createdFromRevisionNumber = value;
  }
  /**
   Complete snapshot of the order data at the time this revision was created
   */
  get snapshot(): any {
    return this._snapshot;
  }
  /**
   Complete snapshot of the order data at the time this revision was created
   */
  set snapshot(value: any) {
    this._snapshot = value;
  }
  /**
   Contact that created the revision
   */
  get createdByContact(): Contact | undefined {
    return this._createdByContact;
  }
  /**
   Contact that created the revision
   */
  set createdByContact(value: Contact | undefined) {
    this._createdByContact = value;
  }
  /**
   Customer that created the revision
   */
  get createdByCustomer(): Customer | undefined {
    return this._createdByCustomer;
  }
  /**
   Customer that created the revision
   */
  set createdByCustomer(value: Customer | undefined) {
    this._createdByCustomer = value;
  }
}