import { TransactionTypes } from '../enum/TransactionTypes';
import { TransactionStatuses } from '../enum/TransactionStatuses';
/**
 Object class for Transaction
 */
export class Transaction {
  /** Transaction primary identifier */
  id!: string | number;
  /** Transaction ID - usually provided by the PSP [if not available please provide paymentId or other unique identifier] */
  transactionId!: string;
  /** Payment ID - usually provided by the PSP */
  paymentId?: string;
  /** Unique orderId reference for the Payment */
  orderId!: number;
  /** Transaction amount */
  amount!: number;
  /** Transaction currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency!: string;
  /** Description */
  description?: string;
  /** Transaction timestamp */
  timestamp?: string;
  /** Transaction type */
  type!: TransactionTypes;
  /** PSP Provider Name */
  provider?: string;
  /** Transaction status */
  status!: TransactionStatuses;
  constructor(data: Partial<Transaction> = {}) {
    Object.assign(this, data);
  }
}