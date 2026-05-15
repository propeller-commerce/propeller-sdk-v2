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
import { Contact } from './Contact';
import { Customer } from './Customer';
import { Company } from './Company';
/**
 Object class for Cart
 */
export class Cart {
  /** Cart's primary identifier */
  cartId!: string;
  /** Channel identifier this cart belongs to. */
  channelId?: number;
  /** ContactId for this cart. Goes in combination with companyId */
  contactId?: number;
  /** CustomerId for this cart. */
  customerId?: number;
  /** CompanyId the contact belongs to. Goes in combination with contactId */
  companyId?: number;
  /** User's remarks for this cart. */
  notes?: string;
  /** User's reference for this cart. */
  reference?: string;
  /** Additional information field that can be stored with a cart and order. */
  extra3?: string;
  /** Additional information field that can be stored with a cart and order. */
  extra4?: string;
  /** Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP. */
  orderStatus?: string;
  /** Action code that is applied to this cart. Is only filled when a valid action code is applied */
  actionCode?: string;
  /** Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied. */
  vouchers?: CartVoucher[];
  /** Payment data for this cart. */
  paymentData?: CartPaymentData;
  /** Postage data for this cart. */
  postageData?: CartPostageData;
  /** Totals for this cart. */
  total?: CartTotal;
  /** Cart's main items */
  items?: CartMainItem[];
  /** Bonus items that are added to this cart through incentives. */
  bonusItems?: CartBaseItem[];
  /** Items that are added to the Cart, but can't be ordered. */
  unOrderableItems?: CartUnOrderableItem[];
  /** Address the invoice for the order should be sent to. */
  invoiceAddress!: CartAddress;
  /** Address the order should be sent to. */
  deliveryAddress!: CartAddress;
  /** Amount of tax that applies to this cart per tax code */
  taxLevels?: CartTaxLevel[];
  /** List of selectable paymethods for this cart and applied user. */
  payMethods?: CartPaymethod[];
  /** List of selectable carriers for this cart. */
  carriers?: CartCarrier[];
  /** Date this cart has been created. */
  createdAt?: string;
  /** Date this cart has been last updated. */
  lastModifiedAt?: string;
  /** User which created the cart. */
  createdBy?: number;
  /** User which last updated the cart. */
  lastModifiedBy?: number;
  /** All incentives that apply to this cart. */
  appliedIncentives?: CartIncentive[];
  /** Total amount of value-points that apply to this cart */
  valuePoints?: number;
  /** All shipping methods available for this cart. */
  shippingMethods?: CartShippingMethod[];
  /** Language of the order that will be created from this cart. Order confirmation email will be sent in that language. */
  language?: string;
  /** Indicates whether authorization is required to finalize the cart */
  purchaseAuthorizationRequired!: boolean;
  /** Indicates cart status */
  status?: CartStatus;
  /** Tender Contact */
  contact?: Contact;
  /** Tender Customer */
  customer?: Customer;
  /** Tender Company */
  company?: Company;
  constructor(data: Partial<Cart> = {}) {
    Object.assign(this, data);
  }

