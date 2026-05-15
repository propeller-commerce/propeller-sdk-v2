import { OrderType } from '../enum/OrderType';
import { OrderExportStatus } from '../enum/OrderExportStatus';
import { OrderMedia } from './OrderMedia';
import { OrderPostageData } from './OrderPostageData';
import { OrderPaymentData } from './OrderPaymentData';
import { OrderTotals } from './OrderTotals';
import { OrderItem } from './OrderItem';
import { Shipment } from './Shipment';
import { Address } from './Address';
import { OrderAddress } from './OrderAddress';
import { Source } from './Source';
/**
 Object class for Order
 */
export class Order {
  /** The auto-incremental id for this order */
  id!: number;
  /** media field */
  media?: OrderMedia;
  /** The userId of the user that placed this order */
  userId?: number;
  /** The id of the Owner/Account Manager that will handle this order */
  accountManagerId?: number;
  /** The cartId of the cart that this order is created from. */
  cartId?: string;
  /** The channel identifier of the webshop this order originated from */
  channelId!: number;
  /** The ID of the shop the Order belongs to */
  /** @deprecated Use channelId instead */
  shopId!: number;
  /** Unique identifier for this order */
  uuid!: string;
  /** External identifier for this order from an external source like an ERP system */
  /** @deprecated Use sources instead */
  externalId?: string;
  /** The debtorId of the Customer or Company that placed this Order */
  debtorId?: string;
  /** The processing status for this order */
  status!: string;
  /** The type of this order */
  type!: OrderType;
  /** The source this order originates from */
  source?: string;
  /** The email address for transactional emails */
  email!: string;
  /** The date the last transactional email was sent for this order */
  emailDate?: string;
  /** Remarks added by the customer about this order */
  remarks?: string;
  /** Reference added by the customer about this order */
  reference?: string;
  /** extra3: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  extra3?: string;
  /** extra4: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  extra4?: string;
  /** Currency used to place this order */
  currency!: string;
  /** The currency's exchange rate at the time the order was placed */
  currencyRatio!: number;
  /** The selected language on the webshop at the time the order was placed */
  language!: string;
  /** The date and time the order was placed */
  /** @deprecated Deprecated in favour of createdAt */
  date!: string;
  /** The date and time the order was placed */
  createdAt!: string;
  /** The date and time the status of the order was last changed */
  statusDate?: string;
  /** The postage data of the order */
  postageData!: OrderPostageData;
  /** The payment data of the order */
  paymentData!: OrderPaymentData;
  /** The totals of the order */
  total!: OrderTotals;
  /** The items included in the order */
  items!: OrderItem[];
  /** The shipments for the order */
  shipments?: Shipment[];
  /** The addresses for the order */
  addresses?: Address[];
  /** The id of the User, contact or Customer that should receive the invoice for this Order */
  invoiceUserId?: number;
  /** The date and time until the order is valid */
  validUntil?: string;
  /** The companyId of the company that placed this order */
  companyId?: number;
  /** The date and time the order was last modified */
  lastModifiedAt!: string;
  /** Original order id */
  originalOrderId?: number;
  /** The date and time the order was exported */
  exportedAt?: string;
  /** Order export status of this order */
  exportStatus?: OrderExportStatus;
  /** Order export message */
  exportMessage?: string;
  /** orderAddresses field */
  orderAddresses!: OrderAddress[];
  /** Order sources */
  sources?: Source[];
  constructor(data: Partial<Order> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `media` as a OrderMedia instance (coerced on first access). */
  getMedia(): OrderMedia | undefined {
    if (this.media == null) return undefined;
    if (!(this.media instanceof OrderMedia)) {
      this.media = new OrderMedia(this.media as any);
    }
    return this.media;
  }
  /** Returns `userId`. */
  getUserId(): number | undefined {
    return this.userId;
  }
  /** Returns `accountManagerId`. */
  getAccountManagerId(): number | undefined {
    return this.accountManagerId;
  }
  /** Returns `cartId`. */
  getCartId(): string | undefined {
    return this.cartId;
  }
  /** Returns `channelId`. */
  getChannelId(): number {
    return this.channelId;
  }
  /** Returns `shopId`. */
  getShopId(): number {
    return this.shopId;
  }
  /** Returns `uuid`. */
  getUuid(): string {
    return this.uuid;
  }
  /** Returns `externalId`. */
  getExternalId(): string | undefined {
    return this.externalId;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `status`. */
  getStatus(): string {
    return this.status;
  }
  /** Returns `type`. */
  getType(): OrderType {
    return this.type;
  }
  /** Returns `source`. */
  getSource(): string | undefined {
    return this.source;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `emailDate`. */
  getEmailDate(): string | undefined {
    return this.emailDate;
  }
  /** Returns `remarks`. */
  getRemarks(): string | undefined {
    return this.remarks;
  }
  /** Returns `reference`. */
  getReference(): string | undefined {
    return this.reference;
  }
  /** Returns `extra3`. */
  getExtra3(): string | undefined {
    return this.extra3;
  }
  /** Returns `extra4`. */
  getExtra4(): string | undefined {
    return this.extra4;
  }
  /** Returns `currency`. */
  getCurrency(): string {
    return this.currency;
  }
  /** Returns `currencyRatio`. */
  getCurrencyRatio(): number {
    return this.currencyRatio;
  }
  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `date`. */
  getDate(): string {
    return this.date;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `statusDate`. */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }
  /** Returns `postageData` as a OrderPostageData instance (coerced on first access). */
  getPostageData(): OrderPostageData | undefined {
    if (this.postageData == null) return undefined;
    if (!(this.postageData instanceof OrderPostageData)) {
      this.postageData = new OrderPostageData(this.postageData as any);
    }
    return this.postageData;
  }
  /** Returns `paymentData` as a OrderPaymentData instance (coerced on first access). */
  getPaymentData(): OrderPaymentData | undefined {
    if (this.paymentData == null) return undefined;
    if (!(this.paymentData instanceof OrderPaymentData)) {
      this.paymentData = new OrderPaymentData(this.paymentData as any);
    }
    return this.paymentData;
  }
  /** Returns `total` as a OrderTotals instance (coerced on first access). */
  getTotal(): OrderTotals | undefined {
    if (this.total == null) return undefined;
    if (!(this.total instanceof OrderTotals)) {
      this.total = new OrderTotals(this.total as any);
    }
    return this.total;
  }
  /** Returns `items` as OrderItem instances (coerced on first access). */
  getItems(): OrderItem[] {
    if (!this.items) return [];
    this.items = this.items.map((x: any) => x instanceof OrderItem ? x : new OrderItem(x));
    return this.items;
  }
  /** Returns `shipments` as Shipment instances (coerced on first access). */
  getShipments(): Shipment[] | undefined {
    if (!this.shipments) return undefined;
    this.shipments = this.shipments.map((x: any) => x instanceof Shipment ? x : new Shipment(x));
    return this.shipments;
  }
  /** Returns `addresses` as Address instances (coerced on first access). */
  getAddresses(): Address[] | undefined {
    if (!this.addresses) return undefined;
    this.addresses = this.addresses.map((x: any) => x instanceof Address ? x : new Address(x));
    return this.addresses;
  }
  /** Returns `invoiceUserId`. */
  getInvoiceUserId(): number | undefined {
    return this.invoiceUserId;
  }
  /** Returns `validUntil`. */
  getValidUntil(): string | undefined {
    return this.validUntil;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `originalOrderId`. */
  getOriginalOrderId(): number | undefined {
    return this.originalOrderId;
  }
  /** Returns `exportedAt`. */
  getExportedAt(): string | undefined {
    return this.exportedAt;
  }
  /** Returns `exportStatus`. */
  getExportStatus(): OrderExportStatus | undefined {
    return this.exportStatus;
  }
  /** Returns `exportMessage`. */
  getExportMessage(): string | undefined {
    return this.exportMessage;
  }
  /** Returns `orderAddresses` as OrderAddress instances (coerced on first access). */
  getOrderAddresses(): OrderAddress[] {
    if (!this.orderAddresses) return [];
    this.orderAddresses = this.orderAddresses.map((x: any) => x instanceof OrderAddress ? x : new OrderAddress(x));
    return this.orderAddresses;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] | undefined {
    if (!this.sources) return undefined;
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
}