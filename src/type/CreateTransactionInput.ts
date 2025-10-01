import { TransactionTypes } from '../enum/TransactionTypes';
import { TransactionStatuses } from '../enum/TransactionStatuses';
/**
 Input object for CreateTransactionInput
 */
export interface CreateTransactionInput {
  /** Unique transactionId reference for the Payment - usually provided by the PSP */
  transactionId: string;
  /** Payment ID - usually provided by the PSP */
  paymentId?: string;
  /** Transaction amount [denomination in cents] */
  amount: number;
  /** Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency: string;
  /** Description of the transaction */
  description?: string;
  /** Transaction timestamp */
  timestamp?: string;
  /** Transaction type */
  type: TransactionTypes;
  /** PSP Provider Name */
  provider?: string;
  /** Transaction status */
  status: TransactionStatuses;
}