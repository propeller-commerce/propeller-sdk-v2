import { CartStatus } from '../enum/CartStatus';
import { CartVoucher } from './CartVoucher';
import { CartPaymentData } from './CartPaymentData';
import { CartPostageData } from './CartPostageData';
import { CartTotal } from './CartTotal';
import { CartMainItem } from './CartMainItem';
import { CartBaseItem } from './CartBaseItem';
import { CartUnOrderableItem } from './CartUnOrderableItem';
import { CartAddress } from './CartAddress';
import { CartTaxLevel } from './CartTaxLevel';
import { CartPaymethod } from './CartPaymethod';
import { CartCarrier } from './CartCarrier';
import { CartIncentive } from './CartIncentive';
import { CartShippingMethod } from './CartShippingMethod';
import { IBaseUser } from './IBaseUser';
import { Contact } from './Contact';
import { Customer } from './Customer';
import { Company } from './Company';
/**
 Object class for Cart
 */
export class Cart {
  /** Cart's primary identifier */
  private _cartId: string;
  /** Channel identifier this cart belongs to. */
  private _channelId?: number;
  /** Shop identifier this cart belongs to. */
  private _shopId: number;
  /** userId field */
  /** @deprecated This field will be removed in a future release, use contact+companyId or customerId instead */
  private _userId?: number;
  /** ContactId for this cart. Goes in combination with companyId */
  private _contactId?: number;
  /** CustomerId for this cart. */
  private _customerId?: number;
  /** CompanyId the contact belongs to. Goes in combination with contactId */
  private _companyId?: number;
  /** User's remarks for this cart. */
  private _notes?: string;
  /** User's reference for this cart. */
  private _reference?: string;
  /** Additional information field that can be stored with a cart and order. */
  private _extra3?: string;
  /** Additional information field that can be stored with a cart and order. */
  private _extra4?: string;
  /** Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP. */
  private _orderStatus?: string;
  /** Action code that is applied to this cart. Is only filled when a valid action code is applied */
  private _actionCode?: string;
  /** Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied. */
  private _vouchers?: CartVoucher[];
  /** Payment data for this cart. */
  private _paymentData?: CartPaymentData;
  /** Postage data for this cart. */
  private _postageData?: CartPostageData;
  /** Totals for this cart. */
  private _total?: CartTotal;
  /** Cart's main items */
  private _items?: CartMainItem[];
  /** Bonus items that are added to this cart through incentives. */
  private _bonusItems?: CartBaseItem[];
  /** Items that are added to the Cart, but can't be ordered. */
  private _unOrderableItems?: CartUnOrderableItem[];
  /** Address the invoice for the order should be sent to. */
  private _invoiceAddress: CartAddress;
  /** Address the order should be sent to. */
  private _deliveryAddress: CartAddress;
  /** Amount of tax that applies to this cart per tax code */
  private _taxLevels?: CartTaxLevel[];
  /** List of selectable paymethods for this cart and applied user. */
  private _payMethods?: CartPaymethod[];
  /** List of selectable carriers for this cart. */
  private _carriers?: CartCarrier[];
  /** Date this cart has been created. */
  private _createdAt?: string;
  /** Date this cart has been last updated. */
  private _lastModifiedAt?: string;
  /** User which created the cart. */
  private _createdBy?: number;
  /** User which last updated the cart. */
  private _lastModifiedBy?: number;
  /** All incentives that apply to this cart. */
  private _appliedIncentives?: CartIncentive[];
  /** Total amount of value-points that apply to this cart */
  private _valuePoints?: number;
  /** All shipping methods available for this cart. */
  private _shippingMethods?: CartShippingMethod[];
  /** Language of the order that will be created from this cart. Order confirmation email will be sent in that language. */
  private _language?: string;
  /** Indicates whether authorization is required to finalize the cart */
  private _purchaseAuthorizationRequired: boolean;
  /** Indicates cart status */
  private _status?: CartStatus;
  /** Cart User */
  /** @deprecated Deprecated in favor of `contact` or `customer` */
  private _user?: IBaseUser;
  /** Tender Contact */
  private _contact?: Contact;
  /** Tender Customer */
  private _customer?: Customer;
  /** Tender Company */
  private _company?: Company;
  /**
   Creates a new instance of Cart
   */
  constructor(data: Partial<Cart> = {}) {
    this._cartId = data.cartId!;
    this._channelId = data.channelId;
    this._shopId = data.shopId!;
    this._userId = data.userId;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._companyId = data.companyId;
    this._notes = data.notes;
    this._reference = data.reference;
    this._extra3 = data.extra3;
    this._extra4 = data.extra4;
    this._orderStatus = data.orderStatus;
    this._actionCode = data.actionCode;
    this._vouchers = data.vouchers;
    this._paymentData = data.paymentData;
    this._postageData = data.postageData;
    this._total = data.total;
    this._items = data.items;
    this._bonusItems = data.bonusItems;
    this._unOrderableItems = data.unOrderableItems;
    this._invoiceAddress = data.invoiceAddress!;
    this._deliveryAddress = data.deliveryAddress!;
    this._taxLevels = data.taxLevels;
    this._payMethods = data.payMethods;
    this._carriers = data.carriers;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._appliedIncentives = data.appliedIncentives;
    this._valuePoints = data.valuePoints;
    this._shippingMethods = data.shippingMethods;
    this._language = data.language;
    this._purchaseAuthorizationRequired = data.purchaseAuthorizationRequired!;
    this._status = data.status;
    this._user = data.user;
    this._contact = data.contact;
    this._customer = data.customer;
    this._company = data.company;
  }
  /**
   Cart's primary identifier
   */
  get cartId(): string {
    return this._cartId;
  }
  /**
   Cart's primary identifier
   */
  set cartId(value: string) {
    this._cartId = value;
  }
  /**
   Channel identifier this cart belongs to.
   */
  get channelId(): number | undefined {
    return this._channelId;
  }
  /**
   Channel identifier this cart belongs to.
   */
  set channelId(value: number | undefined) {
    this._channelId = value;
  }
  /**
   Shop identifier this cart belongs to.
   */
  get shopId(): number {
    return this._shopId;
  }
  /**
   Shop identifier this cart belongs to.
   */
  set shopId(value: number) {
    this._shopId = value;
  }
  /**
   userId field
   */
  get userId(): number | undefined {
    return this._userId;
  }
  /**
   userId field
   */
  set userId(value: number | undefined) {
    this._userId = value;
  }
  /**
   ContactId for this cart. Goes in combination with companyId
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   ContactId for this cart. Goes in combination with companyId
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   CustomerId for this cart.
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   CustomerId for this cart.
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
   User's remarks for this cart.
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   User's remarks for this cart.
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   User's reference for this cart.
   */
  get reference(): string | undefined {
    return this._reference;
  }
  /**
   User's reference for this cart.
   */
  set reference(value: string | undefined) {
    this._reference = value;
  }
  /**
   Additional information field that can be stored with a cart and order.
   */
  get extra3(): string | undefined {
    return this._extra3;
  }
  /**
   Additional information field that can be stored with a cart and order.
   */
  set extra3(value: string | undefined) {
    this._extra3 = value;
  }
  /**
   Additional information field that can be stored with a cart and order.
   */
  get extra4(): string | undefined {
    return this._extra4;
  }
  /**
   Additional information field that can be stored with a cart and order.
   */
  set extra4(value: string | undefined) {
    this._extra4 = value;
  }
  /**
   Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
   */
  get orderStatus(): string | undefined {
    return this._orderStatus;
  }
  /**
   Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
   */
  set orderStatus(value: string | undefined) {
    this._orderStatus = value;
  }
  /**
   Action code that is applied to this cart. Is only filled when a valid action code is applied
   */
  get actionCode(): string | undefined {
    return this._actionCode;
  }
  /**
   Action code that is applied to this cart. Is only filled when a valid action code is applied
   */
  set actionCode(value: string | undefined) {
    this._actionCode = value;
  }
  /**
   Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
   */
  get vouchers(): CartVoucher[] | undefined {
    return this._vouchers;
  }
  /**
   Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
   */
  set vouchers(value: CartVoucher[] | undefined) {
    this._vouchers = value;
  }
  /**
   Payment data for this cart.
   */
  get paymentData(): CartPaymentData | undefined {
    return this._paymentData;
  }
  /**
   Payment data for this cart.
   */
  set paymentData(value: CartPaymentData | undefined) {
    this._paymentData = value;
  }
  /**
   Postage data for this cart.
   */
  get postageData(): CartPostageData | undefined {
    return this._postageData;
  }
  /**
   Postage data for this cart.
   */
  set postageData(value: CartPostageData | undefined) {
    this._postageData = value;
  }
  /**
   Totals for this cart.
   */
  get total(): CartTotal | undefined {
    return this._total;
  }
  /**
   Totals for this cart.
   */
  set total(value: CartTotal | undefined) {
    this._total = value;
  }
  /**
   Cart's main items
   */
  get items(): CartMainItem[] | undefined {
    return this._items;
  }
  /**
   Cart's main items
   */
  set items(value: CartMainItem[] | undefined) {
    this._items = value;
  }
  /**
   Bonus items that are added to this cart through incentives.
   */
  get bonusItems(): CartBaseItem[] | undefined {
    return this._bonusItems;
  }
  /**
   Bonus items that are added to this cart through incentives.
   */
  set bonusItems(value: CartBaseItem[] | undefined) {
    this._bonusItems = value;
  }
  /**
   Items that are added to the Cart, but can't be ordered.
   */
  get unOrderableItems(): CartUnOrderableItem[] | undefined {
    return this._unOrderableItems;
  }
  /**
   Items that are added to the Cart, but can't be ordered.
   */
  set unOrderableItems(value: CartUnOrderableItem[] | undefined) {
    this._unOrderableItems = value;
  }
  /**
   Address the invoice for the order should be sent to.
   */
  get invoiceAddress(): CartAddress {
    return this._invoiceAddress;
  }
  /**
   Address the invoice for the order should be sent to.
   */
  set invoiceAddress(value: CartAddress) {
    this._invoiceAddress = value;
  }
  /**
   Address the order should be sent to.
   */
  get deliveryAddress(): CartAddress {
    return this._deliveryAddress;
  }
  /**
   Address the order should be sent to.
   */
  set deliveryAddress(value: CartAddress) {
    this._deliveryAddress = value;
  }
  /**
   Amount of tax that applies to this cart per tax code
   */
  get taxLevels(): CartTaxLevel[] | undefined {
    return this._taxLevels;
  }
  /**
   Amount of tax that applies to this cart per tax code
   */
  set taxLevels(value: CartTaxLevel[] | undefined) {
    this._taxLevels = value;
  }
  /**
   List of selectable paymethods for this cart and applied user.
   */
  get payMethods(): CartPaymethod[] | undefined {
    return this._payMethods;
  }
  /**
   List of selectable paymethods for this cart and applied user.
   */
  set payMethods(value: CartPaymethod[] | undefined) {
    this._payMethods = value;
  }
  /**
   List of selectable carriers for this cart.
   */
  get carriers(): CartCarrier[] | undefined {
    return this._carriers;
  }
  /**
   List of selectable carriers for this cart.
   */
  set carriers(value: CartCarrier[] | undefined) {
    this._carriers = value;
  }
  /**
   Date this cart has been created.
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   Date this cart has been created.
   */
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }
  /**
   Date this cart has been last updated.
   */
  get lastModifiedAt(): string | undefined {
    return this._lastModifiedAt;
  }
  /**
   Date this cart has been last updated.
   */
  set lastModifiedAt(value: string | undefined) {
    this._lastModifiedAt = value;
  }
  /**
   User which created the cart.
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   User which created the cart.
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   User which last updated the cart.
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   User which last updated the cart.
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   All incentives that apply to this cart.
   */
  get appliedIncentives(): CartIncentive[] | undefined {
    return this._appliedIncentives;
  }
  /**
   All incentives that apply to this cart.
   */
  set appliedIncentives(value: CartIncentive[] | undefined) {
    this._appliedIncentives = value;
  }
  /**
   Total amount of value-points that apply to this cart
   */
  get valuePoints(): number | undefined {
    return this._valuePoints;
  }
  /**
   Total amount of value-points that apply to this cart
   */
  set valuePoints(value: number | undefined) {
    this._valuePoints = value;
  }
  /**
   All shipping methods available for this cart.
   */
  get shippingMethods(): CartShippingMethod[] | undefined {
    return this._shippingMethods;
  }
  /**
   All shipping methods available for this cart.
   */
  set shippingMethods(value: CartShippingMethod[] | undefined) {
    this._shippingMethods = value;
  }
  /**
   Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
   */
  get language(): string | undefined {
    return this._language;
  }
  /**
   Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
   */
  set language(value: string | undefined) {
    this._language = value;
  }
  /**
   Indicates whether authorization is required to finalize the cart
   */
  get purchaseAuthorizationRequired(): boolean {
    return this._purchaseAuthorizationRequired;
  }
  /**
   Indicates whether authorization is required to finalize the cart
   */
  set purchaseAuthorizationRequired(value: boolean) {
    this._purchaseAuthorizationRequired = value;
  }
  /**
   Indicates cart status
   */
  get status(): CartStatus | undefined {
    return this._status;
  }
  /**
   Indicates cart status
   */
  set status(value: CartStatus | undefined) {
    this._status = value;
  }
  /**
   Cart User
   */
  get user(): IBaseUser | undefined {
    return this._user;
  }
  /**
   Cart User
   */
  set user(value: IBaseUser | undefined) {
    this._user = value;
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
}