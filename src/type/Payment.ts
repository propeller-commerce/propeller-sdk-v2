import { PaymentStatuses } from '../enum/PaymentStatuses';
import { Transaction } from './Transaction';
/**
 Object class for Payment
 */
export class Payment {
  /** Payment primary identifier */
  id!: string | number;
  /** Logged in User ID */
  userId?: number;
  /** Guest User ID */
  anonymousId?: number;
  /** Unique paymentId reference for the Payment - provided by the PSP */
  paymentId?: string;
  /** Unique orderId reference for the Payment */
  orderId!: number;
  /** Payment amount [denomination in cents] */
  amount!: number;
  /** Payment currency - ISO 4217 currency code => https://www.xe.com/iso4217.php */
  currency!: string;
  /** Payment method used by the PSP */
  method!: string;
  /** Payment status */
  status!: PaymentStatuses;
  /** Transaction(s) related to the specified payment */
  transactions?: Transaction[];
  /** Payment initial creation timestamp */
  createdAt!: string;
  /** Reference to the user that created the payment initially */
  createdBy?: string;
  /** Payment last update timestamp */
  lastModifiedAt!: string;
  /** Reference to the user that last modified the payment */
  lastModifiedBy?: string;
  constructor(data: Partial<Payment> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `userId`. */
  getUserId(): number | undefined {
    return this.userId;
  }
  /** Returns `anonymousId`. */
  getAnonymousId(): number | undefined {
    return this.anonymousId;
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
  /** Returns `method`. */
  getMethod(): string {
    return this.method;
  }
  /** Returns `status`. */
  getStatus(): PaymentStatuses {
    return this.status;
  }
  /** Returns `transactions` as Transaction instances (coerced on first access). */
  getTransactions(): Transaction[] | undefined {
    if (!this.transactions) return undefined;
    this.transactions = this.transactions.map((x: any) => x instanceof Transaction ? x : new Transaction(x));
    return this.transactions;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): string | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): string | undefined {
    return this.lastModifiedBy;
  }
}