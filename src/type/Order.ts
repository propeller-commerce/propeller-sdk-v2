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
export interface Order {
  /** The auto-incremental id for this order */
  id: number;
  /** media field */
  media?: OrderMedia;
  /** The userId of the user that placed this order */
  userId?: number;
  /** The id of the Owner/Account Manager that will handle this order */
  accountManagerId?: number;
  /** The cartId of the cart that this order is created from. */
  cartId?: string;
  /** The channel identifier of the webshop this order originated from */
  channelId: number;
  /** The ID of the shop the Order belongs to */
  shopId: number;
  /** Unique identifier for this order */
  uuid: string;
  /** External identifier for this order from an external source like an ERP system */
  externalId?: string;
  /** The debtorId of the Customer or Company that placed this Order */
  debtorId?: string;
  /** The processing status for this order */
  status: string;
  /** The type of this order */
  type: OrderType;
  /** The source this order originates from */
  source?: string;
  /** The email address for transactional emails */
  email: string;
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
  currency: string;
  /** The currency's exchange rate at the time the order was placed */
  currencyRatio: number;
  /** The selected language on the webshop at the time the order was placed */
  language: string;
  /** The date and time the order was placed */
  /** @deprecated Deprecated in favour of createdAt */
  date: string;
  /** The date and time the order was placed */
  createdAt: string;
  /** The date and time the status of the order was last changed */
  statusDate?: string;
  /** The postage data of the order */
  postageData: OrderPostageData;
  /** The payment data of the order */
  paymentData: OrderPaymentData;
  /** The totals of the order */
  total: OrderTotals;
  /** The items included in the order */
  items: OrderItem[];
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
  lastModifiedAt: string;
  /** Original order id */
  originalOrderId?: number;
  /** The date and time the order was exported */
  exportedAt?: string;
  /** Order export status of this order */
  exportStatus?: OrderExportStatus;
  /** Order export message */
  exportMessage?: string;
  /** orderAddresses field */
  orderAddresses: OrderAddress[];
  /** Order sources */
  sources?: Source[];
}