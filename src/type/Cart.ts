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
  cartId!: string;
  /** Channel identifier this cart belongs to. */
  channelId?: number;
  /** Shop identifier this cart belongs to. */
  shopId!: number;
  /** userId field */
  /** @deprecated This field will be removed in a future release, use contact+companyId or customerId instead */
  userId?: number;
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
  /** Cart User */
  /** @deprecated Deprecated in favor of `contact` or `customer` */
  user?: IBaseUser;
  /** Tender Contact */
  contact?: Contact;
  /** Tender Customer */
  customer?: Customer;
  /** Tender Company */
  company?: Company;
  constructor(data: Partial<Cart> = {}) {
    Object.assign(this, data);
  }
}