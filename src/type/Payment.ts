import { PaymentStatuses } from '../enum/PaymentStatuses';
import { Transaction } from './Transaction';
/**
 Object class for Payment
 */
export interface Payment {
  /** Payment primary identifier */
  id: string | number;
  /** Logged in User ID */
  userId?: number;
  /** Guest User ID */
  anonymousId?: number;
  /** Unique paymentId reference for the Payment - provided by the PSP */
  paymentId?: string;
  /** Unique orderId reference for the Payment */
  orderId: number;
  /** Payment amount [denomination in cents] */
  amount: number;
  /** Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency: string;
  /** Payment method used by the PSP */
  method: string;
  /** Payment status */
  status: PaymentStatuses;
  /** Transaction(s) related to the specified payment */
  transactions?: Transaction[];
  /** Payment initial creation timestamp */
  createdAt: string;
  /** Reference to the user that created the payment initially */
  createdBy?: string;
  /** Payment last update timestamp */
  lastModifiedAt: string;
  /** Reference to the user that last modified the payment */
  lastModifiedBy?: string;
}