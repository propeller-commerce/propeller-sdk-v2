import { PaymentStatuses } from '../enum/PaymentStatuses';
import { CreateTransactionInput } from './CreateTransactionInput';
/**
 Input object for UpdatePaymentInput
 */
export interface UpdatePaymentInput {
  /** Logged in User ID */
  userId?: number;
  /** Guest User ID */
  anonymousId?: number;
  /** Unique paymentId reference for the Payment - provided by the PSP */
  paymentId?: string;
  /** Payment amount [denomination in cents] */
  amount?: number;
  /** Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency?: string;
  /** Payment method used by the PSP */
  method?: string;
  /** Payment status */
  status?: PaymentStatuses;
  /** Add a transaction related to the specified payment */
  addTransaction?: CreateTransactionInput;
}