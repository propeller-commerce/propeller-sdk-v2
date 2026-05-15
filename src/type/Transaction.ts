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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `transactionId`. */
  getTransactionId(): string {
    return this.transactionId;
  }
  /** Returns `paymentId`. */
  getPaymentId(): string | undefined {
    return this.paymentId;
  }
  /** Returns `orderId`. */
  getOrderId(): number {
    return this.orderId;
  }
  /** Returns `amount`. */
  getAmount(): number {
    return this.amount;
  }
  /** Returns `currency`. */
  getCurrency(): string {
    return this.currency;
  }
  /** Returns `description`. */
  getDescription(): string | undefined {
    return this.description;
  }
  /** Returns `timestamp`. */
  getTimestamp(): string | undefined {
    return this.timestamp;
  }
  /** Returns `type`. */
  getType(): TransactionTypes {
    return this.type;
  }
  /** Returns `provider`. */
  getProvider(): string | undefined {
    return this.provider;
  }
  /** Returns `status`. */
  getStatus(): TransactionStatuses {
    return this.status;
  }
}