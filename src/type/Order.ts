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
  private _id: number;
  /** media field */
  private _media?: OrderMedia;
  /** The userId of the user that placed this order */
  private _userId?: number;
  /** The id of the Owner/Account Manager that will handle this order */
  private _accountManagerId?: number;
  /** The cartId of the cart that this order is created from. */
  private _cartId?: string;
  /** The channel identifier of the webshop this order originated from */
  private _channelId: number;
  /** The ID of the shop the Order belongs to */
  private _shopId: number;
  /** Unique identifier for this order */
  private _uuid: string;
  /** External identifier for this order from an external source like an ERP system */
  private _externalId?: string;
  /** The debtorId of the Customer or Company that placed this Order */
  private _debtorId?: string;
  /** The processing status for this order */
  private _status: string;
  /** The type of this order */
  private _type: OrderType;
  /** The source this order originates from */
  private _source?: string;
  /** The email address for transactional emails */
  private _email: string;
  /** The date the last transactional email was sent for this order */
  private _emailDate?: string;
  /** Remarks added by the customer about this order */
  private _remarks?: string;
  /** Reference added by the customer about this order */
  private _reference?: string;
  /** extra3: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  private _extra3?: string;
  /** extra4: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  private _extra4?: string;
  /** Currency used to place this order */
  private _currency: string;
  /** The currency's exchange rate at the time the order was placed */
  private _currencyRatio: number;
  /** The selected language on the webshop at the time the order was placed */
  private _language: string;
  /** The date and time the order was placed */
  /** @deprecated Deprecated in favour of createdAt */
  private _date: string;
  /** The date and time the order was placed */
  private _createdAt: string;
  /** The date and time the status of the order was last changed */
  private _statusDate?: string;
  /** The postage data of the order */
  private _postageData: OrderPostageData;
  /** The payment data of the order */
  private _paymentData: OrderPaymentData;
  /** The totals of the order */
  private _total: OrderTotals;
  /** The items included in the order */
  private _items: OrderItem[];
  /** The shipments for the order */
  private _shipments?: Shipment[];
  /** The addresses for the order */
  private _addresses?: Address[];
  /** The id of the User, contact or Customer that should receive the invoice for this Order */
  private _invoiceUserId?: number;
  /** The date and time until the order is valid */
  private _validUntil?: string;
  /** The companyId of the company that placed this order */
  private _companyId?: number;
  /** The date and time the order was last modified */
  private _lastModifiedAt: string;
  /** Original order id */
  private _originalOrderId?: number;
  /** The date and time the order was exported */
  private _exportedAt?: string;
  /** Order export status of this order */
  private _exportStatus?: OrderExportStatus;
  /** Order export message */
  private _exportMessage?: string;
  /** orderAddresses field */
  private _orderAddresses: OrderAddress[];
  /** Order sources */
  private _sources?: Source[];
  /**
   Creates a new instance of Order
   */
  constructor(data: Partial<Order> = {}) {
    this._id = data.id!;
    this._media = data.media;
    this._userId = data.userId;
    this._accountManagerId = data.accountManagerId;
    this._cartId = data.cartId;
    this._channelId = data.channelId!;
    this._shopId = data.shopId!;
    this._uuid = data.uuid!;
    this._externalId = data.externalId;
    this._debtorId = data.debtorId;
    this._status = data.status!;
    this._type = data.type!;
    this._source = data.source;
    this._email = data.email!;
    this._emailDate = data.emailDate;
    this._remarks = data.remarks;
    this._reference = data.reference;
    this._extra3 = data.extra3;
    this._extra4 = data.extra4;
    this._currency = data.currency!;
    this._currencyRatio = data.currencyRatio!;
    this._language = data.language!;
    this._date = data.date!;
    this._createdAt = data.createdAt!;
    this._statusDate = data.statusDate;
    this._postageData = data.postageData!;
    this._paymentData = data.paymentData!;
    this._total = data.total!;
    this._items = data.items!;
    this._shipments = data.shipments;
    this._addresses = data.addresses;
    this._invoiceUserId = data.invoiceUserId;
    this._validUntil = data.validUntil;
    this._companyId = data.companyId;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._originalOrderId = data.originalOrderId;
    this._exportedAt = data.exportedAt;
    this._exportStatus = data.exportStatus;
    this._exportMessage = data.exportMessage;
    this._orderAddresses = data.orderAddresses!;
    this._sources = data.sources ?? [];
  }
  /**
   The auto-incremental id for this order
   */
  get id(): number {
    return this._id;
  }
  /**
   The auto-incremental id for this order
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   media field
   */
  get media(): OrderMedia | undefined {
    return this._media;
  }
  /**
   media field
   */
  set media(value: OrderMedia | undefined) {
    this._media = value;
  }
  /**
   The userId of the user that placed this order
   */
  get userId(): number | undefined {
    return this._userId;
  }
  /**
   The userId of the user that placed this order
   */
  set userId(value: number | undefined) {
    this._userId = value;
  }
  /**
   The id of the Owner/Account Manager that will handle this order
   */
  get accountManagerId(): number | undefined {
    return this._accountManagerId;
  }
  /**
   The id of the Owner/Account Manager that will handle this order
   */
  set accountManagerId(value: number | undefined) {
    this._accountManagerId = value;
  }
  /**
   The cartId of the cart that this order is created from.
   */
  get cartId(): string | undefined {
    return this._cartId;
  }
  /**
   The cartId of the cart that this order is created from.
   */
  set cartId(value: string | undefined) {
    this._cartId = value;
  }
  /**
   The channel identifier of the webshop this order originated from
   */
  get channelId(): number {
    return this._channelId;
  }
  /**
   The channel identifier of the webshop this order originated from
   */
  set channelId(value: number) {
    this._channelId = value;
  }
  /**
   The ID of the shop the Order belongs to
   */
  get shopId(): number {
    return this._shopId;
  }
  /**
   The ID of the shop the Order belongs to
   */
  set shopId(value: number) {
    this._shopId = value;
  }
  /**
   Unique identifier for this order
   */
  get uuid(): string {
    return this._uuid;
  }
  /**
   Unique identifier for this order
   */
  set uuid(value: string) {
    this._uuid = value;
  }
  /**
   External identifier for this order from an external source like an ERP system
   */
  get externalId(): string | undefined {
    return this._externalId;
  }
  /**
   External identifier for this order from an external source like an ERP system
   */
  set externalId(value: string | undefined) {
    this._externalId = value;
  }
  /**
   The debtorId of the Customer or Company that placed this Order
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   The debtorId of the Customer or Company that placed this Order
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   The processing status for this order
   */
  get status(): string {
    return this._status;
  }
  /**
   The processing status for this order
   */
  set status(value: string) {
    this._status = value;
  }
  /**
   The type of this order
   */
  get type(): OrderType {
    return this._type;
  }
  /**
   The type of this order
   */
  set type(value: OrderType) {
    this._type = value;
  }
  /**
   The source this order originates from
   */
  get source(): string | undefined {
    return this._source;
  }
  /**
   The source this order originates from
   */
  set source(value: string | undefined) {
    this._source = value;
  }
  /**
   The email address for transactional emails
   */
  get email(): string {
    return this._email;
  }
  /**
   The email address for transactional emails
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   The date the last transactional email was sent for this order
   */
  get emailDate(): string | undefined {
    return this._emailDate;
  }
  /**
   The date the last transactional email was sent for this order
   */
  set emailDate(value: string | undefined) {
    this._emailDate = value;
  }
  /**
   Remarks added by the customer about this order
   */
  get remarks(): string | undefined {
    return this._remarks;
  }
  /**
   Remarks added by the customer about this order
   */
  set remarks(value: string | undefined) {
    this._remarks = value;
  }
  /**
   Reference added by the customer about this order
   */
  get reference(): string | undefined {
    return this._reference;
  }
  /**
   Reference added by the customer about this order
   */
  set reference(value: string | undefined) {
    this._reference = value;
  }
  /**
   extra3: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
   */
  get extra3(): string | undefined {
    return this._extra3;
  }
  /**
   extra3: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
   */
  set extra3(value: string | undefined) {
    this._extra3 = value;
  }
  /**
   extra4: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
   */
  get extra4(): string | undefined {
    return this._extra4;
  }
  /**
   extra4: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations.
   */
  set extra4(value: string | undefined) {
    this._extra4 = value;
  }
  /**
   Currency used to place this order
   */
  get currency(): string {
    return this._currency;
  }
  /**
   Currency used to place this order
   */
  set currency(value: string) {
    this._currency = value;
  }
  /**
   The currency's exchange rate at the time the order was placed
   */
  get currencyRatio(): number {
    return this._currencyRatio;
  }
  /**
   The currency's exchange rate at the time the order was placed
   */
  set currencyRatio(value: number) {
    this._currencyRatio = value;
  }
  /**
   The selected language on the webshop at the time the order was placed
   */
  get language(): string {
    return this._language;
  }
  /**
   The selected language on the webshop at the time the order was placed
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   The date and time the order was placed
   */
  get date(): string {
    return this._date;
  }
  /**
   The date and time the order was placed
   */
  set date(value: string) {
    this._date = value;
  }
  /**
   The date and time the order was placed
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The date and time the order was placed
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The date and time the status of the order was last changed
   */
  get statusDate(): string | undefined {
    return this._statusDate;
  }
  /**
   The date and time the status of the order was last changed
   */
  set statusDate(value: string | undefined) {
    this._statusDate = value;
  }
  /**
   The postage data of the order
   */
  get postageData(): OrderPostageData {
    return this._postageData;
  }
  /**
   The postage data of the order
   */
  set postageData(value: OrderPostageData) {
    this._postageData = value;
  }
  /**
   The payment data of the order
   */
  get paymentData(): OrderPaymentData {
    return this._paymentData;
  }
  /**
   The payment data of the order
   */
  set paymentData(value: OrderPaymentData) {
    this._paymentData = value;
  }
  /**
   The totals of the order
   */
  get total(): OrderTotals {
    return this._total;
  }
  /**
   The totals of the order
   */
  set total(value: OrderTotals) {
    this._total = value;
  }
  /**
   The items included in the order
   */
  get items(): OrderItem[] {
    return this._items;
  }
  /**
   The items included in the order
   */
  set items(value: OrderItem[]) {
    this._items = value;
  }
  /**
   The shipments for the order
   */
  get shipments(): Shipment[] | undefined {
    return this._shipments;
  }
  /**
   The shipments for the order
   */
  set shipments(value: Shipment[] | undefined) {
    this._shipments = value;
  }
  /**
   The addresses for the order
   */
  get addresses(): Address[] | undefined {
    return this._addresses;
  }
  /**
   The addresses for the order
   */
  set addresses(value: Address[] | undefined) {
    this._addresses = value;
  }
  /**
   The id of the User, contact or Customer that should receive the invoice for this Order
   */
  get invoiceUserId(): number | undefined {
    return this._invoiceUserId;
  }
  /**
   The id of the User, contact or Customer that should receive the invoice for this Order
   */
  set invoiceUserId(value: number | undefined) {
    this._invoiceUserId = value;
  }
  /**
   The date and time until the order is valid
   */
  get validUntil(): string | undefined {
    return this._validUntil;
  }
  /**
   The date and time until the order is valid
   */
  set validUntil(value: string | undefined) {
    this._validUntil = value;
  }
  /**
   The companyId of the company that placed this order
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   The companyId of the company that placed this order
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   The date and time the order was last modified
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The date and time the order was last modified
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Original order id
   */
  get originalOrderId(): number | undefined {
    return this._originalOrderId;
  }
  /**
   Original order id
   */
  set originalOrderId(value: number | undefined) {
    this._originalOrderId = value;
  }
  /**
   The date and time the order was exported
   */
  get exportedAt(): string | undefined {
    return this._exportedAt;
  }
  /**
   The date and time the order was exported
   */
  set exportedAt(value: string | undefined) {
    this._exportedAt = value;
  }
  /**
   Order export status of this order
   */
  get exportStatus(): OrderExportStatus | undefined {
    return this._exportStatus;
  }
  /**
   Order export status of this order
   */
  set exportStatus(value: OrderExportStatus | undefined) {
    this._exportStatus = value;
  }
  /**
   Order export message
   */
  get exportMessage(): string | undefined {
    return this._exportMessage;
  }
  /**
   Order export message
   */
  set exportMessage(value: string | undefined) {
    this._exportMessage = value;
  }
  /**
   orderAddresses field
   */
  get orderAddresses(): OrderAddress[] {
    return this._orderAddresses;
  }
  /**
   orderAddresses field
   */
  set orderAddresses(value: OrderAddress[]) {
    this._orderAddresses = value;
  }
  /**
   Order sources
   */
  get sources(): Source[] | undefined {
    return this._sources;
  }
  /**
   Order sources
   */
  set sources(value: Source[] | undefined) {
    this._sources = value;
  }
}