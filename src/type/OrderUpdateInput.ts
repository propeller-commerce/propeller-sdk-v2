import { OrderType } from '../enum/OrderType';
import { OrderExportStatus } from '../enum/OrderExportStatus';
import { SourceInput } from './SourceInput';
import { CreateOrUpdateOrderItemInput } from './CreateOrUpdateOrderItemInput';
import { OrderPaymentUpdateInput } from './OrderPaymentUpdateInput';
import { OrderPostageUpdateInput } from './OrderPostageUpdateInput';
import { OrderTotalUpdateInput } from './OrderTotalUpdateInput';
/**
 Input object for OrderUpdateInput
 */
export interface OrderUpdateInput {
  /** ID of the User, Contact or Customer of the Order */
  userId?: number;
  /** User ID of the Account Manager of the order */
  accountManagerId?: number;
  /** Channel ID the Order belongs to */
  channelId?: number;
  /** Debtor ID of the  User, Contact or Customer  */
  debtorId?: string;
  /** First name of the Debtor [USED FOR ORDER SEARCH ONLY] */
  debtorFirstName?: string;
  /** Last name of the Debtor [USED FOR ORDER SEARCH ONLY] */
  debtorLastName?: string;
  /** Company name of the Debtor [USED FOR ORDER SEARCH ONLY] */
  debtorCompany?: string;
  /** First name of the Recipient [USED FOR ORDER SEARCH ONLY] */
  recipientFirstName?: string;
  /** Last name of the Recipient [USED FOR ORDER SEARCH ONLY] */
  recipientLastName?: string;
  /** Company name of the Recipient [USED FOR ORDER SEARCH ONLY] */
  recipientCompany?: string;
  /** ID of the Order in an external system */
  externalId?: string;
  /** Status of the Order */
  status?: string;
  /** Type of the Order */
  type?: OrderType;
  /** Source of the Order i.e. webshop, internal, external or api */
  source?: string;
  /** Email address used for communication about this Order */
  email?: string;
  /** Remarks by the customer */
  remarks?: string;
  /** Reference by the customer */
  reference?: string;
  /** extra3: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  extra3?: string;
  /** extra4: Open text field to add meta data on an Order.
    The field will not be visible to Propeller admins, but can be used to be displayed on front-ends or be used in integrations. */
  extra4?: string;
  /** Order currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency?: string;
  /** Currency conversion ratio compared the the Order's Shop's base currency */
  currencyRatio?: number;
  /** Order language - ISO 639-1 language code => https://localizely.com/iso-639-1-list/ */
  language?: string;
  /** Active actioncode that was applied to this Order  */
  actionCode?: string;
  /** ID of the User, Contact or Customer that should receive the invoice for this Order */
  invoiceUserId?: number;
  /** Date and time until the order is valid */
  validUntil?: string;
  /** ID of the Company of the Order */
  companyId?: number;
  /** A company source */
  companySource?: SourceInput;
  /** Original order id */
  originalOrderId?: number;
  /** The date and time the order was exported */
  exportedAt?: string;
  /** Order export status of this order */
  exportStatus?: OrderExportStatus;
  /** Order export message */
  exportMessage?: string;
  /** The OrderItem to create or update with the Order as a single bulk request */
  items?: CreateOrUpdateOrderItemInput[];
  /** Order's payment data */
  paymentData?: OrderPaymentUpdateInput;
  /** Order's postage data */
  postageData?: OrderPostageUpdateInput;
  /** Order's totals, tax and global discount */
  total?: OrderTotalUpdateInput;
}