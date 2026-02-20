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
  private _id: string;
  /** Localized human-readable titles */
  private _titles: LocalizedString[];
  /** Localized human-readable descriptions */
  private _descriptions?: LocalizedString[];
  /** Localized human-readable labels for the action button */
  private _buttonLabels?: LocalizedString[];
  /** Type of the ticket. Used for categorization and filtering purposes */
  private _type?: string;
  /** Status of the ticket */
  private _status: TicketStatus;
  /** Identifier of the admin user assigned to this ticket */
  private _assignedToAdminUserId?: number;
  /** Identifier of the contact associated with this ticket */
  private _contactId?: number;
  /** Identifier of the customer associated with this ticket */
  private _customerId?: number;
  /** Identifier of the product associated with this ticket */
  private _productId?: number;
  /** Identifier of the cluster associated with this ticket */
  private _clusterId?: number;
  /** Identifier of the order associated with this ticket */
  private _orderId?: number;
  /** Identifier of the company associated with this ticket */
  private _companyId?: number;
  /** Email address of the contact associated with this ticket */
  private _email?: string;
  /** Phone number of the contact associated with this ticket */
  private _phone?: string;
  /** External URL associated with this ticket */
  private _externalUrl?: string;
  /** External sources of the ticket */
  private _sources?: Source[];
  /** Timestamp when the ticket was created */
  private _createdAt: string;
  /** Timestamp when the ticket was last modified */
  private _lastModifiedAt: string;
  /** Timestamp when the ticket was picked up by an admin user */
  private _pickedUpAt?: string;
  /** Timestamp when the ticket was completed */
  private _completedAt?: string;
  /** Identifier of the admin user who last modified this ticket */
  private _lastModifiedByAdminUserId?: number;
  /** Identifier of the admin user who created this ticket */
  private _createdByAdminUserId?: number;
  /** The admin user assigned to this ticket */
  private _assignedToAdminUser?: AdminUser;
  /**
   Creates a new instance of Ticket
   */
  constructor(data: Partial<Ticket> = {}) {
    this._id = data.id!;
    this._titles = data.titles!;
    this._descriptions = data.descriptions;
    this._buttonLabels = data.buttonLabels;
    this._type = data.type;
    this._status = data.status!;
    this._assignedToAdminUserId = data.assignedToAdminUserId;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._productId = data.productId;
    this._clusterId = data.clusterId;
    this._orderId = data.orderId;
    this._companyId = data.companyId;
    this._email = data.email;
    this._phone = data.phone;
    this._externalUrl = data.externalUrl;
    this._sources = data.sources;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._pickedUpAt = data.pickedUpAt;
    this._completedAt = data.completedAt;
    this._lastModifiedByAdminUserId = data.lastModifiedByAdminUserId;
    this._createdByAdminUserId = data.createdByAdminUserId;
    this._assignedToAdminUser = data.assignedToAdminUser;
  }
  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }
  get titles(): LocalizedString[] { return this._titles; }
  set titles(value: LocalizedString[]) { this._titles = value; }
  get descriptions(): LocalizedString[] | undefined { return this._descriptions; }
  set descriptions(value: LocalizedString[] | undefined) { this._descriptions = value; }
  get buttonLabels(): LocalizedString[] | undefined { return this._buttonLabels; }
  set buttonLabels(value: LocalizedString[] | undefined) { this._buttonLabels = value; }
  get type(): string | undefined { return this._type; }
  set type(value: string | undefined) { this._type = value; }
  get status(): TicketStatus { return this._status; }
  set status(value: TicketStatus) { this._status = value; }
  get assignedToAdminUserId(): number | undefined { return this._assignedToAdminUserId; }
  set assignedToAdminUserId(value: number | undefined) { this._assignedToAdminUserId = value; }
  get contactId(): number | undefined { return this._contactId; }
  set contactId(value: number | undefined) { this._contactId = value; }
  get customerId(): number | undefined { return this._customerId; }
  set customerId(value: number | undefined) { this._customerId = value; }
  get productId(): number | undefined { return this._productId; }
  set productId(value: number | undefined) { this._productId = value; }
  get clusterId(): number | undefined { return this._clusterId; }
  set clusterId(value: number | undefined) { this._clusterId = value; }
  get orderId(): number | undefined { return this._orderId; }
  set orderId(value: number | undefined) { this._orderId = value; }
  get companyId(): number | undefined { return this._companyId; }
  set companyId(value: number | undefined) { this._companyId = value; }
  get email(): string | undefined { return this._email; }
  set email(value: string | undefined) { this._email = value; }
  get phone(): string | undefined { return this._phone; }
  set phone(value: string | undefined) { this._phone = value; }
  get externalUrl(): string | undefined { return this._externalUrl; }
  set externalUrl(value: string | undefined) { this._externalUrl = value; }
  get sources(): Source[] | undefined { return this._sources; }
  set sources(value: Source[] | undefined) { this._sources = value; }
  get createdAt(): string { return this._createdAt; }
  set createdAt(value: string) { this._createdAt = value; }
  get lastModifiedAt(): string { return this._lastModifiedAt; }
  set lastModifiedAt(value: string) { this._lastModifiedAt = value; }
  get pickedUpAt(): string | undefined { return this._pickedUpAt; }
  set pickedUpAt(value: string | undefined) { this._pickedUpAt = value; }
  get completedAt(): string | undefined { return this._completedAt; }
  set completedAt(value: string | undefined) { this._completedAt = value; }
  get lastModifiedByAdminUserId(): number | undefined { return this._lastModifiedByAdminUserId; }
  set lastModifiedByAdminUserId(value: number | undefined) { this._lastModifiedByAdminUserId = value; }
  get createdByAdminUserId(): number | undefined { return this._createdByAdminUserId; }
  set createdByAdminUserId(value: number | undefined) { this._createdByAdminUserId = value; }
  get assignedToAdminUser(): AdminUser | undefined { return this._assignedToAdminUser; }
  set assignedToAdminUser(value: AdminUser | undefined) { this._assignedToAdminUser = value; }
}
