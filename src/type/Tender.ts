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
  tenderId!: string;
  /** Associated order identifier when tender was created from an existing order.
   * Links the tender to its source order for reference and audit purposes. */
  orderId?: number;
  /** Identifier of the user who owns this tender.
   * Represents the primary responsible party for the tender management and processing. */
  ownerId?: number;
  /** Classification of the tender type.
   * Determines the processing workflow and business rules that apply to this tender. */
  type!: OrderType;
  /** Legacy site identifier where the tender was created.
   * Historical reference maintained for compatibility purposes. */
  /** @deprecated Deprecated in favor of channelId */
  siteId?: number;
  /** Sales channel identifier where the tender originated.
   * Identifies the specific sales channel (website, mobile app, etc.) used to create this tender. */
  channelId?: number;
  /** Shop identifier that owns this tender.
   * Determines which business unit or location is responsible for fulfilling this tender. */
  /** @deprecated Deprecated, please use channelId instead */
  shopId!: number;
  /** Timestamp when the tender was initially created.
   * Records the exact moment this tender was first established in the system. */
  createdAt!: string;
  /** Identifier of the user who created this tender.
   * Tracks the originator of the tender for audit and accountability purposes. */
  createdBy?: number;
  /** Timestamp of the most recent modification to the tender.
   * Updates automatically whenever any aspect of the tender is changed. */
  lastModifiedAt!: string;
  /** Identifier of the user who last modified this tender.
   * Tracks the most recent editor for audit and accountability purposes. */
  lastModifiedBy?: number;
  /** Contact person identifier associated with this tender.
   * Used in combination with companyId to identify the specific contact person within a company who is responsible for this tender. */
  contactId?: number;
  /** Customer identifier for individual customer tenders.
   * Used for direct customer relationships where no company association is required. */
  customerId?: number;
  /** Company identifier for business-to-business tenders.
   * Used in combination with contactId to establish the company context for the tender. */
  companyId?: number;
  /** The invoice userId for this tender */
  invoiceUserId?: number;
  /** Tender/order status */
  status!: string;
  /** User's first name */
  firstName?: string;
  /** User's middle name */
  middleName?: string;
  /** User's last name */
  lastName?: string;
  /** User's email */
  email!: string;
  /** Invoice company debtor ID */
  debtorId?: string;
  /** The address the invoice for the order should be sent to */
  invoiceAddress?: TenderAddress;
  /** The address the order should be shipped to */
  deliveryAddress?: TenderAddress;
  /** Tender/order main item count */
  itemCount?: number;
  /** The tender/order items */
  items?: TenderMainItem[];
  /** The tender/order bonusItems */
  bonusItems?: TenderMainItem[];
  /** Payment data for this tender/order */
  paymentData?: TenderPayment;
  /** Postage data for this tender/order */
  postageData?: TenderPostage;
  /** Tender total */
  total?: TenderTotal;
  /** Amount of tax that applies to this tender/order per tax code */
  taxLevels?: TenderTaxLevel[];
  /** List of selectable carriers */
  carriers?: TenderCarrier[];
  /** List of selectable payment methods for this tender, including non allowed for the applied user */
  payMethods?: TenderPaymethod[];
  /** Tender/order origin */
  source?: string;
  /** Total amount of valuePoints that apply to this tender/order */
  valuePoints?: number;
  /** Indicates whether incentives are already applied */
  incentivesApplied?: boolean;
  /** Tender/order accumulated credit points */
  creditPoints?: number;
  /** Action code that is applied to this tender. Is only filled if a valid action code was applied during checkout */
  actionCode?: string;
  /** User's reference for this tender */
  reference?: string;
  /** User's remarks for this tender */
  remarks?: string;
  /** The language for this tender */
  language?: string;
  /** The currency for this tender */
  currency?: string;
  /** The currency ratio for this tender */
  currencyRatio?: number;
  /** The order's ID in an external system */
  externalId?: string;
  /** Additional information field that can be stored with a tender/order */
  extra3?: string;
  /** Additional information field that can be stored with a tender/order */
  extra4?: string;
  /** Indicates whether tender can be edited */
  isEditable?: boolean;
  /** Valid until date (Display Only!) */
  validUntil?: string;
  /** Contact person associated with this tender.
   * Returns the specific contact who is responsible for or involved in this tender process. Used for direct communication and relationship management. */
  contact?: Contact;
  /** Customer associated with this tender.
   * Returns the customer who initiated or is the subject of this tender. Used for customer relationship management and tender tracking. */
  customer?: Customer;
  /** Company associated with this tender.
   * Returns the company involved in this tender process. Used for organizational context and access control within the tender management system. */
  company?: Company;
  /** List of tender revisions for version control and audit purposes */
  revisions?: any[];
  /** Public visibility flag for tender sharing and collaboration */
  public?: boolean;
  /** Current revision number for version tracking */
  revisionNumber?: number;
  /** Public version number for external sharing */
  publicVersionNumber?: number;
  /** Invalid status flag indicating tender issues */
  invalid?: boolean;
  /** Reason for tender invalidation if applicable */
  invalidationReason?: string;
  /** Admin user ID who created this tender */
  createdByAdminUserId?: number;
  /** Contact user ID who created this tender */
  createdByContactId?: number;
  /** Customer user ID who created this tender */
  createdByCustomerId?: number;
  /** Source revision number when tender was created from existing revision */
  createdFromRevisionNumber?: number;
  constructor(data: Partial<Tender> = {}) {
    Object.assign(this, data);
  }

  /** Returns `tenderId`. */
  getTenderId(): string {
    return this.tenderId;
  }
  /** Returns `orderId`. */
  getOrderId(): number | undefined {
    return this.orderId;
  }
  /** Returns `ownerId`. */
  getOwnerId(): number | undefined {
    return this.ownerId;
  }
  /** Returns `type`. */
  getType(): OrderType {
    return this.type;
  }
  /** Returns `siteId`. */
  getSiteId(): number | undefined {
    return this.siteId;
  }
  /** Returns `channelId`. */
  getChannelId(): number | undefined {
    return this.channelId;
  }
  /** Returns `shopId`. */
  getShopId(): number {
    return this.shopId;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `invoiceUserId`. */
  getInvoiceUserId(): number | undefined {
    return this.invoiceUserId;
  }
  /** Returns `status`. */
  getStatus(): string {
    return this.status;
  }
  /** Returns `firstName`. */
  getFirstName(): string | undefined {
    return this.firstName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `lastName`. */
  getLastName(): string | undefined {
    return this.lastName;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `invoiceAddress` as a TenderAddress instance (coerced on first access). */
  getInvoiceAddress(): TenderAddress | undefined {
    if (this.invoiceAddress == null) return undefined;
    if (!(this.invoiceAddress instanceof TenderAddress)) {
      this.invoiceAddress = new TenderAddress(this.invoiceAddress as any);
    }
    return this.invoiceAddress;
  }
  /** Returns `deliveryAddress` as a TenderAddress instance (coerced on first access). */
  getDeliveryAddress(): TenderAddress | undefined {
    if (this.deliveryAddress == null) return undefined;
    if (!(this.deliveryAddress instanceof TenderAddress)) {
      this.deliveryAddress = new TenderAddress(this.deliveryAddress as any);
    }
    return this.deliveryAddress;
  }
  /** Returns `itemCount`. */
  getItemCount(): number | undefined {
    return this.itemCount;
  }
  /** Returns `items` as TenderMainItem instances (coerced on first access). */
  getItems(): TenderMainItem[] | undefined {
    if (!this.items) return undefined;
    this.items = this.items.map((x: any) => x instanceof TenderMainItem ? x : new TenderMainItem(x));
    return this.items;
  }
  /** Returns `bonusItems` as TenderMainItem instances (coerced on first access). */
  getBonusItems(): TenderMainItem[] | undefined {
    if (!this.bonusItems) return undefined;
    this.bonusItems = this.bonusItems.map((x: any) => x instanceof TenderMainItem ? x : new TenderMainItem(x));
    return this.bonusItems;
  }
  /** Returns `paymentData` as a TenderPayment instance (coerced on first access). */
  getPaymentData(): TenderPayment | undefined {
    if (this.paymentData == null) return undefined;
    if (!(this.paymentData instanceof TenderPayment)) {
      this.paymentData = new TenderPayment(this.paymentData as any);
    }
    return this.paymentData;
  }
  /** Returns `postageData` as a TenderPostage instance (coerced on first access). */
  getPostageData(): TenderPostage | undefined {
    if (this.postageData == null) return undefined;
    if (!(this.postageData instanceof TenderPostage)) {
      this.postageData = new TenderPostage(this.postageData as any);
    }
    return this.postageData;
  }
  /** Returns `total` as a TenderTotal instance (coerced on first access). */
  getTotal(): TenderTotal | undefined {
    if (this.total == null) return undefined;
    if (!(this.total instanceof TenderTotal)) {
      this.total = new TenderTotal(this.total as any);
    }
    return this.total;
  }
  /** Returns `taxLevels` as TenderTaxLevel instances (coerced on first access). */
  getTaxLevels(): TenderTaxLevel[] | undefined {
    if (!this.taxLevels) return undefined;
    this.taxLevels = this.taxLevels.map((x: any) => x instanceof TenderTaxLevel ? x : new TenderTaxLevel(x));
    return this.taxLevels;
  }
  /** Returns `carriers` as TenderCarrier instances (coerced on first access). */
  getCarriers(): TenderCarrier[] | undefined {
    if (!this.carriers) return undefined;
    this.carriers = this.carriers.map((x: any) => x instanceof TenderCarrier ? x : new TenderCarrier(x));
    return this.carriers;
  }
  /** Returns `payMethods` as TenderPaymethod instances (coerced on first access). */
  getPayMethods(): TenderPaymethod[] | undefined {
    if (!this.payMethods) return undefined;
    this.payMethods = this.payMethods.map((x: any) => x instanceof TenderPaymethod ? x : new TenderPaymethod(x));
    return this.payMethods;
  }
  /** Returns `source`. */
  getSource(): string | undefined {
    return this.source;
  }
  /** Returns `valuePoints`. */
  getValuePoints(): number | undefined {
    return this.valuePoints;
  }
  /** Returns `incentivesApplied`. */
  getIncentivesApplied(): boolean | undefined {
    return this.incentivesApplied;
  }
  /** Returns `creditPoints`. */
  getCreditPoints(): number | undefined {
    return this.creditPoints;
  }
  /** Returns `actionCode`. */
  getActionCode(): string | undefined {
    return this.actionCode;
  }
  /** Returns `reference`. */
  getReference(): string | undefined {
    return this.reference;
  }
  /** Returns `remarks`. */
  getRemarks(): string | undefined {
    return this.remarks;
  }
  /** Returns `language`. */
  getLanguage(): string | undefined {
    return this.language;
  }
  /** Returns `currency`. */
  getCurrency(): string | undefined {
    return this.currency;
  }
  /** Returns `currencyRatio`. */
  getCurrencyRatio(): number | undefined {
    return this.currencyRatio;
  }
  /** Returns `externalId`. */
  getExternalId(): string | undefined {
    return this.externalId;
  }
  /** Returns `extra3`. */
  getExtra3(): string | undefined {
    return this.extra3;
  }
  /** Returns `extra4`. */
  getExtra4(): string | undefined {
    return this.extra4;
  }
  /** Returns `isEditable`. */
  getIsEditable(): boolean | undefined {
    return this.isEditable;
  }
  /** Returns `validUntil`. */
  getValidUntil(): string | undefined {
    return this.validUntil;
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
  /** Returns `company` as a Company instance (coerced on first access). */
  getCompany(): Company | undefined {
    if (this.company == null) return undefined;
    if (!(this.company instanceof Company)) {
      this.company = new Company(this.company as any);
    }
    return this.company;
  }
  /** Returns `revisions`. */
  getRevisions(): any[] | undefined {
    return this.revisions;
  }
  /** Returns `public`. */
  getPublic(): boolean | undefined {
    return this.public;
  }
  /** Returns `revisionNumber`. */
  getRevisionNumber(): number | undefined {
    return this.revisionNumber;
  }
  /** Returns `publicVersionNumber`. */
  getPublicVersionNumber(): number | undefined {
    return this.publicVersionNumber;
  }
  /** Returns `invalid`. */
  getInvalid(): boolean | undefined {
    return this.invalid;
  }
  /** Returns `invalidationReason`. */
  getInvalidationReason(): string | undefined {
    return this.invalidationReason;
  }
  /** Returns `createdByAdminUserId`. */
  getCreatedByAdminUserId(): number | undefined {
    return this.createdByAdminUserId;
  }
  /** Returns `createdByContactId`. */
  getCreatedByContactId(): number | undefined {
    return this.createdByContactId;
  }
  /** Returns `createdByCustomerId`. */
  getCreatedByCustomerId(): number | undefined {
    return this.createdByCustomerId;
  }
  /** Returns `createdFromRevisionNumber`. */
  getCreatedFromRevisionNumber(): number | undefined {
    return this.createdFromRevisionNumber;
  }
}