  /** Returns `cartId`. */
  getCartId(): string {
    return this.cartId;
  }
  /** Returns `channelId`. */
  getChannelId(): number | undefined {
    return this.channelId;
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
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
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
  /** Returns `orderStatus`. */
  getOrderStatus(): string | undefined {
    return this.orderStatus;
  }
  /** Returns `actionCode`. */
  getActionCode(): string | undefined {
    return this.actionCode;
  }
  /** Returns `vouchers` as CartVoucher instances (coerced on first access). */
  getVouchers(): CartVoucher[] | undefined {
    if (!this.vouchers) return undefined;
    this.vouchers = this.vouchers.map((x: any) => x instanceof CartVoucher ? x : new CartVoucher(x));
    return this.vouchers;
  }
  /** Returns `paymentData` as a CartPaymentData instance (coerced on first access). */
  getPaymentData(): CartPaymentData | undefined {
    if (this.paymentData == null) return undefined;
    if (!(this.paymentData instanceof CartPaymentData)) {
      this.paymentData = new CartPaymentData(this.paymentData as any);
    }
    return this.paymentData;
  }
  /** Returns `postageData` as a CartPostageData instance (coerced on first access). */
  getPostageData(): CartPostageData | undefined {
    if (this.postageData == null) return undefined;
    if (!(this.postageData instanceof CartPostageData)) {
      this.postageData = new CartPostageData(this.postageData as any);
    }
    return this.postageData;
  }
  /** Returns `total` as a CartTotal instance (coerced on first access). */
  getTotal(): CartTotal | undefined {
    if (this.total == null) return undefined;
    if (!(this.total instanceof CartTotal)) {
      this.total = new CartTotal(this.total as any);
    }
    return this.total;
  }
  /** Returns `items` as CartMainItem instances (coerced on first access). */
  getItems(): CartMainItem[] | undefined {
    if (!this.items) return undefined;
    this.items = this.items.map((x: any) => x instanceof CartMainItem ? x : new CartMainItem(x));
    return this.items;
  }
  /** Returns `bonusItems` as CartBaseItem instances (coerced on first access). */
  getBonusItems(): CartBaseItem[] | undefined {
    if (!this.bonusItems) return undefined;
    this.bonusItems = this.bonusItems.map((x: any) => x instanceof CartBaseItem ? x : new CartBaseItem(x));
    return this.bonusItems;
  }
  /** Returns `unOrderableItems` as CartUnOrderableItem instances (coerced on first access). */
  getUnOrderableItems(): CartUnOrderableItem[] | undefined {
    if (!this.unOrderableItems) return undefined;
    this.unOrderableItems = this.unOrderableItems.map((x: any) => x instanceof CartUnOrderableItem ? x : new CartUnOrderableItem(x));
    return this.unOrderableItems;
  }
  /** Returns `invoiceAddress` as a CartAddress instance (coerced on first access). */
  getInvoiceAddress(): CartAddress | undefined {
    if (this.invoiceAddress == null) return undefined;
    if (!(this.invoiceAddress instanceof CartAddress)) {
      this.invoiceAddress = new CartAddress(this.invoiceAddress as any);
    }
    return this.invoiceAddress;
  }
  /** Returns `deliveryAddress` as a CartAddress instance (coerced on first access). */
  getDeliveryAddress(): CartAddress | undefined {
    if (this.deliveryAddress == null) return undefined;
    if (!(this.deliveryAddress instanceof CartAddress)) {
      this.deliveryAddress = new CartAddress(this.deliveryAddress as any);
    }
    return this.deliveryAddress;
  }
  /** Returns `taxLevels` as CartTaxLevel instances (coerced on first access). */
  getTaxLevels(): CartTaxLevel[] | undefined {
    if (!this.taxLevels) return undefined;
    this.taxLevels = this.taxLevels.map((x: any) => x instanceof CartTaxLevel ? x : new CartTaxLevel(x));
    return this.taxLevels;
  }
  /** Returns `payMethods` as CartPaymethod instances (coerced on first access). */
  getPayMethods(): CartPaymethod[] | undefined {
    if (!this.payMethods) return undefined;
    this.payMethods = this.payMethods.map((x: any) => x instanceof CartPaymethod ? x : new CartPaymethod(x));
    return this.payMethods;
  }
  /** Returns `carriers` as CartCarrier instances (coerced on first access). */
  getCarriers(): CartCarrier[] | undefined {
    if (!this.carriers) return undefined;
    this.carriers = this.carriers.map((x: any) => x instanceof CartCarrier ? x : new CartCarrier(x));
    return this.carriers;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string | undefined {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `appliedIncentives` as CartIncentive instances (coerced on first access). */
  getAppliedIncentives(): CartIncentive[] | undefined {
    if (!this.appliedIncentives) return undefined;
    this.appliedIncentives = this.appliedIncentives.map((x: any) => x instanceof CartIncentive ? x : new CartIncentive(x));
    return this.appliedIncentives;
  }
  /** Returns `valuePoints`. */
  getValuePoints(): number | undefined {
    return this.valuePoints;
  }
  /** Returns `shippingMethods` as CartShippingMethod instances (coerced on first access). */
  getShippingMethods(): CartShippingMethod[] | undefined {
    if (!this.shippingMethods) return undefined;
    this.shippingMethods = this.shippingMethods.map((x: any) => x instanceof CartShippingMethod ? x : new CartShippingMethod(x));
    return this.shippingMethods;
  }
  /** Returns `language`. */
  getLanguage(): string | undefined {
    return this.language;
  }
  /** Returns `purchaseAuthorizationRequired`. */
  getPurchaseAuthorizationRequired(): boolean {
    return this.purchaseAuthorizationRequired;
  }
  /** Returns `status`. */
  getStatus(): CartStatus | undefined {
    return this.status;
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
}