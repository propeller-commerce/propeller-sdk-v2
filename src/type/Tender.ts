import { OrderType } from '../enum/OrderType';
import { TenderAddress } from './TenderAddress';
import { TenderMainItem } from './TenderMainItem';
import { TenderPayment } from './TenderPayment';
import { TenderPostage } from './TenderPostage';
import { TenderTotal } from './TenderTotal';
import { TenderTaxLevel } from './TenderTaxLevel';
import { TenderCarrier } from './TenderCarrier';
import { TenderPaymethod } from './TenderPaymethod';
import { Contact } from './Contact';
import { Customer } from './Customer';
import { Company } from './Company';
/**
 Comprehensive tender entity representing a potential order in the system.
 * Tenders are draft orders that contain all necessary information for order processing including customer details, items, pricing, addresses, payment methods, and shipping information. They can be modified, processed into orders, or deleted as needed.
 */
export class Tender {
  /** Unique identifier for the tender.
   * This is the primary key used to reference and manage the tender throughout its lifecycle. */
  private _tenderId: string;
  /** Associated order identifier when tender was created from an existing order.
   * Links the tender to its source order for reference and audit purposes. */
  private _orderId?: number;
  /** Identifier of the user who owns this tender.
   * Represents the primary responsible party for the tender management and processing. */
  private _ownerId?: number;
  /** Classification of the tender type.
   * Determines the processing workflow and business rules that apply to this tender. */
  private _type: OrderType;
  /** Legacy site identifier where the tender was created.
   * Historical reference maintained for compatibility purposes. */
  private _siteId?: number;
  /** Sales channel identifier where the tender originated.
   * Identifies the specific sales channel (website, mobile app, etc.) used to create this tender. */
  private _channelId?: number;
  /** Shop identifier that owns this tender.
   * Determines which business unit or location is responsible for fulfilling this tender. */
  private _shopId: number;
  /** Timestamp when the tender was initially created.
   * Records the exact moment this tender was first established in the system. */
  private _createdAt: string;
  /** Identifier of the user who created this tender.
   * Tracks the originator of the tender for audit and accountability purposes. */
  private _createdBy?: number;
  /** Timestamp of the most recent modification to the tender.
   * Updates automatically whenever any aspect of the tender is changed. */
  private _lastModifiedAt: string;
  /** Identifier of the user who last modified this tender.
   * Tracks the most recent editor for audit and accountability purposes. */
  private _lastModifiedBy?: number;
  /** Contact person identifier associated with this tender.
   * Used in combination with companyId to identify the specific contact person within a company who is responsible for this tender. */
  private _contactId?: number;
  /** Customer identifier for individual customer tenders.
   * Used for direct customer relationships where no company association is required. */
  private _customerId?: number;
  /** Company identifier for business-to-business tenders.
   * Used in combination with contactId to establish the company context for the tender. */
  private _companyId?: number;
  /** The invoice userId for this tender */
  private _invoiceUserId?: number;
  /** Tender/order status */
  private _status: string;
  /** User's first name */
  private _firstName?: string;
  /** User's middle name */
  private _middleName?: string;
  /** User's last name */
  private _lastName?: string;
  /** User's email */
  private _email: string;
  /** Invoice company debtor ID */
  private _debtorId?: string;
  /** The address the invoice for the order should be sent to */
  private _invoiceAddress?: TenderAddress;
  /** The address the order should be shipped to */
  private _deliveryAddress?: TenderAddress;
  /** Tender/order main item count */
  private _itemCount?: number;
  /** The tender/order items */
  private _items?: TenderMainItem[];
  /** The tender/order bonusItems */
  private _bonusItems?: TenderMainItem[];
  /** Payment data for this tender/order */
  private _paymentData?: TenderPayment;
  /** Postage data for this tender/order */
  private _postageData?: TenderPostage;
  /** Tender total */
  private _total?: TenderTotal;
  /** Amount of tax that applies to this tender/order per tax code */
  private _taxLevels?: TenderTaxLevel[];
  /** List of selectable carriers */
  private _carriers?: TenderCarrier[];
  /** List of selectable payment methods for this tender, including non allowed for the applied user */
  private _payMethods?: TenderPaymethod[];
  /** Tender/order origin */
  private _source?: string;
  /** Total amount of valuePoints that apply to this tender/order */
  private _valuePoints?: number;
  /** Indicates whether incentives are already applied */
  private _incentivesApplied?: boolean;
  /** Tender/order accumulated credit points */
  private _creditPoints?: number;
  /** Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout */
  private _actionCode?: string;
  /** User's reference for this tender */
  private _reference?: string;
  /** User's remarks for this tender */
  private _remarks?: string;
  /** The language for this tender */
  private _language?: string;
  /** The currency for this tender */
  private _currency?: string;
  /** The currency ratio for this tender */
  private _currencyRatio?: number;
  /** The order's ID in an external system */
  private _externalId?: string;
  /** Additional information field that can be stored with a tender/order */
  private _extra3?: string;
  /** Additional information field that can be stored with a tender/order */
  private _extra4?: string;
  /** Indicates whether tender can be edited */
  private _isEditable?: boolean;
  /** Valid until date (Display Only!) */
  private _validUntil?: string;
  /** Contact person associated with this tender.
   * Returns the specific contact who is responsible for or involved in this tender process. Used for direct communication and relationship management. */
  private _contact?: Contact;
  /** Customer associated with this tender.
   * Returns the customer who initiated or is the subject of this tender. Used for customer relationship management and tender tracking. */
  private _customer?: Customer;
  /** Company associated with this tender.
   * Returns the company involved in this tender process. Used for organizational context and access control within the tender management system. */
  private _company?: Company;
  /** List of tender revisions for version control and audit purposes */
  private _revisions?: any[];
  /** Public visibility flag for tender sharing and collaboration */
  private _public?: boolean;
  /** Current revision number for version tracking */
  private _revisionNumber?: number;
  /** Public version number for external sharing */
  private _publicVersionNumber?: number;
  /** Invalid status flag indicating tender issues */
  private _invalid?: boolean;
  /** Reason for tender invalidation if applicable */
  private _invalidationReason?: string;
  /** Admin user ID who created this tender */
  private _createdByAdminUserId?: number;
  /** Contact user ID who created this tender */
  private _createdByContactId?: number;
  /** Customer user ID who created this tender */
  private _createdByCustomerId?: number;
  /** Source revision number when tender was created from existing revision */
  private _createdFromRevisionNumber?: number;
  /**
   Creates a new instance of Tender
   */
  constructor(data: Partial<Tender> = {}) {
    this._tenderId = data.tenderId!;
    this._orderId = data.orderId;
    this._ownerId = data.ownerId;
    this._type = data.type!;
    this._siteId = data.siteId;
    this._channelId = data.channelId;
    this._shopId = data.shopId!;
    this._createdAt = data.createdAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._lastModifiedBy = data.lastModifiedBy;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._companyId = data.companyId;
    this._invoiceUserId = data.invoiceUserId;
    this._status = data.status!;
    this._firstName = data.firstName;
    this._middleName = data.middleName;
    this._lastName = data.lastName;
    this._email = data.email!;
    this._debtorId = data.debtorId;
    this._invoiceAddress = data.invoiceAddress;
    this._deliveryAddress = data.deliveryAddress;
    this._itemCount = data.itemCount;
    this._items = data.items;
    this._bonusItems = data.bonusItems;
    this._paymentData = data.paymentData;
    this._postageData = data.postageData;
    this._total = data.total;
    this._taxLevels = data.taxLevels;
    this._carriers = data.carriers;
    this._payMethods = data.payMethods;
    this._source = data.source;
    this._valuePoints = data.valuePoints;
    this._incentivesApplied = data.incentivesApplied;
    this._creditPoints = data.creditPoints;
    this._actionCode = data.actionCode;
    this._reference = data.reference;
    this._remarks = data.remarks;
    this._language = data.language;
    this._currency = data.currency;
    this._currencyRatio = data.currencyRatio;
    this._externalId = data.externalId;
    this._extra3 = data.extra3;
    this._extra4 = data.extra4;
    this._isEditable = data.isEditable;
    this._validUntil = data.validUntil;
    this._contact = data.contact;
    this._customer = data.customer;
    this._company = data.company;
    this._revisions = data.revisions;
    this._public = data.public;
    this._revisionNumber = data.revisionNumber;
    this._publicVersionNumber = data.publicVersionNumber;
    this._invalid = data.invalid;
    this._invalidationReason = data.invalidationReason;
    this._createdByAdminUserId = data.createdByAdminUserId;
    this._createdByContactId = data.createdByContactId;
    this._createdByCustomerId = data.createdByCustomerId;
    this._createdFromRevisionNumber = data.createdFromRevisionNumber;
  }
  /**
   The tender's primary identifier
   */
  get tenderId(): string {
    return this._tenderId;
  }
  /**
   The tender's primary identifier
   */
  set tenderId(value: string) {
    this._tenderId = value;
  }
  /**
   Tender's associated order ID
   */
  get orderId(): number | undefined {
    return this._orderId;
  }
  /**
   Tender's associated order ID
   */
  set orderId(value: number | undefined) {
    this._orderId = value;
  }
  /**
   Tender's associated owner ID
   */
  get ownerId(): number | undefined {
    return this._ownerId;
  }
  /**
   Tender's associated owner ID
   */
  set ownerId(value: number | undefined) {
    this._ownerId = value;
  }
  /**
   Order type
   */
  get type(): OrderType {
    return this._type;
  }
  /**
   Order type
   */
  set type(value: OrderType) {
    this._type = value;
  }
  /**
   The site id the tender/order is created from
   */
  get siteId(): number | undefined {
    return this._siteId;
  }
  /**
   The site id the tender/order is created from
   */
  set siteId(value: number | undefined) {
    this._siteId = value;
  }
  /**
   The channel id the tender/order is created from
   */
  get channelId(): number | undefined {
    return this._channelId;
  }
  /**
   The channel id the tender/order is created from
   */
  set channelId(value: number | undefined) {
    this._channelId = value;
  }
  /**
   The shop the tender/order belongs to
   */
  get shopId(): number {
    return this._shopId;
  }
  /**
   The shop the tender/order belongs to
   */
  set shopId(value: number) {
    this._shopId = value;
  }
  /**
   The date this tender/order has been created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The date this tender/order has been created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   User which created the tender.
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   User which created the tender.
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   The date this tender/order has been last modified
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The date this tender/order has been last modified
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   User which last updated the tender.
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   User which last updated the tender.
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   ContactId for this tender. Goes in combination with companyId
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   ContactId for this tender. Goes in combination with companyId
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   CustomerId for this tender.
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   CustomerId for this tender.
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  /**
   CompanyId the contact belongs to. Goes in combination with contactId
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   CompanyId the contact belongs to. Goes in combination with contactId
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   The invoice userId for this tender
   */
  get invoiceUserId(): number | undefined {
    return this._invoiceUserId;
  }
  /**
   The invoice userId for this tender
   */
  set invoiceUserId(value: number | undefined) {
    this._invoiceUserId = value;
  }
  /**
   Tender/order status
   */
  get status(): string {
    return this._status;
  }
  /**
   Tender/order status
   */
  set status(value: string) {
    this._status = value;
  }
  /**
   User's first name
   */
  get firstName(): string | undefined {
    return this._firstName;
  }
  /**
   User's first name
   */
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  /**
   User's middle name
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   User's middle name
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   User's last name
   */
  get lastName(): string | undefined {
    return this._lastName;
  }
  /**
   User's last name
   */
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  /**
   User's email
   */
  get email(): string {
    return this._email;
  }
  /**
   User's email
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   Invoice company debtor ID
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   Invoice company debtor ID
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   The address the invoice for the order should be sent to
   */
  get invoiceAddress(): TenderAddress | undefined {
    return this._invoiceAddress;
  }
  /**
   The address the invoice for the order should be sent to
   */
  set invoiceAddress(value: TenderAddress | undefined) {
    this._invoiceAddress = value;
  }
  /**
   The address the order should be shipped to
   */
  get deliveryAddress(): TenderAddress | undefined {
    return this._deliveryAddress;
  }
  /**
   The address the order should be shipped to
   */
  set deliveryAddress(value: TenderAddress | undefined) {
    this._deliveryAddress = value;
  }
  /**
   Tender/order main item count
   */
  get itemCount(): number | undefined {
    return this._itemCount;
  }
  /**
   Tender/order main item count
   */
  set itemCount(value: number | undefined) {
    this._itemCount = value;
  }
  /**
   The tender/order items
   */
  get items(): TenderMainItem[] | undefined {
    return this._items;
  }
  /**
   The tender/order items
   */
  set items(value: TenderMainItem[] | undefined) {
    this._items = value;
  }
  /**
   The tender/order bonusItems
   */
  get bonusItems(): TenderMainItem[] | undefined {
    return this._bonusItems;
  }
  /**
   The tender/order bonusItems
   */
  set bonusItems(value: TenderMainItem[] | undefined) {
    this._bonusItems = value;
  }
  /**
   Payment data for this tender/order
   */
  get paymentData(): TenderPayment | undefined {
    return this._paymentData;
  }
  /**
   Payment data for this tender/order
   */
  set paymentData(value: TenderPayment | undefined) {
    this._paymentData = value;
  }
  /**
   Postage data for this tender/order
   */
  get postageData(): TenderPostage | undefined {
    return this._postageData;
  }
  /**
   Postage data for this tender/order
   */
  set postageData(value: TenderPostage | undefined) {
    this._postageData = value;
  }
  /**
   Tender total
   */
  get total(): TenderTotal | undefined {
    return this._total;
  }
  /**
   Tender total
   */
  set total(value: TenderTotal | undefined) {
    this._total = value;
  }
  /**
   Amount of tax that applies to this tender/order per tax code
   */
  get taxLevels(): TenderTaxLevel[] | undefined {
    return this._taxLevels;
  }
  /**
   Amount of tax that applies to this tender/order per tax code
   */
  set taxLevels(value: TenderTaxLevel[] | undefined) {
    this._taxLevels = value;
  }
  /**
   List of selectable carriers
   */
  get carriers(): TenderCarrier[] | undefined {
    return this._carriers;
  }
  /**
   List of selectable carriers
   */
  set carriers(value: TenderCarrier[] | undefined) {
    this._carriers = value;
  }
  /**
   List of selectable payment methods for this tender, including non allowed for the applied user
   */
  get payMethods(): TenderPaymethod[] | undefined {
    return this._payMethods;
  }
  /**
   List of selectable payment methods for this tender, including non allowed for the applied user
   */
  set payMethods(value: TenderPaymethod[] | undefined) {
    this._payMethods = value;
  }
  /**
   Tender/order origin
   */
  get source(): string | undefined {
    return this._source;
  }
  /**
   Tender/order origin
   */
  set source(value: string | undefined) {
    this._source = value;
  }
  /**
   Total amount of valuePoints that apply to this tender/order
   */
  get valuePoints(): number | undefined {
    return this._valuePoints;
  }
  /**
   Total amount of valuePoints that apply to this tender/order
   */
  set valuePoints(value: number | undefined) {
    this._valuePoints = value;
  }
  /**
   Indicates whether incentives are already applied
   */
  get incentivesApplied(): boolean | undefined {
    return this._incentivesApplied;
  }
  /**
   Indicates whether incentives are already applied
   */
  set incentivesApplied(value: boolean | undefined) {
    this._incentivesApplied = value;
  }
  /**
   Tender/order accumulated credit points
   */
  get creditPoints(): number | undefined {
    return this._creditPoints;
  }
  /**
   Tender/order accumulated credit points
   */
  set creditPoints(value: number | undefined) {
    this._creditPoints = value;
  }
  /**
   Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
   */
  get actionCode(): string | undefined {
    return this._actionCode;
  }
  /**
   Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout
   */
  set actionCode(value: string | undefined) {
    this._actionCode = value;
  }
  /**
   User's reference for this tender
   */
  get reference(): string | undefined {
    return this._reference;
  }
  /**
   User's reference for this tender
   */
  set reference(value: string | undefined) {
    this._reference = value;
  }
  /**
   User's remarks for this tender
   */
  get remarks(): string | undefined {
    return this._remarks;
  }
  /**
   User's remarks for this tender
   */
  set remarks(value: string | undefined) {
    this._remarks = value;
  }
  /**
   The language for this tender
   */
  get language(): string | undefined {
    return this._language;
  }
  /**
   The language for this tender
   */
  set language(value: string | undefined) {
    this._language = value;
  }
  /**
   The currency for this tender
   */
  get currency(): string | undefined {
    return this._currency;
  }
  /**
   The currency for this tender
   */
  set currency(value: string | undefined) {
    this._currency = value;
  }
  /**
   The currency ratio for this tender
   */
  get currencyRatio(): number | undefined {
    return this._currencyRatio;
  }
  /**
   The currency ratio for this tender
   */
  set currencyRatio(value: number | undefined) {
    this._currencyRatio = value;
  }
  /**
   The order's ID in an external system
   */
  get externalId(): string | undefined {
    return this._externalId;
  }
  /**
   The order's ID in an external system
   */
  set externalId(value: string | undefined) {
    this._externalId = value;
  }
  /**
   Additional information field that can be stored with a tender/order
   */
  get extra3(): string | undefined {
    return this._extra3;
  }
  /**
   Additional information field that can be stored with a tender/order
   */
  set extra3(value: string | undefined) {
    this._extra3 = value;
  }
  /**
   Additional information field that can be stored with a tender/order
   */
  get extra4(): string | undefined {
    return this._extra4;
  }
  /**
   Additional information field that can be stored with a tender/order
   */
  set extra4(value: string | undefined) {
    this._extra4 = value;
  }
  /**
   Indicates whether tender can be edited
   */
  get isEditable(): boolean | undefined {
    return this._isEditable;
  }
  /**
   Indicates whether tender can be edited
   */
  set isEditable(value: boolean | undefined) {
    this._isEditable = value;
  }
  /**
   Valid until date (Display Only!)
   */
  get validUntil(): string | undefined {
    return this._validUntil;
  }
  /**
   Valid until date (Display Only!)
   */
  set validUntil(value: string | undefined) {
    this._validUntil = value;
  }
  /**
   Tender Contact
   */
  get contact(): Contact | undefined {
    return this._contact;
  }
  /**
   Tender Contact
   */
  set contact(value: Contact | undefined) {
    this._contact = value;
  }
  /**
   Tender Customer
   */
  get customer(): Customer | undefined {
    return this._customer;
  }
  /**
   Tender Customer
   */
  set customer(value: Customer | undefined) {
    this._customer = value;
  }
  /**
   Tender Company
   */
  get company(): Company | undefined {
    return this._company;
  }
  /**
   Tender Company
   */
  set company(value: Company | undefined) {
    this._company = value;
  }
  /**
   List of tender revisions for version control and audit purposes
   */
  get revisions(): any[] | undefined {
    return this._revisions;
  }
  /**
   List of tender revisions for version control and audit purposes
   */
  set revisions(value: any[] | undefined) {
    this._revisions = value;
  }
  /**
   Public visibility flag for tender sharing and collaboration
   */
  get public(): boolean | undefined {
    return this._public;
  }
  /**
   Public visibility flag for tender sharing and collaboration
   */
  set public(value: boolean | undefined) {
    this._public = value;
  }
  /**
   Current revision number for version tracking
   */
  get revisionNumber(): number | undefined {
    return this._revisionNumber;
  }
  /**
   Current revision number for version tracking
   */
  set revisionNumber(value: number | undefined) {
    this._revisionNumber = value;
  }
  /**
   Public version number for external sharing
   */
  get publicVersionNumber(): number | undefined {
    return this._publicVersionNumber;
  }
  /**
   Public version number for external sharing
   */
  set publicVersionNumber(value: number | undefined) {
    this._publicVersionNumber = value;
  }
  /**
   Invalid status flag indicating tender issues
   */
  get invalid(): boolean | undefined {
    return this._invalid;
  }
  /**
   Invalid status flag indicating tender issues
   */
  set invalid(value: boolean | undefined) {
    this._invalid = value;
  }
  /**
   Reason for tender invalidation if applicable
   */
  get invalidationReason(): string | undefined {
    return this._invalidationReason;
  }
  /**
   Reason for tender invalidation if applicable
   */
  set invalidationReason(value: string | undefined) {
    this._invalidationReason = value;
  }
  /**
   Admin user ID who created this tender
   */
  get createdByAdminUserId(): number | undefined {
    return this._createdByAdminUserId;
  }
  /**
   Admin user ID who created this tender
   */
  set createdByAdminUserId(value: number | undefined) {
    this._createdByAdminUserId = value;
  }
  /**
   Contact user ID who created this tender
   */
  get createdByContactId(): number | undefined {
    return this._createdByContactId;
  }
  /**
   Contact user ID who created this tender
   */
  set createdByContactId(value: number | undefined) {
    this._createdByContactId = value;
  }
  /**
   Customer user ID who created this tender
   */
  get createdByCustomerId(): number | undefined {
    return this._createdByCustomerId;
  }
  /**
   Customer user ID who created this tender
   */
  set createdByCustomerId(value: number | undefined) {
    this._createdByCustomerId = value;
  }
  /**
   Source revision number when tender was created from existing revision
   */
  get createdFromRevisionNumber(): number | undefined {
    return this._createdFromRevisionNumber;
  }
  /**
   Source revision number when tender was created from existing revision
   */
  set createdFromRevisionNumber(value: number | undefined) {
    this._createdFromRevisionNumber = value;
  }
}