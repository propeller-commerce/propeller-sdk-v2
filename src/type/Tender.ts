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
import { OrderRevisionResponse } from './OrderRevisionResponse';
/**
 Comprehensive tender entity representing a potential order in the system.
 * Tenders are draft orders that contain all necessary information for order processing including customer details, items, pricing, addresses, payment methods, and shipping information. They can be modified, processed into orders, or deleted as needed.
 */
export interface Tender {
  /** Unique identifier for the tender.
   * This is the primary key used to reference and manage the tender throughout its lifecycle. */
  tenderId: string;
  /** Associated order identifier when tender was created from an existing order.
   * Links the tender to its source order for reference and audit purposes. */
  orderId?: number;
  /** Identifier of the user who owns this tender.
   * Represents the primary responsible party for the tender management and processing. */
  ownerId?: number;
  /** Classification of the tender type.
   * Determines the processing workflow and business rules that apply to this tender. */
  type: OrderType;
  /** Sales channel identifier where the tender originated.
   * Identifies the specific sales channel (website, mobile app, etc.) used to create this tender. */
  channelId?: number;
  /** Timestamp when the tender was initially created.
   * Records the exact moment this tender was first established in the system. */
  createdAt: string;
  /** Identifier of the user who created this tender.
   * Tracks the originator of the tender for audit and accountability purposes. */
  createdBy?: number;
  /** Timestamp of the most recent modification to the tender.
   * Updates automatically whenever any aspect of the tender is changed. */
  lastModifiedAt: string;
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
  status: string;
  /** User's first name */
  firstName?: string;
  /** User's middle name */
  middleName?: string;
  /** User's last name */
  lastName?: string;
  /** User's email */
  email: string;
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
  revisions?: OrderRevisionResponse;
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
}